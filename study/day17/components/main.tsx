import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        → 사과 정보를 표시하는 페이지

        ● 표시내용    : 사과 이미지, 사과 이름, 사과 설명, 사과 서식지(ol) 5개
                
    [📝출력]
        동작
        - 이름 클릭 시 서식지 개수 줄어듬(최소 2개)
        - 설명 클릭 시 설명이 사라짐
        - 이미지 클릭 시 이미지 변경(3장이 번갈아가면서 변경)

        이때 훅을 최소 5개 이상(종류는 상관 없음) 사용하며 페이지 제작

*/
// 🔑Code
import App from './app';

root.render(
    <App/>
);