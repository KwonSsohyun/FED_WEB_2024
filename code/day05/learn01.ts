// ▶ 제어문 - 반복문
/*
    동일한 내용을 여러번 해야할 때 복붙을 해도 상관은 없겠지만
    여러가지 문제가 산재할 수 있다.
    그러니 여러번 작성하지 않고 한 번만 적어도 여러번 동작하게하면 좋겠다.

    코드라는 것은 위에서 아래로 순차적으로 무조건 흘러간다.
    흘러가는 코드의 흐름을 위로 올려놓는 것만으로 반복하게 할 수 있다.

    제어문 - 반복문의 기능은 코드의 흐름을 아래에서 위로 옮겨놓는 작업을 한다.
             반복할 범위, 반복을 멈출 제어문장

             반복을 하고 싶을 때/안하고 싶을 때 → true(Truthy), false(Not Truthy)
             직접 true → 무한히 반복
                  false → 0회 실행

             while( 반복을 멈출 제어문장 ){ 반복할 범위(반복할 내용) }

    → for, while, do-while
*/

// ▶ while 반복문
// 반복문을 이용할 때는 변화하는 내용으로 제어문장이 이루어져야 한다.
// 반복하는 문장 안에 변수가 변화하도록하는 연산자 또는 기능이 포함되어야 한다.
// 적절한 변수와 변수의 변화를 함께 작성하면 필요한만큼 동일한 동작을 반복
let checker: number = 0;

while(checker < 10){
    console.log("반복하고 싶은 문장");
    checker += 1;
}


let j:number = 0;
while(j < 11){
    let i:number = 1;
    while(i < 11){
        console.log(i + j * 10);
        i += 1;
    }
    j += 1;
}


// ---------------------------------------------------------------------
// ▶ for 반복문
// while문 보다 가독성을 편리하게 하기 위함
// 기능의 변화는 없지만 가독성을 좋게하기 위해서 나온 반복문이다.

// for(/*첫번째 문장*/ ; /*두번째 문장*/ ; /*세번째 문장*/){
// (변수 생성 문장, 변수를 이용한 제어문장, 변수 연산 문장)

for(
    let i = 0   /*첫 번째 문장*/ ;
    i < 10      /*두 번째 문장*/ ;
    i += 1      /*세 번째 문장*/
) {
    console.log('내용',1);
    console.log('내용',2);
    console.log('내용',3);
    console.log('내용',4);
}

// for 생략 기능
// → 무한루프
/*
for(;;){
    console.log('for 생략 기능');
}
*/


// ---------------------------------------------------------------------
// ▶ do-while 반복문
// 반복문의 동작인건 비슷하지만 작성법 정도만 다르겠다.
let i = 5;
do{
    console.log('do-while 문은 괄호가 뒤쪽에 오는 반복문', 1);
    i += 1;
} while( i<2 )

i = 5;
while( i<2 ){
    console.log('do-while 문은 괄호가 뒤쪽에 오는 반복문', 2);
    i += 1;    
}



// ---------------------------------------------------------------------
// ▶ for-each - 배열/오브젝트 반복문
/*
    일반적인 변수만 있다면 지금까지 배운 반복문만으로도 충분
    배열이나 오브젝트처럼 여러개가 한개로 묶인 정보를 반복시키기 위해서
    한개씩 가져와서 반복한다.

    → for-each 반복문
    
    ● each 반복의 원리
      let a: number[] = [1,2,3,4];                    // 배열
      let b: any = {name: '권소현', price: 5000};     // 오브젝트

      해당하는 배열 또는 오브젝트의 값을 다른 변수에 대입
      ⭕올바른 값         → 해당하는 횟수가 존재해    → 반복해
      ❌올바르지 않은 값  → 해당하는 횟수가 없다      → 반복하지마

    ● each 반복을 할때 매우 중요한 것 → 변수
*/


let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
let product: any = {name: '권소현', price: 5000, count: 0};


/*
    ▶ for in 문 (배열/오브젝트)
       → "키값" 출력 (in ~안의) 
          for-each 반복문을 작성할 때
          let name in (array or object) 를 작성하면
          왼쪽 변수에 오른쪽 대상의 식별 키값
          in 배열의 인덱스를 왼쪽변수에 넣는다.
*/
for(let i in numbers){
    console.log(i);             // 0,1,2,3,4,5,6,7,8,9
    console.log(numbers[i]);    // 1,2,3,4,5,6,7,8,9,10
}

for(let i in product){
    console.log(i);             // name, price, count
    console.log(product[i]);    // 권소현, 5000, 0
}


/*
    ▶ for of 문 (배열)
       → "값" 출력 (of ~의)
          for-each 문법 중에 키값이 아니라 안에 들어있는 실제 값을 획득할 수 있도록
          let name of (array) 실제값 획득 each 반복문 기법
*/
for(let i of numbers){
    console.log(i);      // 1,2,3,4,5,6,7,8,9,10
}

/*
for(let i of product){
    console.log(i);      // 오브젝트(객체)는 안된다 → 어떤 타입의 자료형이 올지 모르기 때문.
}
*/
// ---------------------------------------------------------------------

type gender = '남성' | '여성';
type User = {
    name: string,
    gender: gender,
    regist: string
};

let user: any = {
    name: '권소현',
    gender: '여성',
    regist: '123456-1234567',
    phone: '010-1234-5678'
};

for(let key in user){
    if(key != 'regist'){
        console.log(key, ':', user[key]);
    }
}
console.log('---------------------------------------');



// ---------------------------------------------------------------------
// ▶ break, continue - 제어 키워드
/*
    제어문을 추가적으로 제어하기 위한 키워드(문장)
    
    ▶ break (if문 제외)
       해당하는 제어문을 제어문의 끝으로 이동
       ※ if문에만 못 씀 - if는 중괄호가 2개니까 어디로 가야할지 몰라서

    ▶ continue (if문, switch문 제외)
       해당하는 제어문이 제어문의 다음 스텝으로 이동
       다음 동작
*/

for(let key in user){
    if(key == 'regist') continue;       // for문으로 상단으로 간다. (다음 스텝으로 간다.)
    console.log(key, ':', user[key]);
}
console.log('---------------------------------------');



// ---------------------------------------------------------------------
/*
    사용자 정보 출력 프로그램

    사용자 인원 : 2명
    사용자 정보 : 이름, 나이, 주민번호, 성별
    
    출력할 정보 : 이름, 나이, 성별
    제외할 정보 : 주민번호
*/
type genders = "남성" | "여성";
type People = {
    name: string,
    age: number,
    regist: string,
    gender: genders
};

let users: People[] = [
    {
        name: '권소현',
        age: 29,
        regist: '123456-2234567',
        gender: '여성'
    },
    {
        name: '김유성',
        age: 20,
        regist: '123456-1234567',
        gender: '남성'
    }
];

for(let user of users){

    let anyUser:any = user;

    for(let key in user){
        // if(key == 'regist') continue;
        
        if(key == 'regist') {
            if(anyUser.gender == '남성') continue;
        }

        console.log(key, ':', anyUser[key]);
    }
}
