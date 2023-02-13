"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MainLayout_1 = require("@/components/MainLayout");
var Index = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(MainLayout_1["default"], null,
            react_1["default"].createElement("div", { className: 'center' },
                react_1["default"].createElement("h1", null, "Welcome!"),
                react_1["default"].createElement("h3", null, "Here are the best tracks!"))),
        react_1["default"].createElement("style", { jsx: true }, "\n          .center {\n            margin-top: 150px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n          }\n        ")));
};
exports["default"] = Index;
