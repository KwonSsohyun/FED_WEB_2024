import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import FruitPage from './FruitPage';
import NotFound from './NotFound';



export default function App() {
    return <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<div>과일을 선택하세요 🍎🍌🍈</div>} />
                        <Route path='apple' element={ <FruitPage fruitName='사과'/> } />
                        <Route path='banana' element={ <FruitPage fruitName='바나나'/> } />
                        <Route path='melon' element={ <FruitPage fruitName='멜론'/> } />
                    </Route>
                    <Route path='*' element={ <NotFound/> } />  {/* 404 페이지 */}
                </Routes>
            </BrowserRouter>
}

const Layout = ()=>{
    return <div>
                {/* 공통 레이아웃 */}
                <h1>과일 정보 페이지</h1>
                <Outlet/>   {/* 자식 라우트를 렌더링할 위치 */}
            </div>
}