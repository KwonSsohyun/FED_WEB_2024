/* 
    [🔒1.문제]
        → 실행 명령어       : npm run finalCode

        ● 실행 파일         : index.js
        ● 수학 함수 파일    : math.js
        ● 출력 함수 파일    : output.js

    [📝출력]
        동작 : 5개의 숫자 중 가장 큰숫자와 작은 숫자 출력

*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ findNum 가져오기
import {findNum} from "./math.js";
// ▶ printResults 가져오기
import {printResults} from "./output.js";

// -----------------------------------------------------------------------
// ▶ 숫자 배열 정의
const arr = [3,9,6,8,2];

// -----------------------------------------------------------------------
// ▶ 최대값과 최소값 찾기
const result = findNum(arr);

// ▶ 결과 출력
printResults(result);

// 함수 내보내기 ▶ double.js
export function getResults() {
    return printResults(result);
}