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
exports.AppBar = void 0;
var styles_1 = require("@mui/material/styles");
var AppBar_1 = require("@mui/material/AppBar");
var drawerWidth = 240;
exports.AppBar = styles_1.styled(AppBar_1["default"], {
    shouldForwardProp: function (prop) { return prop !== 'open'; }
})(function (_a) {
    var theme = _a.theme, open = _a.open;
    return (__assign({ transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }) }, (open && {
        width: "calc(100% - " + drawerWidth + "px)",
        marginLeft: drawerWidth + "px",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })));
});
