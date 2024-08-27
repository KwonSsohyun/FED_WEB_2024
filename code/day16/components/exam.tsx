import React, { useState } from 'react';

/* 
    [🔒문제]
        → 바둑판 1x1 만들기
        버튼 : X추가, Y추가, 모두 추가

    [📝출력]
        ● X추가 버튼 → 2x1, 3x1, ...
        ● Y추가 버튼 → 1x2, 1x3, ...
        ● 모두추가 버튼 → 2x2, 3x3, 4x4, ...

        감소 버튼도 추가 (X감소, Y감소, 모두감소)
        단, 감소 버튼은 최소 1보다 작아지지는 않도록

*/
// 🔑Code
export default function () {

    const [value, ValueChanger] = useState([1,1]);

    const X = (target: number)=>{
        if(value[0] + target < 1) return;
        ValueChanger([value[0] + target, value[1]]);
    }

    const Y = (target: number)=>{
        if(value[1] + target < 1) return;
        ValueChanger([value[0], value[1] + target]);
    }

    const Both = (target: number)=>{
        if(value[1] + target < 1 || value[0] + target < 1) return;
        ValueChanger([value[0] + target, value[1] + target]);
    }

    let arrays: any[] = Array.from({length: value[0] * value[1]}).map((v,index)=>index);


    return <div>
                <button onClick={()=>X(1)}>X 증가</button>
                <button onClick={()=>Y(1)}>Y 증가</button>
                <button onClick={()=>Both(1)}>양쪽 증가</button>

                <button onClick={()=>X(-1)}>X 감소</button>
                <button onClick={()=>Y(-1)}>Y 감소</button>
                <button onClick={()=>Both(-1)}>양쪽 감소</button>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${value[0]}, 1fr)`,
                    width: '500px',
                    height: '500px'
                }}>
                        {
                            arrays.map((v,index)=><div key={index} style={{
                                border: '1px solid black'
                            }}>{v}</div>)
                        }
                </div>
            </div>
}   