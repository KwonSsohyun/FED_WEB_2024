import { makeAutoObservable, observable } from 'mobx';

// observable(['값']);

class Counter {

    number: number;

    constructor() {
        this.number = 0;
        makeAutoObservable(this);
    }

    increment(value: number){
        this.number += value;
        console.log(this.number);
    }

    decrement(value: number){
        this.number -= value;
        console.log(this.number);
    }
}

export default Counter;