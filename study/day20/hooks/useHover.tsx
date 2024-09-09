import { useState, useCallback } from 'react';

export function useHover() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = useCallback(()=> setIsHover(true), []);
    const handleMouseLeave = useCallback(()=> setIsHover(false), []);

    return { isHover, handleMouseEnter, handleMouseLeave };
}