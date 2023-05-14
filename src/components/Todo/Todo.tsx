import React, { Component, Fragment, ReactNode } from 'react';
import { resolve } from 'inversify-react';
import { observer } from 'mobx-react';

import TodoStore from '@Stores/TodoStore';

import TodoInput from './TodoInput/todo-input';
import TodoList from './TodoList/todo-list';

import styles from './todo.scss';

type IProps = {};
type IState = {
    todoVisiblyState: boolean;
};

const symbols = {
    plus: '+',
    minus: '-',
};

@observer
export class Todo extends Component<IProps, IState> {
    @resolve
    private declare readonly _todoStore: TodoStore;

    constructor(props: IProps) {
        super(props);
        this.state = {
            todoVisiblyState: true,
        };
    }

    private handleClick = () => {
        this.setState({ todoVisiblyState: !this.state.todoVisiblyState });
    };

    override render(): ReactNode {
        const symbol = this.state.todoVisiblyState ? symbols.minus : symbols.plus;

        return (
            <Fragment>
                <TodoInput />
                {this._todoStore.list.length > 0 && (
                    <div className={styles.todoListWrapper}>
                        <h2 onClick={this.handleClick}>
                            <span>{symbol}</span>
                            Todos
                        </h2>
                    </div>
                )}
                {this.state.todoVisiblyState && <TodoList />}
            </Fragment>
        );
    }
}
