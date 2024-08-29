import React, { useState, useEffect, useCallback, useMemo, useRef, useDeferredValue, useTransition } from "react";

// ▶ useEffect
/*
export default function () {

    const [number, changer] = useState(0);
    const [state, statechanger] = useState('zero');

    useEffect(()=>{
        if(number == 0) statechanger('zero');
        else if(number < 0) statechanger('minus');
        else statechanger('plue');

        return ()=>{
            console.log('최종적으로 컴포넌트가 삭제될때만 불리는 함수');
        }

    },[number]);

    return <>
        <button onClick={()=>changer(number+1)}>증가</button>
        <button onClick={()=>changer(number-1)}>감소</button>
        <br/>
        {number}<br/>
        {state}
    </>
}
*/




// ▶ useMemo, useCallback
/*
export default function () {

    const [isMemo, isMemochanger] = useState(true);
    const [number, numberchanger] = useState(5);


    // ▶ useMemo
    const isUseMemo = useMemo(()=>{
        return number;
    },[isMemo]);
    
    // ▶ useCallback
    const memoChanger = useCallback(
        ()=>isMemochanger(!isMemo)
    ,[]);


    return <div onClick={()=>numberchanger(number + 1)}>
        <div onClick={(e)=>{e.target}}></div>

        hello<br/>
        {number}<br/>
        {isUseMemo}<br/>

        <button onClick={()=>isMemochanger(!isMemo)}>클릭</button>
        <button onClick={memoChanger}>클릭</button>
    </div>
}
*/




// ▶ useRef
/*
export default function () {

    const ref = useRef(null);

    return <div>
        <input onChange={(e)=>{
            if(ref.current){
                //@ts-ignore
                ref.current.innerText = e.currentTarget.value;
            }
        }}/>
        <div ref={ref}>텍스트</div>
    </div>
}
*/




// ▶ useDeferredValue, useTransition
export default function () {

    const [a, ac] = useState(0);
    const [b, bc] = useState(1);
    const [c, cc] = useState(2);

    // ▶ useDeferredValue
    // const d = useDeferredValue(a);
    // console.log({a},{b},{c},{d});

    // ▶ useTransition
    const [isPendding, startWith] = useTransition();

    console.log(isPendding, {a},{b},{c});

    return <div onClick={()=>{
        startWith(()=>{
            ac(a + 1);
        })
        // ac(a + 1);
        bc(b + 1);
        cc(c + 1);
    }}>
        {/* {d}{b}{c} */}

        {a}{b}{c}
    </div>
}