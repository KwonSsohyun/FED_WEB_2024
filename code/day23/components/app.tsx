/*
import React from 'react';
import Subapp from './subapp';

// import './app.css';                  // 1. 전역 방식
import token from './app.module.css';   // 3. 컴포넌트 방식
import styles from 'styled-components'; // 4. 스타일 컴포넌트 방식

interface Props {
    font? :string;
}

const DivTag = styles.div<Props>`
    background-color: pink;
    font-size:${(props) => props.font == 'medium' ? '15px' : '20px'};
`;

export default function (){
    return <div>
        <DivTag font='medium'>Styles A</DivTag>
        <DivTag font='large'>Styles B</DivTag>
        <DivTag>Styles C</DivTag>

        <div className={token.bg1}>A</div>
        <div className={token.bg2}>B</div>
        <Subapp/>
    </div>
}
*/


// ▶ 테일윈드 방식(Tailwind CSS)
import React from 'react';

export default function (){
    return <div>
        <div className='text-lg bg-red-700 inline-block w-[100px] h-96'>Hello 1</div>
        <div className='text-xl bg-blue-500'>Hello 2</div>
    </div>
}