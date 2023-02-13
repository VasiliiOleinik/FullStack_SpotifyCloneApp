"use strict";
exports.__esModule = true;
var useTime_1 = require("@/hooks/useTime");
var react_1 = require("react");
var TrackProgress = function (_a) {
    var left = _a.left, right = _a.right, onChange = _a.onChange, audio = _a.audio;
    var active = audio ? useTime_1.getTime(left) : left;
    var total = audio ? useTime_1.getTime(right) : right;
    return (react_1["default"].createElement("div", { style: { display: 'flex' } },
        react_1["default"].createElement("input", { type: 'range', min: 0, max: right, value: left, onChange: onChange }),
        react_1["default"].createElement("div", null, active + " / " + total)));
};
exports["default"] = TrackProgress;
