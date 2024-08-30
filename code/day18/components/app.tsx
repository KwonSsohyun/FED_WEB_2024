import React, { useState, useReducer } from "react";

// ▶ 사용자 정의 훅(Custom Hook) 등장배경
/*
export default function () {

    useReducer((now, action) => {
        return now;
    }, 0);

    const [value, valueChanger] = useState({
        target: 0
    });

    const update = (action:any) => {
        if(action.type == 'increment') valueChanger({...value, target: value.target + action.value});
        else if(action.type == 'decrement') valueChanger({...value, target: value.target - action.value});
    }

    return <>
        <button onClick={()=>update({type:'increment', value:2})}>증가</button>
        <button onClick={()=>update({type:'decrement', value:2})}>감소</button>
        <div>{value.target}</div>
    </>
}
*/




// ▶▶▶ 사용자 정의 훅(Custom Hook)
import { useToggle, useClamp } from '../hook';


// ▶ 토글(Toggle) 훅
/*
export default function () {

    const { value, Toggle, On:valueOn } = useToggle(true);

    return <div>
                <button onClick={Toggle}>버튼</button>
                <div style={{
                    display: value? 'block' : 'none',
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'red',
                    textAlign: 'center'
                }}>화면</div>
            </div>
}
*/



// ▶ 클램프(Clamp) 훅
/*
export default function () {

    const {value, Increment, Decrement} = useClamp(0, 100);

    return <div>
                <button onClick={()=>Increment(3)}>증가</button>
                <button onClick={()=>Decrement(4)}>감소</button>
                <div>{value}</div>
            </div>
}
*/



// ▶ 디테일(Details) 훅 
import { useDetails } from '../hook';

export default function () {

    const Details = useDetails('div');

    return <div>
                <Details style={{
                    width: '200px',
                    height: '300px',
                    paddingTop: '50px',
                    backgroundColor: 'yellow'    
                }}>얘가 children이다.</Details>
            </div>
}