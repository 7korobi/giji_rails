DIARY = ($scope)->
  $scope.diary =
    history: []
    version: 0
    value: ""

    versions: ()->
      size =  $scope.diary.history.length
      version = $scope.diary.version
      result = [size]
      result = [version..size].reverse() if version < size
      result.add             version - 1 if 0 < version 
      result.add             version - 2 if 1 < version 
      result


    commit: (text)->
      $scope.diary.history.remove text
      $scope.diary.history.add text
      $scope.diary.value = text
      $scope.diary.version = $scope.diary.history.length - 1

    clear: ()->
      $scope.diary.commit $scope.diary.value
      $scope.diary.value = ""

    back: (version)->
      $scope.diary.version = version
      $scope.diary.value = $scope.diary.history[version] || ""

    merge: (f)->
      text = $scope.diary.value.trim()
      f_text = f.text.trim()
      $scope.diary.commit f_text if f_text.length > 0
      $scope.diary.commit   text
      f.text = text
      $scope.diary.clear()

    add:
      anchor: (message)->
        return if "" == message.anchor

        turn = message.turn
        $scope.diary.value = ($scope.diary.value.trim() + "\n" + "(>>#{turn}:#{message.anchor} #{message.name})").trim()
