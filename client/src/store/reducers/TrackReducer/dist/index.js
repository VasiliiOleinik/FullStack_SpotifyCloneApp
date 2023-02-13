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
exports.trackActions = exports.trackReducer = exports.trackSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var getTracks_1 = require("@/store/actions/getTracks");
var initialState = {
    tracks: [],
    error: ''
};
exports.trackSlice = toolkit_1.createSlice({
    name: 'track',
    initialState: initialState,
    reducers: {},
    extraReducers: (_a = {},
        _a[getTracks_1.getTracks.pending] = function (state) {
            state.error = '';
        },
        _a[getTracks_1.getTracks.fulfilled] = function (state, action) {
            state.error = "";
            state.tracks = action.payload;
        },
        _a[getTracks_1.getTracks.rejected] = function (state, action) {
            state.error = action.payload;
        },
        _a[next_redux_wrapper_1.HYDRATE] = function (state, action) {
            return __assign(__assign({}, state), action.payload.auth);
        },
        _a)
});
exports.trackReducer = exports.trackSlice.reducer;
exports.trackActions = exports.trackSlice.actions;
