const user = {
    id: 'root',
    pw: '1234'
};

console.log(user.id); // root
console.log(user.pw); // 1234



// ▶ 객체형 프록시(Proxy)
/*
const handler = {
    get(origin, props){
        if(props == 'pw') return '******';
        else if(props == 'realpw') return origin.pw;
        else return origin[props];
    },
    set(origin, props, value){
        if(props == 'pw') return;
        else origin[props] = value;
        // origin.pw = 'abcd';
    },
    has(origin, props){
        if(props == 'pw') return false;
        return true;
    },
    deleteProperty(origin, props){
        delete origin[props];   // 오브젝트형 (undefined) - 배열에서 많이 안쓰고 객체에서 씀
    }
}

const userP = new Proxy(user, handler);

userP.id = 'admin';
userP.pw = '7890';

console.log(userP.id);      // root     // admin
console.log(userP.pw);      // ******
console.log(userP.realpw);  // 1234

console.log('id' in userP); // true
console.log('pw' in userP); // false

delete userP.id;

console.log(userP.id);  
console.log(userP.pw);
console.log(userP.realpw);
*/



// ▶ 함수형 프록시(Proxy)
/*
function minmax(min, max) {
    for(let i=min; i<=max; i+=1) {
        console.log(i);
    }
}

function T(){}
const handler = {
    apply(origin, thisArg, args){
        const [min, max, ...losts] = args;
        if(min < max) return origin(min, max);
        else return origin(max, min);

        T.bind(thisArg);
    }
}

const mm = new Proxy(minmax, handler);

// minmax(3, 5);
// minmax(5, 3);
mm(5, 3);   // 3 4 5
*/



// ▶ 함수형 프록시(Proxy)
//    class A { constructor(){} } 
//    → 함수를 클래스처럼 이용하기
/*
function Person(name, age){
    this.name = name;
    this.age = age;
}

const handler = {
    construct(origin, args, newTarget) {
        return Reflect.construct(origin, args, newTarget);
        // origin(...args);
        // console.log(newTarget);
        // return newTarget;
    }
}

const person = new Proxy(Person, handler);
// const p = new person();
const p = new person('소현', '29');
console.log(p);
*/



// ▶ 데이터베이스 스키마에도 사용함
/*
const schema = {
    name: 'string'
};

new schema();
*/



// 0보다 작은 수 못 넣기
// → 이럴때 프록시를 사용한다.
//   이미 있는 값은 보존하면서 변경하기
/*
const utillity_origin = {
    data: 50
};

const handler = {
    set(origin, props, value) {
        if(props == 'data') {
            if(value < 0){
                origin[props] = 0;
            } else {
                origin[props] = value;
            }
        }
    }
}

const utillity = new Proxy(utillity_origin, handler);

console.log(utillity.data); // 50

utillity.data = -50;
console.log(utillity.data); // 0
utillity.data = 70;
console.log(utillity.data); // 70
*/



// ▶ 읽기전용 객체
function readOnly(origin){
    return new Proxy(origin, {
        set(origin, props, value) { return; }
    })
}
// ▶ 읽기전용 함수
function readOnlyFunc(func){
    return new Proxy(func, {
        apply(origin, thisArg, args) {
            origin(...args.map(v=>readOnly(v)));
        }
    })
}

function test(user){
    user.id = '1234';
    console.log(user);
}


// const users = {id:'root', pw:'1234'};
// users.id = 'admin';
// console.log(users);


// 읽기전용 객체
const readusers = readOnly({id:'root', pw:'1234'});
readusers.id = 'admin';
console.log(readusers); // {id: 'root', pw: '1234'}


// 읽기전용 함수
const testP = readOnlyFunc(test);
testP(readusers);