###
AngularUI - The companion suite for AngularJS
@version v0.2.1 - 2012-09-19
@link http://angular-ui.github.com
@license MIT License, http://www.opensource.org/licenses/MIT
###
angular.module("ui.config", []).value "ui.config", {}
angular.module "ui.filters", ["ui.config"]
angular.module "ui.directives", ["ui.config"]
angular.module "ui", ["ui.filters", "ui.directives", "ui.config"]

###
Animates the injection of new DOM elements by simply creating the DOM with a class and then immediately removing it
Animations must be done using CSS3 transitions, but provide excellent flexibility

@todo Add proper support for animating out
@param [options] {mixed} Can be an object with multiple options, or a string with the animation class
class {string} the CSS class(es) to use. For example, 'ui-hide' might be an excellent alternative class.
@example <li ng-repeat="item in items" ui-animate=" 'ui-hide' ">{{item}}</li>
###
angular.module("ui.directives").directive "uiAnimate", ["ui.config", "$timeout", (uiConfig, $timeout) ->
  options = {}
  if angular.isString(uiConfig.animate)
    options["class"] = uiConfig.animate
  else options = uiConfig.animate  if uiConfig.animate
  restrict: "A" # supports using directive as element, attribute and class
  link: ($scope, element, attrs) ->
    opts = {}
    if attrs.uiAnimate
      opts = $scope.$eval(attrs.uiAnimate)
      opts = class: opts  if angular.isString(opts)
    opts = angular.extend(
      class: "ui-animate"
    , options, opts)
    element.addClass opts["class"]
    $timeout (->
      element.removeClass opts["class"]
    ), 20, false
]

#global angular, CodeMirror, Error

###
Binds a CodeMirror widget to a <textarea> element.
###
angular.module("ui.directives").directive "uiCodemirror", ["ui.config", "$parse", (uiConfig, $parse) ->
  "use strict"
  uiConfig.codemirror = uiConfig.codemirror or {}
  require: "ngModel"
  link: (scope, elm, attrs, ngModel) ->

    # Only works on textareas
    throw new Error("ui-codemirror can only be applied to a textarea element")  unless elm.is("textarea")
    codemirror = undefined

    # This is the method that we use to get the value of the ui-codemirror attribute expression.
    uiCodemirrorGet = $parse(attrs.uiCodemirror)

    # This method will be called whenever the code mirror widget content changes
    onChangeHandler = (ed) ->

      # We only update the model if the value has changed - this helps get around a little problem where $render triggers a change despite already being inside a $apply loop.
      newValue = ed.getValue()
      if newValue isnt ngModel.$viewValue
        ngModel.$setViewValue newValue
        scope.$apply()


    # Create and wire up a new code mirror widget (unwiring a previous one if necessary)
    updateCodeMirror = (options) ->

      # Merge together the options from the uiConfig and the attribute itself with the onChange event above.
      options = angular.extend({}, options, uiConfig.codemirror)

      # We actually want to run both handlers if the user has provided their own onChange handler.
      userOnChange = options.onChange
      if userOnChange
        options.onChange = (ed) ->
          onChangeHandler ed
          userOnChange ed
      else
        options.onChange = onChangeHandler

      # If there is a codemirror widget for this element already then we need to unwire if first
      codemirror.toTextArea()  if codemirror

      # Create the new codemirror widget
      codemirror = CodeMirror.fromTextArea(elm[0], options)


    # Initialize the code mirror widget
    updateCodeMirror uiCodemirrorGet()

    # Now watch to see if the codemirror attribute gets updated
    scope.$watch uiCodemirrorGet, updateCodeMirror, true

    # CodeMirror expects a string, so make sure it gets one.
    # This does not change the model.
    ngModel.$formatters.push (value) ->
      if angular.isUndefined(value) or value is null
        return ""
      else throw new Error("ui-codemirror cannot use an object or an array as a model")  if angular.isObject(value) or angular.isArray(value)
      value


    # Override the ngModelController $render method, which is what gets called when the model is updated.
    # This takes care of the synchronizing the codeMirror element with the underlying model, in the case that it is changed by something else.
    ngModel.$render = ->
      codemirror.setValue ngModel.$viewValue
]

