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
exports.oneTrackActions = exports.oneTrackReducer = exports.oneTrackSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var getTrack_1 = require("@/store/actions/getTrack");
var initialState = {
    track: {},
    error: ''
};
exports.oneTrackSlice = toolkit_1.createSlice({
    name: 'oneTrack',
    initialState: initialState,
    reducers: {},
    extraReducers: (_a = {},
        _a[getTrack_1.getTrack.pending] = function (state) {
            state.error = '';
        },
        _a[getTrack_1.getTrack.fulfilled] = function (state, action) {
            state.error = "";
            state.track = action.payload;
        },
        _a[getTrack_1.getTrack.rejected] = function (state, action) {
            state.error = action.payload;
        },
        _a[next_redux_wrapper_1.HYDRATE] = function (state, action) {
            return __assign(__assign({}, state), action.payload.auth);
        },
        _a)
});
exports.oneTrackReducer = exports.oneTrackSlice.reducer;
exports.oneTrackActions = exports.oneTrackSlice.actions;
