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
var _a;
exports.__esModule = true;
exports.playerActions = exports.playerReducer = exports.playerSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var initialState = {
    pause: true,
    currentTime: 0,
    volume: 50,
    duration: 0,
    active: null
};
exports.playerSlice = toolkit_1.createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        setPlayerStopOrPlay: function (state, _a) {
            var payload = _a.payload;
            state.pause = payload;
        },
        setPlayerCurrentTime: function (state, _a) {
            var payload = _a.payload;
            state.currentTime = payload;
        },
        setPlayerVolume: function (state, _a) {
            var payload = _a.payload;
            state.volume = payload;
        },
        setPlayerDuration: function (state, _a) {
            var payload = _a.payload;
            state.duration = payload;
        },
        setPlayerActive: function (state, _a) {
            var payload = _a.payload;
            state.active = payload;
            state.duration = 0;
            state.currentTime = 0;
        }
    },
    extraReducers: (_a = {},
        _a[next_redux_wrapper_1.HYDRATE] = function (state, action) {
            return __assign(__assign({}, state), action.payload.auth);
        },
        _a)
});
exports.playerReducer = exports.playerSlice.reducer;
exports.playerActions = exports.playerSlice.actions;
