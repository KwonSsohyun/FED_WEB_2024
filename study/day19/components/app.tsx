import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import FruitPage from './FruitPage';    // 과일 정보를 보여주는 컴포넌트
import NotFound from './NotFound';      // 404 페이지


export default function App() {
    return <BrowserRouter basename='/fruit'> {/* 모든 경로는 '/fruit'을 기준으로 설정됨 */}
                <Routes>
                    {/* '/fruit'을 기준으로 하여 라우트를 정의 */}
                    <Route path='/' element={<Layout/>}> {/* Layout 컴포넌트를 렌더링 */}
                        <Route index element={<div>과일을 선택하세요 🍎🍌🍈</div>} />        {/* 기본 페이지, '/fruit' */}
                        <Route path='apple' element={ <FruitPage fruitName='사과'/> } />        {/* '/fruit/apple' */}
                        <Route path='banana' element={ <FruitPage fruitName='바나나'/> } />     {/* '/fruit/banana' */}
                        <Route path='melon' element={ <FruitPage fruitName='멜론'/> } />        {/* '/fruit/melon' */}
                    </Route>
                    <Route path='*' element={ <NotFound/> } />  {/* 정의되지 않은 모든 경로에 대해 404 페이지 렌더링 */}
                </Routes>
            </BrowserRouter>
}


// ▶ 공통 레이아웃 컴포넌트
const Layout = ()=>{

    // ● 페이지 내비게이션을 위한 훅
    const navigate = useNavigate();

    // ● 버튼 클릭 시 해당 과일 페이지로 이동하는 함수
    const handleNavigation = (fruit:string) => {
        navigate(`/${fruit}`);  // '/apple', '/banana', '/melon' 또는 '/'로 이동
    }

    return <div>
                {/* 공통 레이아웃 */}
                <h1>과일 정보 페이지</h1>

                {/* 각 과일 페이지로 이동하는 버튼들 */}
                <button onClick={ () => handleNavigation('') }>🏠 홈</button>   {/* '/'으로 이동 */} 
                <button onClick={ () => handleNavigation('apple') }>🍎사과</button>
                <button onClick={ () => handleNavigation('banana') }>🍌바나나</button>
                <button onClick={ () => handleNavigation('melon') }>🍈멜론</button>

                <Outlet/>   {/* 자식 라우트를 렌더링할 위치 */}
            </div>
}