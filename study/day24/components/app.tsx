import React from 'react';
import Navbar from './Navbar';
import Feed from './Feed';

import { AiOutlineHome, AiOutlineSearch, AiOutlinePlusSquare, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

export default function App() {
    return <div>
        <Navbar/>
        <div>
            <Feed/>
        </div>
        <footer className='flex justify-center items-center px-7 py-5 text-3xl gap-96'>
            <AiOutlineHome/>
            <AiOutlineSearch/>
            <AiOutlinePlusSquare/>
            <AiOutlineHeart/>
            <AiOutlineUser/>
        </footer>
    </div>
}