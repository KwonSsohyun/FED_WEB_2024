import { action, autorun, makeAutoObservable, observable, reaction, runInAction, when } from 'mobx';

class Counter {

    number: number;

    constructor() {
        this.number = 0;
        makeAutoObservable(this);

        // Object.bind('3');

        // ▶ autorun
        autorun(()=>{
            console.log(this.number);
        });


        // ▶ reaction
        reaction(()=>this.number, (value:number, prev:number)=>{
            console.log('현재 값 : ', value, '이전 값 : ', prev);   // 현재 값 :  2  이전 값 :  1
        })

        reaction(()=>this.number % 2 == 0, (value:boolean, prev:boolean)=>{
            console.log('현재 값 : ', value, '이전 값 : ', prev);   // 2증가누르면 안불림
        })


        // ▶ when
        when(()=>this.number % 2 == 0, ()=>{
            console.log(this.number);
        });

        // when(()=>this.number % 2 == 0);     // Promise
        // await when();
    }

    async delayChange(time:number, value:number) {
        const target:number = await new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(value);
            }, time * 1000);
        });
        runInAction(()=>{
            this.number = this.number / target;
        })
    }

    // @action
    increment(value: number){
        this.number += value;
    }

    decrement(value: number){
        this.number -= value;
    }

    get squre(){
        return this.number * this.number;
    }
}

export default Counter;