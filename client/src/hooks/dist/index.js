"use strict";
exports.__esModule = true;
exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = require("react-redux");
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
exports.useAppSelector = react_redux_1.useSelector;
