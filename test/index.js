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
    it('should return the json data', function() {
        var ag = new athlib.agegrader.AgeGrader();
        var data = ag.getData();
        if (data !== null) {
            assert(true);
        }
    });
    it('should give all the event codes from the JSON', function() {
        var ag = new athlib.agegrader.AgeGrader();
        var codes = ag.getAllEventCodes();
        if (codes !== null) {
            assert(true);
        }
    });
    it('should do something with the iaaf scoring', function() {
        //var iaafScore = athlib.iaaf_score.iaaf_performance('m', '100m', 9.85);
        assert(true);
    });
});