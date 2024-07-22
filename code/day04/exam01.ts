/* 
    [🔒문제]
        사용자 정보 제작
        이름 : User
        매개변수 : name, age, location, phone, birth, gender
        
        phone 하위 : type, number
        birth 하위 : year, month, day 

        위 사용자 정보를 1개 이상 저장 후 해당 사용자에 대해 아래 조건 실행

    [📝출력]
        18살 이하 사용자라면 미성년자 출력
            그외 성인 출력

        생년월일을 이용하여 윤년생인지 출력
            그외 일반년생 출력

        생년 월을 이용하여 탄생석 출력

        성별이 남성이고 20살이라면 신검 문서 출력
            그외 미출력
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ Users 타입 정의
type Users = {
    name: string,
    age: number,
    location: string,
    phone: {
        type: "SKT" | "KT" | "LG",
        number: number
    },
    birth: {
        year: number,
        month: number,
        day: number
    },
    gender: "남성" | "여성"
};

// -----------------------------------------------------------------------
// ▶ 사용자 객체 정의
// → sosohyun 객체
let sosohyun: Users = {
    name: "권소현",
    age: 29,
    location: "서울시 중구",
    phone: {
        type: "SKT",
        number: 1012345678
    },
    birth: {
        year: 1995,
        month: 1,
        day: 16
    },
    gender: "여성"
};

// → yuri 객체
let yuri: Users = {
    name: "김유리",
    age: 4,
    location: "서울시 강북구",
    phone: {
        type: "KT",
        number: 1012345678
    },
    birth: {
        year: 2020,
        month: 5,
        day: 23
    },
    gender: "여성"
};

// -----------------------------------------------------------------------
// ▶ 사용자 정보 배열 저장
let users: Users[] = [sosohyun, yuri];

// -----------------------------------------------------------------------
// 📝출력 로직
// 탄생석 배열
let birthstone: string[] = ["가넷", "자수정", "아쿠아마린", "다이아몬드", "에메랄드", "진주", "루비", "페리도트", "사파이어", "오팔", "토파즈", "터키석"];

for(let user of users){

    // ▶ 18살 이하 사용자라면 미성년자 출력 / 그외 성인 출력
    if(user.age <= 18){
        console.log(`${user.name} : 미성년자`);
    } else{
        console.log(`${user.name} : 성인`);
    }
    
    // ▶ 생년월일을 이용하여 윤년생인지 출력 / 그외 일반년생 출력
    if((user.birth.year % 4 == 0 && user.birth.year % 100 != 0) || user.birth.year % 400 == 0 ){
        console.log(`${user.name} : 윤년생`);
    } else{
        console.log(`${user.name} : 일반년생`);
    }

    // ▶ 생년 월을 이용하여 탄생석 출력
    console.log(`${user.name} 님 탄생석은 ${birthstone[user.birth.month - 1]} 입니다.`);

    // ▶ 성별이 남성이고 20살이라면 신검 문서 출력 / 그외 미출력
    if(user.gender == "남성" && user.age == 20){
        console.log(`${user.name} 님은 신검 대상자로서 문서 출력`);
    } else{
        console.log(`${user.name} 님은 신검 대상자가 아닙니다.`);
    }

    console.log("-----------------------------------------------------------------------");
}