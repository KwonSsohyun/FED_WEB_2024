import React from 'react';

import Navbar from '../components/common/Navbar';
import '../styles/globals.css'; // 전역 스타일 임포트

export default function MyApp({ Component, pageProps }) {
    return <>
        <Navbar/>
        <Component {...pageProps} />
    </>
}