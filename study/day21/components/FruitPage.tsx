import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import { observer, inject } from 'mobx-react';
import { FruitStore } from '../stores';         // MobX 스토어 FruitStore 타입 가져옴

import { useToggle, useHover } from '../hooks';

// -------------------------------------------------------------------------------
// ▶ 과일 상세 정보 페이지 (FruitPage)
//   선택한 과일의 상세 정보를 표시하는 페이지입니다.
//   과일의 이름, 이미지, 설명, 자생지를 보여줍니다.
// -------------------------------------------------------------------------------

// ▶ Props 타입 정의 : fruitStore 스토어를 선택적으로 받을 수 있음
interface Props {
    fruitStore?: FruitStore;
}

// -------------------------------------------------------------------------------
export default inject('fruitStore')(observer(({ fruitStore }: Props) => {

    // ■ 페이지 이동을 위한 훅
    const navigate = useNavigate();

    // ■ URL에서 과일 이름, ID 가져옴
    //   http://localhost:9999/fruit/apple/1 → 'apple'과 '1' 추출
    const { fruitName, fruitId } = useParams<{ fruitName: string, fruitId: string }>();

    // ■ 이미지 보이기/숨기기 훅
    const { isVisible, toggleVisible} = useToggle(true);
    // ■ 마우스 오버 시 글씨 굵기 변경 훅
    const { isHover, handleMouseEnter, handleMouseLeave } = useHover();


    // ● `fruitId`가 undefined일 경우를 처리하기 위한 기본값 설정
    const id = fruitId ? parseInt(fruitId) : undefined;

    // ● URL의 fruitName과 fruitId에 맞는 과일 데이터를 찾기
    //   fruitStore에서 fruitName으로 과일 목록을 필터링 후, id로 찾기
    const fruit = fruitStore?.getFruitByName(fruitName as string).find(fruit => fruit.id === id);

    console.log('Fruit Name:', fruitName);
    console.log('Fruit ID:', fruitId);
    console.log('Fruit:', fruit);

    // ● URL 쿼리에서 페이지 번호를 가져오기
    //   쿼리 파라미터에서 페이지 번호를 추출
    const [searchParams] = useSearchParams();

    // ● 페이지 번호가 없으면, 기본값 1 설정
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
            <button onClick={() => navigate(`/${fruitName}?page=${page}`)}>목록으로 돌아가기</button>
        </div>
    );
}));