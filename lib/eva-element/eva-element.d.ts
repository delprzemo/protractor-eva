import { ElementFinder } from "protractor";
import { Locator } from "selenium-webdriver";
import { EvaWait } from "../eva-common/eva-wait";
import { EvaAttribute } from "./eva-attribute";
import { EvaManyElement } from "./eva-many-element";
export declare class EvaElement extends EvaWait {
    private elementFinder;
    constructor(elementFinder?: ElementFinder);
    on(selector: string | Locator): EvaElement;
    onAttribute(attrName: string): EvaAttribute;
    canSee(text: string): this;
    canNotSee(text: string): this;
    click(): this;
    type(value: string): this;
    pressKey(key: string): this;
    onMany(selector: string | Locator): EvaManyElement;
}
