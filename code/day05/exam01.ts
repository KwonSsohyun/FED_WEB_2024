/* 
    [🔒문제]
        쇼핑몰 사용자 정보 출력 프로그램

        쇼핑몰 사용자 정보 - 이름, 나이, 성별, 자주 구매하는 품목, 주소

    [📝출력]
        출력 정보 - 이름, 나이, 성별, 주소
        제외 정보 - 자주 구매하는 품목
                    제외조건 - 나이가 20세 이하이면 제외, 그 이상이면 포함
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ ShopUser 타입 정의
type ShopUser = {
    name: string,
    age: number,
    gender: '남성' | '여성',
    popularItem: string,
    address: string
};
// -----------------------------------------------------------------------
// ▶ 사용자 객체 정의
let Shop_Users: ShopUser[] = [
    {
        name: '권소현',
        age: 29,
        gender: '여성',
        popularItem: '딸기',
        address: '서울시 중구'
    },
    {
        name: '김율',
        age: 15,
        gender: '남성',
        popularItem: '오렌지',
        address: '서울시 강북구'
    }
];
// -----------------------------------------------------------------------
// 📝출력 로직
for(let user of Shop_Users){
    console.log(`${user.name} 님
        나이 : ${user.age} ,
        성별 : ${user.gender} ,
        주소 : ${user.address}`);
    if(user.age >= 20) console.log(`\t자주 구매하는 품목 : ${user.popularItem}`);
};



/* 
    [🔒문제]
        도서 정보 출력 프로그램

        도서 정보 - 제목, 가격, 작가, 베스트셀러 여부

    [📝출력]
        출력 정보 - 제목, 작가
        제외 정보 - 베스트셀러 여부
                    제외조건 - 무조건 제외
        제외 정보 - 가격
                    베스트셀러인 경우 제외
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ BookInfo 타입 정의
type BookInfo = {
    title: string,
    price: number,
    author: string,
    bestYN: boolean
};
// -----------------------------------------------------------------------
// ▶ 도서정보 객체 정의
let Books_Info: BookInfo[] = [
    {
        title: '흐르는 강물처럼',
        price: 15300,
        author: '셀리 리드',
        bestYN: true
    },
    {
        title: '불변의 법칙',
        price: 22500,
        author: '모건 하우절',
        bestYN: false
    }
];
// -----------------------------------------------------------------------
// 📝출력 로직
for(let book of Books_Info){
    console.log(`제목 : ${book.title}
        작가 : ${book.author}`);
    if(!book.bestYN) console.log(`\t가격 : ${book.price}`); 
}