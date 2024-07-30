// ▶ 클래스(Class)
/*
    함수와 함께 이용하는 것 → 변수
    함수를 이용할 때 변수와 함께 이용하는 경우가 매우 많은데
    문제는 그러다보니 매개변수가 많아진다.

    함수의 매개변수의 역할은 단순히 해당하는 필요정보가 존재하는지 존재 여부를 확신하지 못한다.
    존재 여부를 확실하게 알 수 있다면 → 매개변수가 필요 없을 수 있다.

    함수를 이용할 때 매개변수가 필수적인데 작성이 귀찮다.
    그렇다면 매개변수가 필요 없도록 변수의 존재를 확실하게 알려주는 자료형

    Class
    연관된 변수와 함수를 한개의 변수로 묶어넣은 객체형 변수
    일반적인 객체형 변수와는 다른 목적

    
*/
/*
    일반적인 객체형 변수와 다르게 자료형 작성법부터가 다르다.
    type People = {
        name: string
    }
*/



// ▶ 클래스형
/*
    ● People 클래스
      age라는 변수와 A라는 함수 그리고 constructor라는 생성자 함수를 가지는 객체형 자료형
      그리고 A라는 함수와 constructor라는 함수는 this라는 변수가 바인딩 되어서
      굳이 매개변수로 넘길 필요 없이 해당 클래스의 내용물에 직접 접근이 가능

    ● People 객체 생성
      클래스형 자료형의 실제 변수를 만드는 방법 => 꽤나 특이
      new ClassName();  실제 클래스 변수가 생성되고 생성자 함수가 실행
      new를 하기 전에는 실체가 존재하지 않는다.
*/

class People {
    // ▷ 변수와 함수를 등록

    // → 변수 추가
    age: number;

    // 변수가 만들어지자마자 값을 넣는 것을 어떻게 하는가?
    // ❌ a:function ~(){} → 클래스는 함수까지 포함한 모양이 고정된 모양 함수를 뺄 수 없다.
    // ⭕ A(){}

    
    // ▷ 생성자(constructor)
    // 이 클래스 변수가 생성될 때 자동으로 실행되는 함수
    constructor(/* 매개변수 1번이 포함 this */){
        this.age = 0;
    }

    A():void {
        console.log('함수를 클래스에 추가할 수 있다');
    }
}

// let people: People;              // People 실제 변수가 들어갈 수 있는 공간 변수
let people: People = new People();

console.log(people);
people.age = 29;
console.log(people);
people.A();



class Book {
    title: string;
    price: number;

    // 생성자에는 초기값을 한방에 초기화하기 위한 매개변수를 넣을 수 있다.
    constructor(title:string, price:number){
        this.title = title;
        this.price = price;
    }

    Show(){
        console.log(`제목 : ${this.title}`);
        console.log(`제목 : ${this.price}`);
    }
}

// new ClssName() 실체가 만들어질 때 → 괄호 안에 생성자의 (매개변수)를 적으면
// 생성자에 매개변수값을 전달할 수 있다.
let book: Book = new Book('어린왕자', 5000);
book.Show();

let book2: Book = new Book('매개변수', 4500);
book2.title = "변경"
book2.Show();



// 클래스를 이용하면 내가 원하는 값으로 변수들을 초기화하는 것도 편리
class Board {
    title: string;
    author: string;
    date: string;

    constructor(title:string, author:string, date:string){
        this.title = title;
        this.author = author;
        this.date = date;
    }
}

let board = new Board("제목", "작성자", "20240730");



// ---------------------------------------------------------------------
/*
    ▶ 캡슐화
*/ 
class User {
    // ▶ 보안변수(캡슐화)
    //    유지보수를 위해 캡슐화를 할때 함수를 통해서만 동작하도록
    //    직접적으로 변수에 접근하는걸 막아야한다.
    //    변수 이름 앞에 #을 붙혀서 보안 변수
    //    클래스 내부에 작성하는 변수 앞에 #을 붙히면 해당하는 변수는
    //    클래스 안에서만 이용 가능하다.
    #id: string;
    #pw: string;

    constructor(id:string, pw:string){
        this.#id = id;
        this.#pw = pw;
    }

    // ▶ setter, getter(캡슐화)
    get ID():string{
        return "c##"+ this.#id;
    }
    get PW():string{
        return this.#pw;
    }

