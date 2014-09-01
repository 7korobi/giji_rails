module SSHKit
  module Formatter
    class Utage < Pretty
      private

      def write_command(command)
        unless command.started?
          original_output << header(command.verbosity, command) + "Running #{c.yellow(c.bold(String(command)))} \n"
        end

        if SSHKit.config.output_verbosity == Logger::DEBUG
          unless command.stdout.empty?
            command.stdout.lines.each do |line|
              original_output << header(Logger::DEBUG, command) + c.green("\t" + line)
              original_output << "\n" unless line[-1] == "\n"
            end
          end
        end

        unless command.stderr.empty?
          command.stderr.lines.each do |line|
            original_output << header(Logger::WARN, command) + c.red("\t" + line)
            original_output << "\n" unless line[-1] == "\n"
          end
        end

        if command.finished?
          Benchmark.current.report((command.host || "localhost").to_s, command.to_hash)
          original_output << header(command.verbosity, command) + "Finished in #{sprintf('%5.3f seconds', command.runtime)} with exit status #{command.exit_status} (#{c.bold { command.failure? ? c.red('failed') : c.green('successful') }}).\n"
        end
      end

      CALL_COUNT = {}
      def header(log_level_no, command)
        CALL_COUNT[command] ||= 0
        CALL_COUNT[command] += 1
        log_level = level(log_level_no)
        uuid = c.green( command.created_at.strftime("%T.%3N") )
        count = c.blue( "%3d"%[CALL_COUNT[command]] )
        server = c.blue( (command.host || "local").to_s )
        "#{uuid} #{count}#{log_level}[#{server}]"
      end
    end
  end
end

class SSHKit::Command
  def created_at
    @created_at ||= Time.now
  end
end

class Rake::Task
  def application
    Benchmark.current.task = name
    @application
  end
end

class Benchmark
  LABEL_SIZE = 40
  CAPTION = "      run          wait"
  FORMAT  = "% 9.3f sec"

  class Counter
    def initialize
      @counts = {}
      @waits = {}
      @runs = {}
      @starteds = Hash.new { Time.at(2**64 - 1) }
      @finisheds = Hash.new { Time.at(0) }
    end

    def report(label, value)
      @finisheds[label] = value[:finished_at] unless value[:finished_at] && @finisheds[label] > value[:finished_at]
      @starteds[label] = value[:started_at] unless value[:started_at] && @starteds[label] < value[:started_at]
      @waits[label] = @finisheds[label] - @starteds[label]
      @runs[label] ||= 0
      @runs[label] += value[:runtime]

    rescue StandardError => e
    ensure
      @@global.report(label, value) if self != @@global
    end

    def size
      @starteds.size
    end

    def calc!
      run_total = @runs.values.inject(0, :+)
      wait_total = @waits.values.inject(0, :+)

      @counts["- average -"] = [run_total / size, wait_total / size ]
      @counts["- total -"] = [run_total, nil]
      @counts["- all -"] = [nil, @finisheds.values.max - @starteds.values.min]
    end

    def each
      @runs.each do |label, runtime|
        waittime = @waits[label]
        yield label, runtime, waittime
      end
      calc! if 1 < size
      @counts.each do |label, (runtime, waittime)|
        yield label, runtime, waittime
      end
    end

    @@global = Counter.new
    def self.global
      @@global
    end
  end


  def initialize
    @task = nil
    @tasks = []
    @counters = {}
  end

  def task=(name)
    @tasks.push name
    @task = name
  end

  def report(server, value)
    (@counters[@task] ||= Counter.new).report(server, value)
  end

  def printout
    width = LABEL_SIZE

    @tasks.uniq.each do |task|
      counter = @counters[task]
      next unless counter

      puts " #{task} ".center(LABEL_SIZE,"-")
      counter.each do |server, run, wait|
        run_str  = run  ? FORMAT%[run]  : " " * 13
        wait_str = wait ? FORMAT%[wait] : " " * 13
        puts "#{server.rjust(LABEL_SIZE - 2)}  #{run_str} #{wait_str}"
      end
    end
    puts "( all tasks )".center(LABEL_SIZE,"-")
    Counter.global.each do |server, run, wait|
      run_str  = run  ? FORMAT%[run]  : " " * 13
      wait_str = wait ? FORMAT%[wait] : " " * 13
      puts "#{server.rjust(LABEL_SIZE - 2)}  #{run_str} #{wait_str}"
    end
    puts "-" * LABEL_SIZE + CAPTION
  end

  def self.current
    @@current ||= Benchmark.new
  end
end

END {
  Benchmark.current.printout
}
