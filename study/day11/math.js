/* 
    [🔒1.문제]
        ● 수학 함수 파일  : math.js
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ 최대값과 최소값 찾기
function findNum(arr){
    let findValue = [];
    findValue.push(Math.max(...arr));
    findValue.push(Math.min(...arr));
    return findValue;
}

// ▶ findNum 함수 외부로 내보내기
export {findNum};