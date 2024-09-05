import React from "react";
import { BrowserRouter, Routes, Route, useParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery, useSearch } from '../hooks'

export default function (){
    const params = useParams();
    const location = useQuery();
    const nav = useNavigate();
    const {search, addPair} = useSearch({});

    return <>
        Board

        {search}

        <button onClick={()=>{
            addPair('A','5');
        }}>A추가</button>

        <button onClick={()=>{
            addPair('B','3');
        }}>B추가</button>

        {JSON.stringify(params)}
        {JSON.stringify(location)}

        <button onClick={()=>{
            nav(1)
        }}>버튼</button>
    </>
}