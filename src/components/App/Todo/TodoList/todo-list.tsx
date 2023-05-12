import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Todo, todoStore } from '../../../../stores/TodoStore';

import classes from './todo-list.scss';
import classNames from 'classnames';

@observer
export default class TodoList extends Component {
    constructor(props: any) {
        super(props);
    }

    handleToggleTodo(t: Todo) {
        todoStore.toggle(t);
    }

    handleRemoveTodo = (t: Todo) => {
        todoStore.remove(t);
    };

    override render(): React.ReactNode {
        return (
            <ul className={classes.todoList}>
                {todoStore.list.map((t) => (
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
