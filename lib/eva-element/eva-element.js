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
var selenium_webdriver_1 = require("selenium-webdriver");
var eva_operations_1 = require("../eva-common/eva-operations");
var eva_wait_1 = require("../eva-common/eva-wait");
var eva_attribute_1 = require("./eva-attribute");
var eva_many_element_1 = require("./eva-many-element");
var EvaElement = /** @class */ (function (_super) {
    __extends(EvaElement, _super);
    function EvaElement(elementFinder) {
        if (elementFinder === void 0) { elementFinder = eva_operations_1.EvaOperation.getBody(); }
        var _this = _super.call(this) || this;
        _this.elementFinder = elementFinder;
        return _this;
    }
    EvaElement.prototype.on = function (selector) {
        if (eva_operations_1.EvaOperation.isSelector(selector)) {
            return new EvaElement(this.elementFinder.element(selector));
        }
        else {
            return new EvaElement(this.elementFinder.element(selenium_webdriver_1.By.css(selector)));
        }
    };
    EvaElement.prototype.onAttribute = function (attrName) {
        return new eva_attribute_1.EvaAttribute(this.elementFinder.getAttribute(attrName));
    };
    EvaElement.prototype.canSee = function (text) {
        expect(this.elementFinder.getText()).toContain(text);
        return this;
    };
    EvaElement.prototype.canNotSee = function (text) {
        expect(this.elementFinder.getText()).not.toContain(text);
        return this;
    };
    EvaElement.prototype.click = function () {
        this.elementFinder.click();
        return this;
    };
    EvaElement.prototype.type = function (value) {
        this.elementFinder.sendKeys(value);
        return this;
    };
    EvaElement.prototype.pressKey = function (key) {
        this.elementFinder.sendKeys(key);
        return this;
    };
    EvaElement.prototype.onMany = function (selector) {
        var manyElements = eva_operations_1.EvaOperation.isSelector(selector) ?
            this.elementFinder.all(selector) :
            this.elementFinder.all(protractor_1.by.css(selector));
        return new eva_many_element_1.EvaManyElement(manyElements);
    };
    return EvaElement;
}(eva_wait_1.EvaWait));
exports.EvaElement = EvaElement;
