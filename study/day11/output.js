/* 
    [🔒1.문제]
        ● 출력 함수 파일  : output.js
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ 결과 출력
function printResults(result){
    const [max, min] = result;
    console.log(`최대값 : ${max}   최소값 : ${min}`);
}

// ▶ printResults 함수 외부로 내보내기
export {printResults};