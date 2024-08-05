// ▶ 제네릭(Generic)
/*
    클래스를 이용하다보면 중복된 내용이 너무 많아서 
    새로 만들기가 번거로운 경우가 생긴다.

    클래스 또는 함수를 만들고자 할 때
    대부분의 내용이 동일하지만 국소적인 부위만 다를 때
    변수의 자료형만 바꾸면 되는 경우일 때
    새로 만들지 말고 교체해서 만들면 매우 편리하겠다.

    교체하는 기능 → 제네릭

    미리 자료형에 구멍을 뚫어두고 클래스 또는 함수를 완성해둔 후
    사용할 때 구멍을 뚫어둔 자료형에 넣고자하는 자료형을 넣고 생성해서 사용하는 방식
*/
class Phone {
    number:number;
    type:string;
    constructor(number:number,type:string){
        this.number = number;
        this.type = type;
    }
    AIService(){
        console.log('Siri');
    }
}
/*
    ▶ 제네릭 생성 작업
       미완성본을 만드는 작업
       단순하게 구멍을 뚫는 미완성본을 만드는게 아니라

       → 뚫린 구멍들 중에서
         공통된 자료형들이 들어갈 공간에 이름을 매기는 것

         미리 사용할 구멍의 이름들을 만들어둬야 한다.
         구멍의 이름들을 어떻게 만들어두느냐?

         class ClassName<name1, name2> {}
*/
/*
    ▶ 제네릭 클래스
*/
class Two<T1,T2> {
    data1:T1;
    data2:T2;
    constructor(data1:T1, data2:T2){
        this.data1 = data1;
        this.data2 = data2;
    }
}
/*
    제네릭 클래스에 구멍을 언제 매꾸느냐?
    → new 클래스가 생성되어서 실체가 생길 때
      구멍에 매꿀 자료형이 필요하다.

    그렇다면 어떻게 구멍을 매꾸느냐?
    → 자료형<T1, T2>();
*/
let a:Two<number,string> = new Two<number,string>(3, '문자열');
let b:Two<number,number> = new Two<number,number>(3, 4);
// a=b; → 오류남



/*
    ▶ 제네릭 함수
*/
function Plue<Type>(data1:Type, data2:Type):Type {
    // 만약 클래스 들어가면 오류날까봐 이러는 것임
    //@ts-ignore
    return data1 + data2;
}

// → 제네릭 함수를 만들면 사용
//   함수는 사용할 때마다 <>꺽쇠를 적어야 하는 불편함이 있다.
console.log(Plue<number>(3,4));
console.log(Plue<string>('구멍뚫린','위치가'));



/*
    ▶ 제네릭 추측 자료형
       함수에서는 아무 문제가 없다.
       단, 클래스에서는 문제가 된다.

       추측 자료형은 아무때나 동작하는게 아니다.
       해당하는 구멍뚫린 이름의 변수에 어떤값이 들어가는지 확인

       ● "제네릭 클래스" 생성 시 <>안에 자료형을 직접 적는게 좋다.
          └ 클래스 안에 필드 갯수가 3개가 있다고 하면, 
            생성자에서 3개 필드에 3개에 값을 다 넣으면 생략해도 되는데
            필드값을 다 넣는게 아니라면, 오류가 날 수 있기에 웬만하면 적는 습관을 들여라.

       ● "제네릭 함수" 호출 시 <>안에 자료형을 안적어도 무방하다.
          └ 매개변수 갯수가 정해져 있기 때문이다.
*/
Plue(4,5);
console.log(Plue(4,5));



/*
class Test<T1, T2>{
    a:T1;
    b:T2|undefined;
    constructor(a:T1){
        this.a = a;
        this.b = undefined;
    }
}

let x = new Test<number, number>(1);
console.log(x);
let v = new Test(1);
console.log(v);
*/


/*
    관리형 클래스
*/
class Book1{}
class BestSellers extends Book1{}

// 책 관리가 될 수도 있고
// 사람을 관리할 수 있는 클래스가 될 수 도 있고
// 무궁무진하다.
class Library<Type>{
    list: Type[];
    constructor(){
        this.list = [];
    }
    Add(data:Type):void{
        this.list.push(data);
    }
}
// Book을 확장한 무엇이든지 받아오겠어.
// <? extends Book>
let x:Library<Book1> = new Library<BestSellers>();
let book:Library<Book1> = new Library<Book1>();
// list 배열에 Book객체들이 각각 담긴다.
book.Add(new Book1());
book.Add(new Book1());
book.Add(new Book1());
book.Add(new Book1());




// ---------------------------------------------------------------------------------------
/*
    ▶ TypeScript 고급 타입(Advanced Types)
       특별한 기능 / 미리 만들어진 기능
*/
// ---------------------------------------------------------------------------------------
/*
    ▶ 인터페이스 병합(Declaration Merging)
       인터페이스명이 같아야 한다.
*/
interface A{ A():void; }
interface A{ B():void; }
class C implements A{
    A(): void{}
    B(): void{}
}

