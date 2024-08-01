// ▶ 클래스 확장
/*
    클래스를 쓰다보면 중복작업을 꽤나 많이하는걸 알게 된다.

    → 클래스 소유방식
      클래스 소유 방식이 아닌 다른 방식으로 클래스의 중복을 없앨 수는 없을까?
      ...점점점 연결하는 방식 불편

    → 클래스 확장
      원래 존재하던 클래스에 추가적인 변수나 함수를 덧붙여서 확장하는 방식
    
*/

// ▶ 확장할 클래스
//    작은 클래스 → 보유될 클래스
class Name {    
    #name:string;
    constructor(data:string){
        this.#name = data;
    }
    get Name():string {return this.#name;}
    set Name(name:string) {this.#name = name;}
}

/*
    ▶ 클래스 확장·상속(Extends)
       파생 클래스를 생성하려면 extends 키워드를 사용합니다.

       Name을 확장해서 User를 만들겠다.
       Name이라는 정보에 User의 정보를 덧셈해서 User를 생성하겠다.
       [Name] + [User] ⇒ [User]

       → 생성자는 '무조건' 호출되어야 한다.
         class A {  constructor(){}  }

       → super체이닝
         생성자 연결을 해야한다.
*/
class User extends Name {
    pwd:string;
    constructor(name:string, pwd:string){
        // → super ⇒ 확장 전 클래스 지시자
        super(name);    // Name클래스의 생성자 constructor에 매개변수를 넘기고 실행하는 동작
        this.pwd = pwd;
    }
}
/*
class Product extends Name {
     constructor(){ Name생성자(); } 
    
        constructor(...args:any[]){
            super(..args);
        }
    
}
*/
let user: User = new User('이름','1234');
user.Name = '없음에도 불구하고';
console.log(user.Name);



/*
    ▶ 함수 오버로딩(Function Overloading)
       동일한 이름의 함수
       함수의 이름이 동일해도 구분되어서 호출되게 하는 기능
       단, 스크립트는 동작 안됨 (클래스에서는 됨)

       function Big(x:number, y:number):number {return x>y ? x : y;}
       function Big(x:number, y:number, z:number):number {return x>y ? x : y;}
*/
class OBJ {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    Show(){ console.log('name', this.name);}
}

class Fruit extends OBJ {
    count: number;
    constructor(name:string, count:number){
        super(name);
        this.count = count;
    }
    // Show(/* this:Fruit */){ console.log("Fruit Show");}
    Show(){ 
        super.Show();
        console.log('count', this.count);
    }
}

class Apple extends Fruit {
    sweet: number;
    constructor(name:string, count:number, sweet:number){
        super(name,count);
        this.sweet = sweet;
    }    
    // Show(/* this:Apple */){ console.log("Apple Show"); }
    Show(){ 
        super.Show();   // 함수 재귀적 호출
        console.log('sweet', this.sweet);
    }
}
// new Apple("",1,1).Show();
// new Fruit("",1).Show();
// new OBJ("").Show();



/*
    ▶ 클래스 다형성(Polymorphism)
        파생 클래스가 기본 클래스에 이미 정의된 메서드의 특정 구현을 제공할 수 있도록 하는 기술

        확장기능을 사용할 수 있게되면 생기는 특이한 구조
        [사과] ◀ [과일] + [빨갛다] + [동그랗다]

        클래스의 확장 관계에서는 위쪽의 클래스는 아래쪽의 클래스를 넣을 수 있다.
        Fruit = Apple 이 가능하다.
        a변수에는 Apple이 들어가있다.

        대신 Apple의 변수 sweet는 이용이 가능한가? → 불가
        console.log(a.sweet); // 불가

*/
let a:Fruit = new Apple("",1,1);
// 위쪽 클래스 변수에 아래쪽 클래스 확장의 실체를 넣으면
// 실체가 아래쪽 클래스의 존재라 하더라도 위쪽 클래스의 내용만 이용이 가능
console.log(a.count);
console.log(a.name);



/*
    ▶ 추상화 호출
       함수를 부를때는 super를 통해 부르거나 위쪽에만 존재하는 함수가 아니라면
       무조건 가장 아래에 있는 함수를 실행하도록 되어있다.
*/
a.Show();


class Top{
    Show(){
        console.log("TOP");
    }
}
class Bottom1 extends Top{
    Show(){
        console.log("Bottom1");
    }
}
class Bottom2 extends Top{
    Show(){
        console.log("Bottom2");
    }
}

let tops: Top[] = [
    new Bottom1(),
    new Bottom2(),
    new Bottom1(),
    new Bottom2(),
    new Bottom1(),
    new Bottom2()
];

for(let top of tops){
    top.Show();
}




class Names {
    name:string;
    constructor(){
        this.name = '이름';
    }
}
class Products extends Names{
    count:number;
    constructor(){
        super();
        this.count = 0;
    }
}
let b:Names = new Products();



/*
    ▶ 강제 형변환 (변수 as 자료형)
       상위 클래스에 하위 클래스의 실체를 넣었다 하더라도
       하위 클래스의 변수를 이용하고 싶을 때
       자기꺼 함수는 쓸 수 있는데, 자기꺼 필드는 사용을 못하니까 생김

       → 상위 클래스를 하위 클래스로 변경하는 기능
         강제 변환을 이용할 때는 해당 변환이 가능한지에 대한 검사 필요
         검사하지 않고 강제 변환하면 오류가 생길 수도 있기 때문


    ▶ 변환 가능 여부 확인 (변수 instanceof 자료형)
       → 해당하는 변수가 해당하는 자료형으로 변경이 가능한지 유무를 검사
*/
console.log(b instanceof Products); // true, false
(b as Products).count = 5;



// 일괄관리가 가능
class Book {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    Show(){
        console.log("제목 : ", this.name);
    }
}

class BestSeller extends Book{
    sellingCount:number
    constructor(name:string, sellingCount:number){
        super(name);
        this.sellingCount = sellingCount;
    }
    Show(){
        super.Show();
        console.log("베스트 셀러==========");
    }
}

class SteadSeller extends Book{
    sellingYear:number
    constructor(name:string, sellingYear:number){
        super(name);
        this.sellingYear = sellingYear;
    }
    Show(){
        super.Show();
        console.log("스테디 셀러==========");
    }
}

let books: Book[] = [
    new Book("책"),
    new BestSeller("어린왕자", 50000),
    new SteadSeller("수학의 정석", 300)
];

for(let book of books){
    book.Show();
}



/*
    ▶ 추상 클래스(Abstract Class)
       상위 클래스를 만들긴 했는데 만든 클래스가 사용되지는 않는 경우
       클래스는 클래스인데 일반 클래스가 아닌 확장을 위해서만 만들어진 클래스

    ▶ 추상 함수(Abstract Method)
       확장만을 위해서 만들어진 함수도 존재할 것이다.
       함수명만 있다.
       
*/
abstract class Books{
    // 추상 함수는 이름만 있고 동작이 없기 때문에
    // 확장 클래스에서 추상함수를 실제로 구현
    // 강제적으로 함수를 확장하도록하는 기능
    abstract Show():void;
}
// new Books();    // Error! → 왜냐? 확장을 위해서만 존재하기 때문에
class MysteryBook extends Books{
    Show(){};
}
class RomanceBook extends Books{
    Show(){};
}



/*
    ▶ 확장·상속은 1:1 (미연의 방지)

    → 다이아몬드 확장 문제
      다중확장은 다이아몬드 확장 문제 때문에 불가능 하다.
*/
// abstract class A{ abstract A():void; }
// abstract class B{ abstract A():void; }
// class extends A,B {}

// abstract class A { name:string; }
// class B extends A {}
// class C extends A {}
// class D extends B,C {}  // name이 2개니까 뭘 써야 하지 하는거임?



/*
    ▶ 인터페이스(Interface)
       → implements 키워드로 확장한다.
         일반적인 변수나 함수를 넣을 수 없고
         추상 함수만 넣을 수 있는 클래스 → 일반 클래스처럼 확장하면 안된다.(implements)

       어차피 모두 추상함수기 때문에 abstract 키워드는 생략
       다중 확장 가능 (겹칠일이 없기 때문)
*/
interface A{
    Show():void;
}
interface B{
    Show2():void;
}
class D{}

class C extends D implements A, B{
    Show(): void {}
    Show2(): void {}
}

let d:A = new C();



interface AutoClosable{
    close():void;
}
interface AutoOpener {
    open():void;
}

class S implements AutoClosable, AutoOpener{
    close(): void {
        console.log("클로즈");
    }
    open(): void {
        console.log("오픈");
    }
}

let variable:AutoClosable[] = [];
// let variable:AutoClosable[] = [new S()];
let q:S = new S();
variable = [q];

for(let closable of variable){
    closable.close();
}