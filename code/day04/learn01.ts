// ▶ 제어문
/*
    연산자가 아닌 코드의 흐름을 제어하는 방식을 이용한다면
    삼항 연산자의 약점을 탈피하고 한번의 질문을 통해서 여러개의 응답
    일반적으로 프로그램이 동작하는 흐름의 순서를 변경하는 문장
    프로그램이 흐르는 방향을 제어하는 방식

    → if, switch, while, for, do-while

    ● 제어문의 기초 모양
      키워드( 조건문 ){ 지역 }
      → 조건문이라는 것을 작성해서 해당 결과에 의해 지역을 제어
*/

// ▶ if 분기문
//    if(){}
//    → 두개의 여러개의 문장 묶음 중 한개의 묶음을 선택하는 제어문
//      분기문은 질문에 대한 정답(Truthy, Not Truthy)를 이용해서 선택
let a:number = 5;
if(a < 3){
    console.log("a가 3보다 작을때 실행됨");
} else { // 뒤에 오는 문장의 묶음이 앞에 있는 제어문에 연결
    console.log("a가 3보다 클때 실행됨");
}

// 제어문에 작성되는 { 지역 }은 한문장이 들어가는 경우 {} 생략이 가능
// 지역이 들어가야 하는 공간에 지역이 없다면
// 자동으로 다음 한문장을 지역으로 감싼다.
// 제어문에 중괄호를 생략할 수 있고 제어문의 전체가 한 문장이다보니
// 제어문의 연계를 압축
if(a == 1) console.log(1);
else if(a == 2) console.log(2);
else console.log(3);

// ---------------------------------------------------------------------
type User = {
    name: string,
    age: number,
    gender: '남성'|'여성'
}

let user: User = {
    name: '권소현',
    age: 20,
    gender: '여성'
};

// 여성이라면 출력해라
if(user.gender == '여성') console.log('여성');
else console.log('여성이 아니다');
// ---------------------------------------------------------------------


// ▶ switch 선택문
//    switch( 조건문 ){ 지역 } 
//    → if문처럼 두개 중에 한개를 선택하는 것이 아닌
//      애초부터 여러개 중에 한개를 선택하도록 만들어진 제어문
//      switch는 조건문으로 두개 중에 한개가 아닌 여러개 중에 한개를 선택해야 한다.
//      두개를 표현하는 질문에 대한 답(Truthy, Not Truthy)이 아니라
//      정확하게 여러개를 무한히 표현할 수 있는 정보 숫자를 조건문으로 이용
switch(user.age){
    // switch 제어문은 {}가 한개만 존재한다.
    // 대신 한개의 {}안의 공간을 구분하기 위해서 
    // → case 구분자 키워드
    //   switch문은 case번호에 해당하는 공간을 선택
    //   case번호에 없는 숫자가 switch에 들어간다면?

    //   switch문은 case위치로 이동만 한다.
    case 20:    // case 라는 구분자 키워드 뒤에 선택에 이용되는 정보를 작성
        console.log("20대 입니다."); 
        break;  // → break 제어 키워드 : 현재 실행중인 제어문을 탈출
    case 30: console.log("30대 입니다."); break;
    case 40: console.log("40대 입니다."); break;
    // → default
    //   만약의 상황 → case에 작성된 번호가 아닌 없는 번호를 선택
    //   대응하기 위해서 나온 나머지 case
    default: console.log("몰라유"); break;
}

// ---------------------------------------------------------------------
type User1 = {
    name: string,
    age: number,
    location: string | undefined | null,
    gender: "남성" | "여성",
    phone: {
        type: "SKT" | "KT" | "LG",
        number: string | undefined | null
    }
};

let sohyun: User1 = {
    name: "권소현",
    age: 20,
    location: "서울 중구",
    gender: "여성",
    phone: {type:"SKT", number:"01012345678"}
};

// 남성 KT - 헬스광고
// 남성 LG - 헬스광고
// 남성 SKT - 새 핸드폰 광고

// 여성 KT - 헬스광고
// 여성 LG - 새 핸드폰 광고
// 여성 SKT - 새 핸드폰 광고

let HealtyCopy: string = "헬스장 광고 문구";
let PhoneCopy: string = "새 핸드폰 광고 문구";

if(sohyun.gender == "남성") {
    switch(sohyun.phone.type){
        case "SKT": console.log(PhoneCopy); break;
        default: console.log(HealtyCopy); break;
    }
} else {
    switch(sohyun.phone.type){
        case "KT": console.log(HealtyCopy); break;
        default: console.log(PhoneCopy); break;
    }
}
// ---------------------------------------------------------------------