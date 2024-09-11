import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import FruitList from './FruitList'; // 과일 목록 페이지
import FruitPage from './FruitPage'; // 과일 상세 페이지
import NotFound from './NotFound';   // 404 페이지


export default function App() {
    return <BrowserRouter basename='/fruit'>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<div>과일을 선택하세요 🍎🍌🍈</div>} />

                        {/* 특정 과일의 "목록" 페이지 (예: /apple, /banana) */}
                        <Route path=':fruitName' element={<FruitList/>} />

                        {/* 특정 과일의 "상세" 페이지 (예: /apple/1, /banana/5) */}
                        <Route path=':fruitName/:fruitId' element={<FruitPage />} />
                    </Route>
                    <Route path='*' element={ <NotFound/> } />
                </Routes>
            </BrowserRouter>
}


// ▶ 공통 레이아웃 컴포넌트
const Layout = ()=>{

    const navigate = useNavigate();
    // 클릭된 과일에 해당하는 페이지로 이동
    const handleNavigation = (fruit: string) => {
        navigate(`/${fruit}`);
    };

    return <div>
                <h1>과일 정보 페이지</h1>
                <button onClick={() => handleNavigation('')}>🏠 홈</button>
                <button onClick={() => handleNavigation('apple')}>🍎 사과</button>
                <button onClick={() => handleNavigation('banana')}>🍌 바나나</button>
                <button onClick={() => handleNavigation('melon')}>🍈 멜론</button>
                <Outlet/>   {/* 자식 라우트가 렌더링되는 위치 */}
            </div>
}