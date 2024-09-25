import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        회원가입 페이지를 Chakra UI를 사용해 만들기

    [📝출력]
        회원가입 페이지

*/
// 🔑Code
import { ChakraProvider } from '@chakra-ui/react'; // ▶ Chakra UI 전역 스타일 포함
import App from './app';

root.render(
    <ChakraProvider>
        <App/>
    </ChakraProvider>
);