import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { fruits } from './fruitsData';
import { useToggle, useHover } from '../hooks';

// -------------------------------------------------------------------------------
// ▶ 과일 상세 정보 페이지 (FruitPage)
// -------------------------------------------------------------------------------

export default function FruitPage() {
    console.log('과일 상세 정보 페이지 (FruitPage)');

    // ■ 페이지 이동을 위한 훅
    const navigate = useNavigate();

    // ■ URL에서 과일 이름, ID 가져옴
    const { fruitName, fruitId } = useParams<{ fruitName: string, fruitId: string }>();

    // ■ 이미지 보이기/숨기기 훅
    const { isVisible, toggleVisible} = useToggle(true);
    // ■ 마우스 오버 시 글씨 굵기 변경 훅
    const { isHover, handleMouseEnter, handleMouseLeave } = useHover();


    // ● `fruitId`가 undefined일 경우를 처리하기 위한 기본값 설정
    const id = fruitId ? parseInt(fruitId) : undefined;

    // ● URL의 fruitName과 fruitId에 맞는 과일 데이터를 찾기
    const fruit = fruits.find(fruit => fruit.name === fruitName && fruit.id === id);

    console.log('Fruit Name:', fruitName);
    console.log('Fruit ID:', fruitId);
    console.log('Fruit:', fruit);

    // ● URL 쿼리에서 페이지 번호를 가져오기
    const [searchParams] = useSearchParams();
    // ● 페이지 번호가 없으면, 기본값 1
    const page = searchParams.get('page') || 1;

    // ● 과일 정보를 찾을 수 없으면 에러 메시지 표시
    if(!fruit) {
        return <div>해당 과일 정보를 찾을 수 없습니다.</div>
    }

    return (
        <div>
            <h2 onClick={toggleVisible}>{fruit.name}</h2>
            {/* 이미지가 보이는 상태일 때만 렌더링 */}
            { isVisible && (
                <img src={fruit.img} alt={fruit.name} style={{width:'150px'}}/>
            )}
            {/* 마우스 오버 시 글씨 굵기 변경 */}
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
            {/* 목록 페이지로 돌아가기 버튼 */}
            <button onClick={() => navigate(`/${fruit.name}?page=${page}`)}>목록으로 돌아가기</button>
        </div>
    );
}