// ▶ 클라이언트에서 시간을 변환하는 간단한 컴포넌트
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



// ▶ ☁️서버리스 함수와 💻리액트 애플리케이션 간의 통신을 처리
//    → fetch를 사용해 서버리스에 등록된 함수를 호출하고,
//      그 결과값을 받아와 리액트 컴포넌트의 상태를 업데이트
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
        // ● 서버로부터 현재 시간 가져오기
        timeC(await fetch("http://192.168.100.20:5555/cloud/sohyun/timechange")
            .then(v=>v.text())
        );
        /*
        // ● 서버로부터 메뉴 목록 가져오기
        menuC(
            (await fetch("http://192.168.100.20:5555/cloud/sohyun/menulist")
            .then(v=>v.json())).datas
        )
        */ 
        // ● 서버로부터 필터링된 메뉴 목록 가져오기
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