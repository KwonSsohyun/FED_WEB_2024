import { useState, useCallback } from 'react';

export function useToggle(initialState: boolean = true) {
    const [isVisible, setIsVisible] = useState(initialState);

    const toggle = useCallback(()=>{
        setIsVisible(state => !state)
    },[]);

    return { isVisible, toggle };
}