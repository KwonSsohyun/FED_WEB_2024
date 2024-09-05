import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// http://localhost:9999/board/0?username=thgus&age=20
// {"username":"thgus","age":20}

export default function hook(){
    const urlData = useLocation();

    if(!urlData.search || urlData.search == '?') return {};

    // ?username=thgus&age=20   ▶ [["username", "thgus"], ["age", "20"]]
    const datas = urlData.search.substring(1).split('&').map(v=>v.split("="));

    let result:any = {};

    for(let data of datas){

        result[data[0]] = 
            parseInt(data[1]) ? parseInt(data[1]) :
            (
                parseFloat(data[1]) ? parseFloat(data[1]) : result[data[0]] = data[1]
            )

    }

    // const [query, _] = useState(result);
    // return query;
    return result;
}