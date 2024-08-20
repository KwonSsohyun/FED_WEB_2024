import React, {lazy, Suspense} from "react";


const LazyTag = lazy(()=>{
    return Promise.all([
        import('./blue'),
        new Promise(resolve=>setTimeout(resolve, 5000))
        ]).then(([moduleExports])=>moduleExports);
});


export default function() {
    return <>
        <div style={{...style, backgroundColor:"red"}}></div>

        <Suspense fallback={<div style={style}></div>}>
            <LazyTag style={{...style, backgroundColor:"blue"}}></LazyTag>
        </Suspense>
        
        <div style={{...style, backgroundColor:"green"}}></div>
        <div style={{...style, backgroundColor:"purple"}}></div>
    </>
}


// 사각형 4개 출력
const style: any = {
    width: 100, height: 100, display: 'inline-block'
}