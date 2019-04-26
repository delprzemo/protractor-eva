import { ProtractorLocator } from 'protractor/built/locators';
import { Locator } from 'selenium-webdriver';
import { EvaWait } from './eva-common/eva-wait';
import { EvaElement } from './eva-element/eva-element';
import { EvaManyElement } from './eva-element/eva-many-element';
export declare class Eva extends EvaWait {
    isOn: (url: string) => import("selenium-webdriver").promise.Promise<any>;
    on(selector: string | Locator | ProtractorLocator): EvaElement;
    onMany(selector: string | Locator): EvaManyElement;
    pressKey(key: string): void;
    canSee(text: string): void;
    canNotSee(text: string): void;
}
