import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FruitList from './FruitList'; // 과일 목록 페이지
import NotFound from './NotFound';   // 404 페이지

export default function App() {
    return (
        <BrowserRouter basename='/fruit'>
            <Routes>
                <Route path="/" element={<FruitList />} />
                <Route path="*" element={<NotFound />} /> {/* 404 페이지 추가 */}
            </Routes>
        </BrowserRouter>
    );
}