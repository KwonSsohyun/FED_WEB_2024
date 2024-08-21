import React, {lazy, Suspense} from "react";

// ▶ 바둑판 컴포넌트를 동적으로 로드하는 컴포넌트
//   → useEffect.tsx 컴포넌트를 lazy()와 Suspense를 사용하여 동적으로 로드합니다.
//   → 처음에는 빈 상태로, 나중에 색상이 변경된 바둑판을 보여줍니다.
export default function UseState(): JSX.Element {

    // ● UseEffect 컴포넌트를 동적으로 로드
    //   → lazy()를 사용하여 코드 분할을 수행
    const UseEffect = lazy(() => import('./UseEffect'));

    return <>
        <div style={style.grid_container}>
            <Suspense>
                <UseEffect/>
            </Suspense>
        </div>
    </>
}

const style = {
    grid_container: {
        width: '500px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(5, 100px)'       
    }
}