#
# Gives the ability to style currency based on its sign.
#
angular.module("ui.directives").directive "uiCurrency", ["ui.config", "currencyFilter", (uiConfig, currencyFilter) ->
  options =
    pos: "ui-currency-pos"
    neg: "ui-currency-neg"
    zero: "ui-currency-zero"

  angular.extend options, uiConfig.currency  if uiConfig.currency
  restrict: "EAC"
  require: "ngModel"
  link: (scope, element, attrs, controller) ->
    opts = undefined # instance-specific options
    renderview = undefined
    value = undefined
    opts = angular.extend({}, options, scope.$eval(attrs.uiCurrency))
    renderview = (viewvalue) ->
      num = undefined
      num = viewvalue * 1
      if num > 0
        element.addClass opts.pos
      else
        element.removeClass opts.pos
      if num < 0
        element.addClass opts.neg
      else
        element.removeClass opts.neg
      if num is 0
        element.addClass opts.zero
      else
        element.removeClass opts.zero
      if viewvalue is ""
        element.text ""
      else
        element.text currencyFilter(num, opts.symbol)
      true

    controller.$render = ->
      value = controller.$viewValue
      element.val value
      renderview value
]

#global angular

#
# jQuery UI Datepicker plugin wrapper
#
# @param [ui-date] {object} Options to pass to $.fn.datepicker() merged onto ui.config
#
angular.module("ui.directives").directive "uiDate", ["ui.config", (uiConfig) ->
  "use strict"
  options = undefined
  options = {}
  angular.extend options, uiConfig.date  if angular.isObject(uiConfig.date)
  require: "?ngModel"
  link: (scope, element, attrs, controller) ->
    getOptions = ->
      angular.extend {}, uiConfig.date, scope.$eval(attrs.uiDate)

    initDateWidget = ->
      opts = getOptions()

      # If we have a controller (i.e. ngModelController) then wire it up
      if controller
        updateModel = ->
          scope.$apply ->
            controller.$setViewValue element.datepicker("getDate")


        if opts.onSelect

          # Caller has specified onSelect, so call this as well as updating the model
          userHandler = opts.onSelect
          opts.onSelect = (value, picker) ->
            updateModel()
            userHandler value, picker
        else

          # No onSelect already specified so just update the model
          opts.onSelect = updateModel

        # In case the user changes the text directly in the input box
        element.bind "change", updateModel

        # Update the date picker when the model changes
        controller.$render = ->
          date = controller.$viewValue
          element.datepicker "setDate", date

          # Update the model if we received a string
          controller.$setViewValue element.datepicker("getDate")  if angular.isString(date)

      # If we don't destroy the old one it doesn't update properly when the config changes
      element.datepicker "destroy"

      # Create the new datepicker widget
      element.datepicker opts

      # Force a render to override whatever is in the input text box
      controller.$render()


    # Watch for changes to the directives options
    scope.$watch getOptions, initDateWidget, true
]

###
General-purpose Event binding. Bind any event not natively supported by Angular
Pass an object with keynames for events to ui-event
Allows $event object and $params object to be passed

@example <input ui-event="{ focus : 'counter++', blur : 'someCallback()' }">
@example <input ui-event="{ myCustomEvent : 'myEventHandler($event, $params)'}">

@param ui-event {string|object literal} The event to bind to as a string or a hash of events with their callbacks
###
angular.module("ui.directives").directive "uiEvent", ["$parse", ($parse) ->
  (scope, elm, attrs) ->
    events = scope.$eval(attrs.uiEvent)
    angular.forEach events, (uiEvent, eventName) ->
      fn = $parse(uiEvent)
      elm.bind eventName, (evt) ->
        params = Array::slice.call(arguments_)

        #Take out first paramater (event object);
        params = params.splice(1)
        scope.$apply ->
          fn scope,
            $event: evt
            $params: params




]

