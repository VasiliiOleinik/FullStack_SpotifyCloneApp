"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var TrackItem_1 = require("../TrackItem");
var TrackList = function (_a) {
    var tracks = _a.tracks;
    return (react_1["default"].createElement(material_1.Grid, { container: true, direction: 'column' },
        react_1["default"].createElement(material_1.Box, { p: 2 }, tracks.map(function (track) { return react_1["default"].createElement(TrackItem_1["default"], { key: track._id, track: track }); }))));
};
exports["default"] = TrackList;
