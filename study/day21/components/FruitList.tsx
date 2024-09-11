import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { observer, inject } from 'mobx-react';
import { FruitStore } from '../stores'; // MobX 스토어 FruitStore 타입 가져옴

// -------------------------------------------------------------------------------
// ▶ 과일 목록 페이지 (FruitList)
//   과일 목록을 표시하고 페이징 처리를 포함합니다. 
//   각 과일을 클릭하면 해당 과일의 상세 페이지로 이동합니다.
// -------------------------------------------------------------------------------

// ▶ 페이지당 보여줄 과일 수
const ITEMS_PER_PAGE = 5;

// ▶ Props 타입 정의 : fruitStore 스토어를 선택적으로 받을 수 있음
interface Props {
    fruitStore?: FruitStore;
}

// -------------------------------------------------------------------------------
const FruitList = inject('fruitStore')(observer(({ fruitStore }: Props) => {

    // ■ 페이지 이동을 위한 훅
    const navigate = useNavigate();

    // ■ URL에서 과일 이름을 가져옴
    //   http://localhost:9999/fruit/apple → 'apple'추출
    const { fruitName } = useParams<{ fruitName: string }>();

    // ■ URL의 쿼리 파라미터에서 페이지 번호를 가져옴
    //   http://localhost:9999/fruit/apple?page=2 → 'page=2'추출
    const [searchParams] = useSearchParams();

    // ■ 현재 페이지 상태
    //   현재 페이지 번호를 저장하고 관리(초기값 1)
    const [currentPage, setCurrentPage] = useState(1);


    // ● 선택한 과일 이름에 맞는 과일 데이터를 필터링
    //   fruitStore 스토어의 getFruitByName 메서드 사용
    //   fruitStore가 null이나 undefined일 경우 기본값으로 빈 배열 []을 사용
    const filteredFruits = fruitStore?.getFruitByName(fruitName as string) || [];
    console.log('Filtered Fruits:', filteredFruits);

    // ● 과일 정보를 찾을 수 없으면 에러 메시지 표시
    if(!filteredFruits.length) {
        return <div>해당 과일 정보를 찾을 수 없습니다.</div>
    }


    // ● 총 페이지 수 계산
    //   전체 과일 수 / 페이지당 과일 수 = 전체 페이지 수
    const totalPages = Math.ceil(filteredFruits.length / ITEMS_PER_PAGE);

    // ● 현재 페이지에 맞는 과일 데이터 추출
    //   ex. 2페이지에서는 5번째부터 10번째까지의 과일 표시
    const currentFruits = filteredFruits.slice((currentPage-1)*ITEMS_PER_PAGE, currentPage*ITEMS_PER_PAGE);


    // ● URL 쿼리에서 페이지 번호를 읽어옴
    //   페이지 번호가 유효하면 상태와 URL 업데이트
    useEffect(()=>{
        const page = searchParams.get('page');
        const pageNum = page ? parseInt(page) : 0;
        
        if(pageNum > 0 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        } else {
            setCurrentPage(1);  // 페이지 번호가 없으면 1로 설정
        }
        
    }, [searchParams, totalPages]);


    // ● 과일 상세 페이지로 이동
    //   현재 페이지 번호를 URL에 포함하여 상세 페이지로 이동
    const goToFruitDetail = (fruitId:number) => {
        navigate(`/${fruitName}/${fruitId}?page=${currentPage}`);  // 상세 페이지 이동
    };

    // ● 페이지 변경 핸들러
    //   유효한 페이지 번호로 상태와 URL을 업데이트
    const handlePageChange = (newPage:number) => {
        if(newPage >= 1 && newPage <= totalPages){
            setCurrentPage(newPage);                    // 페이지 상태 업데이트
            navigate(`/${fruitName}?page=${newPage}`);  // 페이지 번호가 포함된 URL로 이동
        }
    };

    return (
        <div>
            <h2>{fruitName} 게시판 🍎🍌🍈</h2>
            <ul>
                {/* 현재 페이지의 과일 목록을 렌더링 */}
                {currentFruits.map((fruit, index) => (
                    <li key={index} onClick={() => goToFruitDetail(fruit.id)}>
                        <img src={fruit.img} alt={fruit.name} style={{ width: '50px', marginRight: '10px' }} />
                        {fruit.name}{fruit.id}
                    </li>
                ))}
            </ul>

            <div>
                {/* 페이지 변경 버튼 */}
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    이전
                </button>

                <span>페이지 {currentPage} / {totalPages}</span>

                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    다음
                </button>
            </div>
        </div>
    );
}));

// ▶ FruitList 컴포넌트 내보내기
export default FruitList;