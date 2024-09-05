import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useSearch } from '../hooks';

export default function() {

    const nav = useNavigate();
    const query = useQuery();
    const {search, addPair} = useSearch(query);
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