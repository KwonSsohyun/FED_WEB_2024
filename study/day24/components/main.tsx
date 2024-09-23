import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        인스타그램 피드 메인 페이지를 Tailwind CSS를 사용해 만들기

    [📝출력]
        인스타그램 피드 메인 페이지

*/
// 🔑Code
import App from './app';
import '../styles/tailwind.css';    // ▶ Tailwind CSS 전역 스타일 포함

root.render(
        <App/>
);