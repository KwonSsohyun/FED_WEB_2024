import React, { MouseEventHandler, useState, useEffect, useCallback, useContext } from "react";

/*
export default function (): JSX.Element {

    let func:MouseEventHandler<HTMLDivElement> = (e) =>{

        // ▶ Event객체가 가지고 있는 대표적인 예
        //    해당 이벤트가 발생한 순간의 마우스 좌표
        //    해당 이벤트가 발생한 대상 태그
        console.log(e.clientX, e.clientY);
        console.log('First');

        console.log(e.target);          // 실제로 클릭한 요소
        console.log(e.currentTarget);   // 이벤트 등록한 요소

        // ▶ 리액트에만 있는 Event속성
        console.log(e.nativeEvent);
        console.log(e.stopPropagation);

        e.currentTarget.innerText = "Hello";
    }

    return <>
        <div onClick={func} onMouseEnter={func}>First</div>
        <div onClick={(e)=>{}}>Second</div>
    </>
}
*/



/*
export default function (): JSX.Element {

    let [value, Changer] = useState<number>(0);

    return <div onClick={()=>{ Changer(value+=1);}}>
                {
                    value==0? "Hello" : "Bye"
                }
            </div>
}
*/


/*
export default function () {

    let [list, listChanger] = useState<JSX.Element[]>([]);

    return <div>
                <button onClick={(e) => {
                    listChanger([...list, <div key={list.length}>내용</div>])
                }}>추가</button>
                <ol>
                    {list}
                </ol>
            </div>
}
*/



// TodoList
import Todo from './todo';

export default function () {

    let [todoList, todoListChanger] = useState<{index:number, title:string}[]>([]);

    return <div>
        <button onClick={(e) => {
            todoListChanger([...todoList, {index: todoList.length, title:"제목"}]);
        }}>추가
        </button>
        <ol>
        {
            todoList.map((value, index) => <li key={index}><Todo todo={value}/></li>)
        }
        </ol>

        {/* <Todo todo={{index: 0, title: "내용"}}/> */}
    </div>
}