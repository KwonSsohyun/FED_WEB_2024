/* 
    [🔒문제]
        두개의 변수에 숫자와 문자열을 넣고 두개가 동일한지 비교

    [📝출력]
        동일하면 "동일", 다르면 "비동일" 출력
*/
// 🔑Code
let var1: number = 3;
let str1: any = "3"
console.log(var1 === str1 ? "동일" : "비동일");


/* 
    [🔒문제]
        세개의 변수에 숫자를 넣고 가장 큰 수를 출력
*/
// 🔑Code
let num1: number = 23;
let num2: number = 20;
let num3: number = 80;
let data: number;
console.log((data=(num1>num2 ? num1 : num2))>num3 ? data : num3 );


/* 
    [🔒문제]
        두개의 변수에 문자열을 넣고 두 문자열을 연결해서 출력

    [📝출력]
        문자열이 비어있으면 "Empty", 비어있지 않으면 들어있는 문자열
*/
// 🔑Code
let txt01: string = "텍스트";
let txt02: string = "";
console.log((txt01 && txt02) ? txt01+txt02 : (txt01||"Empty")+(txt02||"Empty"));


/* 
    [🔒문제]
        세개의 변수에 숫자 2개와 문자열을 넣고 아래 조건에 맞는지 출력

    [📝출력]
        조건에 맞으면 "동일", 다르면 "비동일" 출력
        문자열은 A,B,C 증 한개 인지
        숫자는 1~10 사이의 숫자 인지
*/
// 🔑Code
let msg1: number = 10;
let msg2: number = 222;
let msg3: string = "F";
let msg3Valid = (msg3=="A" || msg3=="B" || msg3=="C");

console.log(msg1>=1 && msg1<=10 ? "동일" : "비동일");
console.log(msg2>=1 && msg2<=10 ? "동일" : "비동일");
console.log(msg3Valid ? "동일" : "비동일");