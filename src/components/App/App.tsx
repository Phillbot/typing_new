import React, { Component, ReactNode } from 'react';

import classes from './app.scss';
import TodoInput from './Todo/TodoInput/todo-input';
import TodoList from './Todo/TodoList/todo-list';

type IProps = {};
type IState = {
    todoVisiblyState: boolean;
};

export class App extends Component<IProps, IState> {
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
        console.log(this.state);
        return (
            <div className={classes.appContainer}>
                <TodoInput />

                <div className={classes.todoListWrapper}>
                    <h2 onClick={this.handleClick}>
                        <span>{this.state.todoVisiblyState ? '-' : '+'}</span>
                        Todos
                    </h2>
                </div>
                {this.state.todoVisiblyState && <TodoList />}
            </div>
        );
    }
}
