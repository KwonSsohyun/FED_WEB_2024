/* 
    [🔒문제]
        회원가입 해야한다.

        필요한 정보     ▶ 성별/이름,성/통신사,번호/주민번호앞,뒷/주소
        이름, 성        → 이름
        통신사, 번호    → 전화번호
        주민번호 앞,뒤  → 주민번호

    [📝출력]
        해당 유저의 핸드폰 통신사 출력
*/
// 🔑Code
// ▷ 묶을 수 있는 데이터타입 정보정리
// * 성별
type genders = "남성" | "여성";
// * 이름(성,이름)
//   pre 전 | post 후
type name = {name_pre: string, name_post: string};
// * 연락처(통신사,번호)
type ph_mc = "SKT" | "KT" | "LG";
type phone = {ph_mc: ph_mc, ph_number: number};
// * 주민번호(앞,뒤)
//   pre 전 | post 후
type rnum = {rnum_pre: number, rnum_post: number};

// ▶ 유저 데이터타입 정의
type user = {
    // 성별
    genders: genders,
    // 이름
    name: name,
    // 연락처
    phone: phone,
    // 주민번호
    rnum: rnum,
    // 주소
    address: string
};

// ▶ 권소현 유저
let sohyun: user = {
    genders:"여성",
    name: {
        name_pre: "권",
        name_post: "소현"
    },
    phone: {
        ph_mc: "SKT",
        ph_number: 1012345678
    },
    rnum: {
        rnum_pre: 950116,
        rnum_post: 1234567
    },
    address: "서울특별시 중구"
};

console.log(`권소현 유저 - 전체 정보 : ${JSON.stringify(sohyun)}`);
console.log(`권소현 유저 - 통신사 정보 : ${sohyun.phone.ph_mc}`);

