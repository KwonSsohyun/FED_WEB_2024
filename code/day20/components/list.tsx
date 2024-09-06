import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅
import { useQuery, useSearch } from '../hooks'; // 커스텀 훅들

// ▶ 1부터 100까지의 숫자를 담은 배열 생성
//   [1, 2, 3, ..., 100]
const datas = Array.from(Array(100), (_,i)=>i+1);

// ▶ List 컴포넌트 정의
export default function() {
    // ● URL을 변경하여 페이지를 이동하는데 사용
    const nav = useNavigate();

    // ● 현재 URL의 쿼리 파라미터를 가져옵니다.
    //   URL이 /list?page=1이라면, query.page는 1이 됩니다.
    const query = useQuery();
    // ● 쿼리 파라미터를 관리하고 업데이트하는 커스텀 훅입니다.
    const {search, addPair} = useSearch(query.page ? {page:query.page} : {});
    
    // ● 쿼리 파라미터에서 page 값을 가져오고, 없으면 0을 기본값으로 합니다.
    const page = query.page || 0;
    // ● 현재 페이지에 해당하는 10개의 데이터를 추출합니다.
    const pageData = datas.slice(page*10, (page+1)*10);

    useEffect(()=>{
        // ● URL을 현재 페이지 상태에 맞게 업데이트합니다.
        nav('/list' + search);
    }, [search]) // ● search 값이 변경될 때마다 실행됩니다.

    return <>
        {
            pageData.map((v,i)=>{
                return <div key={i} onClick={()=>{
                    nav('/data/' + v + search); // 예: /data/11?page=1
                }}>{v}</div>
            })
        }

        {
            page > 0 ?
                <button onClick={()=>{
                    addPair('page', page-1);
                }}>Prev</button>   
            : undefined         
        }

        <button onClick={()=>{
            addPair('page', page+1);
        }}>Next</button>
    </>
}