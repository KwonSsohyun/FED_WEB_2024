/* 
    [🔒2.문제]
        → 실행 명령어       : npm run useCode

        ● 실행 파일         : start.js
        ● 유저 정보 파일    : user.js
        ● 비교 함수 파일    : compare.js
        ● 출력 함수 파일    : out.js

    [📝출력]
        동작 : 유저 5명의 나이 중 가장 큰 나이를 가진 유저 출력

*/
// 🔑Code
// -----------------------------------------------------------------------
import {users} from "./user.js";
import {findOldAge} from "./compare.js";
import {printUser} from "./out.js";

const oldUser = findOldAge(users);
printUser(oldUser);

// 함수 내보내기 ▶ double.js
export function getprintUser(){
    return printUser(oldUser);
}