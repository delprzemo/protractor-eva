"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eva_operations_1 = require("../eva-common/eva-operations");
var eva_element_1 = require("./eva-element");
var EvaManyElement = /** @class */ (function () {
    function EvaManyElement(elementArrayFinder) {
        var _this = this;
        this.elementArrayFinder = elementArrayFinder;
        this.countInResultsByText = function (value) {
            return _this.elementArrayFinder.filter(function (element) {
                return element.getText().then(function (text) {
                    return text.indexOf(value) > 0;
                });
            }).count();
        };
        this.countInResultsByLocator = function (locator) {
            return _this.elementArrayFinder.filter(function (item) { return item.all(locator).isPresent(); }).count();
        };
    }
    EvaManyElement.prototype.onSingle = function (index) {
        return new eva_element_1.EvaElement(this.elementArrayFinder.get(index - 1));
    };
    EvaManyElement.prototype.canSee = function (selector, times) {
        if (times === void 0) { times = 1; }
        if (eva_operations_1.EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then(function (result) {
                expect(result).toBe(times);
            });
        }
        else {
            this.countInResultsByText(selector).then(function (result) {
                expect(result).toBe(times);
            });
        }
        return this;
    };
    EvaManyElement.prototype.canSeeOnAll = function (selector) {
        var _this = this;
        if (eva_operations_1.EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then(function (result) {
                expect(result).toBe(_this.elementArrayFinder.count());
            });
        }
        else {
            this.countInResultsByText(selector).then(function (result) {
                expect(result).toBe(_this.elementArrayFinder.count());
            });
        }
        return this;
    };
    EvaManyElement.prototype.canSeeOnAny = function (selector) {
        if (eva_operations_1.EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then(function (result) {
                expect(result).toBeGreaterThan(0);
            });
        }
        else {
            this.countInResultsByText(selector).then(function (result) {
                expect(result).toBeGreaterThan(0);
            });
        }
        return this;
    };
    EvaManyElement.prototype.canNotSeeOnAll = function (selector) {
        var _this = this;
        if (eva_operations_1.EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then(function (result) {
                expect(result).not.toBe(_this.elementArrayFinder.count());
            });
        }
        else {
            this.countInResultsByText(selector).then(function (result) {
                expect(result).not.toBe(_this.elementArrayFinder.count());
            });
        }
        return this;
    };
    EvaManyElement.prototype.canNotSeeOnAny = function (selector) {
        if (eva_operations_1.EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then(function (result) {
                expect(result).not.toBeGreaterThan(0);
            });
        }
        else {
            this.countInResultsByText(selector).then(function (result) {
                expect(result).not.toBeGreaterThan(0);
            });
        }
        return this;
    };
    EvaManyElement.prototype.canCount = function (value) {
        expect(this.elementArrayFinder.count()).toBe(value);
        return this;
    };
    EvaManyElement.prototype.repeat = function (func) {
        this.elementArrayFinder.each(function (el, index) {
            func(new eva_element_1.EvaElement(el));
        });
    };
    return EvaManyElement;
}());
exports.EvaManyElement = EvaManyElement;
