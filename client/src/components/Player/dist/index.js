"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var Player_module_scss_1 = require("@/styles/Player.module.scss");
var TrackProgress_1 = require("./components/TrackProgress");
var useActions_1 = require("@/hooks/useActions");
var useTypedSelectors_1 = require("@/hooks/useTypedSelectors");
var selectPlayerData_1 = require("@/store/selectors/selectPlayerData");
var audio;
var Player = function () {
    var URL = process.env.API_URL;
    var _a = useActions_1.useActions(), setPlayerStopOrPlay = _a.setPlayerStopOrPlay, setPlayerVolume = _a.setPlayerVolume, setPlayerCurrentTime = _a.setPlayerCurrentTime, setPlayerDuration = _a.setPlayerDuration;
    var _b = useTypedSelectors_1.useTypedSelector(selectPlayerData_1.selectPlayerData), pause = _b.pause, volume = _b.volume, duration = _b.duration, currentTime = _b.currentTime, active = _b.active;
    var _c = active || {}, name = _c.name, artist = _c.artist, track = _c.audio;
    react_1.useEffect(function () {
        if (!audio) {
            audio = new Audio();
        }
        else {
            setAudio();
            play();
        }
    }, [active]);
    var setAudio = function () {
        if (active) {
            audio.src = "" + URL + track;
            audio.volume = volume / 100;
            audio.onloadedmetadata = function () {
                setPlayerDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = function () {
                setPlayerCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };
    var play = function () {
        if (pause) {
            setPlayerStopOrPlay(false);
            audio.play();
        }
        else {
            setPlayerStopOrPlay(true);
            audio.pause();
        }
    };
    var changeVolume = function (e) {
        var value = Number(e.target.value);
        audio.volume = value / 100;
        setPlayerVolume(value);
    };
    var changeCurrentTime = function (e) {
        var value = Number(e.target.value);
        audio.currentTime = Number(e.target.value);
        setPlayerCurrentTime(value);
    };
    if (!active) {
        return null;
    }
    return (react_1["default"].createElement("div", { className: Player_module_scss_1["default"].player },
        react_1["default"].createElement(material_1.IconButton, { "aria-label": "", onClick: play }, pause ? react_1["default"].createElement(icons_material_1.PlayArrow, null) : react_1["default"].createElement(icons_material_1.Pause, null)),
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'column', style: { width: 200, margin: '0 20px' } },
            react_1["default"].createElement("div", { className: Player_module_scss_1["default"].name }, name),
            react_1["default"].createElement("div", { className: Player_module_scss_1["default"].artist }, artist)),
        react_1["default"].createElement(TrackProgress_1["default"], { left: currentTime, right: duration, onChange: changeCurrentTime, audio: true }),
        react_1["default"].createElement(icons_material_1.VolumeUp, { style: { marginLeft: 'auto' } }),
        react_1["default"].createElement(TrackProgress_1["default"], { left: volume, right: 100, onChange: changeVolume })));
};
exports["default"] = Player;
