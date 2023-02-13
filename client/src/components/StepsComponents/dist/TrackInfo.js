"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var TrackInfo = function (_a) {
    var setTrackInfo = _a.setTrackInfo;
    return (react_1["default"].createElement(material_1.Grid, { container: true, direction: 'column', sx: { padding: '20px' } },
        react_1["default"].createElement(material_1.TextField, { onChange: function (e) { return setTrackInfo(function (prev) { return (__assign(__assign({}, prev), { name: e.target.value })); }); }, id: "trackName", label: "Track name" }),
        react_1["default"].createElement(material_1.TextField, { onChange: function (e) { return setTrackInfo(function (prev) { return (__assign(__assign({}, prev), { artist: e.target.value })); }); }, id: "artist", label: "Author", sx: { margin: '10px 0px' } }),
        react_1["default"].createElement(material_1.TextField, { onChange: function (e) { return setTrackInfo(function (prev) { return (__assign(__assign({}, prev), { text: e.target.value })); }); }, id: "trackText", label: "Text", multiline: true, rows: 3 })));
};
exports["default"] = TrackInfo;
