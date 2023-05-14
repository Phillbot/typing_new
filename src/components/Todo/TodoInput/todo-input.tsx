import React, { Component, FormEvent } from 'react';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';
import TodoStore from '@Stores/TodoStore';

import styles from './todo-input.scss';

@observer
export default class TodoInput extends Component {
    @resolve
    private declare readonly _todoStore: TodoStore;

    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        const value = String(formData.get('todo-input') || ''); // get by name
        this._todoStore.add(value);
        formElement.reset();
    }

    override render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit} className={styles.todoInputGroup}>
                <input name="todo-input" placeholder="Add todo..." />
                <button type="submit">Add todo</button>
            </form>
        );
    }
}
