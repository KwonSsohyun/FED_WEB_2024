import React, {lazy, Suspense} from "react";

/*
    1. lazy함수는 Promise리턴타입
    2. new Promise 객체 생성

    3. "blue.tsx" 내보내는 형식 - React.FC<{ style: React.CSSProperties }>
        → style이라는 prop을 받는 React 함수형 컴포넌트

    4. Promise객체 리턴타입 명시
        new Promise<{ default: React.FC<{ style: React.CSSProperties }> }>
        → Promise 객체를 생성할 때, 제네릭 타입 매개변수로 리턴 타입 명시
*/
const LazyTag = lazy(() =>
    new Promise<{ default: React.FC<{ style: React.CSSProperties }> }> ((resolve) => {
            setTimeout(() => {
                resolve(import('./blue'));
            }, 3000);
    })
);

export default function() {
    return <>
        <div style={{...style, backgroundColor:"red"}}></div>

        <Suspense fallback={<div style={style}></div>}>
            <LazyTag style={{...style, backgroundColor:"blue"}}/>
        </Suspense>
        
        <div style={{...style, backgroundColor:"green"}}></div>
        <div style={{...style, backgroundColor:"purple"}}></div>
    </>
}


// 사각형 4개 출력
const style = {
    width: 100, height: 100, display: 'inline-block'
}