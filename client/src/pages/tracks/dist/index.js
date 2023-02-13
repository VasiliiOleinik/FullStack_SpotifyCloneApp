"use strict";
exports.__esModule = true;
var MainLayout_1 = require("@/components/MainLayout");
var react_1 = require("react");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var TrackList_1 = require("@/components/TrackList");
var useTypedSelectors_1 = require("@/hooks/useTypedSelectors");
var getTracks_1 = require("@/store/actions/getTracks");
var useAppDispatch_1 = require("@/hooks/useAppDispatch");
var Create = function () {
    var router = router_1.useRouter();
    var dispatch = useAppDispatch_1.useAppDispatch();
    var _a = useTypedSelectors_1.useTypedSelector(function (state) { return state.track; }), tracks = _a.tracks, error = _a.error;
    react_1.useEffect(function () {
        dispatch(getTracks_1.getTracks());
    });
    if (error) {
        return react_1["default"].createElement(MainLayout_1["default"], null,
            react_1["default"].createElement("h1", null, error));
    }
    return (react_1["default"].createElement(MainLayout_1["default"], { title: 'Track list' },
        react_1["default"].createElement(material_1.Grid, { container: true, justifyContent: 'center' },
            react_1["default"].createElement(material_1.Card, { style: { width: '100%' } },
                react_1["default"].createElement(material_1.Box, { p: 3 },
                    react_1["default"].createElement(material_1.Grid, { container: true, justifyContent: 'space-between' },
                        react_1["default"].createElement("h1", null, "Tracks"),
                        react_1["default"].createElement(material_1.Button, { variant: "text", type: 'button', color: "primary", onClick: function () { return router.push('/tracks/create'); } }, "Add track"))),
                react_1["default"].createElement(TrackList_1["default"], { tracks: tracks })))));
};
exports["default"] = Create;
