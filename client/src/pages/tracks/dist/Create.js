"use strict";
exports.__esModule = true;
var MainLayout_1 = require("@/components/MainLayout");
var react_1 = require("react");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var StepWrapper_1 = require("@/components/StepWrapper");
var TrackInfo_1 = require("@/components/StepsComponents/TrackInfo");
var FileUpload_1 = require("@/components/StepsComponents/FileUpload");
var createTrack_1 = require("@/store/actions/createTrack");
var Create = function () {
    var _a = react_1.useState(0), activeStep = _a[0], setActiveStep = _a[1];
    var _b = react_1.useState({ name: "", artist: "", text: "" }), trackInfo = _b[0], setTrackInfo = _b[1];
    var _c = react_1.useState(""), picture = _c[0], setPicture = _c[1];
    var _d = react_1.useState(""), audio = _d[0], setAudio = _d[1];
    var router = router_1.useRouter();
    var next = function () {
        if (activeStep !== 2) {
            setActiveStep(function (prev) { return prev + 1; });
        }
        else {
            var formData = new FormData();
            formData.append('name', trackInfo.name);
            formData.append('artist', trackInfo.artist);
            formData.append('text', trackInfo.text);
            formData.append('picture', picture);
            formData.append('audio', audio);
            createTrack_1.createTrack(formData, router);
        }
    };
    var prev = function () {
        setActiveStep(function (prev) { return prev - 1; });
    };
    return (react_1["default"].createElement(MainLayout_1["default"], null,
        react_1["default"].createElement(StepWrapper_1["default"], { activeStep: activeStep }, activeStep === 0
            ? react_1["default"].createElement(TrackInfo_1["default"], { setTrackInfo: setTrackInfo })
            : activeStep === 1
                ? react_1["default"].createElement(FileUpload_1["default"], { setFile: setPicture, accept: "image/*" },
                    react_1["default"].createElement(material_1.Button, { variant: "text", color: "primary" }, "Upload image"))
                : react_1["default"].createElement(FileUpload_1["default"], { setFile: setAudio, accept: "audio/*" },
                    react_1["default"].createElement(material_1.Button, { variant: "text", color: "primary" }, "Upload audio"))),
        react_1["default"].createElement(material_1.Grid, { container: true, justifyContent: 'space-between' },
            react_1["default"].createElement(material_1.Button, { disabled: activeStep === 0, variant: "text", color: "primary", onClick: prev }, "Prev"),
            react_1["default"].createElement(material_1.Button, { variant: "text", color: "primary", onClick: next }, "Next"))));
};
exports["default"] = Create;
