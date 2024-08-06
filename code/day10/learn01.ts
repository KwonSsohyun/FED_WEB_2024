// ▶ 비동기(Asynchronous)
/*
    관리하는 정보 → 중요한 정보
    프론트엔드(Front-End)에서 많이하는 DB대신 정보 관리 요소 → 웹사이트에 데이터를 만들어두고 연결

    ▶ 허깅페이스 Hugging Face(데이터베이스셋)
       웹사이트 특정 경로에 있는걸 그냥 가져와 → 로딩이 길어짐
       "대용량" 데이터인 상황이 많다.
       대용량의 정보를 웹에서 가져올 때 단순히 가져오는건 의미가 없다.
       올바른 정보만 추출해서 가져와야 하는데
       이때 대용량의 정보를 그냥 가져오면 속도가 느려진다. → 사이트가 멈춘것처럼 보인다.

       대용량의 정보는 일반 정보와 별개로 
       "비동기"화해서 가져와야할 필요성이 있다.


    ▶ 비동기(Asynchronous)
       동시성 작업 → 비동기 처리
       동시에 작업을 하는 방법

       4가지 방법 ▶ setInterval, setTimeout(함수형 비동기), Worker(메시지형 비동기), Promise(콜백형 비동기)


    ▶ 함수형 비동기(setInterval, setTimeout)
       함수형 비동기의 동작 원리는 무엇인가?
       비동기 처리의 핵심 → 동시에 어떤 작업을 하는 것
       직접 비동기를 만드는 건 생각 이상으로 매우 어려운 일

       → 함수형 비동기
         스크립트에서는 비동기를 사용만할 수 있도록 함수를 만들어 뒀다.
         그렇다면 함수형 비동기의 매개변수에 무엇을 넣어야 하는가?
         비동기로 처리하고싶은 → 동작(함수)과 시간(숫자)
         
         setInterval(); → 내가 지정한 시간마다 행동을 반복한다.
         setTimeout();  → 내가 지정한 시간이 지난후에 행동을 실행 한다.(한 번만)



    ▶ 프로미스 콜백 비동기(Promise)
       적자마자 바로 바로 시작하는 것
       일정시간 뒤에 비동기 동작이 실행되는 것이 아닌
       시간과의 연관성 없이 작성하자마자 바로 실행되는 비동기가 필요해졌다.

*/

/*
    ▶ 함수형 비동기(setInterval, setTimeout)
       → setInterval() 내가 지정한 시간마다 행동을 반복한다.
       → setTimeout() 내가 지정한 시간이 지난후에 행동을 실행 한다.(한 번만)
       
       비동기로 처리하고싶은 → 동작(함수)과 시간(숫자)
*/

// ▶ setInterval()
/*
setInterval(()=>{
    console.log("동작하고 싶은 내용 - setInterval");
}, 5000);
*/
// console.log("함수형 비동기 다음에 적힌 출력");

// ▶ setTimeout()
/*
setTimeout(()=>{
    console.log("동작하고 싶은 내용 - setTimeout");
}, 5000);
*/





/*
    ▶ 프로미스 콜백 비동기(Promise)
       콜백(CallBack) 방식
       무언가의 인터랙티브가 동작한 후 다음 동작이 이어지는 것

       → 비동기가 끝난 후 비동기가 이어지는 구조(연속적)

         도서부원 5명
         A는 1권을 읽는 3시간
         B는 1권을 읽는 2시간
         C는 1권을 읽는 1시간
         D는 1권을 읽는 4시간
         E는 1권을 읽는 3시간

       → 앞선 비동기가 끝날때까지 기다렸다가 다음 비동기가 동작하도록 만든다.(연계)   
         콜백 비동기는 순서가 중요한 비동기 동작을 구현할 때 많이 이용

       → 그렇다면 어떻게 콜백 비동기를 작성하고 사용하는가?
         Promise 콜백 비동기가 어떤 자료형인지가 중요
         new Promise( 동작할 함수구현 )

       → 프로미스(Promise)에서 성공했을 때의 비동기와
         실패했을 때의 비동기를 연결하기 위해서는 "메서드 체이닝"
        
         프로미스는 기본적인 비동기 동작을 하고
         resolve    => then 으로  이동해서 new Promise(비동기)
         reject     => catch 으로 이동해서 new Promise(비동기)

*/
new Promise((
    // 이름이 중요한게 아니고 순서가 중요 (성공, 실패)
    resolve,    // ▶ "성공" 했을 때 사용될 콜백
    reject      // ▶ "실패" 했을 때 사용될 콜백
)=>{ 
    // 콜백형 비동기는 언제나 다음 동작이 동작될 수 있는건 아니다.
    // 앞선 비동기가 알 수 없는 오류나 오염된 정보로 인해 문제가 생길 수 있다.
    // 뒤에 있는 비동기도 동작을 할 수 없을 것
    // 비동기가 성공했을 때의 콜백과 실패했을 때의 콜백을 따로 지정
    console.log("비동기로 바로 동작");

    // ▶ 둘 중 한개만 불러야 한다.
    if(true){
        // → "성공" 했을 경우
        resolve("값");

    } else{
        // → "실패" 했을 경우
        reject();
    }

}) // 비동기가 동작한다.
.then(()=>{
    // ▶ 성공했을때의 비동기 콜백
    console.log("성공했을때의 비동기 콜백");
})
.catch(()=>{
    // ▶ 실패했을때의 비동기 콜백
    console.log("실패했을때의 비동기 콜백");
})

