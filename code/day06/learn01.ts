// ▶ 함수(Function)
/*
    이미 완성된 코드의 지역을 방문했다 돌아가는 기능
    함수는 작성되는 위치와 별개의 영역이다.

    ▶ 함수 선언
    → function 함수명():void{ 실행할 코드 };

    ▶ 함수 호출
       별개의 영역인 함수로 이동하는 방법
       영역의 함수명을 적어줌으로써 해당하는 영역을 고유하게 식별할 수 있다.
    → 함수명();
*/
/*
    ▶ 매개변수
    → (매개변수명: 타입)
    함수를 넘어갈때 → 다른 영역으로 이동할 때
    필요한 정보를 넘기기 위해서 추가적인 변수를 생성
    그리고 생성된 변수에 값을 넘겨준다면
    넘어갔을때 해당하는 함수에서(영역에서) 그 변수는 무조건 있으니
    함수에는 들어갈때 만들어지는 변수

    매개변수가 몇개 필요한지 알 수 없기 때문에
    매개변수를 일괄적으로 작성하고 관리할 필요가 있다.
    함수에는 매개변수를 작성하기 위한 공간
    필요한 매개변수의 이름과 자료형으로 작성하면 된다.
    기본적으로 let임.
*/
// 매개변수에 1:1로 값을 할당하는 방식
Name('abc', 123);
Name('abc');

function Name(a:string, b?:number):void{ 
    console.log(`동작할 코드 + ${a} + ${b}`);
}

function GuguDan(dan: number):void{
    for(let i=2; i<10; i++){
        console.log(dan, '*', i, "=", dan*i);
    }
}

GuguDan(3);
GuguDan(4);



/*
    ▶ return
    함수에 들어가서 동작을 한 후 결과값을 가져올 방법이 없다.
    그래서 결과값도 매개변수처럼 변수를 만들고 가져온다.

    ⭕ :리턴타입
    ❌ :void        → 임시 결과 변수가 없을 예정(리턴값 없음)
*/
function Plus(x:number, y:number): number{
    // 결과값을 넘기기위한 변수 → 임시 결과 변수
    return x+y; // 임시 결과 변수에 값을 넣는 과정
}
// Plus 함수로 이동 → 임시 변수 생성 → 임시 변수에 x+y 대입
// → 메인 프로세스 이동 → 임시변수출력
console.log(Plus(1,2));


function Factorial(x:number):number{
    let result = 1;
    for(let i=1; i <= x; i++) result *= i;
    return result;
}

console.log(Factorial(3));

// 함수는 리턴값(결과값)은 무조건 한개다
// 기능상의 한계이기 때문에 두개 이상을 설정할 수 없다.
// 그렇다면 두개 이상의 결과로 주고싶을때는?
function A():number[]{
    return [1,2];
}

console.log(A()[0]);    // 1
console.log(A()[1]);    // 2


let obj: any = {
    // 오브젝트 안에 함수를 넣을때 주의사항
    // function 키워드가 없어야 한다.
    // 함수명이 키값 대용으로 사용되기 때문에
    // function 키워드 없이 함수를 등록할 수 있다.
    b: function B(){
        console.log('C');
    },
    A(): number{
            return 5;
    }
};

console.log(obj.A());   // 5
obj.b();                // C

/*
    ▶ 함수 교환
*/
function Pluss(x:number, y: number):number{
    return x+y;
}

function Minus(x:number, y: number):number{
    return x-y;
}
let Func: Function = Pluss;     // 함수 교환

console.log(Func(1,2));




// 숫자 4개를 변수에 넣고 해당하는 숫자들 중 가장 큰숫자와 가장 작은숫자 출력
let array: number[] = [1,2,3,4];

function Big(x: number, y:number):number { return x>y ? x : y; }
function Small(x: number, y:number):number { return x<y ? x : y; }

console.log(Big(Big(Big(array[0],array[1]),array[2]),array[3]));        // 4
console.log(Small(Small(Small(array[0],array[1]),array[2]),array[3]));  // 1




/*
    ▶ 디폴트 매개변수
    함수를 이용할때 매개변수에 값을 기본적으로 할당
    기본값 매개변수

    기본값 매개변수는 값을 안넣는 상황에 대응
    안넣는걸 기본으로 하고 작성한다.
    그러다보니 기본값 매개변수가 왼쪽에 있으면 기본값 매개변수가 아닌것과 혼동
    기본값 매개변수는 기본값 매개변수가 아닌것들을 모두 적은 다음에 작성
    → 무조건 오른쪽 끝에 적어야 한다.
*/
// 제곱에서 가장 많이 이용하는 제곱?
function Power(x:number, y:number=2): number{
    return x**y;
}
console.log(Power(2));      // 4
console.log(Power(3,3));    // 27




/*
    ▶ 오류 컨트롤 (예외처리)
       try - catch
      
       오류가 나면 문제가 생긴 부분을 건너뛰도록 만드는 기능
       try : 시도하다 / catch : 잡다

    → catch(e){  }
      e는 에러 메시지를 담은 객체 정보
*/
// function C(x:number | undefined) :void{}
// C(undefined);

let a:number = 0;
let result: number = 6;

// ● 오류나는 함수
function Z(){
    // @ts-ignore
    a.f = 5;
    result += 5/a;
}

// ● 오류 컨트롤
try{
    // @ts-ignore
    a.f = 5;
    result += 5/a;

    Z();

} catch(e){ // e는 에러
    // 에러의 종류에 따라서 예외처리 구문을 작성
    // console.log(e);      에러메시지를 담은 객체 정보
    console.log("잡는 동작");
}


// try-catch에는 아주 치명적인 약점
// → 알려진 오류만 검증해준다.
try{

} catch(e){

} finally{
    // finally를 통해서 try가 올바르게 동작하던 동작하지않던 무조건 동작하는 구문
}



/*
    ▶ throw
       throw new Error('에러 메시지');

    사용자 오류를 try-catch는 감지할 수 없다.
    사용자가 강제로 오류를 일으키는 기능 생김
*/

// 주류 판매 사이트
// → 미성년자는 접속 불가
let age: number = 17;

try{
    // throw new Error('에러 메시지');

    if( age < 20 ) throw new Error('에러 메시지');

} catch(e){
    console.log("미성년자 입니다.");
}






// 10개의 숫자 중 아래 조건에 맞는 숫자만 출력
// 조건 : 2의 배수 아닌 것
//          예외 : 2의 배수가 아닌 것 중 3의 배수는 +1 해서 출력
let arrays: number[] = [1,2,3,4,5,6,7,8,9,10];

function Show(arr:number[]) :void{
    for(let i of arrays){
        if(i % 2 == 0) continue;
        if(i % 3 == 0) console.log(i + 1);
        else console.log(i);
    }
}

Show(arrays);