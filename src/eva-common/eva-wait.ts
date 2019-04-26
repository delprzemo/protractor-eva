import { browser, ExpectedConditions } from "protractor";
import { EvaOperation } from "./eva-operations";

export class EvaWait {
    public wait(miliseconds: number) {
        browser.sleep(miliseconds);
        return this;
    }

    public waitUntilSee(text: string) {
        browser.waitForAngularEnabled(false);
        browser.wait(ExpectedConditions.textToBePresentInElement(EvaOperation.getBody(), text), 10000,
            'Element taking too long to appear in the DOM');
        return this;
    }
}