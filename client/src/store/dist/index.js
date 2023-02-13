"use strict";
exports.__esModule = true;
exports.wrapper = exports.makeStore = void 0;
var next_redux_wrapper_1 = require("next-redux-wrapper");
var toolkit_1 = require("@reduxjs/toolkit");
var PlayerReducer_1 = require("./reducers/PlayerReducer");
var TrackReducer_1 = require("./reducers/TrackReducer");
var OneTrackReducer_1 = require("./reducers/OneTrackReducer");
var CommentReducer_1 = require("./reducers/CommentReducer");
exports.makeStore = function () {
    var _a;
    return toolkit_1.configureStore({
        reducer: (_a = {},
            _a[PlayerReducer_1.playerSlice.name] = PlayerReducer_1.playerReducer,
            _a[TrackReducer_1.trackSlice.name] = TrackReducer_1.trackReducer,
            _a[OneTrackReducer_1.oneTrackSlice.name] = OneTrackReducer_1.oneTrackReducer,
            _a[CommentReducer_1.commentsSlice.name] = CommentReducer_1.commentsReducer,
            _a),
        devTools: true
    });
};
exports.wrapper = next_redux_wrapper_1.createWrapper(exports.makeStore, { debug: true });
