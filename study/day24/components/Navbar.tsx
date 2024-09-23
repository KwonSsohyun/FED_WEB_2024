import React from 'react';
import { AiOutlineLeft , AiOutlineEllipsis } from "react-icons/ai";

// ▶ 상단 네비게이션 바
export default function Navbar() {
    return <div className='flex justify-between items-center px-3 py-3 text-2xl'>
        <AiOutlineLeft />
        <h1 className='font-bold'>sosohyun</h1>
        <AiOutlineEllipsis/>
    </div>
}