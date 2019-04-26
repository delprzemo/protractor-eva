import { ElementArrayFinder } from "protractor";
import { Locator } from "selenium-webdriver";
import { EvaElement } from "./eva-element";
export declare class EvaManyElement {
    private elementArrayFinder;
    constructor(elementArrayFinder: ElementArrayFinder);
    onSingle(index: number): EvaElement;
    canSee(selector: string | Locator, times?: number): this;
    canSeeOnAll(selector: string | Locator): this;
    canSeeOnAny(selector: string | Locator): this;
    canNotSeeOnAll(selector: string | Locator): this;
    canNotSeeOnAny(selector: string | Locator): this;
    canCount(value: number): this;
    repeat(func: (el: EvaElement) => void): void;
    private countInResultsByText;
    private countInResultsByLocator;
}
