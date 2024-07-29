/* 
    [🔒문제]
        사용자 10명 중 조건에 맞는 사용자만 출력

        사용자 정보 - 이름, 나이, 직업, 성별

    [📝출력]
        🚩조건 - 여성, 사무직, 2-30대
        🚩조건 - 이름 홍길동, 남성
        ⛔오류 - 성별이 없거나 나이가 20세 이하인 경우 오류 이후 동작 멈춤
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ People 타입 정의
type People = {
    name: string,
    age: number,
    job: string,
    gender: '남성' | '여성'
};
// -----------------------------------------------------------------------
// ▶ peoples 객체 정의
let peoples: People[] =[
    {name: '권소현', age: 23, job: '사무직', gender: '여성'}
    ,{name: '김서준', age: 20, job: '간첩', gender: '남성'}
    ,{name: '이지안', age: 13, job: '사무직', gender: '여성'}
    ,{name: '박우진', age: 9, job: '양봉가', gender: '남성'}
    ,{name: '정서윤', age: 24, job: '사무직', gender: '여성'}
    ,{name: '최은우', age: 55, job: '사무직', gender: '남성'}
    ,{name: '조하린', age: 48, job: '교도관', gender: '여성'}
    ,{name: '홍길동', age: 26, job: '고문관', gender: '남성'}
    ,{name: '홍길동', age: 28, job: '사무직', gender: '여성'}
    ,{name: '장민준', age: 42, job: '테러', gender: '남성'}
];
// -----------------------------------------------------------------------
// ▶ ShowPeople 함수 정의
function ShowPeople(peoples: People[]){
    try {
        for(let people of peoples){
            // → 조건에 맞는 정보 출력
            if(people.gender=='여성' && people.job=='사무직' && (people.age>=20 && people.age<=39)){
                console.log(`[여성 + 사무직 + 2-30대]
                    성별 : ${people.gender}
                    직업 : ${people.job}
                    나이 : ${people.age}
                `);
            } else if(people.name=='홍길동' && people.gender=='남성') console.log(`[홍길동 + 남성] 성별 : ${people.gender} 직업 : ${people.job} 나이 : ${people.age}`);
            
            // → 오류 처리
            if(!people.gender || people.age<=20) throw new Error(JSON.stringify(people));
        }
    } catch(error){
                // → 오류 발생
                const Epeople = JSON.parse((error as Error).message);
                console.log(`[성별이 없거나 나이가 20세 이하인 경우 오류]
                    성별 : ${Epeople.gender}
                    직업 : ${Epeople.job}
                    나이 : ${Epeople.age}                    
                `);
    }
}
// -----------------------------------------------------------------------
// ▶ ShowPeople 함수 호출
ShowPeople(peoples);



/* 
    [🔒문제]
        책 10권 중 조건에 맞는 책만 출력

        책 정보 - 제목, 작가, 가격, 베스트셀러 여부

    [📝출력]
        🚩조건 - 가격 < 15,000, 베스트셀러
        🚩조건 - 작가가 생텍쥐페리인 경우 출력
        ⛔오류 - 가격이 음수인 경우 오류 이후 동작 멈춤
*/
// 🔑Code
type Book = {
    title: string,
    author: string,
    price: number,
    bestYN: boolean
};
let books: Book[] = [
    {title: '역행자', author: '자청', price: 19500, bestYN: true}
    ,{title: '구의 증명', author: '최진영', price: 10800, bestYN: false}
    ,{title: '돈의속성', author: '김승호', price: 9200, bestYN: true}
    ,{title: '어린 왕자', author: '생텍쥐페리', price: 8100, bestYN: true}
    ,{title: '모순', author: '양귀자', price: 11700, bestYN: false}
    ,{title: '하얼빈', author: '김훈', price: 15400, bestYN: true}
    ,{title: '데미안', author: '헤르만 헤세', price: -7200, bestYN: true}
    ,{title: '고래', author: '천명관', price: 13500, bestYN: false}
    ,{title: '밝은 밤', author: '최은영', price: -950, bestYN: true}
    ,{title: '환상서점', author: '소서림', price: 13950, bestYN: true}
]

function ShowBook(books: Book[]){
    try{
        for(let book of books){
            if((book.price>0 && book.price<15000) && book.bestYN) console.log(`제목 : ${book.title} 가격 : ${book.price} 베스트셀러 : ${book.bestYN}`);
            else if(book.author=='생텍쥐페리') console.log(`제목 : ${book.title} 작가 : ${book.author} 베스트셀러 : ${book.bestYN}`);
            else if(book.price < 0) throw new Error("가격 음수 오류");
        }
    } catch(e){
        console.log((e as Error).message);
    }
}

ShowBook(books);



/* 
    [🔒문제]
        동물 10마리 중 조건에 맞는 동물만 출력

        동물 정보 - 종, 몸무게, 키, 서식지

    [📝출력]
        🚩조건 - 서식지가 산, 바다, 강
        🚩조건 - 강아지, 고양이 출력
        ⛔오류 - 몸무게와 키가 음수인 경우 오류 이후 동작 멈춤
*/
// 🔑Code
type Animal = {
    species: string,
    weight: number,
    height: number,
    habitat: string
};
let animals: Animal[]= [
    {species: '레서판다', weight: 5, height: 60, habitat: '강'}
    ,{species: '토끼', weight: 10, height: 93, habitat: '들'}
    ,{species: '곰', weight: 350, height: 200, habitat: '산'}
    ,{species: '미꾸라지', weight: 23, height: 100, habitat: '강'}
    ,{species: '강아지', weight: 10, height: 60, habitat: '산'}
    ,{species: '수달', weight: 9, height: 110, habitat: '강'}
    ,{species: '고양이', weight: 10, height: 25, habitat: '산'}
    ,{species: '고래', weight: -700, height: -450, habitat: '바다'}
    ,{species: '해파리', weight: 200, height: 150, habitat: '바다'}
    ,{species: '늑대', weight: 45, height: 108, habitat: '들'}
]

function ShowAnimal(animals: Animal[]){
    try{
        const habitats = ['산', '강', '바다'];

        for(let animal of animals){
            if(animal.weight<0 && animal.height<0) throw new Error('몸무게&키 음수 오류');
            if(habitats.includes(animal.habitat)) console.log(`품종 : ${animal.species} 서식지 : ${animal.habitat}`);
            else if(animal.species=='강아지' || animal.species=='고양이') console.log(`품종 : ${animal.species}`);
        }
    }catch(e){
        console.log((e as Error).message);
    }
}

ShowAnimal(animals);