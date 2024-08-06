/* 
    [🔒문제]
        책을 관리하는 관리 프로그램 제작

        책 정보 - 이름, 작가, 가격, 개수
        책 종류 - 일반 책, 베스트셀러, 스테디셀러, 종교서적, 국가금서

        베스트셀러 정보 - 책정보 + 총 판매부수
        스테디셀러 정보 - 책정보 + 총 판매연도수
        종교서적 정보   - 책정보 + 종교이름
        국가금서 정보   - 책정보 + 금지국가이름

    [📝출력]
        위 책들을 종류별 최소 1권씩 입력한 후 관리하는 관리 프로그램
        모든 책의 총 개수 출력
        모든 책의 총 가격 출력
        모든 책 중 베스트셀러들의 총 판매부수
        모든 책 중 스테디셀러들의 평균 판매연도수

*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶▶▶ 기본 클래스와 인터페이스 정의
// -----------------------------------------------------------------------
// ▶ BookInfo 기본 책 정보 - 인터페이스(Interface) 정의
//   ☞ 책의 기본 정보를 정의하는 인터페이스
interface BookInfo {
    title: string;  // 책 제목
    author: string; // 책 저자
    price: number;  // 책 가격
    ea: number;     // 책 개수
    releaseYear?: number; // 선택적 속성
}

// ▶ Book 기본 - 클래스(Class) 정의
//   ☞ 책의 기본 정보를 저장하고 이를 관리하는 클래스
class Book implements BookInfo {
    // 책의 기본 정보를 저장하는 속성
    #_title: string;
    #_author: string;
    #_price: number;
    #_ea: number;
    #_releaseYear?: number; // 선택적 속성

    constructor(title:string, author:string, price:number, ea:number, releaseYear?: number){
        this.#_title = title;
        this.#_author = author;
        this.#_price = price;
        this.#_ea = ea;
        this.#_releaseYear = releaseYear; // 선택적 속성 초기화
    }

    // setter getter 메서드
    set title(title:string) {this.#_title = title;}
    get title():string {return this.#_title;}

    set author(author:string) {this.#_author = author;}
    get author():string {return this.#_author;}

    set price(price:number) {this.#_price = price;}
    get price():number {return this.#_price;}

    set ea(ea:number) {this.#_ea = ea;}
    get ea():number {return this.#_ea;}

    // 선택적 속성의 getter 및 setter 추가
    set releaseYear(releaseYear: number | undefined) { this.#_releaseYear = releaseYear; }
    get releaseYear(): number | undefined { return this.#_releaseYear; }

    getDetails(): string {
        return `Title: ${this.#_title}, Author: ${this.#_author}, Price: ${this.#_price}, Quantity: ${this.#_ea}`;
    }

}



// -----------------------------------------------------------------------
// ▶▶▶ 책 종류별 정보 클래스
// -----------------------------------------------------------------------
// ▶ BestSeller 베스트셀러 정보 - 클래스(Class) 정의
//   ☞ Book을 상속받아 베스트셀러의 총 판매부수를 관리
//     → 책정보 + 총 판매부수
class BestSeller extends Book{
    constructor(title:string, author:string, price:number, ea:number){
        super(title, author, price, ea);
    }
}



// ▶ SteadtSeller 스테디셀러 정보 - 클래스(Class) 정의
//   ☞ Book을 상속받아 스테디셀러의 판매 연도를 관리
//     → 책정보 + 총 판매연도수
class SteadtSeller extends Book{

    constructor(title:string, author:string, price:number, ea:number, releaseYear: number){
        super(title, author, price, ea, releaseYear);
    }

    getDetails():string {
        return `${super.getDetails()}, Release Year: ${this.releaseYear}`;
    }
}



// ▶ ReligionBook 종교서적 정보 - 클래스(Class) 정의
//   ☞ Book을 상속받아 종교서적의 정보를 관리
//     → 책정보 + 종교이름
enum ReligionType {
    기독교 = "기독교",
    유대교 = "유대교",
    이슬람교 = "이슬람교",
    힌두교 = "힌두교",
    불교 = "불교",
    유교 = "유교"
}
class ReligionBook extends Book{
    private religionType: ReligionType;     // 종교 이름을 저장할 속성 

    constructor(title:string, author:string, price:number, ea:number, religionType:ReligionType){
        super(title, author, price, ea);
        this.religionType = religionType;   // 종교 이름 설정
    }

    // 종교 이름을 반환하는 메서드
    getReligionType(): ReligionType{
        return this.religionType;
    }

    getDetails():string {
        return `${super.getDetails()}, Religion Type: ${this.religionType}`;
    }
}



// ▶ BannedBook 국가금서 정보 - 클래스(Class) 정의
//   ☞ Book을 상속받아 국가금서의 정보를 관리
//     → 책정보 + 금지국가이름
enum BannedType {
    북아메리카 = "북아메리카", 
    남아메리카 = "남아메리카",
    유럽 = "유럽",
    아프리카 = "아프리카",
    아시아 = "아시아",
    오세아니아 = "오세아니아"
}
class BannedBook extends Book{
    private bannedType: BannedType;     // 금지 국가 이름을 저장할 속성

    constructor(title:string, author:string, price:number, ea:number, bannedType:BannedType){
        super(title, author, price, ea);
        this.bannedType = bannedType;   // 금지 국가 이름 설정
    }

    // 금지 국가 이름을 반환하는 메서드
    getBannedType(): BannedType{
        return this.bannedType;
    }

    getDetails():string {
        return `${super.getDetails()}, Banned Type: ${this.bannedType}`;
    }
}



// -----------------------------------------------------------------------
// ▶▶▶ 제네릭 관리 클래스
// -----------------------------------------------------------------------
// ▶ BookManager 제네릭 관리 - 클래스(Class) 정의
//   ☞ 제네릭을 사용하여 Book 또는 Book을 상속받는 객체를 관리
class BookManager<T extends Book>{
    private books: T[] = [];    // 책을 저장할 배열

    constructor(initialBooks: T[]=[]) {
        this.books = [...initialBooks]; // 초기 책 배열 복사
    }

    // ▶ 책을 배열에 추가하는 메서드
    addBook(book: T){
        this.books.push(book);
    }
    // ▶▶ 여러 권의 책을 배열로 추가하는 메서드
    addBooks(books: T[]){
        this.books.push(...books);  // 배열의 요소를 개별 인자로 변환하여 추가
    }
    // ▶ 저장된 책 반환
    getBook(): T[]{
        return this.books;
    }


    // ▶▶ 모든 책의 상태를 문자열로 반환하는 메서드
    getBookDetails():string {
        // map으로 각 책의 세부 정보를 얻고, join으로 배열을 문자열로 변환
        return this.books.map(function(ele){
            // 각 책의 세부정보와 카테고리명 붙여 반환
            // return ele.getDetails();    // 각 책의 세부 정보를 문자열로 반환
            if(ele instanceof BestSeller) return `베스트셀러: ${ele.getDetails()}`;
            else if(ele instanceof SteadtSeller) return `스테디셀러: ${ele.getDetails()}`;
            else if (ele instanceof ReligionBook) return `종교서적: ${ele.getDetails()}`;
            else if (ele instanceof BannedBook) return `국가금서: ${ele.getDetails()}`;
            else return `기타: ${ele.getDetails()}`;
        }).join(`\n`);  // 각 세부 정보를 줄바꿈으로 연결
    }


    // ▶ 총 책 판매 갯수
    getTotalCnt():number {
        // arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
        // 배열.reduce(callback(누적값, 현재값, 인덱스, 요소), 초기값);
        return this.books.reduce(function(totcnt, book){
            return totcnt + book.ea;   // 누적 계산을 위한 값
        },0);                       // 'reduce' 메서드의 최종 결과
    }


    // ▶ 총 책 가격
    getTotalPrice(): number {
        return this.books.reduce(function(totprice, book){
            return totprice + book.price;   // 누적 가격 계산
        },0);
    }


    // ▶ 베스트셀러들의 총 판매부수
    getBestSellerTotalCnt(): number {
        return this.books
            .filter(function(book){ 
                return book instanceof BestSeller; // book이 BestSeller의 인스턴스인 경우에만 true를 반환하여 새로운 배열을 만든다.
            })
            .reduce(function(totcnt, book){
                return totcnt + book.ea;   // 누적 계산을 위한 값
            },0);
    }


    // ▶ 스테디셀러들의 평균 판매연도수
    getSteadtSellerReleaseYears(): number {
        return this.books
        .filter(book => book instanceof SteadtSeller)                       // SteadtSeller 객체만 필터링
        .reduce((totcnt, book) => totcnt + (book.releaseYear || 0), 0)      // releaseYear 합산 (releaseYear가 정의되지 않았을 때 0을 기본값으로 설정하여 연산에 오류가 발생하는 것을 방지)
        / this.books.filter(book => book instanceof SteadtSeller).length;   // 평균 계산
    }
}



// -----------------------------------------------------------------------
// ▶▶▶ 객체 생성 및 관리
// -----------------------------------------------------------------------
// ▶ 책 종류별 객체 생성(여러 권의 객체를 배열로 관리)
//   → 베스트셀러(BestSeller) - 객체 생성
const bestSellers: BestSeller[] = [
    new BestSeller("사장학개론", "김승호", 22500, 12)
    , new BestSeller("퓨처셀프", "벤저민하디", 17820, 20)
    , new BestSeller("내면소통", "김주환", 29700, 8)
];

//   → 스테디셀러(SteadtSeller) - 객체 생성
const steadtSellers: SteadtSeller[] = [
    new SteadtSeller("모순", "양귀자", 11700, 10, 2013)
    , new SteadtSeller("모순", "양귀자", 11700, 50, 1998)
    , new SteadtSeller("모순", "양귀자", 11700, 30, 2023)
];

//   → 종교서적(ReligionBook) - 객체 생성
const religionBooks: ReligionBook[] = [
    new ReligionBook("조직신학", "웨인그루뎀", 67500, 20, ReligionType.기독교)
    , new ReligionBook("번뇌촛불", "월인", 22500, 10, ReligionType.불교)
    , new ReligionBook("리부의 노래", "리부", 23400, 40, ReligionType.힌두교)
];

//   → 국가금서(BannedBook) - 객체 생성
const bannedBooks: BannedBook[] = [
    new BannedBook("라마나의 가르침", "바가반", 18000, 30, BannedType.아프리카)
    , new BannedBook("힌두의 모든 것", "스와미", 13500, 10, BannedType.유럽)
    , new BannedBook("아임 앰 댓", "대성", 27000, 20, BannedType.아시아)
];



// ▶ BookManager 객체 생성 / 데이터 추가
//   ☞ BookManager는 제네릭 클래스이며, 책을 관리하는 역할을 합니다. 
//     여기서는 BookManager 객체를 생성하고, 위에서 생성한 다양한 책 배열을 추가합니다.
//     addBooks 메서드를 사용하여 여러 권의 책을 한 번에 추가합니다.
const bookManager = new BookManager<Book>();
bookManager.addBooks(bestSellers);
bookManager.addBooks(steadtSellers);
bookManager.addBooks(religionBooks);
bookManager.addBooks(bannedBooks);



// -----------------------------------------------------------------------
// ▶▶▶ 데이터 출력
// -----------------------------------------------------------------------
console.log("모든 책 : ", bookManager.getBookDetails());
console.log("모든 책 → 개수 : ", bookManager.getTotalCnt());    // 260

console.log("베스트셀러 → 총 판매부수 : ", bookManager.getBestSellerTotalCnt());    // 40
console.log("스테디셀러 → 평균 판매연도수 : ", bookManager.getSteadtSellerReleaseYears());  // 2011.333