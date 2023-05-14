import React, { Component, FormEvent, Fragment } from 'react';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';
import TypingStore from '@Stores/TypingStore';

@observer
export default class Typing extends Component {
    @resolve
    private declare readonly _typingStore: TypingStore;

    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        const value = String(formData.get('typing-input') || ''); // get by name
        this._typingStore.add(value);
        formElement.reset();
    }

    override render(): React.ReactNode {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input name="typing-input" />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {this._typingStore.symbols.map((symbol, _i) => (
                        <span key={_i}>{symbol}</span>
                    ))}
                </div>
            </Fragment>
        );
    }
}
