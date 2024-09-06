import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// http://localhost:9999/board/0?username=thgus&age=20
// {"username":"thgus","age":20}

export default function hook(){
    // ● URL 정보 가져오기
    //   URL이 http://localhost:9999/board/0?username=thgus&age=20이라면, 
    //   urlData.search는 "?username=thgus&age=20"가 됩니다.
    const urlData = useLocation();

    // ● URL의 쿼리 파라미터를 확인하고, 없으면 빈 객체 반환
    if(!urlData.search || urlData.search == '?') return {};

    // ● 쿼리 문자열을 key=value 쌍의 배열로 변환
    //   urlData.search         : "?username=thgus&age=20"
    //   substring(1)           : "username=thgus&age=20"
    //   split('&')             : ["username=thgus", "age=20"]
    //   map(v => v.split("=")) : [["username", "thgus"], ["age", "20"]]
    const datas = urlData.search.substring(1).split('&').map(v=>v.split("="));

    // ● 배열을 순회하며 객체로 변환
    let result:any = {};

    // ⇒ datas 배열은 [["username", "thgus"], ["age", "20"]]와 같은 형태입니다.
    //   data[0]  : 쿼리의 키(key), "username","age"
    //   data[1]  : 쿼리의 값(value), "thgus","20"
    // ⇒ 1번째 반복 data = ["username", "thgus"] ⇒ data[0]: "username" data[1]: "thgus" ⇒ { "username": "thgus" }
    //   2번쨰 반복 data = ["age", "20"] ⇒ data[0]: "age" data[1]: "20" ⇒ { "username": "thgus", "age": 20 }
    for(let data of datas){
        result[data[0]] = 
            parseInt(data[1]) ? parseInt(data[1]) :
            (
                parseFloat(data[1]) ? parseFloat(data[1]) : result[data[0]] = data[1]
            )

    }

    // const [query, _] = useState(result);
    // return query;

    // { "username": "thgus", "age": 20 }
    return result;
}