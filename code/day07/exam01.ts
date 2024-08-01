/* 
    [🔒문제]
        쇼핑몰 사용자 정보를 아래 조건에 맞는 사용자만 출력
        쇼핑몰 사용자 정보 - 계정명, 비밀번호, VIP여부, 마일리지

    [📝출력]
        🚩조건 - VIP 사용자
        🚩예외 - 마일리지가 음수인 사용자는 제외한 후 다음 사용자 동작
        
        출력 정보 - "[계정명] - 마일리지" 방식으로 출력
                     [1234] - 5000
*/
// 🔑Code
// -----------------------------------------------------------------------
// ▶ Vip 열거형(Enum) 정의
//   Vip.N → 0, Vip.Y → 1
enum Vip {
    N,
    Y
};
// -----------------------------------------------------------------------
// ▶ ShopUser 클래스(Class) 정의
class ShopUser {
    #userName: string;
    #userPw: string;
    #userVip: Vip;
    #userMileage: number;

    constructor(userName:string, userPw:string, userVip:Vip, userMileage:number){
        this.#userName = userName;
        this.#userPw = userPw;
        this.#userVip = userVip;
        this.#userMileage = userMileage;
    }

    set userName(userName:string){this.#userName = userName;}
    get userName():string{return this.#userName;}

    set userPw(userPw:string){this.#userPw = userPw;}
    get userPw():string{return this.#userPw;}

    set userVip(userVip:Vip){this.#userVip = userVip;}
    get userVip():Vip{return this.#userVip;}

    set userMileage(userMileage:number){this.#userMileage = userMileage;}
    get userMileage():number{return this.#userMileage;}
}
// -----------------------------------------------------------------------
// ▶ ShopUser 객체 생성
//   shopUsers 배열은 ShopUser 객체를 포함하는 배열
let shopUsers: ShopUser[] = [
    new ShopUser('권소현', '0116', Vip.Y, 500)
    ,new ShopUser('최은우', '5678', Vip.N, -100)
    ,new ShopUser('이지안', '1234', Vip.Y, 300)
];
// -----------------------------------------------------------------------
// 📝출력 로직
//    오류 처리 → userMileage(마일리지) 음수일 경우
for(let shopUser of shopUsers){
    try{
        if(shopUser.userMileage < 0) throw new Error('마일리지 음수 오류');
        if(shopUser.userVip ===  Vip.Y) console.log(`[${shopUser.userName}] - ${shopUser.userMileage}`);
    } catch(e){
        // console.log((e as Error).message);
    }
}



/* 
    [🔒문제]
        학생 성적부 정보를 아래 조건에 맞는 사용자만 출력
        학생 성적부 정보 - 이름, 학년, 반, 점수

    [📝출력]
        🚩조건 - 3학년 2반
        🚩예외 - 학년이 1~3 이 아니거나 / 반이 1~5가 아닌 사용자를 만나면 동작 멈춤
        
        출력 정보 - "이름[학년/반] - 점수" 방식으로 출력
*/
// 🔑Code
enum Grade {grade1=1, grade2=2, grade3=3, grade4=4, grade5=5, grade6=6};
enum Group {group1=1, group2=2, group3=3, group4=4, group5=5, group6=6, group7=7};

class Student {
    #name: string;
    #grade: Grade;
    #group: Group;
    #score: number;

    constructor(name:string, grade:Grade, group:Group, score: number){
        this.#name = name;
        this.#grade = grade;
        this.#group = group;
        this.#score = score;
    }

    set name(name:string){this.name = name;}
    get name():string{return this.#name;}

    set grade(grade:Grade){this.grade = grade;}
    get grade():Grade{return this.#grade;}

    set group(group:Group){this.group = group;}
    get group():Group{return this.#group;}

    set score(score:number){this.score = score;}
    get score():number{return this.#score;}
}

let students: Student[] = [
    new Student('권소현',Grade.grade3, Group.group2, 100)
    ,new Student('김서준',Grade.grade2, Group.group2, 100)
    ,new Student('유수아',Grade.grade3, Group.group2, 100)
    ,new Student('장민준',Grade.grade4, Group.group3, 100)
    ,new Student('정서윤',Grade.grade6, Group.group1, 100)
];


for(let student of students){
    if(student.grade === Grade.grade3 && student.group === Group.group2) console.log(`${student.name}[${student.grade}/${student.group}] - ${student.score}`);

    try{
        if(student.grade > Grade.grade3 || student.group > Group.group5) {throw new Error();}
    }catch(e){
        break;
    }
}