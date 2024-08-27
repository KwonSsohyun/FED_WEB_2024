import React, { useState } from 'react';

// ▶ 바둑판 컴포넌트 정의
//    → App 컴포넌트가 화면에 바둑판을 표시
export default function App(): JSX.Element {

    // ▶ 상태 관리
    //    → useState 훅을 사용하여 바둑판의 크기 관리 (초기값 1x1)
    const [xSize, setXSize] = useState(1);  // xSize: 바둑판의 열 수 (가로 크기)
    const [ySize, setYSize] = useState(1);  // ySize: 바둑판의 행 수 (세로 크기)


    // ▶ 버튼 클릭 핸들러
    //    → 바둑판의 열(xSize)와 행(ySize)의 크기를 조절하는 함수들
    const addX = ()=>{ setXSize(xSize + 1) };                   // X 추가
    const removeX = ()=>{ if(xSize>1) setXSize(xSize - 1) };    // X 감소 (최소 1 유지)

    const addY = ()=>{ setYSize(ySize + 1) };                   // Y 추가
    const removeY = ()=>{ if(ySize>1) setYSize(ySize - 1) };    // Y 감소 (최소 1 유지)

    const addBoth = ()=>{ addX(); addY(); };                    // X와 Y 모두 추가
    const removeBoth = ()=>{ removeX(); removeY(); };           // X와 Y 모두 감소 (최소 1 유지)


    // ▶ 렌더링
    return <>
        <h1>바둑판 만들기</h1>

        <div>
            <button onClick={addX}>X 추가</button>
            <button onClick={addY}>Y 추가</button>
            <button onClick={addBoth}>모두(X,Y) 추가</button>
            &emsp;
            <button onClick={removeX}>X 감소</button>
            <button onClick={removeY}>Y 감소</button>
            <button onClick={removeBoth}>모두(X,Y) 감소</button>
        </div>

        <br/>

        <div
                // ▶ 그리드 레이아웃 설정
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${xSize}, 50px)`,  // 열 가로(너비) - xSize만큼의 열을 각 50px 너비 설정
                    gridTemplateRows: `repeat(${ySize}, 50px)`      // 행 세로(높이) - ySize만큼의 행을 각 50px 높이 설정
                }}
        >
                {Array.from({ length: xSize * ySize }, (_, i) => (
                    // ▶ 총 셀 수만큼 셀을 생성
                    //    → 바둑판의 총 셀 수(xSize * ySize)만큼 반복하여 <div> 요소 생성
                    //      리액트는 배열을 JSX로 렌더링할 때, 배열의 껍데기인 대괄호 []는 보이지 않게 하고 배열의 각 요소만 화면에 표시
                    <div
                        key={i}
                        style={{
                            width: '50px',
                            height: '50px',
                            border: '1px solid black',
                            backgroundColor: 'pink'
                        }}
                    ></div>
                ))}
        </div>
    </>
}