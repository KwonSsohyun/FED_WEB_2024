import React from 'react';
/*
    props 방식으로 외부에서 컴포넌트 태그 내부로 전달할 때는
    key=value 형식으로 전달하고 받아서 이용할때는
    interface 받아서 처리한다.
*/
interface Results{
    count: number;
}

export default function(props:Results): JSX.Element{

    // ▶ 매개변수로 받아온 숫자만큼 배열화면 추가
    function ArrayDiv(count:number):JSX.Element[] {
        let results: JSX.Element[] = [];

        for(let i=0; i<count; i+=1){
            results.push(<div>{i}</div>);
        }
        return results;
    }

    return <div>
        {ArrayDiv(props.count)}
    </div>
};