/*
import React, { useEffect, useState } from 'react';

export default function() {

    const [value, valueChanger] = useState(0);
    const [value2, value2Changer] = useState(2);

    console.log('test');

    useEffect(()=>{
        valueChanger(1);
        value2Changer(1);
    },[]);

    return <div>
        <button onClick={()=>{
            valueChanger(value + 1);
            value2Changer(value2 + 1);            
        }}>A</button>
        {value}
    </div>
}
*/



/*
import React, { useEffect, useState } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import store from '../mobx';

interface Props {
    counter?: typeof store.counter;
}

const Application = inject('counter')(observer((props: Props)=>{

    const [v, c] = useState(0);

    return <div>
        <button onClick={()=>props.counter?.delayChange(2, 2)}>딜레이 갱신</button>
        <button onClick={()=>c(v+1)}>갱신</button>
        <button onClick={async ()=>props.counter?.increment(1)}>증가</button>
        <button onClick={async ()=>props.counter?.increment(2)}>2증가</button>
        <div>{props.counter?.number}</div>
        <div>{props.counter?.squre}</div>
    </div>
}));

export default function (){
    return <Provider {...store}>
        <Application/>
    </Provider>
}
*/



import React, { useEffect, useState } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import store from '../mobx';

interface Props {
    page?: typeof store.page;
}

const Application = inject('page')(observer((props: Props)=>{

    return <div>
        {
            props.page?.pageData.map((v, i)=><div key={i}>{v}</div>)
        }
        <button onClick={()=>props.page?.prevPage()}>Prev</button>
        <button onClick={()=>props.page?.nextPage()}>Next</button>
    </div>
}));

export default function (){
    return <Provider {...store}>
        <Application/>
    </Provider>
}