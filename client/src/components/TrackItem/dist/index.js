"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var TrackItem_module_scss_1 = require("@/styles/TrackItem.module.scss");
var icons_material_1 = require("@mui/icons-material");
var image_1 = require("next/image");
var router_1 = require("next/router");
var useActions_1 = require("@/hooks/useActions");
var TrackItem = function (_a) {
    var track = _a.track;
    var URL = process.env.API_URL;
    var router = router_1.useRouter();
    var name = track.name, picture = track.picture, artist = track.artist, _id = track._id;
    var _b = useActions_1.useActions(), setPlayerActive = _b.setPlayerActive, setPlayerStopOrPlay = _b.setPlayerStopOrPlay;
    var active = false;
    var play = function () {
        setPlayerActive(track);
        setPlayerStopOrPlay(true);
    };
    return (react_1["default"].createElement(material_1.Card, { className: TrackItem_module_scss_1["default"].track },
        react_1["default"].createElement(material_1.IconButton, { "aria-label": "", onClick: play }, !active ? react_1["default"].createElement(icons_material_1.PlayArrow, null) : react_1["default"].createElement(icons_material_1.Pause, null)),
        react_1["default"].createElement(image_1["default"], { width: 70, height: 70, src: "" + URL + picture, alt: name }),
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'column', style: { width: 200, margin: '0 20px' } },
            react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].name, onClick: function () { return router.push("/tracks/" + _id); } }, name),
            react_1["default"].createElement("div", { className: TrackItem_module_scss_1["default"].artist }, artist)),
        active && react_1["default"].createElement("div", null, "02:42 / 03:22"),
        react_1["default"].createElement(material_1.IconButton, { style: { marginLeft: 'auto' } },
            react_1["default"].createElement(icons_material_1.Delete, null))));
};
exports["default"] = TrackItem;
