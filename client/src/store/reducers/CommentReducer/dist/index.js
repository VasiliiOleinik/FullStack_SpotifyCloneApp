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
exports.commentsActions = exports.commentsReducer = exports.commentsSlice = void 0;
var addComment_1 = require("@/store/actions/addComment");
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var initialState = {
    comments: [],
    error: ""
};
exports.commentsSlice = toolkit_1.createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {},
    extraReducers: (_a = {},
        _a[addComment_1.addComment.pending] = function (state) {
            state.error = '';
        },
        _a[addComment_1.addComment.fulfilled] = function (state, action) {
            state.error = "";
            state.comments.push(action.payload);
        },
        _a[addComment_1.addComment.rejected] = function (state, action) {
            state.error = action.payload;
        },
        _a[next_redux_wrapper_1.HYDRATE] = function (state, action) {
            return __assign(__assign({}, state), action.payload.auth);
        },
        _a)
});
exports.commentsReducer = exports.commentsSlice.reducer;
exports.commentsActions = exports.commentsSlice.actions;
