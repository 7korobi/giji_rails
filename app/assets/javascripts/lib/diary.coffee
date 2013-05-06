angular.module("giji.directives").directive "diary", ["$compile", ($compile)->
  restrict: "A"
  link: ($scope, elm, attr, ctrl)->
    form_text = $scope.$eval attr.diary
    form_text.ver = new Diary(form_text)
    form_text.ver.versions()
    GIJI.template $compile, $scope, elm, "form/version"
]

DIARY = ($scope)->
  $scope.diary = Diary.base
  $scope.diary.copy = (f)->
    $scope.navi.value_add 'diary'
    f.ver.commit()
    f.text = Diary.base.form.text.trim()
    Diary.base.form.text = ""

  $scope.diary.add =
    anchor: (message)->
      return if "" == message.anchor

      $scope.navi.value_add 'diary'
      turn = message.turn
      $scope.diary.form.text = ($scope.diary.form.text.trim() + "\n" + "(>>#{turn}:#{message.anchor} #{message.name})").trim()

