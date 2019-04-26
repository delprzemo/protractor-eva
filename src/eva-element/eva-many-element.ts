import { ElementArrayFinder } from "protractor";
import { Locator } from "selenium-webdriver";
import { EvaOperation } from "../eva-common/eva-operations";
import { EvaElement } from "./eva-element";

export class EvaManyElement {
    constructor(private elementArrayFinder: ElementArrayFinder) { }

    public onSingle(index: number) {
        return new EvaElement(this.elementArrayFinder.get(index - 1));
    }

    public canSee(selector: string | Locator, times: number = 1) {
        if (EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then((result) => {
                expect(result).toBe(times);
            })
        } else {
            this.countInResultsByText(selector).then(result => {
                expect(result).toBe(times);
            });
        }
        return this;
    }

    public canSeeOnAll(selector: string | Locator) {
        if (EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then((result) => {
                expect(result).toBe(this.elementArrayFinder.count());
            })
        } else {
            this.countInResultsByText(selector).then(result => {
                expect(result).toBe(this.elementArrayFinder.count());
            });
        }
        return this;
    }

    public canSeeOnAny(selector: string | Locator) {
        if (EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then((result) => {
                expect(result).toBeGreaterThan(0);
            })
        } else {
            this.countInResultsByText(selector).then(result => {
                expect(result).toBeGreaterThan(0);
            });
        }

        return this;
    }

    public canNotSeeOnAll(selector: string | Locator) {
        if (EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then((result) => {
                expect(result).not.toBe(this.elementArrayFinder.count());
            })
        } else {
            this.countInResultsByText(selector).then(result => {
                expect(result).not.toBe(this.elementArrayFinder.count());
            });
        }

        return this;
    }

    public canNotSeeOnAny(selector: string | Locator) {
        if (EvaOperation.isSelector(selector)) {
            this.countInResultsByLocator(selector).then((result) => {
                expect(result).not.toBeGreaterThan(0);
            })
        } else {
            this.countInResultsByText(selector).then(result => {
                expect(result).not.toBeGreaterThan(0);
            });
        }

        return this;
    }

    public canCount(value: number) {
        expect(this.elementArrayFinder.count()).toBe(value);
        return this;
    }

    public repeat(func: (el: EvaElement) => void) {
        this.elementArrayFinder.each((el, index) => {
            func(new EvaElement(el));
        });
    }

    private countInResultsByText = (value: string) => {
        return this.elementArrayFinder.filter((element) => {
            return element.getText().then((text) => {
                return text.indexOf(value) > 0;
            });
        }).count();
    };

    private countInResultsByLocator = (locator: Locator) => {
        return this.elementArrayFinder.filter(item => item.all(locator).isPresent()).count();
    };


}