import React from 'react';
import token from './app.module.css';  // 3. 컴포넌트 방식

export default function (){
    return <div>
        <div className={token.bg1}>SubApp A</div>
        <div className='bg2'>SubApp B</div>
    </div>
}