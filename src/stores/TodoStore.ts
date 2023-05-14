import { injectable } from 'inversify';
import { action, autorun, makeObservable, observable } from 'mobx';
import 'reflect-metadata';

export type ITodoStore = {
    list: Todo[];
    add(title: string): void;
    toggle(todo: Todo): void;
    remove(todo: Todo): void;
};

export interface Todo {
    id: number;
    title: string;
    isDone: boolean;
}
@injectable()
export default class TodoStore implements ITodoStore {
    @observable
    list: Todo[] = [];

    constructor() {
        makeObservable(this);
        autorun(() => {
            console.log(this.list);
        });
    }

    @action
    add(title: string) {
        if (title.length < 3) {
            return;
        }

        this.list.push({
            id: Date.now(),
            title,
            isDone: false,
        });
    }

    @action
    toggle(todo: Todo) {
        todo.isDone = !todo.isDone;
    }

    @action
    remove(todo: Todo) {
        this.list = this.list.filter((t) => t.id !== todo.id);
    }
}