#
# * Defines the ui-if tag. This removes/adds an element from the dom depending on a condition
# * Originally created by @tigbro, for the @jquery-mobile-angular-adapter
# * https://github.com/tigbro/jquery-mobile-angular-adapter
#
angular.module("ui.directives").directive "uiIf", [->
  transclude: "element"
  priority: 1000
  terminal: true
  restrict: "A"
  compile: (element, attr, linker) ->
    (scope, iterStartElement, attr) ->
      iterStartElement[0].doNotMove = true
      expression = attr.uiIf
      lastElement = undefined
      lastScope = undefined
      scope.$watch expression, (newValue) ->
        if lastElement
          lastElement.remove()
          lastElement = null
        if lastScope
          lastScope.$destroy()
          lastScope = null
        if newValue
          lastScope = scope.$new()
          linker lastScope, (clone) ->
            lastElement = clone
            iterStartElement.after clone


        # Note: need to be parent() as jquery cannot trigger events on comments
        # (angular creates a comment node when using transclusion, as ng-repeat does).
        iterStartElement.parent().trigger "$childrenChanged"

]

###
General-purpose jQuery wrapper. Simply pass the plugin name as the expression.

It is possible to specify a default set of parameters for each jQuery plugin.
Under the jq key, namespace each plugin by that which will be passed to ui-jq.
Unfortunately, at this time you can only pre-define the first parameter.
@example { jq : { datepicker : { showOn:'click' } } }

@param ui-jq {string} The $elm.[pluginName]() to call.
@param [ui-options] {mixed} Expression to be evaluated and passed as options to the function
Multiple parameters can be separated by commas
Set {ngChange:false} to disable passthrough support for change events ( since angular watches 'input' events, not 'change' events )

@example <input ui-jq="datepicker" ui-options="{showOn:'click'},secondParameter,thirdParameter">
###
angular.module("ui.directives").directive "uiJq", ["ui.config", (uiConfig) ->
  restrict: "A"
  compile: (tElm, tAttrs) ->
    throw new Error("ui-jq: The \"" + tAttrs.uiJq + "\" function does not exist")  unless angular.isFunction(tElm[tAttrs.uiJq])
    options = uiConfig.jq and uiConfig.jq[tAttrs.uiJq]
    (scope, elm, attrs) ->
      linkOptions = []
      ngChange = "change"
      if attrs.uiOptions
        linkOptions = scope.$eval("[" + attrs.uiOptions + "]")
        linkOptions[0] = angular.extend(options, linkOptions[0])  if angular.isObject(options) and angular.isObject(linkOptions[0])
      else linkOptions = [options]  if options
      if attrs.ngModel and elm.is("select,input,textarea")
        ngChange = linkOptions[0].ngChange  if linkOptions and angular.isObject(linkOptions[0]) and linkOptions[0].ngChange isnt `undefined`
        if ngChange
          elm.on ngChange, ->
            elm.trigger "input"

      elm[attrs.uiJq].apply elm, linkOptions
]

