describe('Foo', function() {
  beforeEach(function() {
    return browser().navigateTo('./sow.cgi?vid=1');
  });
  return it('should change the binding when user enters text', function() {
    var uid;
    uid = "input[name='uid']";
    expect(binding(uid)).toEqual('');
    input(uid).enter('admin');
    return expect(binding(uid)).toEqual('admin');
  });
});
