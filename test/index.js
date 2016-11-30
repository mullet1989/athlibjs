var assert = require('assert');
var athlib = require('../lib');

describe('athlib', function() {
    it('should normalize the gender', function() {
        var gender = athlib.utils.normalizeGender('mfadadas');
        assert.equal(gender, 'm');
    });
    it('should return SEN for TF', function() {
        assert.equal('SEN', athlib.agegroups.calcAgreGroup(
            new Date('1989-01-26'),
            new Date('2017-01-01'),
            'TF',
            false,
            false));
    });
    it('should return SEN for XC', function() {
        assert.equal('SEN', athlib.agegroups.calcAgreGroup(
            new Date('1989-01-26'),
            new Date('2017-01-01'),
            'XC',
            false,
            false));
    });
});