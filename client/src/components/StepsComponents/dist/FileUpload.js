"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FileUpload = function (_a) {
    var setFile = _a.setFile, accept = _a.accept, children = _a.children;
    var ref = react_1.useRef(null);
    var onChange = function (e) {
        var _a, _b;
        setFile(((_a = e.target) === null || _a === void 0 ? void 0 : _a.files) ? (_b = e.target) === null || _b === void 0 ? void 0 : _b.files[0] : null);
    };
    return (react_1["default"].createElement("div", { onClick: function () { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.click(); } },
        react_1["default"].createElement("input", { type: "file", accept: accept, style: { display: 'none' }, ref: ref, onChange: onChange }),
        children));
};
exports["default"] = FileUpload;
