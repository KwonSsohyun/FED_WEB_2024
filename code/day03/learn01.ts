// ▶ 연산자
/*
    변수(데이터)를 연산하는 방법
    가지고 있는 정보를 특별한 방법으로 가공하는 방법을 연산
    연산을 하기 위한 특수문자(글자) 연산자
    console.log(1+2);

    연산자를 어떻게 배우는가?
    연산자는 매우 단순하다
    정보(피연산자), 연산자를 적으면 연산은 컴퓨터가 알아서 해주기 때문에 끝이난다.

    ▶ 연산자의 카테고리
       - 단항 연산자
         항이 1개이고 연산자가 존재 → 연산자 항
         
       - 이항 연산자
         항이 2개이고 연산자가 존재 → 항 연산자 항

       - 삼항 연산자
         항이 3개이고 연산자가 존재 → 항 연산자 항 연산자 항
*/

// ▶ 이항 연산자
// - 이항 산술 연산자
//   사칙연산 수학적인 기능을 하는 연산자 → 산술 연산자
let a:number = 3, b: number = 4;
console.log(a + b);   // 덧셈
console.log(a - b);   // 뺄셈
console.log(a * b);   // 곱셈
console.log(a / b);   // 나눗셈
console.log(a % b);   // 나머지 - 앞에 있는 숫자를 뒤에있는 숫자로 나눴을때 더 이상 나누지 못 할때의 나머지
console.log(a ** b);  // 제곱 - 앞에 있는 숫자를 뒤에있는 숫자만큼 반복적으로 곱해라

// 문자열 이어서 작성
let firstName: string="권", lastName: string="소현";
console.log(firstName + lastName); // 문자열에 한해서만 더하기가 가능하다.


// - 대입 연산자
//   왼쪽에 변수, 오른쪽에 피연산자(항 = 정보 or 변수)이 온다면
//   오른쪽에 있는 정보를 왼쪽에 저장하는 연산
let a1: number = 4;

// ※ 주의사항
//    일반적으로 연산자 우선순위들이 존재할 때 
//    그 중 가장 마지막이 대입 연산자
let a2: number = 3+4;
let a3: number = 3, b3:number, c3:number;
c3 = b3 = a3;
console.log(a3,b3,c3); // 3,3,3
// 대입 연산자만 반대로 "오른쪽 → 왼쪽"


// - 축약 연산자(단축 연산자)
//   대입 연산자를 이용할 때 변수이름을 두 번씩 적는 것이 귀찮고 용량이 넘친다.
let a4: number = 3;
a4 += 1;
// a4++;
console.log(a4);


// - 관계 연산자
//   산술연산자와 대입연산자를 이용해서 원하는 정보를 저장
//   사용자가 가지고 있는 정보를 비교하기 위한 연산자 → 관계 연산자
//   부등호
console.log(2 < 3);     // 3이 2보다 커? → true
console.log(2 > 3);     // 2가 3보다 커? → false
console.log(2 >= 3);    // 2가 3보다 크거가 같아? → false
console.log(2 <= 3);    // 2가 3보다 작거가 같아? → true

let a5: number = 2, b5:number = 3;
console.log(a5 == b5);    // a와 b가 동일한가? → false
console.log(a5 != b5);    // a와 b가 다른가? → true

// 연산자는 자료형이 틀리면 연산이 안된다.
// 자료형이 틀리면 아예 연산이 안되지만 any같이 자료형을 추측할 수 없다면 통과할 수도 있다.
let a6: number = 3, b6:any = "3";
console.log(a6 == b6);      // true
// 자료형이 틀리면 연산이 안되는것이 아닌 false를 나오도록하는 관계 연산자
// 안전한 비교 연산자
console.log(a6 === b6);     // 자료의 형태(자료형)마저 동일해야 동일한 값 → false
console.log(a6 !== b6);


