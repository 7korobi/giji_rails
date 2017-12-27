use giji
db.auth('7korobi', 'kotatsu3');


(function() {
  var check, checks, model, models, _i, _len;
  checks = true;

  models = db.getCollectionNames();
  for (_i = 0, _len = models.length; _i < _len; _i++) {
    model = models[_i];
    check = db[model].validate({
      full: true
    }).valid;
    checks && (checks = check);
  }
  return checks;
})();


