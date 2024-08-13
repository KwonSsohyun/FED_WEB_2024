// ▶ 리액트 실행 코드
import React from "react";  // 나 리액트 쓸거야. → 무조건 상단에 있어야함
import reactDOM from 'react-dom/client';

const reactRoot = document.querySelector("div#reactRoot");

// ▶ 리액트 붙히는 작업
reactDOM
    .createRoot(reactRoot as HTMLElement)   // ● 붙힐 위치 → .createRoot()
    .render(                                // ● 붙힐 내용 → .render()
        <div>
            <h1>아무거나 적는 내용</h1>
            <h2>두번째 적는 내용</h2>
        </div>
    );