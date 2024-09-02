import { useState, useCallback } from 'react';

// ▶ 이미지를 변경하는 커스텀 훅(useImageSwitcher)
//   → 이미지를 배열로 받아서, 이미지를 클릭할 때마다 다음 이미지로 변경
export function useImgSwitch(imgs: string[]) {
    const [imgIdx, setImgIdx] = useState(0);                    // 현재 이미지 인덱스를 관리하는 상태

    const switchImg = useCallback(()=>{
        setImgIdx(prevIndex => (prevIndex + 1) % imgs.length);  // 이미지를 순환하여 변경하는 함수
    }, [imgs.length]);

    // ▶ return 문에서 currentImage와 switchImg를 반환하는 객체를 정의합니다.
    return { 
        currentImage: imgs[imgIdx],  // currentImage는 imgs[imgIdx]의 값을 나타냅니다.
        switchImg                    // 이미지를 변경하는 함수도 반환합니다.
    };

}