import React from 'react';
import { useToggle, useImgSwitch, useHabitats } from '../hooks';

// ▶ 사과 정보 타입 정의
interface AppleInfo {
    name: string;
    img: string[];
    description: string;
    habitats: string[];
}

// ▶ 사과 데이터
const appleData: AppleInfo = {
    name: '사과',
    img: [
        'https://cdn.pixabay.com/photo/2015/05/07/12/16/apple-756386_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/07/21/09/04/apple-1532055_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/07/13/11/29/apples-3535566_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/10/10/14/55/apples-8306677_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/08/14/11/56/apples-1592588_960_720.jpg'
    ],
    description: '사과는 장미과의 열매로 맛이 좋고 영양가가 높습니다.',
    habitats: ['한국', '중국', '일본', '미국', '캐나다']
}

// ▶ 사과 컴포넌트
export default function App() {

    const { currentImage, switchImg } = useImgSwitch(appleData.img);
    const { isVisible, toggle } = useToggle(true);
    const { habitats, reduceHabitats } = useHabitats(appleData.habitats);

    return <div>
                <h2 onClick={reduceHabitats}>{appleData.name}</h2>
                <img
                    src={currentImage}
                    alt="사과"
                    style={{ width:'300px', cursor:'pointer' }}
                    onClick={switchImg}
                />
                {isVisible && (
                    <p onClick={toggle}>
                        {appleData.description}
                    </p>
                )}
                <ol>
                    {habitats.map((habitat, idx) => (
                        <li key={idx}>{habitat}</li>
                    ))}
                </ol>
            </div>
}