console.log("비동기가 아닌 동작");



// 이어나갈 수 있다.
new Promise((resolve, reject)=>{
    console.log("비동기 동작 11111111");
    resolve("값");       // → 성공 시
    // reject();            // → 실패 시  
})
.then((data)=>{
    console.log(data);
    // ▶ 성공했을때의 비동기 콜백
    console.log("비동기 동작 22222222");
    return "값2"; // 값을 서로서로 연계
})
.then((data)=>{
    console.log(data);
    // ▶ 성공했을때의 비동기 콜백
    console.log("비동기 동작 33333333");
})
.catch(()=>{
    console.log("비동기 실패 시 111111");
})
.then(()=>{
    console.log("비동기 실패 시 222222");
    throw new Error("에러 발생");
})
.catch(()=>{
    console.log("비동기 실패 시 333333");
})
.finally(()=>{  // then과 동일 (마지막)
    console.log("마지막");
});





/*
    ▶ Async/Await 구문
       → 프로미스(Promise) 비동기를 동기화할 수 있으며 
         쉽게 작성하는 async/await

       → async/await 문법을 사용하면 비동기 코드를 마치 동기 코드처럼 읽고 쓸 수 있으며, 
         이는 개발자의 인지 부담을 줄이고 코드의 가독성을 높이기 때문입니다.


    ▶ async 함수
       → 함수앞에는 async 키워드가 접두어로 붙습니다.
       → 해당 함수 프로미스(Promise)로 만들거야 라는 뜻


    ▶ await 키워드
       → 함수명 앞에 async를 붙인 함수 안에서만 
         await을 사용할 수 있다.
       → await 키워드는 프로미스가 해결될 때까지 함수의 실행을 일시 중지합니다.
       → await의 동작은 Promise비동기가 끝날 때까지 기다린 다음에 결과값을 가져오는 기능

*/
async function A(){
    // 동작을 ~~~
    return "Hello";
}
// console.log(A());   // Promise { 'Hello' }

// 아무런 함수에도 속하지 않은 공간에서는 Top-Level 이라고 해서
// await가 이용 가능
async function B(){
    let a:string = await A();
    console.log(a);
}

B();    // Hello

let c = B();
console.log('c', c);    // Hello





/*
    ▶ Fetch API - 기본 자바스크립트 함수
    외부사이트에서 정보를 가져오는 행동을 비동기로 만들어야 하는데
    직접 만드는건 생각 이상으로 어렵기 때문에
    이미 만들어진 외부 사이트 정보 획득 비동기 함수(async 함수)

*/
fetch('https://huggingface.co/datasets/HuggingFaceTB/smollm-corpus/raw/main/.gitattributes')
    .then((data)=>{
        return data.text();
    })
    .then((data)=>{
        console.log(data);
    })

// 비동기를 이용한 웹사이트를 읽어오는 방법
async function Crawl(url:string){
    let data:string = await fetch(url).then(v=>v.text());
    console.log(data);
}
Crawl('https://huggingface.co/datasets/HuggingFaceTB/smollm-corpus/raw/main/.gitattributes');





// SPA에 특화(React)        => Single Page Application      (사용자가 느끼는 속도 느림, 서버 성능 저사양)
// MPA(JSP, PHP, ...)       => Multiple Page Application    (사용자가 느끼는 속도 빠름, 서버 성능 고사양)
// React에서도 MPA가 존재   => 리액트 라우터(React-Router)





// v.json
// https://www.reddit.com/r/ireland/new.json
// 서버로부터 정보를 받아온 후 정보중 
async function FirstChar(url:string){
    // 첫글자만 떼어서 출력
    let data:string = await fetch(url).then(v=>v.text());
    // console.log(data.charAt(0));

    // 각 줄을 줄별로 따로 배열로 출력
    let lines: string[] = data.split("\n").filter(v=>v.length);
    console.log(lines);

    // 각줄 띄어쓰기별로 구분 배열화
    let tokens: string[][] =
        lines.map(v=>[v.split("")[0], v.split("")[1]]);
    console.log(tokens);
}

FirstChar('https://huggingface.co/datasets/lewtun/dog_food/raw/main/dataset_infos.json');