/*
import React from 'react';

const timezoneChange = (time: Date)=>{
    const timer = new Date(time);
    const Seoul = new Date(timer.getTime() + (timer.getTimezoneOffset() + 540) * 60 * 1000);

    return Seoul;
}

export default function (){
    return <div>
        {`${timezoneChange(new Date())}`}
        Hello
    </div>
}
*/


import React, { useState, useEffect } from 'react';

export default function (){

    const [time, timeC] = useState('');
    const [count, countC] = useState(0);
    const [menu, menuC] = useState([]);

    const [left, leftC] = useState(0);
    const [right, rightC] = useState(0);
    const [operator, operatorC] = useState('+');
    const [result, resultC] = useState(0);

    // @ts-ignore
    useEffect(async()=>{
        // @ts-ignore
        timeC(await fetch("http://192.168.100.20:5555/cloud/sohyun/timechange")
            .then(v=>v.text())
        );
        /*
        menuC(
            (await fetch("http://192.168.100.20:5555/cloud/sohyun/menulist")
            .then(v=>v.json())).datas
        )
        */  
        menuC(
            (await fetch("http://192.168.100.20:5555/cloud/sohyun/menulistfilter")
            .then(v=>v.json())).datas
        )
    },[]);

    return <div>
        <input onChange={e=>{
            //@ts-ignore
            leftC(parseInt(e.target.value));
        }}/>
        <input onChange={e=>{
            //@ts-ignore
            operatorC(e.target.value);
        }}/>
        <input onChange={e=>{
            //@ts-ignore
            rightC(parseInt(e.target.value));
        }}/>        
        <button onClick={async ()=>{
            const result = await fetch(`http://192.168.100.20:5555/cloud/sohyun/calculator?left=${left}&right=${right}&operator=${operator}`)
                .then(v=>v.json());
            resultC(result.result);
        }}>계산</button>
        <div>결과 : {result}</div>
        <div> </div>
        <div> </div>
        <ol>
            {
                menu.map((v,i)=>(<div key={i}>
                    <li>{v}</li>
                </div>))
            }
        </ol>

        {`${time}`}

        <button onClick={async ()=>{
            const result = 
                await fetch(`http://192.168.100.20:5555/cloud/sohyun/plus?data=${count}`)
                .then(v=>v.json());
                countC(result.message);
        }}>증가 버튼</button>
        <div>{count}</div>
        다른 서버 대체
    </div>
}