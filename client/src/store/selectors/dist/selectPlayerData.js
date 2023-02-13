"use strict";
exports.__esModule = true;
exports.selectPlayerData = void 0;
var reselect_1 = require("reselect");
var template = function (state) { return state.player; };
exports.selectPlayerData = reselect_1.createSelector(template, function (state) { return state; });