###
Bind one or more handlers to particular keys or their combination
@param hash {mixed} keyBindings Can be an object or string where keybinding expression of keys or keys combinations and AngularJS Exspressions are set. Object syntax: "{ keys1: expression1 [, keys2: expression2 [ , ... ]]}". String syntax: ""expression1 on keys1 [ and expression2 on keys2 [ and ... ]]"". Expression is an AngularJS Expression, and key(s) are dash-separated combinations of keys and modifiers (one or many, if any. Order does not matter). Supported modifiers are 'ctrl', 'shift', 'alt' and key can be used either via its keyCode (13 for Return) or name. Named keys are 'backspace', 'tab', 'enter', 'esc', 'space', 'pageup', 'pagedown', 'end', 'home', 'left', 'up', 'right', 'down', 'insert', 'delete'.
@example <input ui-keypress="{enter:'x = 1', 'ctrl-shift-space':'foo()', 'shift-13':'bar()'}" /> <input ui-keypress="foo = 2 on ctrl-13 and bar('hello') on shift-esc" />
###
angular.module("ui.directives").directive "uiKeypress", ["$parse", ($parse) ->
  link: (scope, elm, attrs) ->
    keysByCode =
      8: "backspace"
      9: "tab"
      13: "enter"
      27: "esc"
      32: "space"
      33: "pageup"
      34: "pagedown"
      35: "end"
      36: "home"
      37: "left"
      38: "up"
      39: "right"
      40: "down"
      45: "insert"
      46: "delete"

    params = undefined
    paramsParsed = undefined
    expression = undefined
    keys = undefined
    combinations = []
    try
      params = scope.$eval(attrs.uiKeypress)
      paramsParsed = true
    catch error
      params = attrs.uiKeypress.split(/\s+and\s+/i)
      paramsParsed = false

    # Prepare combinations for simple checking
    angular.forEach params, (v, k) ->
      combination = {}
      if paramsParsed

        # An object passed
        combination.expression = $parse(v)
        combination.keys = k
      else

        # A string passed
        v = v.split(/\s+on\s+/i)
        combination.expression = $parse(v[0])
        combination.keys = v[1]
      keys = {}
      angular.forEach combination.keys.split("-"), (value) ->
        keys[value] = true

      combination.keys = keys
      combinations.push combination


    # Check only mathcing of pressed keys one of the conditions
    elm.bind "keydown", (event) ->

      # No need to do that inside the cycle
      altPressed = event.metaKey or event.altKey
      ctrlPressed = event.ctrlKey
      shiftPressed = event.shiftKey

      # Iterate over prepared combinations
      angular.forEach combinations, (combination) ->
        mainKeyPressed = (combination.keys[keysByCode[event.keyCode]] or combination.keys[event.keyCode.toString()]) or false
        altRequired = combination.keys.alt or false
        ctrlRequired = combination.keys.ctrl or false
        shiftRequired = combination.keys.shift or false
        if mainKeyPressed and (altRequired is altPressed) and (ctrlRequired is ctrlPressed) and (shiftRequired is shiftPressed)

          # Run the function
          scope.$apply ->
            combination.expression scope,
              $event: event




]
(->

  #Setup map events from a google map object to trigger on a given element too,
  #then we just use ui-event to catch events from an element
  bindMapEvents = (scope, eventsStr, googleObject, element) ->
    angular.forEach eventsStr.split(" "), (eventName) ->

      #Prefix all googlemap events with 'map-', so eg 'click'
      #for the googlemap doesn't interfere with a normal 'click' event
      $event = type: "map-" + eventName
      google.maps.event.addListener googleObject, eventName, (evt) ->
        element.trigger angular.extend({}, $event, evt)

        #We create an $apply if it isn't happening. we need better support for this
        #We don't want to use timeout because tons of these events fire at once,
        #and we only need one $apply
        scope.$apply()  unless scope.$$phase



  #doesn't work as E for unknown reason

  #Set scope variable for the map

  # The info window's contents dont' need to be on the dom anymore,
  #           google maps has them stored.  So we just replace the infowindow element
  #           with an empty div. (we don't just straight remove it from the dom because
  #           straight removing things from the dom can mess up angular)

  #Decorate infoWindow.open to $compile contents before opening

  #
  #   * Map overlay directives all work the same. Take map marker for example
  #   * <ui-map-marker="myMarker"> will $watch 'myMarker' and each time it changes,
  #   * it will hook up myMarker's events to the directive dom element.  Then
  #   * ui-event will be able to catch all of myMarker's events. Super simple.
  #
  mapOverlayDirective = (directiveName, events) ->
    app.directive directiveName, [->
      restrict: "A"
      link: (scope, elm, attrs) ->
        scope.$watch attrs[directiveName], (newObject) ->
          bindMapEvents scope, events, newObject, elm

    ]
  app = angular.module("ui.directives")
  app.directive "uiMap", ["ui.config", "$parse", (uiConfig, $parse) ->
    mapEvents = "bounds_changed center_changed click dblclick drag dragend " + "dragstart heading_changed idle maptypeid_changed mousemove mouseout " + "mouseover projection_changed resize rightclick tilesloaded tilt_changed " + "zoom_changed"
    options = uiConfig.map or {}
    restrict: "A"
    link: (scope, elm, attrs) ->
      opts = angular.extend({}, options, scope.$eval(attrs.uiOptions))
      map = new google.maps.Map(elm[0], opts)
      model = $parse(attrs.uiMap)
      model.assign scope, map
      bindMapEvents scope, mapEvents, map, elm
  ]
  app.directive "uiMapInfoWindow", ["ui.config", "$parse", "$compile", (uiConfig, $parse, $compile) ->
    infoWindowEvents = "closeclick content_change domready " + "position_changed zindex_changed"
    options = uiConfig.mapInfoWindow or {}
    link: (scope, elm, attrs) ->
      opts = angular.extend({}, options, scope.$eval(attrs.uiOptions))
      opts.content = elm[0]
      model = $parse(attrs.uiMapInfoWindow)
      infoWindow = model(scope)
      unless infoWindow
        infoWindow = new google.maps.InfoWindow(opts)
        model.assign scope, infoWindow
      bindMapEvents scope, infoWindowEvents, infoWindow, elm
      elm.replaceWith "<div></div>"
      _open = infoWindow.open
      infoWindow.open = open = (a1, a2, a3, a4, a5, a6) ->
        $compile(elm.contents()) scope
        _open.call infoWindow, a1, a2, a3, a4, a5, a6
  ]
  mapOverlayDirective "uiMapMarker", "animation_changed click clickable_changed cursor_changed " + "dblclick drag dragend draggable_changed dragstart flat_changed icon_changed " + "mousedown mouseout mouseover mouseup position_changed rightclick " + "shadow_changed shape_changed title_changed visible_changed zindex_changed"
  mapOverlayDirective "uiMapPolyline", "click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"
  mapOverlayDirective "uiMapPolygon", "click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"
  mapOverlayDirective "uiMapRectangle", "bounds_changed click dblclick mousedown mousemove mouseout mouseover " + "mouseup rightclick"
  mapOverlayDirective "uiMapCircle", "center_changed click dblclick mousedown mousemove " + "mouseout mouseover mouseup radius_changed rightclick"
  mapOverlayDirective "uiMapGroundOverlay", "click dblclick"
)()

