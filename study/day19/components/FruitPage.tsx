import React from 'react';
import { useToggle, useHover } from '../hooks';

// ▶ 과일 정보 타입 정의
interface Fruit {
    name: string;       // 이름
    img: string;        // 이미지
    info: string;       // 정보
    habitats: string[]; // 자생지
}

// ▶ 과일 데이터
const fruits: Fruit[] = [
    {
        name: '사과',
        img: 'https://cdn.pixabay.com/photo/2015/05/07/12/16/apple-756386_1280.jpg',
        info: '쌍떡잎식물 장미목 장미과 낙엽교목 식물인 사과나무의 열매',
        habitats: ['한국', '중국', '일본']
    },
    {
        name: '바나나',
        img: 'https://cdn.pixabay.com/photo/2014/04/05/12/19/banana-316868_1280.jpg',
        info: '외떡잎식물 생강목 파초과 바나나속에 속하는 식물의 총칭',
        habitats: ['태국', '필리핀']
    },
    {
        name: '멜론',
        img: 'https://cdn.pixabay.com/photo/2014/04/02/16/25/melon-307252_1280.png',
        info: '멜론은 박과의 한해살이 덩굴식물',
        habitats: ['중국', '일본']
    },
];

export default function FruitPage({ fruitName }: {fruitName: string}) {
    const fruit = fruits.find( (fruit)=> fruit.name === fruitName );

    if(!fruit) {
        return <div>해당 과일 정보를 찾을 수 없습니다.</div>
    }

    return <div>
                <FruitItem fruit={fruit} />
            </div>
}


// ▶ 각 과일 컴포넌트
const FruitItem: React.FC<{ fruit: Fruit }> = ({ fruit }) => {
    const { isVisible, toggleVisible} = useToggle(true);
    const { isHover, handleMouseEnter, handleMouseLeave } = useHover();
    
    return <div>
                <h2 onClick={toggleVisible}>{fruit.name}</h2>
                { isVisible && (
                    <img src={fruit.img} alt={fruit.name} style={{width:'150px'}}/>
                )}
                <p 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                    style={{ fontWeight: isHover? 'bold' : 'normal' }}
                >
                    {fruit.info}
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>자생지</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fruit.habitats.map((habitat, idx) => (
                            <tr key={idx}>
                                <td>{habitat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr/>
            </div>
}