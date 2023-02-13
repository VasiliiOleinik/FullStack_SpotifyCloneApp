"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TrackController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var TrackController = /** @class */ (function () {
    function TrackController(trackService) {
        this.trackService = trackService;
    }
    TrackController.prototype.create = function (req, dto) {
        var _a = req.files, picture = _a.picture, audio = _a.audio;
        return this.trackService.create(dto, picture[0], audio[0]);
    };
    TrackController.prototype.getAll = function (count, offset) {
        return this.trackService.getAll(count, offset);
    };
    TrackController.prototype.search = function (query) {
        return this.trackService.search(query);
    };
    TrackController.prototype.getOne = function (id) {
        return this.trackService.getOne(id);
    };
    TrackController.prototype["delete"] = function (id) {
        return this.trackService["delete"](id);
    };
    TrackController.prototype.addComment = function (dto) {
        return this.trackService.addComment(dto);
    };
    TrackController.prototype.lisnten = function (id) {
        return this.trackService.listen(id);
    };
    __decorate([
        common_1.Post(),
        common_1.UseInterceptors(platform_express_1.FileFieldsInterceptor([
            { name: 'picture', maxCount: 1 },
            { name: 'audio', maxCount: 1 },
        ])),
        __param(0, common_1.Req()), __param(1, common_1.Body())
    ], TrackController.prototype, "create");
    __decorate([
        common_1.Get(),
        __param(0, common_1.Query('count')), __param(1, common_1.Query('offset'))
    ], TrackController.prototype, "getAll");
    __decorate([
        common_1.Get('/search'),
        __param(0, common_1.Query('query'))
    ], TrackController.prototype, "search");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], TrackController.prototype, "getOne");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], TrackController.prototype, "delete");
    __decorate([
        common_1.Post('/comment'),
        __param(0, common_1.Body())
    ], TrackController.prototype, "addComment");
    __decorate([
        common_1.Post('/listen/:id'),
        __param(0, common_1.Param('id'))
    ], TrackController.prototype, "lisnten");
    TrackController = __decorate([
        common_1.Controller('/tracks')
    ], TrackController);
    return TrackController;
}());
exports.TrackController = TrackController;