#
# Attaches jquery-ui input mask onto input element
#
angular.module("ui.directives").directive "uiMask", [->
  require: "ngModel"
  scope:
    uiMask: "="

  link: ($scope, element, attrs, controller) ->

    # We override the render method to run the jQuery mask plugin
    #
    controller.$render = ->
      value = undefined
      value = controller.$viewValue or ""
      element.val value
      element.mask $scope.uiMask


    # Add a parser that extracts the masked value into the model but only if the mask is valid
    #
    controller.$parsers.push (value) ->
      isValid = undefined
      isValid = element.data("mask-isvalid")
      controller.$setValidity "mask", isValid
      element.mask()


    # When keyup, update the viewvalue
    #
    element.bind "keyup", ->
      $scope.$apply ->
        controller.$setViewValue element.mask()


]
angular.module("ui.directives").directive "uiModal", ["$timeout", ($timeout) ->
  restrict: "EAC"
  require: "ngModel"
  link: (scope, elm, attrs, model) ->

    #helper so you don't have to type class="modal hide"
    elm.addClass "modal hide"
    scope.$watch attrs.ngModel, (value) ->
      elm.modal value and "show" or "hide"


    #If bootstrap animations are enabled, listen to 'shown' and 'hidden' events
    elm.on jQuery.support.transition and "shown" or "show", ->
      $timeout ->
        model.$setViewValue true


    elm.on jQuery.support.transition and "hidden" or "hide", ->
      $timeout ->
        model.$setViewValue false


]

###
Add a clear button to form inputs to reset their value
###
angular.module("ui.directives").directive "uiReset", ["$parse", ($parse) ->
  require: "ngModel"
  link: (scope, elm, attrs, ctrl) ->
    aElement = angular.element("<a class=\"ui-reset\" />")
    elm.wrap("<span class=\"ui-resetwrap\" />").after aElement
    aElement.bind "click", (e) ->
      e.preventDefault()
      scope.$apply ->

        # This lets you SET the value of the 'parsed' model
        ctrl.$setViewValue null
        ctrl.$render()


]

#global angular, $, document

