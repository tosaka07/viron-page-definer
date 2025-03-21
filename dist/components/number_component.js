"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_component_1 = require("./base_component");
var NumberComponent = /** @class */ (function (_super) {
    __extends(NumberComponent, _super);
    function NumberComponent(api, name, auto_refresh_sec, unit) {
        var _this = _super.call(this, api, name, auto_refresh_sec) || this;
        _this.style = 'number';
        _this.unit = unit;
        return _this;
    }
    return NumberComponent;
}(base_component_1.Component));
exports.NumberComponent = NumberComponent;
