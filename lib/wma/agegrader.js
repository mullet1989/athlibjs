"use strict";

exports.AgeGrader = class AgeGrader {
    get minAge() { return 35; }
    get maxAge() { return 100; }
    get dataYear() { return 2015; }
    get data() { return './wma-data.json'; }
    getData() {
        if (this.data !== null) {
            return require(this.data);
        }
    }
    getAllEventCodes() {
        let data = this.getData();
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
}


// extend array prototype with dedupe function
Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