// ---------------------------------------------------------------------------------------
/*
    ▶ 숫자 구분자(Numeric Separators)
       큰숫자를 단위별로 나누기 위한 구조
*/
3456_1122_3434_6346;
3_456_112_234_346_346;
console.log(3_456_112_234_346_346); // 3456112234346346

// ---------------------------------------------------------------------------------------
/*
    ▶ 화살표 함수(Arrow Function)(람다 함수)
       즉석에서만 쓸 함수
       재활용하지 않고 한번만 이용한 후에 버리는 즉석 함수

       ()=>{}  // 화살표 함수

*/
// function A():void { }

// 만든 다음에 변수 넣어서 사용하기 위한 구조
let Q:Function = ()=>{};
Q();

// → 화살표함수를 만들 때 주의할 사항과 그에 따른 작성법의 변화
()=>{}                      // ▶ 매개변수 0개 리턴값 X

// → 코드가 여러줄일 필요 없이 return 줄 한줄만 있을 예정이라면 return도 적을 필요가 없겠다.
(a:number)=>0;              // ▶ 매개변수 1개 리턴값 O

// → 화살표 함수의 결과값 타입은 자료형 추측
(a:number)=>{ return 3; }   // ▶ 매개변수 1개 리턴값 O

// ---------------------------------------------------------------------------------------
/*
    ▶ function this (함수에서 this 사용)
       함수에서도 this를 적을 수 있다.
       내 상위 객체

       function this을 이용할 때는
       화살표함수는 사용하지 않는다.
       일반 function을 이용해야 한다.

*/
let w:any = {
    name: 'abcd',
    B(){
        console.log(this.name);
    },
    X:()=>{ // 화살표함수에서는 this 못쓴다.
        // console.log(this.name); // window를 가르킨다.
    }
};

w.B();  // abcd

// ---------------------------------------------------------------------------------------
/*
    ▶ 옵셔널 프로퍼티(Optional Properties)
       → 속성 이름 뒤에 물음표(?)를 추가
         필수적으로 존재하지 않아도 되는 속성

    ▶ 옵셔널 체이닝(Optional Chaining)
       → Optional Properties와 함께 많이 이용되는 "빈 공간 참조 해결 문법"
       → 앞에 있는 변수가 null이더라도 undefinde해준다.
         undefined == null 에러를 띄우지 않고 대신
         undefined가 나오게 하는 기능

*/
type Product = {
    name:string,
    count:number,
    price?:number   // ? 취사 선택 가능
}
let s: Product = {
    name: '1',
    count: 5,
    price: 4
}
let d: Product = {
    name: '1',
    count: 5
}

type K = {
    name:string
}
type G = {
    target?:K
}

let t: G = {

}
// 값을 안넣을 수도 있기 때문에 오류 난다.
// t.target.name

// Optional Properties를 이용할 때 빈 공간 참조를 해결하기 위해서
// 옵셔널 체이닝(Optional Chaining)이 나왔다.
// undefined == null 에러를 띄우지 않고 대신 undefined가 나오게 하는 기능
t.target?.name

// ---------------------------------------------------------------------------------------
/*
    ▶ 데이터 타입 확인하기(typeof)
       → 자료형 추측 - 타입 가드(Type Guard)
         해당하는 변수에 들어있는 값의 자료형을 추측하는 연산자(기능)
         자료형을 문자열로 알려준다.
*/
console.log(typeof 1);                  // number
console.log(typeof '1');                // string
console.log(typeof 1.1);                // number
console.log(typeof function A(){});     // function





// ---------------------------------------------------------------------------------------
/*
    ▶ TypeScript 유틸리티 타입(Utility Types)
       편의성을 위해 미리 만들어둔 객체
       간단한것들에는 어떤 것들이 존재하는가?
       대표적으로 제네릭들이 존재
*/
// ---------------------------------------------------------------------------------------
type R = {
    name:string,
    price:number,
    count?:number
}

// 모든 변수를 옵셔널로 바꾸는 제네릭
let f: Partial<R> = {};


// 모든 변수를 비옵셔널로 바꾸는 제네릭
let g: Required<R> = {name:'1', price:1, count:2};


// 모든 변수를 읽기 전용
let y: Readonly<R> = {name:'1', price:1, count:2};
// y.count = 5;    // 값 변경 안됨


// 골라내는 자료형
let i: Pick<R, 'name' | 'count'> = {
    name:'1', count:2
}

// 골라낸걸 제외하는 자료형
let u: Omit<R, 'name'> = {
    price:1, count:2
}

// 함수의 리턴타입을 가져오는 자료형
let p: ReturnType<()=>number> = 5;





// ---------------------------------------------------------------------------------------
// 디스트럭쳐 할당
let j: {name:string, count:number} = {name:'1234', count:5};
let {name:string, count:number} = j;

// 스프레드 할당
let h: any[] = [1,2,3,4];
function E(...a:any[]){

}
E(...h);