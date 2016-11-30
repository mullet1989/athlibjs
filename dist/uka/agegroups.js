'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// calcAgreGroup
exports.calcAgreGroup = function (birthDate, matchDate, category, vets, underAge) {
    if ((typeof birthDate === 'undefined' ? 'undefined' : _typeof(birthDate)) !== Date || (typeof matchDate === 'undefined' ? 'undefined' : _typeof(matchDate)) !== Date) {
        throw new Error("you must pass a valid date");
    }
    // this is the default value
    if (vets === undefined) {
        vets = true;
    }
    // this is the default value
    if (underAge === undefined) {
        underAge = false;
    }
    switch (category) {
        case 'TF':
            return 'rule107';
        case 'ROAD':
        case 'XC':
            return 'rule507';
        case 'ESAA':
            throw new Error('this has not been implemented');
        default:
            throw new Error('incorrect category');
    }
};

// rule107
exports.rule107Tf = function (birthDate, matchDate, category, vets, underAge) {
    var augCO = new Date();
    var decCO = new Date();
    try {
        augCO = new Date(matchDate);
        decCO = new Date(matchDate);
        if ((typeof birthDate === 'undefined' ? 'undefined' : _typeof(birthDate)) !== Date) {
            birthDate = new Date(birthDate);
        }
    } catch (error) {
        // just throw it
        throw error;
    }
    var augustCutOff = new Date(augCO.getFullYear, 8, 11);
    var decemberCutOff = new Date(decCO.getFullYear, 12, 31);
    var ageOn31Aug = 27;
    var ageOn31Dec = 27;
    var ageOn31MatchDay = 27;
    if (underAge && ageOn31Aug < 9) {
        return 'U9';
    }
    switch (true) {
        case ageOn31Aug < 11:
            return 'U11';
        case ageOn31Aug === 11 || ageOn31Aug === 12:
            return 'U13';
        case ageOn31Aug === 13 || ageOn31Aug === 14:
            return 'U15';
        case ageOn31Aug === 15 || ageOn31Aug === 16:
            return 'U17';
        case ageOn31Aug < 20:
            return 'U20';
        default:
            if (vets) {
                return 'V${(ageOn31MatchDay/5)*5}';
            }
            return 'SEN';
    }
};

exports.priorDate = function (matchDate, cutoffDate) {
    try {
        var md = new Date(matchDate);
        var cd = new Date(cutoffDate);
        var x = new Date(md.getFullYear(), cd.getMonth(), cd.getDay());
        if (x > md) {
            return new Date(md.getFullYear() - 1, cd.getMonth(), cd.getDay());
        }
    } catch (error) {
        // just throw it again
        throw error;
    }
};