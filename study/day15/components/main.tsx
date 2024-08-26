import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        → 바둑판 1x1 만들기
        버튼 : X추가, Y추가, 모두 추가

    [📝출력]
        ● X추가 버튼 → 2x1, 3x1, ...
        ● Y추가 버튼 → 1x2, 1x3, ...
        ● 모두추가 버튼 → 2x2, 3x3, 4x4, ...

        감소 버튼도 추가 (X감소, Y감소, 모두감소)
        단, 감소 버튼은 최소 1보다 작아지지는 않도록

*/
// 🔑Code
import App from './app';

root.render(
    <App/>
);