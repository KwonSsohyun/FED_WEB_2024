import React from 'react';

// ▶ 각 이미지 포스트
interface PostProps {
    imageUrl: string;
}

export default function Post({ imageUrl }: PostProps) {
    return <div className='relative aspect-square bg-gray-500'>
        <img src={imageUrl}  className='w-full h-full object-cover'/>
    </div>
}