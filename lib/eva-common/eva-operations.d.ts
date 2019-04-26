import { Locator } from "selenium-webdriver";
import { ProtractorLocator } from "protractor/built/locators";
export declare class EvaOperation {
    static getElementByCss: (selector: string) => import("protractor").ElementFinder;
    static getManyElementByCss: (selector: string) => import("protractor").ElementArrayFinder;
    static getManyElementBySelector: (bySelector: Locator) => import("protractor").ElementArrayFinder;
    static getBody: () => import("protractor").ElementFinder;
    static isSelector(value: any): value is Locator | ProtractorLocator;
}
