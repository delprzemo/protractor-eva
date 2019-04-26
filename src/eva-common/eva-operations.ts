import { by, element } from "protractor";

import { Locator } from "selenium-webdriver";

import { ProtractorLocator } from "protractor/built/locators";

export class EvaOperation {
    public static getElementByCss = (selector: string) => element(by.css(selector));
    public static getManyElementByCss = (selector: string) => element.all(by.css(selector));
    public static getManyElementBySelector = (bySelector: Locator) => element.all(bySelector);
    public static getBody = () => EvaOperation.getElementByCss("body");
    public static isSelector(value: any): value is Locator | ProtractorLocator {
        if (!value.substr) { return true; }
        return false;
    }
}