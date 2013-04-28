angular.module("giji.directives").directive "diary", ["$compile", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    form = $scope.$eval attr.diary
    form.ver = new Diary(form)
    form.ver.versions()
    GIJI.template $compile, $scope, elm, "form/version"
]

DIARY = ($scope)->
  $scope.diary = Diary.base
  $scope.diary.copy = (f)->
    $scope.navi.value_add 'diary'
    f.ver.commit()
    f.text = Diary.base.form.text.trim()

  $scope.diary.add =
    anchor: (message)->
      return if "" == message.anchor

      $scope.navi.value_add 'diary'
      turn = message.turn
      $scope.diary.form.text = ($scope.diary.form.text.trim() + "\n" + "(>>#{turn}:#{message.anchor} #{message.name})").trim()

