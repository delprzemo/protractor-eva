import { by, ElementFinder } from "protractor";
import { By, Locator } from "selenium-webdriver";
import { EvaOperation } from "../eva-common/eva-operations";
import { EvaWait } from "../eva-common/eva-wait";
import { EvaAttribute } from "./eva-attribute";
import { EvaManyElement } from "./eva-many-element";

export class EvaElement extends EvaWait {
    constructor(private elementFinder: ElementFinder = EvaOperation.getBody()) {
        super();
     }
    
    public on(selector: string | Locator) {
        if (EvaOperation.isSelector(selector)) {
            return new EvaElement(this.elementFinder.element(selector));
        } else {
            return new EvaElement(this.elementFinder.element(By.css(selector)));
        }
    }

    public onAttribute(attrName: string) {
        return new EvaAttribute(this.elementFinder.getAttribute(attrName));
    }

    public canSee(text: string) {
        expect(this.elementFinder.getText()).toContain(text);
        return this;
    }

    public canNotSee(text: string) {
        expect(this.elementFinder.getText()).not.toContain(text);
        return this;
    }

    public click() {
        this.elementFinder.click();
        return this;
    }

    public type(value: string) {
        this.elementFinder.sendKeys(value);
        return this;
    }

    public pressKey(key: string) {
        this.elementFinder.sendKeys(key);
        return this;
    }

    public onMany(selector: string | Locator): EvaManyElement {
        const manyElements = EvaOperation.isSelector(selector) ?
            this.elementFinder.all(selector) :
            this.elementFinder.all(by.css(selector));
        return new EvaManyElement(manyElements);
    }
}
