"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EvaAttribute = /** @class */ (function () {
    function EvaAttribute(attributeValue) {
        this.attributeValue = attributeValue;
    }
    EvaAttribute.prototype.canSee = function (value) {
        expect(this.attributeValue).toBe(value);
    };
    return EvaAttribute;
}());
exports.EvaAttribute = EvaAttribute;
