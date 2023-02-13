"use strict";
exports.__esModule = true;
exports.selectTrack = void 0;
var reselect_1 = require("reselect");
var template = function (state) { return state.oneTrack; };
exports.selectTrack = reselect_1.createSelector(template, function (state) { return state; });