    // set은 return type이 존재하면 안된다.
    // 함수 앞에 set을 붙히거나 get을 붙히면 setter, getter 함수가 된다.
    set ID(id:string){
        this.#id = id;
    }
    set PW(pw:string){
        this.#pw = pw;
    }
}

let user: User = new User("아이디", "비번");
// console.log(user.getID());

// '#id' 속성은 프라이빗 식별자를 포함하기 때문에 'User' 클래스 외부에서 액세스할 수 없습니다.ts(18013)
// console.log(user.#id);

// user.setID("thgus");
// user.setPW("1234");



/*
    ▶ setter, getter 메서드

    클래스를 캡슐화하면 일반적인 방법으로 변수에 접근은 불가능하고
    함수를 통해서만 변수에 접근할 수 있는데
    접근을 통제하는건 좋지만 작성을 하는게 너무 귀찮다. (괄호를 매번 작성)

    괄호를 적을 필요 없이
    get함수와 set함수는 일반 변수처럼 이용할 수 있도록 만드는
    getter, setter 메서드 방식

    이런것처럼 일반적인 변수의 방식으로 이용할 수 있도록하는 기능
    user.setID = "값";  
*/

user.ID = "아이디";     // user.ID("아이디");
console.log(user.ID);   // console.log(user.ID());



class Fruit {
    #name: string;
    #price: number;

    constructor(name:string, price:number){
        this.#name = name;
        this.#price = price;
    }

    set Name(name:string) { this.#name = name; }
    set Price(price:number) { this.#price = price; }

    get Name():string { return this.#name; }
    get Price():number { return this.#price; }
}



// ---------------------------------------------------------------------
/*
    이넘(Enums) - 열거형
    이넘은 특정 값들의 집합을 의미하는 자료형
*/
enum Color {
    Black,
    White,
    Red,
    Blue,
    Green
}
// 열거형은 사용할 때는 글자
// 하지만 실제 저장은 숫자로 저장된다.
let color: Color = Color.Black;

// ---------------------------------------------------------------------
enum Gender {
    Male,
    Female
}

class Saram {
    #gender: Gender;

    constructor(gender:Gender){
        this.#gender = gender;
    }

}

new Saram(Gender.Male);
// ---------------------------------------------------------------------
/*
    class Saram {
        #gender: number;

        constructor(gender:"남성" | "여성"){
            if(gender == '남성') this.#gender = 0;
            else this.#gender = 1;
        }

        set Gender(gender:"남성" | "여성"){
            if(gender == '남성') this.#gender = 0;
            else this.#gender = 1;
        }

        get Gender():"남성" | "여성" {
            if(this.#gender = 0) return "남성" 
            else return "여성";
        }

    }
*/




// 3명의 사람을 입력한 후 아래의 조건에 맞는 사람만 출력
    // 사람 정보    - 이름, 나이, 직업, 성별
    // 조건         - 20 < 나이 < 50, 직업 직장인
    // 예외         - 나이가 음수인 사람이 선택되면 해당 사람을 제외하고 다음 사람 동작
enum Genders {
    남성,
    여성
};

enum Job{
    직장인, 결정사, 쇼호스트, 배우, 모델, 가수, 아이돌, 기업가
};

class Peoples {
    #name: string;
    #age: number;
    #job: Job;
    #gender: Genders;

    constructor(name:string, age:number, job:Job, gender:Genders){
        this.#name = name;
        this.#age = age;
        this.#job = job;
        this.#gender = gender;
    }

    set Name(name:string) {this.#name = name;}
    get Name():string {return this.#name;}

    set Age(age:number) {this.#age = age;}
    get Age():number {return this.#age;}

    set Job(job:Job) {this.#job = job;}
    get Job():Job {return this.#job;}

    set Gender(gender:Genders) {this.#gender = gender;}
    get Gender():Genders {return this.#gender;}
}

let peoples: Peoples[] = [
    new Peoples('홍길동', 44, Job.가수, Genders.남성),
    new Peoples('권소현', 29, Job.직장인, Genders.여성),
    new Peoples('이리나', 19, Job.직장인, Genders.남성)
];

for(let people of peoples){
    try{
        if(people.Age < 0) throw new Error("음수 나이");
    } catch(e) { continue; }

    if(!(people.Age > 20 && people.Age < 50 && people.Job == Job.직장인)) continue;
    console.log('출력');
    console.log(people.Name);
    console.log(people.Age);
    console.log(people.Job);
    console.log(people.Gender);
}