###
Adds a 'ui-scrollfix' class to the element when the page scrolls past it's position.
@param [offset] {int} optional Y-offset to override the detected offset.
Takes 300 (absolute) or -300 or +300 (relative to detected)
###
angular.module("ui.directives").directive "uiScrollfix", ["$window", ($window) ->
  "use strict"
  link: (scope, elm, attrs) ->
    top = elm.offset().top
    unless attrs.uiScrollfix
      attrs.uiScrollfix = top
    else

      # chartAt is generally faster than indexOf: http://jsperf.com/indexof-vs-chartat
      if attrs.uiScrollfix.charAt(0) is "-"
        attrs.uiScrollfix = top - attrs.uiScrollfix.substr(1)
      else attrs.uiScrollfix = top + parseFloat(attrs.uiScrollfix.substr(1))  if attrs.uiScrollfix.charAt(0) is "+"
    angular.element($window).on "scroll.ui-scrollfix", ->

      # if pageYOffset is defined use it, otherwise use other crap for IE
      offset = undefined
      if angular.isDefined($window.pageYOffset)
        offset = $window.pageYOffset
      else
        iebody = (if (document.compatMode and document.compatMode isnt "BackCompat") then document.documentElement else document.body)
        offset = iebody.scrollTop
      if not elm.hasClass("ui-scrollfix") and offset > attrs.uiScrollfix
        elm.addClass "ui-scrollfix"
      else elm.removeClass "ui-scrollfix"  if elm.hasClass("ui-scrollfix") and offset < attrs.uiScrollfix

]

###
Enhanced Select2 Dropmenus

@AJAX Mode - When in this mode, your value will be an object (or array of objects) of the data used by Select2
This change is so that you do not have to do an additional query yourself on top of Select2's own query
@params [options] {object} The configuration options passed to $.fn.select2(). Refer to the documentation
###
angular.module("ui.directives").directive "uiSelect2", ["ui.config", "$http", (uiConfig, $http) ->
  options = {}
  angular.extend options, uiConfig.select2  if uiConfig.select2
  require: "?ngModel"
  compile: (tElm, tAttrs) ->
    watch = undefined
    repeatOption = undefined
    isSelect = tElm.is("select")
    isMultiple = (tAttrs.multiple isnt `undefined`)

    # Enable watching of the options dataset if in use
    if tElm.is("select")
      repeatOption = tElm.find("option[ng-repeat]")
      watch = repeatOption.attr("ng-repeat").split(" ").pop()  if repeatOption.length
    (scope, elm, attrs, controller) ->

      # instance-specific options
      opts = angular.extend({}, options, scope.$eval(attrs.uiSelect2))
      if isSelect

        # Use <select multiple> instead
        delete opts.multiple

        delete opts.initSelection
      else opts.multiple = true  if isMultiple
      if controller

        # Watch the model for programmatic changes
        controller.$render = ->
          if isSelect
            elm.select2 "val", controller.$modelValue
          else
            if isMultiple and not controller.$modelValue
              elm.select2 "data", []
            else
              elm.select2 "data", controller.$modelValue


        # Watch the options dataset for changes
        if watch
          scope.$watch watch, (newVal, oldVal, scope) ->
            return  unless newVal

            # Delayed so that the options have time to be rendered
            setTimeout ->
              elm.select2 "val", controller.$viewValue

              # Refresh angular to remove the superfluous option
              elm.trigger "change"


        unless isSelect

          # Set the view and model value and update the angular template manually for the ajax/multiple select2.
          elm.bind "change", ->
            scope.$apply ->
              controller.$setViewValue elm.select2("data")


          if opts.initSelection
            initSelection = opts.initSelection
            opts.initSelection = (element, callback) ->
              initSelection element, (value) ->
                controller.$setViewValue value
                callback value

      attrs.$observe "disabled", (value) ->
        elm.select2 value and "disable" or "enable"


      # Set initial value since Angular doesn't
      elm.val scope.$eval(attrs.ngModel)

      # Initialize the plugin late so that the injected DOM does not disrupt the template compiler
      setTimeout ->
        elm.select2 opts

]

###
uiShow Directive

Adds a 'ui-show' class to the element instead of display:block
Created to allow tighter control  of CSS without bulkier directives

@param expression {boolean} evaluated expression to determine if the class should be added
###

###
uiHide Directive

Adds a 'ui-hide' class to the element instead of display:block
Created to allow tighter control  of CSS without bulkier directives

@param expression {boolean} evaluated expression to determine if the class should be added
###

###
uiToggle Directive

Adds a class 'ui-show' if true, and a 'ui-hide' if false to the element instead of display:block/display:none
Created to allow tighter control  of CSS without bulkier directives. This also allows you to override the
default visibility of the element using either class.

