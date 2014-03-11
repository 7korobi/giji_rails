describe 'Foo', ->
  beforeEach ->
    browser().navigateTo './sow.cgi?vid=1'

  it 'should change the binding when user enters text', ->
    uid = "input[name='uid']"
    expect(binding uid).toEqual ''
    input(uid).enter 'admin'
    expect(binding uid).toEqual 'admin'
