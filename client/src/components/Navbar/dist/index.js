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
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var Drawer_1 = require("@mui/material/Drawer");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var Toolbar_1 = require("@mui/material/Toolbar");
var List_1 = require("@mui/material/List");
var Typography_1 = require("@mui/material/Typography");
var IconButton_1 = require("@mui/material/IconButton");
var Menu_1 = require("@mui/icons-material/Menu");
var ChevronLeft_1 = require("@mui/icons-material/ChevronLeft");
var ChevronRight_1 = require("@mui/icons-material/ChevronRight");
var ListItem_1 = require("@mui/material/ListItem");
var ListItemButton_1 = require("@mui/material/ListItemButton");
var ListItemIcon_1 = require("@mui/material/ListItemIcon");
var ListItemText_1 = require("@mui/material/ListItemText");
var MoveToInbox_1 = require("@mui/icons-material/MoveToInbox");
var Mail_1 = require("@mui/icons-material/Mail");
var components_1 = require("./components");
var routes_1 = require("./routes");
var router_1 = require("next/router");
function Navbar() {
    var theme = styles_1.useTheme();
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    var router = router_1.useRouter();
    var handleDrawerOpen = function () {
        setOpen(true);
    };
    var handleDrawerClose = function () {
        setOpen(false);
    };
    return (React.createElement(Box_1["default"], { sx: { display: 'flex' } },
        React.createElement(CssBaseline_1["default"], null),
        React.createElement(components_1.AppBar, { position: "fixed", open: open },
            React.createElement(Toolbar_1["default"], null,
                React.createElement(IconButton_1["default"], { color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, edge: "start", sx: __assign({ mr: 2 }, (open && { display: 'none' })) },
                    React.createElement(Menu_1["default"], null)),
                React.createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div" }, "Persistent drawer"))),
        React.createElement(Drawer_1["default"], { sx: {
                width: components_1.drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: components_1.drawerWidth,
                    boxSizing: 'border-box'
                }
            }, variant: "persistent", anchor: "left", open: open },
            React.createElement(components_1.DrawerHeader, null,
                React.createElement(IconButton_1["default"], { onClick: handleDrawerClose }, theme.direction === 'ltr' ? React.createElement(ChevronLeft_1["default"], null) : React.createElement(ChevronRight_1["default"], null))),
            React.createElement(List_1["default"], null, routes_1.menuItems.map(function (_a, index) {
                var text = _a.text, href = _a.href;
                return (React.createElement(ListItem_1["default"], { key: text, disablePadding: true, onClick: function () { return router.push(href); } },
                    React.createElement(ListItemButton_1["default"], null,
                        React.createElement(ListItemIcon_1["default"], null, index % 2 === 0 ? React.createElement(MoveToInbox_1["default"], null) : React.createElement(Mail_1["default"], null)),
                        React.createElement(ListItemText_1["default"], { primary: text }))));
            })))));
}
exports["default"] = Navbar;