@param expression {boolean} evaluated expression to determine if the class should be added
###
angular.module("ui.directives").directive("uiShow", [->
  (scope, elm, attrs) ->
    scope.$watch attrs.uiShow, (newVal, oldVal) ->
      if newVal
        elm.addClass "ui-show"
      else
        elm.removeClass "ui-show"

]).directive("uiHide", [->
  (scope, elm, attrs) ->
    scope.$watch attrs.uiHide, (newVal, oldVal) ->
      if newVal
        elm.addClass "ui-hide"
      else
        elm.removeClass "ui-hide"

]).directive "uiToggle", [->
  (scope, elm, attrs) ->
    scope.$watch attrs.uiToggle, (newVal, oldVal) ->
      if newVal
        elm.removeClass("ui-hide").addClass "ui-show"
      else
        elm.removeClass("ui-show").addClass "ui-hide"

]

#
# jQuery UI Sortable plugin wrapper
#
# @param [ui-sortable] {object} Options to pass to $.fn.sortable() merged onto ui.config
#
angular.module("ui.directives").directive "uiSortable", ["ui.config", (uiConfig) ->
  options = undefined
  options = {}
  angular.extend options, uiConfig.sortable  if uiConfig.sortable?
  require: "?ngModel"
  link: (scope, element, attrs, ngModel) ->
    onStart = undefined
    onUpdate = undefined
    opts = undefined
    _start = undefined
    _update = undefined
    opts = angular.extend({}, options, scope.$eval(attrs.uiOptions))
    if ngModel?
      onStart = (e, ui) ->
        ui.item.data "ui-sortable-start", ui.item.index()

      onUpdate = (e, ui) ->
        end = undefined
        start = undefined
        start = ui.item.data("ui-sortable-start")
        end = ui.item.index()
        ngModel.$modelValue.splice end, 0, ngModel.$modelValue.splice(start, 1)[0]
        scope.$apply()

      _start = opts.start
      opts.start = (e, ui) ->
        onStart e, ui
        _start e, ui  if typeof _start is "function"
        scope.$apply()

      _update = opts.update
      opts.update = (e, ui) ->
        onUpdate e, ui
        _update e, ui  if typeof _update is "function"
        scope.$apply()
    element.sortable opts
]

###
Binds a TinyMCE widget to <textarea> elements.
###
angular.module("ui.directives").directive "uiTinymce", ["ui.config", (uiConfig) ->
  uiConfig.tinymce = uiConfig.tinymce or {}
  require: "ngModel"
  link: (scope, elm, attrs, ngModel) ->
    expression = undefined
    options =

      # Update model on button click
      onchange_callback: (inst) ->
        if inst.isDirty()
          inst.save()
          ngModel.$setViewValue elm.val()
          scope.$apply()


      # Update model on keypress
      handle_event_callback: (e) ->
        if @isDirty()
          @save()
          ngModel.$setViewValue elm.val()
          scope.$apply()
        true # Continue handling


      # Update model when calling setContent (such as from the source editor popup)
      setup: (ed) ->
        ed.onSetContent.add (ed, o) ->
          if ed.isDirty()
            ed.save()
            ngModel.$setViewValue elm.val()
            scope.$apply()


    if attrs.uiTinymce
      expression = scope.$eval(attrs.uiTinymce)
    else
      expression = {}
    angular.extend options, uiConfig.tinymce, expression
    setTimeout ->
      elm.tinymce options

]

###
General-purpose validator for ngModel.
angular.js comes with several built-in validation mechanism for input fields (ngRequired, ngPattern etc.) but using
an arbitrary validation function requires creation of a custom formatters and / or parsers.
The ui-validate directive makes it easy to use any function(s) defined in scope as a validator function(s).
A validator function will trigger validation on both model and input changes.

@example <input ui-validate="myValidatorFunction">
@example <input ui-validate="{foo : validateFoo, bar : validateBar}">

@param ui-validate {string|object literal} If strings is passed it should be a scope's function to be used as a validator.
If an object literal is passed a key denotes a validation error key while a value should be a validator function.
In both cases validator function should take a value to validate as its argument and should return true/false indicating a validation result.
###
angular.module("ui.directives").directive "uiValidate", ->
  restrict: "A"
  require: "ngModel"
  link: (scope, elm, attrs, ctrl) ->
    validateFn = undefined
    validateExpr = attrs.uiValidate
    validateExpr = scope.$eval(validateExpr)
    return  unless validateExpr
    validateExpr = validator: validateExpr  if angular.isFunction(validateExpr)
    angular.forEach validateExpr, (validatorFn, key) ->
      validateFn = (valueToValidate) ->
        if validatorFn(valueToValidate)
          ctrl.$setValidity key, true
          valueToValidate
        else
          ctrl.$setValidity key, false
          `undefined`

      ctrl.$formatters.push validateFn
      ctrl.$parsers.push validateFn



