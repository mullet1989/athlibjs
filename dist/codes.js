"use strict";

// "Standard event codes, and things to parse and check them"
// patterns allow both for generic (JT = Javelin Throw) and specific (JT800) patterns.
var PAT_THROWS = /^(WT(P<wtnum>\d))|(JT(P<jtnum>[45678]00))|(DT(P<dtnum>%s))|(HT(P<htnum>%s))|(SP(P<spnum>%s))$/i;
var PAT_JUMPS = /^(LJ|PV|TJ|HJ)$/i;
var PAT_TRACK = /^((P<meters>\d+)(?:[LS]?H(?:3[36])?|SC|W)?)|SC|[2345]MT|LH|SH$/i;
var PAT_ROAD = /^(MILE|MAR|HM|\d+[MK]?)W?$/i;

var PAT_RUN = /(^(WT(P<wtnum>\d))|(JT(P<jtnum>[45678]00))|(DT(P<dtnum>%s))|(HT(P<htnum>%s))|(SP(P<spnum>%s))$)|(^(?:MILE|MAR|HM|\d+[MK]?)W?$)/i;
var PAT_FIELD = /(^(WT(P<wtnum>\d))|(JT(P<jtnum>[45678]00))|(DT(P<dtnum>%s))|(HT(P<htnum>%s))|(SP(P<spnum>%s))$)|(^(?:LJ|PV|TJ|HJ)$)/i;