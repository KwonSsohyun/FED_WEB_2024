/*
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './index'
import Board from './board'
import User from './user'

export default function (){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}></Route>
                <Route path="/board/:number" element={<Board/>}></Route>
                <Route path="/user" element={<User/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
}
*/



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Data from './data';
import List from './list'

export default function() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path='/list' element={<List/>}></Route>
                <Route path='/data/:id' element={<Data/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
}