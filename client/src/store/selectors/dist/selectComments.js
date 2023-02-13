"use strict";
exports.__esModule = true;
exports.selectComments = void 0;
var reselect_1 = require("reselect");
var template = function (state) { return state.comments; };
exports.selectComments = reselect_1.createSelector(template, function (state) { return state; });
