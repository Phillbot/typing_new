import React, { Component, FormEvent } from 'react';
import { observer } from 'mobx-react';
import classes from './todo-input.scss';
import { todoStore } from '../../../../stores/TodoStore';

@observer
export default class TodoInput extends Component {
    constructor(props: any) {
        super(props);
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        const value = String(formData.get('todo-input') || ''); // get by name

        todoStore.add(value);
        formElement.reset();
    }

    handle() {
        console.log(todoStore.lists);
    }

    override render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit} className={classes.todoInputGroup}>
                <input name="todo-input" placeholder="Add todo..." />
                <button type="submit">Add todo</button>
                <button onClick={this.handle}>123123</button>
            </form>
        );
    }
}
