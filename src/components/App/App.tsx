import React, { Component, ReactNode } from 'react';
import { Container } from 'inversify';
import { Provider } from 'inversify-react';

import { Todo } from '@Components/Todo/Todo';
import Typing from '@Components/Typing/Typing';
import TypingStore from '@Stores/TypingStore';
import TodoStore from '@Stores/TodoStore';

import styles from './app.scss';

export default class App extends Component {
    private readonly container = new Container({ defaultScope: 'Singleton' });

    constructor(props: any) {
        super(props);
        this.container.bind(TodoStore).toSelf();
        this.container.bind(TypingStore).toSelf();
    }

    override render(): ReactNode {
        return (
            <div className={styles.appContainer}>
                <Provider container={this.container}>
                    <Todo />
                    <Typing />
                </Provider>
            </div>
        );
    }
}
