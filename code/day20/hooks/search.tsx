import React, { useEffect, useState } from "react";

export default function (def:{}){
    const [obj, objChanger] = useState(def);
    const [search, searchChanger] = useState('');

    const addPair = (key:string, value:string|number) => {
        let target = {...obj};
        //@ts-ignore
        target[key] = value;
        objChanger(target);
    };

    useEffect(()=>{
        let result = '?';

        for(let key in obj){
            //@ts-ignore
            result += `${key}=${obj[key]}&`;
        }

        searchChanger(result.substring(0, result.length-1));
    }, [obj])

    return {search, addPair};

}