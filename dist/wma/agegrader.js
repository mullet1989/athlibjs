'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = require('../utils');
var _ = require('lodash');

exports.AgeGrader = function () {
    function AgeGrader() {
        _classCallCheck(this, AgeGrader);
    }

    _createClass(AgeGrader, [{
        key: 'getData',
        value: function getData() {
            if (this.data !== null) {
                return require(this.data);
            }
        }
    }, {
        key: 'getAllEventCodes',
        value: function getAllEventCodes() {
            var data = this.getData();
            if (data === null) {
                return data;
            }
            var maleEvents = data[this.dataYear]['m'].map(function (value) {
                return value[0]; // return the first value of every array
            });
            var femaleEvents = data[this.dataYear]['f'].map(function (value) {
                return value[0]; // return the first value of every array
            });
            return maleEvents.concat(femaleEvents).unique();
        }
    }, {
        key: 'minAge',
        get: function get() {
            return 35;
        }
    }, {
        key: 'maxAge',
        get: function get() {
            return 100;
        }
    }, {
        key: 'dataYear',
        get: function get() {
            return 2015;
        }
    }, {
        key: 'data',
        get: function get() {
            return './wma-data.json';
        }
    }]);

    return AgeGrader;
}();

// extend array prototype with dedupe function
Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j]) a.splice(j--, 1);
        }
    }

    return a;
};