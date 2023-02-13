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
exports.useActions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var PlayerReducer_1 = require("@/store/reducers/PlayerReducer");
var useAppDispatch_1 = require("./useAppDispatch");
var actions = __assign({}, PlayerReducer_1.playerActions);
exports.useActions = function () {
    var dispatch = useAppDispatch_1.useAppDispatch();
    return toolkit_1.bindActionCreators(actions, dispatch);
};
