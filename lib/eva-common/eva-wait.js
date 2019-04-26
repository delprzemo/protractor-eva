"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var eva_operations_1 = require("./eva-operations");
var EvaWait = /** @class */ (function () {
    function EvaWait() {
    }
    EvaWait.prototype.wait = function (miliseconds) {
        protractor_1.browser.sleep(miliseconds);
        return this;
    };
    EvaWait.prototype.waitUntilSee = function (text) {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(eva_operations_1.EvaOperation.getBody(), text), 10000, 'Element taking too long to appear in the DOM');
        return this;
    };
    return EvaWait;
}());
exports.EvaWait = EvaWait;
