"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("@/constants");
var material_1 = require("@mui/material");
var StepWrapper = function (_a) {
    var activeStep = _a.activeStep, children = _a.children;
    return (react_1["default"].createElement(material_1.Container, null,
        react_1["default"].createElement(material_1.Stepper, { activeStep: activeStep }, constants_1.steps.map(function (step, i) {
            return react_1["default"].createElement(material_1.Step, { key: i, completed: activeStep > i },
                react_1["default"].createElement(material_1.StepLabel, null, step));
        })),
        react_1["default"].createElement(material_1.Grid, { container: true, justifyContent: "center", style: { margin: '70px 0px', height: 270 } },
            react_1["default"].createElement(material_1.Card, { style: { width: 500 } }, children))));
};
exports["default"] = StepWrapper;
