"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("../Navbar");
var Player_1 = require("../Player");
var components_1 = require("./components");
var head_1 = require("next/head");
var MainLayout = function (_a) {
    var children = _a.children, title = _a.title, description = _a.description;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, title || "Music portal"),
            react_1["default"].createElement("meta", { name: "dedcription", content: description || "The bet music platform" }),
            react_1["default"].createElement("meta", { name: "robots", content: 'index, follow' }),
            react_1["default"].createElement("meta", { name: 'keywords', content: "musik, artist, listen, Eminem" }),
            react_1["default"].createElement("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1' })),
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(components_1.Container, null, children),
        react_1["default"].createElement(Player_1["default"], null)));
};
exports["default"] = MainLayout;
