active_job = YAML.load_file('./config/active_job.yml')
schedule =   YAML.load_file('./app/yaml/schedule.yml')

Sidekiq.configure_server do |config|
  config.redis = active_job["redis"]

  Sidekiq::Cron::Job.load_from_hash schedule
end

Sidekiq.configure_client do |config|
  config.redis = active_job["redis"]
end

ActiveJob::Base.queue_adapter = :sidekiq

module Sidekiq
  module Cron
    class Job
      def initialize input_args = {}
        args = input_args.stringify_keys
        @name = args["name"]
        @cron = args["cron"]

        #get class from klass or class
        @klass = args["klass"] || args["class"]

        #set status of job
        @status = args['status'] || status_from_redis

        #set last enqueue time - from args or from existing job
        if args['last_enqueue_time'] && !args['last_enqueue_time'].empty?
          @last_enqueue_time = Time.parse(args['last_enqueue_time'])
        else
          @last_enqueue_time = last_enqueue_time_from_redis
        end

        #get right arguments for job
        @args = args["args"].nil? ? [] : parse_args( args["args"] )

        if args["message"]
          @message = args["message"]
          data = Sidekiq.load_json(@message) || {}
          @queue = data['queue']

        elsif @klass
          message_data = {
            "class" => @klass.to_s,
            "args"  => @args,
          }

          #get right data for message
          #only if message wasn't specified before
          message_data = case @klass
            when Class
              @klass.get_sidekiq_options.merge(message_data)
            when String
              begin
                @klass.constantize.get_sidekiq_options.merge(message_data)
              rescue
                #Unknown class
                message_data.merge("queue"=>"default")
              end

          end

          #override queue if setted in config
          #only if message is hash - can be string (dumped JSON)
          if args['queue']
            @queue = message_data['queue'] = args['queue']
          else
            @queue = message_data['queue'] || default
          end

          #dump message as json
          @message = message_data
        end
      end
    end
  end
end
