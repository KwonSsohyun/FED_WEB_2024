import React from 'react';
import { appWithTranslation } from 'next-i18next'; // 다국어 지원 기능을 추가하는 함수 가져오기

// ▶ MyApp 컴포넌트 정의
//   Component : 현재 렌더링할 페이지의 컴포넌트
//   pageProps : 현재 페이지에 전달된 속성(props)
function MyApp({ Component, pageProps }) {
    // ● 현재 페이지의 컴포넌트를 렌더링하고, 전달된 속성(props)을 모두 전달
    return <Component {...pageProps} />
}

// ▶ MyApp을 다국어 지원으로 감싸서 내보냄
export default appWithTranslation(MyApp);