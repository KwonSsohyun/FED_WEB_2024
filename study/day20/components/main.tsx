import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        과일 3개 페이지를 보는 리스트 페이지를 만들고
        해당 리스트 페이지에서 과일 이름을 누르면

    [📝출력]
        과일 페이지로 이동하는 과일 게시판

*/
// 🔑Code
import App from './app';

root.render(
    <App/>
);