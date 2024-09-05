import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useSearch } from '../hooks';

const datas = Array.from(Array(100), (_,i)=>i+1);

export default function() {

    const nav = useNavigate();

    const query = useQuery();
    const {search, addPair} = useSearch(query.page ? {page:query.page} : {});
    
    const page = query.page || 0;
    const pageData = datas.slice(page*10, (page+1)*10);

    useEffect(()=>{
        nav('/list' + search);
    }, [search])

    return <>
        {
            pageData.map((v,i)=>{
                return <div key={i} onClick={()=>{
                    nav('/data/' + v + search);
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