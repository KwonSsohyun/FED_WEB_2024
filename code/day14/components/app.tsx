import React, {StrictMode, Fragment, Suspense, Profiler, lazy} from "react";

function ProfilerDetect(
    id: string,             // 성능감지 값을 구별하기 위한 식별자 (Profiler id="StrictModeTest")
    phase: "mount" | "update" | "nested-update", // 상황을 구별하는 값 (mount설치 | update변화 | nested-update 나를 제외한 업데이트)
    actualDuration: number, // 실제 렌더링 걸리는 시간 (/ms)
    baseDuration: number,   // 예상 렌더링 걸리는 시간 (/ms)
    startTime: number,      // 렌더링 시작 시간 (/ms)
    commitTime: number      // 렌더링 끝 시간 (/ms)
){
    console.log(`id : ${id} 
        phase : ${phase}
        actualDuration : ${actualDuration}
        baseDuration : ${baseDuration}
        startTime : ${startTime}
        commitTime : ${commitTime}
        commitTime - startTime : ${commitTime - startTime}
        `
    );
}


const LazyTag = lazy(()=>{
    return Promise.all([
        import('./test'),
        new Promise(resolve=>setTimeout(resolve, 5000))
        ]).then(([moduleExports])=>moduleExports);
});


function StrictModeTest(): JSX.Element {
    // console.log(123);

    let numbers: number[] = [1,2,3,4,5];

    return <Fragment key="123">

        <Suspense fallback={<div>대체</div>}>
            <LazyTag/>
        </Suspense>

        <Profiler id="StrictModeTest" onRender={ProfilerDetect}>
            {
                numbers.map((value,index)=>
                    <Fragment key={index}>
                        <div>안녕</div>
                        <div key={index}>{value}</div>
                    </Fragment>
                )
            }
        </Profiler>
    </Fragment>
}


export default function (): JSX.Element {

    return <>
        <StrictMode>
            <StrictModeTest/>
        </StrictMode>
    </>
}