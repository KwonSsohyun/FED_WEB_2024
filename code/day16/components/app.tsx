// ▶ 과제 실행
/*
import Exam from './exam';

export default function () {
    return <Exam></Exam>
}
*/



import React, { useState, useReducer, useContext } from 'react';



// ▶ useRecuder
/*
// 자료형 정의
interface actionProps {
    type: 'increment' | 'decrement',
    value: number
}

export default function () {

    function _change_action_(now: number, action: actionProps): number {
        if(action.type == 'increment') return now + action.value;   // 값 증가
        if(action.type == 'decrement') return now - action.value;   // 값 감소
        return now;
    }

    const [value, changer] = useReducer(_change_action_, 0);


    return <div>
                <button onClick={()=>{
                    changer({ type: 'increment', value:2 })
                }}>클릭</button>
                {value}
            </div>
}
*/



/*
interface actionProps {
    target: 'x' | 'y',
    type: 'increment' | 'decrement',
    value: number
}

interface xy {
    x: number,
    y: number
}

export default function () {

    function _action_(now: xy, action: actionProps): xy {
        if(action.target == 'x'){
            if(action.type == 'increment') return{ x:now.x + action.value, y:now.y };
            if(action.type == 'decrement') return{ x:now.x - action.value, y:now.y };
        }
        if(action.target == 'y'){
            if(action.type == 'increment') return{ x:now.x, y:now.y + action.value };
            if(action.type == 'decrement') return{ x:now.x, y:now.y - action.value };
        }
        return now;
    }

    const [v, changer] = useReducer(_action_, {x:0, y:0});

    return <div>
        <button onClick={()=>changer({target:'x', type:'increment', value:4})}>클릭</button>
        <br/>{v.x} {"     "}{v.y}
    </div>
}
*/





// ▶ useContext
import List from './list';
// import Context from './context';
import { Provider } from './context';

export default function () {

    const [theme, themeChanger] = useState('dart');

    // 전역방식 사용 (useContext)
    // const contextValue = useContext(Context);

    return <Provider>
                <div onClick={()=>themeChanger(theme == 'dark' ? 'light' : 'dark')}>
                <List datas={[1,2,3]} 
                        listStyle={
                            {
                                backgroundColor: theme == 'dark' ? 'black' : 'white',
                                color: theme == 'light' ? 'black' : 'white'
                            }
                        }
                        itemStyle={
                            {
                                backgroundColor: theme == 'dark' ? 'black' : 'white',
                                color: theme == 'light' ? 'black' : 'white'
                            }
                }/>
            </div>
    </Provider>
}