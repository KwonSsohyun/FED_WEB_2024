import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink } from 'react-router-dom';

export default function (){
    return <div>
        <BrowserRouter basename="/app">
            <Routes>
                <Route path="/" element={<div>기본 경로</div>}/>
                <Route path="/index" caseSensitive element={<div>인덱스 경로</div>}/>
                <Route path="/two/test?" 
                    element={<div></div>}
                    errorElement={<div>에러</div>}
                />
                <Route path="/board" element={
                    <>
                        <header>헤더</header>
                        <Outlet/>
                        <Link to="write" relative='route' preventScrollReset>작성</Link>
                        <NavLink to="read" style={({isActive, isPending, isTransitioning})=>{
                            return {};
                        }}>읽기</NavLink>
                        <footer>푸터</footer>
                    </>
                }>
                    <Route path="write" element={<div>Write</div>}/>
                    <Route path="read" element={<div>Read</div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
}