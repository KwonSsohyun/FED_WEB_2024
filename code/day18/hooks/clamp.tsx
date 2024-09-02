import React, { useState, useCallback } from 'react';

// ▶ 클램프(Clamp) 훅
export default function hook(
        min: number | 'infinite' = 0,
        max: number | 'infinite' = 'infinite',
        now: number | 'min' | 'max' = 'min'
    ) {

       const [value, valueChanger] = useState(
            now == 'min' ? (min != 'infinite' ? min : (max != 'infinite' ? max-1 : 0))
                : (now == 'max' ? (max != 'infinite' ? max : (min != 'infinite' ? min+1 : 0))
                : (now))
        );


        const Update = useCallback((target: number) => {
            if( min!='infinite' && target<min ) valueChanger(min);
            else if( max!='infinite' && target>max ) valueChanger(max);
            else valueChanger(target);
        },[]);

        const Increment = useCallback((increment: number) => {
            if(max!= 'infinite' && (value+increment) > max) valueChanger(max);
            else valueChanger(value+increment);
        },[value]);

        const Decrement = useCallback((decrement: number) => {
            if(min!= 'infinite' && (value-decrement) < min) valueChanger(min);
            else valueChanger(value-decrement);
        },[value]);


        return {value, Update, Increment, Decrement};

}