###
A replacement utility for internationalization very similar to sprintf.

@param replace {mixed} The tokens to replace depends on type
string: all instances of $0 will be replaced
array: each instance of $0, $1, $2 etc. will be placed with each array item in corresponding order
object: all attributes will be iterated through, with :key being replaced with its corresponding value
@return string

@example: 'Hello :name, how are you :day'.format({ name:'John', day:'Today' })
@example: 'Records $0 to $1 out of $2 total'.format(['10', '20', '3000'])
@example: '$0 agrees to all mentions $0 makes in the event that $0 hits a tree while $0 is driving drunk'.format('Bob')
###
angular.module("ui.filters").filter "format", ->
  (value, replace) ->
    return value  unless value
    target = value.toString()
    token = undefined
    return target  if replace is `undefined`
    return target.split("$0").join(replace)  if not angular.isArray(replace) and not angular.isObject(replace)
    token = angular.isArray(replace) and "$" or ":"
    angular.forEach replace, (value, key) ->
      target = target.split(token + key).join(value)

    target


###
Wraps the
@param text {string} haystack to search through
@param search {string} needle to search for
@param [caseSensitive] {boolean} optional boolean to use case-sensitive searching
###
angular.module("ui.filters").filter "highlight", ->
  (text, search, caseSensitive) ->
    if search or angular.isNumber(search)
      text = text.toString()
      search = search.toString()
      if caseSensitive
        text.split(search).join "<span class=\"ui-match\">" + search + "</span>"
      else
        text.replace new RegExp(search, "gi"), "<span class=\"ui-match\">$&</span>"
    else
      text


###
Converts variable-esque naming conventions to something presentational, capitalized words separated by space.
@param {String} value The value to be parsed and prettified.
@param {String} [inflector] The inflector to use. Default: humanize.
@return {String}
@example {{ 'Here Is my_phoneNumber' | inflector:'humanize' }} => Here Is My Phone Number
{{ 'Here Is my_phoneNumber' | inflector:'underscore' }} => here_is_my_phone_number
{{ 'Here Is my_phoneNumber' | inflector:'variable' }} => hereIsMyPhoneNumber
###
angular.module("ui.filters").filter "inflector", ->
  ucwords = (text) ->
    text.replace /^([a-z])|\s+([a-z])/g, ($1) ->
      $1.toUpperCase()

  breakup = (text, separator) ->
    text.replace /[A-Z]/g, (match) ->
      separator + match

  inflectors =
    humanize: (value) ->
      ucwords breakup(value, " ").split("_").join(" ")

    underscore: (value) ->
      value.substr(0, 1).toLowerCase() + breakup(value.substr(1), "_").toLowerCase().split(" ").join("_")

    variable: (value) ->
      value = value.substr(0, 1).toLowerCase() + ucwords(value.split("_").join(" ")).substr(1).split(" ").join("")
      value

  (text, inflector, separator) ->
    if inflector isnt false and angular.isString(text)
      inflector = inflector or "humanize"
      inflectors[inflector] text
    else
      text


###
Filters out all duplicate items from an array by checking the specified key
@param [key] {string} the name of the attribute of each object to compare for uniqueness
if the key is empty, the entire object will be compared
if the key === false then no filtering will be performed
@return {array}
###
angular.module("ui.filters").filter "unique", ->
  (items, filterOn) ->
    return items  if filterOn is false
    if (filterOn or angular.isUndefined(filterOn)) and angular.isArray(items)
      hashCheck = {}
      newItems = []
      extractValueToCompare = (item) ->
        if angular.isObject(item) and angular.isString(filterOn)
          item[filterOn]
        else
          item

      angular.forEach items, (item) ->
        valueToCheck = undefined
        isDuplicate = false
        i = 0

        while i < newItems.length
          if angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))
            isDuplicate = true
            break
          i++
        newItems.push item  unless isDuplicate

      items = newItems
    items
