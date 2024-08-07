// ▶ 변수
// 내가 미리 무언가의 정보를 저장해두었다가 나중에 재활용하기 위해 저장해두는 공간
// 변수는 저장성과 재활용성이 필요하다.

// 변수라는 것을 만들기 위해서 필요한 것    → 공간(자료형), 위치(변수명)
// 만드는 방법                              → 만드는 코드를 글자로 작성

// 글자로 공간과 위치를 어떻게 작성하는가?
// 라이프사이클, 변수이름, 자료형 → 변수 생성
// let          → 공간(라이프 사이클)
// a1           → 위치(변수의 이름)
// : 자료형     → 공간(자료형)
//                number ▶ 숫자
let a1: number;

a1 = 5; // 오른쪽에 있는 5라는 정보를 왼쪽에 있는 변수에 저장

console.log(a1); // 저장한 내용이 들어있는 공간의 위치를 출력



// -------------------------------------------------------------------------------
// Local Variable → 지역 변수
// 특정 지역을 벗어나면(해당 변수가 만들어진 지역) 자동 삭제하겠다.
let a; // 하나의 수명 주기가 되어서 언제 삭제될지를 결정
// const b;

{
  let a2: number;
  a2 = 65;

  // const는 단순히 수명 주기만 지정하지 않고 변동성도 지정하기 때문
  const b2: number = 5;
  // b2 = 6;
}
// console.log(a2);

var c; // 삭제 안함 (var로 만든 변수는 나중에 다시 이용해도 무조건 남아있다.)



// -------------------------------------------------------------------------------
// ▶ TypeScript 타입(자료형)
//    JavaScript에서 존재하는 기본 자료형들
// ▷ 원시 타입

// ● 숫자형(정수, 실수를 안가리는)
// Infinity → 숫자, NaN → 잘못된 숫자
let a3: number = NaN;

// ● 문자형
// '', "", `` → 사이에 적은 내용을 저장하는 자료형
// '', ""       한줄 안에 적힌 문장
// ``           여러 줄이어도 상관이 없다
//              ${변수명}을 통해서 변수 안에 들어있는 값을 바로바로 추가할 수 있다.
let b3: string = `문자 ${a3}`;

// ● 논리형
// 참과 거짓
// true, false 단 두개의 값만 받을 수 있는 자료형
let c3: boolean = true;

// 기본적인 형태는 아니더라도 추가적으로 중요한 데이터 형태
// undefined → 비어있음 인데 처음부터 없었다.
let d: undefined = undefined;
// null → 비어있음 인데 이전에 무언가가 들어있었을 수도 있다.
let e: null = null;


// ▷ 객체 타입
//    여러개의 변수를 묶어낸 변수 → 주소형 변수
// ● 객체형 (object, prototype)
// key:value 쌍의 형태로 변수 여러개를 묶어서 관리하는 자료형
// 자바스크립트 문법의 특징 => 한줄 단위 동작
let a4: {
  name: string,
  price: number
} = {
  name: "사과",
  price: 5000
};

// ● 배열형
// 동일한 자료형의 데이터 여러개 묶은 자료형
// 묶을 자료형 []
// 연속적으로 동일한 자료형 여러개를 묶어서 관리
let b4: number[] = [1,2,3];

// ● 함수형 / 클래스형

// -------------------------------------------------------------------------------
// ▶ TypeScript에 존재하는 자료형

// ● Tuple형
// 갯수와 자료형이 정해진 배열형
// 한번에 서로 다른 자료형을 묶어서 반환하는데 그 자료형들과 개수가 일정
let a5:[string, number] = ["Hello", 3];


// ● Union형
// 여러개의 자료형을 섞은 자료형
// 여러개의 자료형을 모두 넣을 수 있게 하는 자료형
// 자료형 → 데이터의 형태
// 자료형 대신 값을 넣을 수도 있다.
let b5: string | number = 3;
// let b5: string | number | 5 = 3;
b5 = "3";

// 리터럴 타입
let c5: 3 | 5 = 5;
c5 = 3;

let d5: number | undefined = undefined;

let gender: "남성" | "여성" | "Male" | "Female";


// 어떤 자료형을 넣을지 구분하는게 귀찮다면?
// ● Any형
// 모든 타입 허용 - 아무거나
let a6: any;

// ● Unknown형
// 알수 없다 - 검증된 값만 넣을 수 있다.
let a7: unknown;


// ● void(값이 없음), never(물리적으로 절대로 없음)
// 아무것도 받지 않겠다


// -------------------------------------------------------------------------------
// ▶ TypeScript 자료형을 만드는 방법
// 원래 있던 자료형 여러개를 섞어서 새로운 자료형으로 정의

// 자료형을 어떻게 만들것인가?
type gender = "남성" | "여성";
let a8: gender= "남성";

type productt = {name:string, price:number};
type counter = {count:number};

// 오브젝트 형일때만 오브젝트형을 서로 섞는 기법 (Intersection Type)
type productCounter = productt & counter;
let b7: productCounter = {name: "사과", price:5000, count:5};

// 매우 특수한 자료형 만들기 (Mapped by Types)
// 일괄적으로 자료형 변경하고 싶을 때 쓴다.
// 현재 자료형 문자열로 통일적으로 바꿨다.
type mappedProduct = {[key in keyof productCounter]:string};

// class와 function 나중에 배운다.
// interface, namespace, generic, ...