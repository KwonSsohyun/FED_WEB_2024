import { useState, useCallback } from 'react';

// ▶ 주어진 서식지 목록(habitats)에서 항목 수를 줄이는 기능
export function useHabitats(initialState: string[]) {
    const [habitats, setHabitats] = useState(initialState);

    const reduceHabitats = useCallback(()=>{
        // ● slice(0, -1) : 마지막 요소를 제외하고 모든 요소를 선택
        setHabitats(preHabitats => preHabitats.length > 2 ? preHabitats.slice(0,-1) : preHabitats);
    }, []);

    return { habitats, reduceHabitats };

}