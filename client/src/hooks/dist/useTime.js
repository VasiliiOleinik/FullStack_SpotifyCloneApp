"use strict";
exports.__esModule = true;
exports.useTime = void 0;
exports.useTime = function (totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 50;
    var padTo2Digits = function (num) {
        return num.toString().padStart(2, '0');
    };
    return padTo2Digits(minutes) + ":" + padTo2Digits(seconds);
};
