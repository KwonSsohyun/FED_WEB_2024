import React, { useState, useEffect } from "react";

// ▶ 바둑판을 구현하는 컴포넌트
//   → 컴포넌트가 처음 렌더링될 때만 5초 후 색상 변경
export default function UseEffect(): JSX.Element {

    // ● 상태 변수 colors를 초기화
    //   → 25개의 칸이 모두 흰색으로 채워진 배열
    //   → setColors 함수 - colors의 색상 배열을 새 배열로 업데이트하여 화면의 색상이 변경
    const [colors, setColors] = useState<string[]>(Array(25).fill('white'));

    // ● useEffect 훅을 사용하여 특정 작업을 수행
    //   → 빈 배열([])을 두 번째 인수로 제공하면 컴포넌트가 처음 렌더링될 때만 실행
    //   → 5초 후에 색상이 변경되도록 설정
    useEffect(() => {
        // ● const timer = setTimeout(() => { ... }, 5000);
        //   → 5초 후 색상 배열 업데이트
        const timer = setTimeout(() => {
            // ● 색상을 번갈아가며 설정
            //   → 홀수 인덱스 'black', 짝수 인덱스 'white'로 설정
            const updatedColors = colors.map((_, idx) => 
                idx % 2 === 0 ? 'white' : 'black'
            );

            // ● colors 상태를 새로운 값인 updatedColors로 업데이트
            //    → 업데이트된 색상 배열로 컴포넌트를 다시 렌더링
            setColors(updatedColors);
        }, 5000);

        // ● 컴포넌트가 화면에서 사라질 때 타이머 정리
        //    → 메모리 누수 방지
        return () => clearTimeout(timer);

    }, []); // ● 빈 배열([]): 컴포넌트가 처음 렌더링될 때만 useEffect 실행
    // [colors]); // ● colors가 변경될 때마다 useEffect 내부의 코드가 다시 실행


    return <>
        {
            colors.map((color, idx) => (
                <div key={idx} style={{...style.grid_item, backgroundColor:color}}></div>
            ))
        }
    </>
}

const style = {
    grid_item: {
        width: '100px',
        height: '100px',
        backgroundColor: 'white',
        border: '1px solid black'
    }
}