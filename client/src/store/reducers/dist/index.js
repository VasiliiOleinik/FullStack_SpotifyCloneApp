"use strict";
exports.__esModule = true;
exports.rootReducer = void 0;
var PlayerReducer_1 = require("./PlayerReducer");
var toolkit_1 = require("@reduxjs/toolkit");
var OneTrackReducer_1 = require("./OneTrackReducer");
exports.rootReducer = toolkit_1.combineReducers({
    playerReducer: PlayerReducer_1.playerReducer,
    oneTrackReducer: OneTrackReducer_1.oneTrackReducer
});
