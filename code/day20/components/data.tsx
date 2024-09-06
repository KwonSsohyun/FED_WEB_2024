import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useSearch } from '../hooks';

export default function() {

    // ● URL을 변경하여 페이지를 이동하는 데 사용합니다.
    const nav = useNavigate();

    // ● 현재 URL의 쿼리 파라미터를 가져옵니다.
    const query = useQuery();

    // ● 쿼리 파라미터를 관리하고 업데이트하는 커스텀 훅입니다.
    const {search, addPair} = useSearch(query);
    
    // ● URL 경로에서 동적 파라미터(id)를 추출합니다.
    const {id} = useParams();

    return <>
        {
            id 
        }
        <button onClick={()=>{
            nav('/list' + search);
        }}>돌아가기</button>
    </>
}