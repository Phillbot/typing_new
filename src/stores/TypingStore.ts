import { injectable } from 'inversify';
import { action, autorun, makeObservable, observable } from 'mobx';
import 'reflect-metadata';

@injectable()
export default class TypingStore {
    @observable
    symbols: Array<string> = [];

    constructor() {
        makeObservable(this);
        autorun(() => {
            console.log(this.symbols);
        });
    }

    @action
    add(symbol: string) {
        const symbolsArray = [...symbol.split(''), ...this.symbols];
        this.symbols = symbolsArray;
    }
}
