import React from 'react';
import stores from '../mobx';
import { inject, observer, Provider } from 'mobx-react';

interface Props {
    counter?: typeof stores.counter;
}

function LowComponent(props: Props) {

    const counter = props.counter;

    return <div>
        <button onClick={()=>counter?.increment(1)}>증가</button>
        <button onClick={()=>counter?.decrement(1)}>감소</button>
        아래 컴포넌트
        <div>{counter?.number}</div>
    </div>
}


const Observer = inject('counter')(observer(LowComponent));


export default function() {
    return <div>
        <Provider {...stores}> {/* 자동으로 key:value 형태로 주입 → count={stores.counter} */}
        {/* <Provider count={stores.counter}> */}
            <Observer/>
        </Provider>
    </div>
}