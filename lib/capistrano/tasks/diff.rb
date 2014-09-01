def remote_diff?(server, *file_names)
  file_names.any? do |file_name|
    0 < diff_result(server).grep(Regexp.new("/" + file_name)).size
  end.tap do |result|
    info("[#{server}] Files in #{file_names.join(" or ")} differ") if result
  end
end

def remote_diff_exclude?(server, *file_names)
  excluded_diff_results = file_names.inject(diff_result(server)) do |remain_diffs, file_name|
    remain_diffs - (remain_diffs.grep Regexp.new("/" + file_name))
  end
  if excluded_diff_results.empty?
    false
  else
    excluded_diff_results.each do |result|
      info "[#{server}] #{result}"
    end
    true
  end
end

def diff_result(server)
  $diff_result ||= {}
  $diff_result[server] ||= capture("diff -qr #{current_path} #{previous_path(server)} | cat", hosts:[server]).lines
end

def previous_path(server)
  $previous_path ||= {}
  $previous_path[server] ||= begin
    releases = capture(:ls, '-xr', releases_path, hosts:[server]).split
    case releases.size
    when 0,1
    else
      releases_path.join(releases[1])
    end
  end
end
