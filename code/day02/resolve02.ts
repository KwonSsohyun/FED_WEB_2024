/* 
    [🔒문제]
        상품 입력

        상품 정보       → 이름/등록일(문자열)/개수/가격/할인율/구매평/평점
        구매평 정보     → 유저명, 점수, 평가내용
        유저 정보       → 유저명, 가입일, 구매내역, 주소, 성별, 전화번호, 주민번호
        구매내역 정보   → 구매상품내역들(배열), 총가격, 배송지 주소
        구매상품 내역   → 각 개당 상품이름, 개수

    [📝출력]
        데이터타입을 정한다.
*/
// 🔑Code
type product = {
    name: string,
    date: string,
    count: number,
    price: number,
    discount: number,
    review: string,
    grade: number
}