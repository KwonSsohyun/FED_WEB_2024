import React, { useEffect, useState } from "react";

// ?page=1&username=thgus 같은 쿼리 문자열을 객체 형태로 변환합니다. 
// 예를 들어, { page: 1, username: 'thgus' } 형태가 됩니다.

export default function (def:{}){
    // ● 쿼리 파라미터를 객체 형태로 관리
    //   { page: 1, username: 'thgus' }
    const [obj, objChanger] = useState(def);

    // ● 쿼리 문자열을 관리
    //   "?page=1&username=thgus"
    const [search, searchChanger] = useState('');

    // ● 쿼리 파라미터를 추가하거나 업데이트하는 함수입니다.
    const addPair = (key:string, value:string|number) => { 
        let target = {...obj};      // 기존 객체를 복사
        //@ts-ignore
        target[key] = value;        // 새로운 키-값 쌍 추가 또는 기존 값 수정
        objChanger(target);         // 업데이트된 객체로 상태 변경
    };

    // ● 객체가 변경될 때마다 URL 검색 문자열을 업데이트합니다.
    //   { page: 1, username: 'thgus' }는 '?page=1&username=thgus'로 변환됩니다.
    useEffect(()=>{
        let result = '?'; // 쿼리 문자열을 시작하는 기호

        for(let key in obj){
            //@ts-ignore
            result += `${key}=${obj[key]}&`; // 객체의 각 키-값 쌍을 문자열로 변환
        }

        searchChanger(result.substring(0, result.length-1)); // 마지막 & 제거 후 상태 업데이트
    }, [obj]) // obj가 변경될 때마다 실행

    return {search, addPair};

}