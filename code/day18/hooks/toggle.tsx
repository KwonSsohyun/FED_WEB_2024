import React, { useState, useCallback } from 'react';

// ▶ 토글(Toggle) 훅
export default function hook(def: boolean = false) {

    const [value, valueChanger] = useState(def);

    const Toggle = ()=>{ valueChanger(!value); };

    const On = useCallback(()=> valueChanger(true),[]);
    const Off = useCallback(()=> valueChanger(false),[]);

    return {value, Toggle, On, Off}

}