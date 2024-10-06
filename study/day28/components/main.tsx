import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        10명 정도의 학생이 각각 수학, 영어, 국어 점수를 가지고 있다.

    [📝출력]
        학생들의 각 과목 학습 정도를 파악하고
        우수한 학생과 평균 학습도를 파악하기 위한 차트

*/
// 🔑Code
import App from './app';

root.render(
    <App/>
);