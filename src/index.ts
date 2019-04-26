import { browser, element} from 'protractor';
import { ProtractorLocator } from 'protractor/built/locators';
import { Locator } from 'selenium-webdriver';
import { EvaOperation } from './eva-common/eva-operations';
import { EvaWait } from './eva-common/eva-wait';
import { EvaElement } from './eva-element/eva-element';
import { EvaManyElement } from './eva-element/eva-many-element';


export class Eva extends EvaWait {

    public isOn = (url: string) => browser.get(url);

    public on(selector: string | Locator | ProtractorLocator): EvaElement {
        const manyElements = EvaOperation.isSelector(selector) ?
            element(selector) :
            EvaOperation.getElementByCss(selector);
        return new EvaElement(manyElements);
    }

    public onMany(selector: string | Locator): EvaManyElement {
        const manyElements = EvaOperation.isSelector(selector) ?
            EvaOperation.getManyElementBySelector(selector) :
            EvaOperation.getManyElementByCss(selector);
        return new EvaManyElement(manyElements);
    }

    public pressKey(key: string) {
        EvaOperation.getBody().sendKeys(key);
    }

    public canSee(text: string) {
        expect(EvaOperation.getBody().getText()).toContain(text);
    }

    public canNotSee(text: string) {
        expect(EvaOperation.getBody().getText()).not.toContain(text);
    }
}
