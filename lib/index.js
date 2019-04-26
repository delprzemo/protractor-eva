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
var protractor_1 = require("protractor");
var eva_operations_1 = require("./eva-common/eva-operations");
var eva_wait_1 = require("./eva-common/eva-wait");
var eva_element_1 = require("./eva-element/eva-element");
var eva_many_element_1 = require("./eva-element/eva-many-element");
var Eva = /** @class */ (function (_super) {
    __extends(Eva, _super);
    function Eva() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOn = function (url) { return protractor_1.browser.get(url); };
        return _this;
    }
    Eva.prototype.on = function (selector) {
        var manyElements = eva_operations_1.EvaOperation.isSelector(selector) ?
            protractor_1.element(selector) :
            eva_operations_1.EvaOperation.getElementByCss(selector);
        return new eva_element_1.EvaElement(manyElements);
    };
    Eva.prototype.onMany = function (selector) {
        var manyElements = eva_operations_1.EvaOperation.isSelector(selector) ?
            eva_operations_1.EvaOperation.getManyElementBySelector(selector) :
            eva_operations_1.EvaOperation.getManyElementByCss(selector);
        return new eva_many_element_1.EvaManyElement(manyElements);
    };
    Eva.prototype.pressKey = function (key) {
        eva_operations_1.EvaOperation.getBody().sendKeys(key);
    };
    Eva.prototype.canSee = function (text) {
        expect(eva_operations_1.EvaOperation.getBody().getText()).toContain(text);
    };
    Eva.prototype.canNotSee = function (text) {
        expect(eva_operations_1.EvaOperation.getBody().getText()).not.toContain(text);
    };
    return Eva;
}(eva_wait_1.EvaWait));
exports.Eva = Eva;
