import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { fruits } from './fruitsData';

// -------------------------------------------------------------------------------
// ▶ 과일 목록 페이지 (FruitList)
//   과일 목록을 표시하고 페이징 처리를 포함합니다. 
//   각 과일을 클릭하면 해당 과일의 상세 페이지로 이동합니다.
// -------------------------------------------------------------------------------

// ▶ 페이지당 보여줄 과일 수
const ITEMS_PRE_PAGE = 5;

// -------------------------------------------------------------------------------
export default function FruitList() {
    console.log('과일 목록 페이지 (FruitList)');

    // ■ 페이지 이동을 위한 훅
    const navigate = useNavigate();

    // ■ URL에서 과일 이름을 가져옴
    //   http://localhost:9999/fruit/apple → 'apple'를 가져옴
    const { fruitName } = useParams<{ fruitName: string }>();

    // ■ URL의 쿼리 파라미터를 가져옴
    //   http://localhost:9999/fruit/apple?page=2 → 'page=2'를 가져옴
    const [searchParams] = useSearchParams();

    // ■ 현재 페이지 상태
    //   현재 페이지 번호를 저장하고 관리(초기값 1)
    const [currentPage, setCurrentPage] = useState(1);


    // ● URL 쿼리에서 페이지 번호를 읽어옴
    //   URL의 쿼리 파라미터에서 페이지 번호를 읽어와 currentPage 상태를 업데이트합니다. 
    //   쿼리 파라미터가 없으면 기본값 1로 설정합니다.
    useEffect(()=>{
        const page = searchParams.get('page');
        
        if(page) {
            setCurrentPage(parseInt(page)); // 페이지 번호를 정수로 변환
        } else {
            setCurrentPage(1);  // 페이지 번호가 없으면 1로 설정
        }
        
    }, [searchParams]);


    // ● 선택한 과일 이름에 맞는 과일 데이터를 필터링
    //   fruits 데이터 배열(fruitsData.ts)에서 
    //   현재 선택된 과일 이름에 맞는 과일들만 필터링합니다.
    const filteredFruits = fruits.filter(fruit => fruit.name === fruitName);
    console.log('Filtered Fruits:', filteredFruits);

    // ● 총 페이지 수 계산
    //   전체 과일이 13개이고 페이지당 5개를 표시하면, 13 / 5 = 2.6이 됩니다. 
    //   즉, 2페이지와 나머지 1페이지가 필요합니다.
    //   전체 페이지 수가 2.6일 때, Math.ceil()은 3으로 변환하여 페이지를 3페이지로 만듭니다.
    const totalPages = Math.ceil(filteredFruits.length / ITEMS_PRE_PAGE);

    // ● 페이지에 맞는 과일 데이터 추출
    //   현재 페이지 번호에 맞는 과일 데이터만 잘라서 보여줍니다. 
    //   예를 들어, 2페이지에서는 5번째부터 10번째까지의 과일을 보여줍니다.
    const currentFruits = filteredFruits.slice((currentPage-1)*ITEMS_PRE_PAGE, currentPage*ITEMS_PRE_PAGE);


    // ● 과일 상세 페이지로 이동
    //   특정 과일의 상세 페이지로 이동합니다. 
    //   이동할 때 현재 페이지 번호도 URL에 포함됩니다.
    const goToFruitDetail = (fruitId:string) => {
        navigate(`/${fruitName}/${fruitId}?page=${currentPage}`);  // 상세 페이지 이동
    };

    // ● 페이지 변경 핸들러
    //   페이지를 변경할 때 호출됩니다. 
    //   새 페이지 번호가 유효하면 페이지 상태를 업데이트하고 URL도 변경합니다.
    const handlePageChange = (newPage:number) => {
        if(newPage > 1 && newPage <= totalPages){
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
                    <li key={index} onClick={() => goToFruitDetail(String(fruit.id))}>
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
}