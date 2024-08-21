import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        5x5 바둑판을 만들고 검/흰 번갈아가며 나오도록

    [📝출력]
        단, 검정색 부분은 처음에는 칸은 존재하는데 색깔은 안나오다 5초뒤 색이 나오게

*/
// 🔑Code
import UseState from './UseState';

root.render(
    <UseState/>
);