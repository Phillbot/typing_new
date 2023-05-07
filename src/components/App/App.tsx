import React, { Component, ReactNode } from 'react';

import classes from './app.scss';

type IProps = {};
type IState = {
    value: string;
};

export class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: '',
        };
    }

    private _onChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, value: e.target.value });
    }

    override render(): ReactNode {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this._onChange.bind(this)} />
                <p className={classes.first}>{this.state.value}</p>
            </div>
        );
    }
}
