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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var store_1 = require("@/store");
var App = function (_a) {
    var Component = _a.Component, rest = __rest(_a, ["Component"]);
    var _b = store_1.wrapper.useWrappedStore(rest), store = _b.store, props = _b.props;
    var pageProps = props.pageProps;
    return (react_1["default"].createElement(react_redux_1.Provider, { store: store },
        react_1["default"].createElement(Component, __assign({}, pageProps))));
};
exports["default"] = App;
