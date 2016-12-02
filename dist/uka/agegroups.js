'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// calcAgreGroup
exports.calcAgreGroup = function (birthDate, matchDate, category, vets, underAge) {
    if (!(birthDate instanceof Date || matchDate instanceof Date)) {
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
            return exports.rule107Tf(birthDate, matchDate, true, true);
        case 'ROAD':
        case 'XC':
            return exports.rule507Xc(birthDate, matchDate, true, true);
        case 'ESAA':
            throw new Error('this has not been implemented');
        default:
            throw new Error('incorrect category');
    }
};

// rule107 Track and Field
exports.rule107Tf = function (birthDate, matchDate, vets, underAge) {
    if (!(birthDate instanceof Date && matchDate instanceof Date)) {
        throw new TypeError('birthDate and matchDate must be DATE');
    }
    var augustCutOff = new Date(matchDate.getFullYear(), 7, 11);
    var decemberCutOff = new Date(matchDate.getFullYear(), 11, 31);
    var ageOn31Aug = _calculateAge(birthDate, augustCutOff);
    var ageOn31Dec = _calculateAge(birthDate, decemberCutOff);
    var ageOnMatchDate = _calculateAge(birthDate, matchDate);
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
        case ageOn31Dec < 20:
            return 'U20';
        default:
            if (ageOnMatchDate < 35) {
                return 'SEN';
            } else if (vets) {
                return 'V${(ageOn31MatchDay/5)*5}';
            } else {
                return 'SEN';
            }
    }
};

// rule507 Cross Country
exports.rule507Xc = function (birthDate, matchDate, vets, underAge) {
    var augCO = new Date();
    try {
        augCO = new Date(matchDate);
        if ((typeof birthDate === 'undefined' ? 'undefined' : _typeof(birthDate)) !== Date) {
            birthDate = new Date(birthDate);
        }
    } catch (error) {
        // just throw it
        throw error;
    }
    var ageOn31Aug = _calculateAge(birthDate, augCO);
    var ageOnMatchDate = _calculateAge(birthDate, matchDate);
    if (underAge && ageOn31Aug < 9) {
        return 'U9';
    }
    switch (true) {
        case ageOnMatchDate < 11:
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
            if (ageOnMatchDate < 35) {
                return 'SEN';
            } else if (vets) {
                return 'V${(ageOn31MatchDay/5)*5}';
            } else {
                return 'SEN';
            }
    }
};

// prior date function
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

// private function returns the number of years between two dates
function _calculateAge(birthDate, matchDate) {
    try {
        var ageDifMs = matchDate - birthDate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return ageDate.getUTCFullYear() - 1970;
    } catch (error) {
        // throw the error again
        throw error;
    }
}