/* 
    [🔒문제]
        상품 입력

        상품 정보       → 상품명, 등록일(문자열), 개수, 가격, 할인율, 평점, 구매평
        유저 정보       → 유저명, 가입일, 구매내역, 평점, 구매평, 주소, 성별, 전화번호, 주민번호

        구매상품 내역   → 유저명, 각 개당 상품이름, 개수
        구매내역 정보   → 유저명, 구매상품내역들(배열), 총가격, 배송지 주소
        구매평 정보     → 유저명, 점수, 평가내용

    [📝출력]
        해당 유저가 구매한 구매상품, 구매내역, 구매평을 출력한다.
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▷ 묶을 수 있는 데이터타입 정보정리
// * 상품정보 데이터 정의
type P_Info = {
    p_name: string,             // 상품명
    p_date: string,             // 등록일
    p_cnt: number,              // 개수
    p_price: number,            // 가격
    p_sale: number,             // 할인율
    p_grade: any[],          // 평점
    p_review: any[]          // 구매평
};
// * 유저 데이터 정의
type P_User = {
    name: string,               // 유저명
    joinDate: string,           // 가입일
    purch_invoice: P_Info[],    // 구매내역
    purch_grade: number[],      // 평점
    purch_review: string[],     // 구매평
    address: string,            // 주소
    gender: "남성" | "여성",    // 성별
    phone: number,              // 전화번호
    register: number            // 주민번호
};


// * 구매상품 내역
type P_Purchase = {
    user_name: P_User['name'],          // 유저명
    user_p_name: string[],              // 상품명
    user_p_cnt: number                  // 개수
};

// * 구매내역 정보
type P_Purchase_Info = {
    user_name: P_User['name'],          // 유저명
    user_p_history: string[],           // 구매상품내역들 (배열)
    user_p_price: number,               // 총 가격
    user_address: P_User['address']     // 배송지 주소
};

// * 구매평 정보
type P_Purchase_Review = {
    user_name: P_User['name'],              // 유저명
    user_p_grade: number[],                 // 점수
    user_p_review: string[]                 // 평가내용
};

// -----------------------------------------------------------------------
// ▶ 상품정보 (쉐이크)
let P_Info_shake: P_Info = {
    p_name: "쉐이크",
    p_date: "2024-01-16",
    p_cnt: 10,
    p_price: 3500,
    p_sale: 20,
    p_grade: [],
    p_review: []
}

// ▶ 상품정보 (딸기)
let P_Info_straw: P_Info = {
    p_name: "딸기",
    p_date: "2024-02-02",
    p_cnt: 50,
    p_price: 8500,
    p_sale: 10,
    p_grade: [],
    p_review: []
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// ▶ 권소현 유저
let P_User_sosohyun: P_User = {
    name: "권소현",
    joinDate: "2024-07-18",
    purch_invoice: [P_Info_shake, P_Info_straw],
    purch_grade: [5, 6],
    purch_review: ["식사대용으로 좋아요", "상큼해요"],
    address: "서울시 중구",
    gender: "여성",
    phone: 1012345678,
    register: 9501161234567
}

// ▶ 상품정보 유저 "리뷰" 삽입
P_Info_shake.p_grade.push(P_User_sosohyun.purch_grade);
P_Info_straw.p_grade.push(P_User_sosohyun.purch_grade);
// ▶ 상품정보 유저 "구매평" 삽입
P_Info_shake.p_review.push(P_User_sosohyun.purch_review);
P_Info_straw.p_review.push(P_User_sosohyun.purch_review);

// -----------------------------------------------------------------------
// ▶ 권소현 유저 - 구매상품 내역
//                 유저명, 상품명, 개수
let P_User_sosohyun_Purchase: P_Purchase = {
    user_name: P_User_sosohyun.name,
    user_p_name: P_User_sosohyun.purch_invoice.map(item => item.p_name),
    user_p_cnt: P_User_sosohyun.purch_invoice.length
}
// -----------------------------------------------------------------------
// ▶ 권소현 유저 - 구매내역 정보
//                 유저명, 상품명, 총가격, 배송지주소
// 총 가격
let total_price = P_User_sosohyun.purch_invoice.reduce((sum, item) => {
    return sum + item.p_price;
},0);

let P_User_sosohyun_Purchase_Info: P_Purchase_Info = {
    user_name: P_User_sosohyun.name,
    user_p_history: P_User_sosohyun.purch_invoice.map(item => item.p_name),
    user_p_price: total_price,
    user_address: P_User_sosohyun.address
}
// -----------------------------------------------------------------------
// ▶ 권소현 유저 - 구매평 정보
//                 유저명, 점수, 평가내용
let P_User_sosohyun_Purchase_Review: P_Purchase_Review = {
    user_name: P_User_sosohyun.name,
    user_p_grade: P_User_sosohyun.purch_grade,
    user_p_review: P_User_sosohyun.purch_review
}
// -----------------------------------------------------------------------

console.log(`권소현 유저 - 전체 정보 : ${JSON.stringify(P_User_sosohyun)}`);
console.log(`권소현 유저 - 구매상품 내역 : ${JSON.stringify(P_User_sosohyun_Purchase)}`);
console.log(`권소현 유저 - 구매내역 정보 : ${JSON.stringify(P_User_sosohyun_Purchase_Info)}`);
console.log(`권소현 유저 - 구매평 정보 : ${JSON.stringify(P_User_sosohyun_Purchase_Review)}`);

console.log(`쉐이크 - 상품 정보 : ${JSON.stringify(P_Info_shake)}`);
console.log(`딸기 - 상품 정보 : ${JSON.stringify(P_Info_straw)}`);



// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// ▶ 토심이 유저
let P_User_tosim: P_User = {
    name: "토심이",
    joinDate: "2024-07-18",
    purch_invoice: [P_Info_shake, P_Info_straw],
    purch_grade: [1, 2],
    purch_review: ["배불러요", "새콤달콤"],
    address: "서울시 강북구",
    gender: "여성",
    phone: 1012345678,
    register: 2201161234567
}

// ▶ 상품정보 유저 "리뷰" 삽입
P_Info_shake.p_grade.push(P_User_tosim.purch_grade);
P_Info_straw.p_grade.push(P_User_tosim.purch_grade);
// ▶ 상품정보 유저 "구매평" 삽입
P_Info_shake.p_review.push(P_User_tosim.purch_review);
P_Info_straw.p_review.push(P_User_tosim.purch_review);

// -----------------------------------------------------------------------
// ▶ 토심이 유저 - 구매상품 내역
//                 유저명, 상품명, 개수
let P_User_tosim_Purchase: P_Purchase = {
    user_name: P_User_tosim.name,
    user_p_name: P_User_tosim.purch_invoice.map(item => item.p_name),
    user_p_cnt: P_User_tosim.purch_invoice.length
}
// -----------------------------------------------------------------------
// ▶ 토심이 유저 - 구매내역 정보
//                 유저명, 상품명, 총가격, 배송지주소
// 총 가격
total_price = P_User_tosim.purch_invoice.reduce((sum, item) => {
    return sum + item.p_price;
},0);

let P_User_tosim_Purchase_Info: P_Purchase_Info = {
    user_name: P_User_tosim.name,
    user_p_history: P_User_tosim.purch_invoice.map(item => item.p_name),
    user_p_price: total_price,
    user_address: P_User_tosim.address
}
// -----------------------------------------------------------------------
// ▶ 토심이 유저 - 구매평 정보
//                 유저명, 점수, 평가내용
let P_User_tosim_Purchase_Review: P_Purchase_Review = {
    user_name: P_User_tosim.name,
    user_p_grade: P_User_tosim.purch_grade,
    user_p_review: P_User_tosim.purch_review
}
// -----------------------------------------------------------------------

console.log(`토심이 유저 - 전체 정보 : ${JSON.stringify(P_User_tosim)}`);
console.log(`토심이 유저 - 구매상품 내역 : ${JSON.stringify(P_User_tosim_Purchase)}`);
console.log(`토심이 유저 - 구매내역 정보 : ${JSON.stringify(P_User_tosim_Purchase_Info)}`);
console.log(`토심이 유저 - 구매평 정보 : ${JSON.stringify(P_User_tosim_Purchase_Review)}`);

console.log(`쉐이크 - 상품 정보 : ${JSON.stringify(P_Info_shake)}`);
console.log(`딸기 - 상품 정보 : ${JSON.stringify(P_Info_straw)}`);