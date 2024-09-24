import React from 'react';
import Post from './Post';

// ▶ 피드 컴포넌트
const images = [
    // 추가 이미지 URL
    'https://cdn.pixabay.com/photo/2024/09/06/13/11/beach-9027513_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/12/05/19/36/hellebore-7637542_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/02/13/19/02/poster-8571685_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/11/27/21/15/bird-8416208_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/09/21/00/21/ai-generated-9062656_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/09/16/20/14/ai-generated-8257503_1280.jpg',
];

export default function Feed() {
    // Feed는 images 배열에 있는 각 URL에 대해 Post 컴포넌트를 만듭니다.
    // map 함수를 사용해서 각 이미지 URL을 Post에 imageUrl prop으로 전달
    return <div className='grid grid-cols-3 gap-2'>
        {images.map((img, idx) => (
            <Post key={idx} imageUrl={img} />
        ))}
    </div>
}