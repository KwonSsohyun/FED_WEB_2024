/* 
    [🔒문제]
        회원가입 해야한다.

        필요한 정보     ▶ 성별/이름,성/통신사,번호/주민번호앞,뒷/주소
        이름, 성        → 이름
        통신사, 번호    → 전화번호
        주민번호 앞,뒤  → 주민번호

    [📝출력]
        데이터타입을 정한다.
*/
// 🔑Code
type genders = "남성" | "여성";
type name = { last:string, first:string };
type phone = { service:"SKT" | "KT" | "LG U+", number:string };
type regist = { before:string, after:string };
type user = {
    gender:genders,
    name:name,
    phone:phone,
    regist:regist,
    location:string
};

let sohyun:user = {
    gender:"여성",
    name:{
        first:"권",
        last:"소현"
    },
    phone:{
        service:"KT",
        number:"1012341234"
    },
    regist:{
        before:"551234",
        after:"2xxxxxx"
    },
    location:"집주소"
};

console.log(sohyun.phone.service);