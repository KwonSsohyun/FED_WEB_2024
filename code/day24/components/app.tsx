import React from 'react';

export default function (){
    return <div>
        
        <a href='https://www.naver.com' className='hover:text-5xl'>네이버</a>

        <div className='portrait:bg-blue-900 bg-red w-96 h-96 sm:bg-blue-500 mobile:text-green-500'>텍스트</div>

        <div className='hover:text-blue-700 font-bold inline-block after:content-["원"] after:bg-red'>14,000</div>

        <div className='w-44 h-44'>
            <div className='hover:animate-pumping bg-pink-400 w-20 h-20'></div>
        </div>
        <div className='bg-red'>Red Color</div>
        <div className='bg-brand-color'>Brand Color</div>
    </div>
}