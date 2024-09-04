import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        → 과일 정보를 표시하는 페이지

        ● 페이지    : 사과, 바나나, 멜론


    [📝출력]
        해당 경로 들어가면 각각 페이지 접속
        ● /fruit/apple      : 사과 페이지
        ● /fruit/banana     : 바나나 페이지
        ● /fruit/melon      : 멜론 페이지

*/
// 🔑Code
import App from './app';

root.render(
    <App/>
);