var assert =  require('assert');
var athlib = require('../lib');

describe('athlib', function () {
  it('should normalize the gender', function () {
    var gender = athlib.utils.normalizeGender('mfadadas');
    assert.equal(gender, 'm');
  });
  it('should test rule107', function () {
    assert.equal('SEN', athlib.agegroups.rule107('1989-26-01', '2017-01-01', 'XC', false, false));    
  });
});
