import React, { Component } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';

import TodoStore, { Todo } from '@Stores/TodoStore';

import classes from './todo-list.scss';

@observer
export default class TodoList extends Component {
    @resolve
    private declare readonly _todoStore: TodoStore;

    constructor(props: any) {
        super(props);
    }

    handleToggleTodo(t: Todo) {
        this._todoStore.toggle(t);
    }

    handleRemoveTodo = (t: Todo) => {
        this._todoStore.remove(t);
    };

    override render(): React.ReactNode {
        return (
            <ul className={classes.todoList}>
                {this._todoStore.list.map((t) => (
                    <li key={t.id}>
                        <label
                            htmlFor={String(t.id)}
                            className={classNames({
                                [classes.done]: t.isDone,
                            })}
                        >
                            {t.title}
                        </label>

                        <button
                            className={classNames({
                                [classes.remove]: true,
                                [classes.done]: t.isDone,
                            })}
                            onClick={() => this.handleRemoveTodo(t)}
                        >
                            remove
                        </button>

                        <button onClick={() => this.handleToggleTodo(t)}>
                            <input type="checkbox" id={String(t.id)} />
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}
