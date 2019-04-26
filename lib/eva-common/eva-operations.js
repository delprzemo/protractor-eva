"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var EvaOperation = /** @class */ (function () {
    function EvaOperation() {
    }
    EvaOperation.isSelector = function (value) {
        if (!value.substr) {
            return true;
        }
        return false;
    };
    EvaOperation.getElementByCss = function (selector) { return protractor_1.element(protractor_1.by.css(selector)); };
    EvaOperation.getManyElementByCss = function (selector) { return protractor_1.element.all(protractor_1.by.css(selector)); };
    EvaOperation.getManyElementBySelector = function (bySelector) { return protractor_1.element.all(bySelector); };
    EvaOperation.getBody = function () { return EvaOperation.getElementByCss("body"); };
    return EvaOperation;
}());
exports.EvaOperation = EvaOperation;
