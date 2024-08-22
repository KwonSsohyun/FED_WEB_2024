// ▶ 리액트 훅(React Hooks)
/*
     리액트에서 리액트스럽게 무언가를 만들기 위해서 필요한 것
     사용자의 입력에 대한 반응 → 이벤트

     ▶ 이벤트
        사용자가 액션을 취하면 그에 따라 리액션하는 것
        사용자가 특정 태그에 대한 액션을 취하면
        그에 따라서 해당 태그가 가지고있는 리액션을 실행시키는 것


     ▶ 리액션 ⇒ 함수
        특정 상황이 되었을 때 미리 작성해둔 코드를 동작하는 것
        사용자가 특정 행동을 취했을 때 함수를 실행시키는 것 (이벤트)

        브라우저 → 크롬, 엣지, ...
        사용자가 특정 행동을 취하는걸 감지하는 기능이 만들어져있다.
        사용자의 특정 행동을 브라우저를 이용해서 감지하고
        감지 결과에 따라 함수를 실행하는 것

        이벤트를 만드는 것 
        ⇒ 사용자의 특정 행동목록 중 한개에 함수를 등록하는 것


     ▶ 행동목록 구분하는 2가지 정보
        대상 + 이름

        ⇒ 대상 태그에게 on행동 속성으로 이벤트를 등록한다.
           내가 First를 클릭했을 때
           console.log('First')가 실행되기를 바란다.
           
            export default function (): JSX.Element {

                function ClickFunc(){
                    console.log('First');
                }

                return <>
                    <div onClick={ClickFunc}>First</div>
                    <div>Second</div>
                </>
            }   


        ⇒ 이제 함수를 이벤트로써 대상(태그)에 묶어서 사용할 수 있는데
           단순하게 함수만 실행하는 것만으로는 부족해진다.
           이벤트가 단순히 함수를 실행하고 동작하는데에서 그치지 않고
           이벤트가 발생한 대상에게 무언가 행동을 취하고 싶어진다.

           그래서 모든 이벤트는 함수의 매개변수에 Event 객체를 매개변수로 받아온다. 
           그럼 해당 객체에 사용자가 
           행동을 취한 대상, 어떤 행동을 했는가, 추가 정보 등이 담겨있다.



     ▶ Event객체를 매개변수로 받아오는 경우 함수를 제작하는데 있어서 주의사항

        ⇒ 매개변수에 MouseEvent라고 이벤트의 종류를 직접 명시하는 방식(잘 안됨)
           function A(e:MouseEvent) {}

           // @ts-ignore
           let a: any = (e) => {};


        ⇒ ★ 익명함수에 의해서 만들고 해당 함수를 MouseEventHandler에 담아서 사용하는 방식
              EventHandler 이용 시 <>안에 대상 태그의 자료형도 명시
              let test:MouseEventHandler<HTMLDivElement> = (e) => {} 


     ▶ 리액트에만 있는 Event속성
        ● e.nativeEvent
        ● e.stopPropagation         
        기본적으로 React는 단방향 프로세싱을 선호


     ▶ 버블링
        이벤트에는 동작하는 대상과 상위 대상을 구분하기위한 작업
        이벤트가 발생할 때 하위대상과 상위 대상을 구분하기 위해
        ● e.target          : 실제 행동이 이루어진 대상
        ● e.currentTarget   : 실제 이벤트 함수가 등록된 대상 



     ▶ 리액트에서의 이벤트는 내부적으로 root태그에서 함수를 처리하는 방식   
        <div id="reactRoot"></div> 여기에 등록됨 (index.html)    
        
        그래서 리액트의 이벤트는 JS의 이벤트와는 모양이 다르다
        → 새로 만들기 때문에

        ● e.nativeEvent
          리액트에서의 Event객체는 리액트에서 새로 만든 객체이다.
          nativeEvent라고 JS에서 원래 쓰던 객체를 따로 획득하는 방법

        ● e.stopPropagation
          stopPropagation을 부르면 
          JS의 버블링과 같은 연계동작을 멈출 수 있다.


        그래서 리액트에서는 currentTarget, target 대상 태그 변수를 이용해서
        대상 정보를 직접적으로 변경하는건 리액트 구조상 별로 선호되지 못한다.
        잘못된 경우에 원본 값으로 돌아가기 때문에
        변경을 할때는 돌아가지 않도록 영구적 변형을 일으키기 위해서 변수를 통해 제어
        → e.currentTarget.innerText = "Hello";



     ▶ 리액트는 코드를 실행시켜서 렌더링이라는 작업을 동작
        무언가의 코드 변형이 일어나면 
        자동적으로 렌더링이 동작하도록 함수를 이용해서 제어


     ▶ 리액트 훅(React Hooks)
        갈고리 - 어떤 코드의 변형이 일어나면 그에 따라 자동적으로 렌더링을 다시 하겠다.
        이벤트는 훅과 같이 써야한다. (렌더링하기 위해서)

        훅은 코드의 변형에 따라 렌더링 함수가 불리는 함수
        변형되는 코드의 모양에 따라서 여러가지로 나뉘었다.
        훅의 기본 설계를 벗어난 훅도 존재

        여러가지의 훅(함수)들이 생겼다.
        ⇒ 모든 훅 함수는 'use'로 시작
           import React, { useState, useEffect, useCallback, useContext } from "react";

        ⇒ 훅의 동작 원리
           훅을 통해 Wrapper함수를 만들고 해당 함수를 호출하면 렌더링이 호출

        ● useState
          값의 변경을 감지하는 훅

          ⇒ useState(); 
             useState함수를 실행하면 
             변수의 현재값과 변수를 변경하는 함수를 반환
             변수의 자료형과 현재값을 함수 호출시에 명시
             ● useState<type>(초기값);

             let data: any[] = useState<number>(0);
             data[0];    // 현재 값
             data[1];    // 변경 함수

             0번째에 현재값, 1번째에 함수가 들어오는데
             직관적이 못하기에 디스트럭쳐 할당 이용
             ● let [value, Changer] = useState<number>(0);
               useState<number>(0) 은 
               value의 <타입> (초기값) 이다.


*/