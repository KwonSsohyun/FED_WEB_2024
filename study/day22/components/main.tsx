import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        과일 데이터(사과, 바나나, 멜론)

        ● MobX 스토어 상태관리
          - runInAction 통한 상태 안전 업데이트
            : runInAction을 사용하여 상태 변경을 안전하게 관리

          - reaction 상태 값 변경 시 콜백 실행
            : reaction을 사용하여 currentPage 값 변경을 감지하고, 
              변경될 때마다 지정된 콜백 함수 실행

    [📝출력]
        1페이지 ➡️ 사과 10개
        2페이지 ➡️ 바나나 10개
        3페이지 ➡️ 멜론 10개
        4페이지 ➡️ 각각 과일 사과 4개, 바나나 4개, 멜론 2개

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