// - 논리 연산자
//   2개의 질문을 올바르게 연결하기 위해서
//   논리값을 연결하는 연산자 → 논리 연산자
//   논리값을 연결 → true, false
//   Truthy한 값, Truthy하지 못한 값
//   ● 숫자 → 0  (Not Thuthy)                그외 (Truthy)
//   ● 문장 → "" (Not Thuthy)                그외 (Truthy)
//   ● 논리 → false (Not Thuthy)             true (Truthy)
//   ● 그외 → undefined, null (Not Thuthy)   그외 (Truthy)

//   AND(그리고, &&), OR(또는, ||)
//   양쪽이 맞을때만 Truthy한 값을 돌려주는 연산자
console.log( 2>3 && 3>4 );  // 양쪽 다 틀릴 때      → false
console.log( 2>3 && 3<4 );  // 왼쪽만 틀릴 때       → false
console.log( 2<3 && 3>4 );  // 오른쪽만 틀릴 때     → false
console.log( 2<3 && 3<4 );  // 양쪽 다 맞을 때      → true

//   양쪽 중 한쪽이라도 맞으면 Truthy한 값을 돌려주는 연산자
console.log( 2>3 || 3>4 );  // 양쪽 다 틀릴 때      → false
console.log( 2>3 || 3<4 );  // 왼쪽만 틀릴 때       → true
console.log( 2<3 || 3>4 );  // 오른쪽만 틀릴 때     → true
console.log( 2<3 || 3<4 );  // 양쪽 다 맞을 때      → true

let a7: number = 3, b7: number = 0;
// && 연산자는 왼쪽과 오른쪽이 Truthy하다 라는 느낌이 아니라
// && 왼쪽이 Truthy하면 오른쪽값 선택, 아니면 왼쪽값 선택
console.log(a7 && b7);      // 0
// || 왼쪽이 Truthy하면 왼쪽값 선택, 아니면 오른쪽값 선택
console.log(a7 || b7);      // 3

let a8: number | undefined = 3;
let b8: number = a || 0;
console.log(b8);    // 3

// 비어있는 경우만 골라서 처리하고 싶은 경우
console.log("" || 3);   // 3

// 아주 특별한 논리 연산자 → 빈공간 연산자(Nullish Coalscing)
console.log(undefined ?? 3);    // 왼쪽에 undefined나 null이 온다면 오른쪽 아니라면 왼쪽 → 3




// ▶ 단항 연산자
//    (연산자 항) → 항이 1개
// - 부호 연산자
console.log(+3);    // 숫자의 부호를 표기하는 연산자
console.log(-3);
let a9: number = -3;
console.log(-a9);   // 3


// - 증감 연산자
let a10: number = 10;
a10 += 1;
a10++;
console.log(a10);

// 1증가 감소를 연산자로 만들었다
// 변수에 들어있는 값을
++a10;  // 증가 연산자(+1)
--a10;  // 감소 연산자(-1)


// - 논리 단항 연산자
// NOT
// true, false를 반대로 연산하는 연산자 → NOT(!)
// Truthy한 값도 true, false로 바꿔주는 기능
console.log(!3);    // false
console.log(!0);    // true




// ▶ 삼항 연산자
//    질문에 대한 답을 구한 후에 그 답을 이용하는 연산자
// - 선택 연산자
// condition ? truthy : not truthy;
let age: number = 15;
console.log(age < 20 ? "미성년자" : "성인");    // 미성년자

let ageStr: string = age < 20 ? "미성년자" : "성인";




// ▶ 특수한 목적의 연산자 → array 또는 객체형
// - 배열
//   배열이름[숫자] → 해당하는 위치의 정보를 선택
let a11: number[] = [1,2,3,4,5,6];
a11[0];   // 인덱싱

let b11:any = {name: 'title'};
b11['name'];

// - delete
//   삭제 연산자 
delete a11[0];  // 해당하는 인덱스의 정보를 삭제 → 길이는 변화 없음

// - in 연산자
//   해당 값이 있는지 확인 
console.log(4 in a11);      // true
console.log(!(9 in a11));   // true