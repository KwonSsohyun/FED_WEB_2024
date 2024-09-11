import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        과일 데이터(사과, 바나나, 멜론) 
        MobX 스토어 상태관리

    [📝출력]
        과일 게시판

*/
// 🔑Code
import App from './app';

import { Provider } from 'mobx-react';
import { stores } from '../stores'; // MobX 스토어 인스턴스 가져옴

root.render(
    <Provider {...stores}>  {/* 스프레드 문법으로 모든 스토어를 Provider로 제공 */}
        <App/>
    </Provider>
);