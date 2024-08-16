// ▶ 리액트(React) 문법
/*

    0. 리액트를 사용하기 위한 첫번째 문법
       → 맨 윗줄에 
         import React from 'react'; 무조건 적어줘야한다.

         디폴트는 1개이기 때문에 이름이 중요하지는 않다.
         여러개는 이름이 중요
         import A, {B,C} 에서 A는 이름이 중요하지 않다.

         리액트 문법이라는 것은
         <div>123</div> 
         → createElement(<div>123</div>) 변환됨


       → 리액트의 기본적인 목적
         HTML Tag를 효율적으로 작성하고 관리하는 것



    ------------------------------------------------------------------------
    1. HTML 태그처럼 작성한다.
       → HTML태그처럼 작성해도 
         리액트가 자동으로 함수 동작으로 변환해준다.



    ------------------------------------------------------------------------
    2. 리액트 문법으로 만들어낸 대상은
       값으로 취급되어서 변수에 넣을 수 있다.

       리액트 문법으로 만든 대상은 JSX.Element 자료형으로 클래스 취급
       리액트 문법이 적힐 공간에 대신 적어서 사용할 수 있다.

       let div:JSX.Element = <div>Hello</div>
       root.render(div);



    ------------------------------------------------------------------------
    3. 리액트에 외부 변수 또는 코드의 내용을 삽입하는 방법
       리액트는 변형 문법이기 때문에 모두 글자 취급
       {} 중괄호를 적으면 해당 중괄호 안쪽에 있는 내용은 코드 취급

       let div:JSX.Element = <div>Hello</div>

       root.render(
            <h1>{div}</h1>
       );



    ------------------------------------------------------------------------
    4. 리액트의 태그를 배열이나 리스트같이 여러개를 묶어서 사용한다면
       리액트 문법은 여러개를 알아서 쪼개서 출력

       let divs: JSX.Element[] = [
            <div>Hello1</div>,
            <div>Hello2</div>
       ];
       root.render(
            divs
       );



    ------------------------------------------------------------------------
    5. 리액트 문법은 한개의 태그 아래에서 이루어진다.
       최상단에 묶을 태그가 한개 필요하다.
       그래서 어쩔 수 없이 <></> 빈 태그

       ※ 오류
       root.render(
            <div>Hello1</div>
            <div>Hello2</div>
       );

       ★ 가능 
          → 동작은 되나, 문법상은 좋지 않다. <></>
       root.render(
            <>
            <div>Hello1</div>
            <div>Hello2</div>
            </>
       );



    ------------------------------------------------------------------------
    6. 리액트 문법 중간에 {}로 코드를 삽입할때 삽입된 내용의 결과는 무조건 추가
       
       삽입하는 코드가 함수라면 함수의 결과
       → 함수 결과가 텍스트
       삽입하는 코드가 일반 코드라면 코드의 연산 결과 
       → 연산 결과가 텍스트

       반복문을 통해서 태그를 만들 수는 없을까?

       ※ 오류
       root.render(
            <div>
                {
                    for(let i=0; i<10; i+=1) <li>2</li>
                }
            </div>
       );

       ★ 가능 
       function ListItemGenerator(count:number):JSX.Element[]{
            let listItem:JSX.Element[] = [];
            for(let i=0; i<count; i+=1){
                listItem.push(<li>{i}</li>)
            }
            return listItem;
       }

       root.render(
            <div>
                {ListItemGenerator(10)}
            </div>
       );



    ------------------------------------------------------------------------
    7. 리액트의 태그 재활용을 위한 문법
       리액트 문법으로 만들어둔 JSX.Element를 태그로 사용하는 방법
       → 리액트 태그로 사용하기 위해서는 '첫글자'가 '대문자'여야한다.

       JS에서는 가능
       TS에서는 자료형 불일치로 에러

       let Div:JSX.Element = <div><span>ID</span><span>PW</span></div>;
       root.render(
            <div>
                <Div/>
            </div>
       );


       function Div(){
            return <div><span>ID</span><span>PW</span></div>;
       }
       root.render(
            <div>
                <Div/>
            </div>
       );


       → 쓰는 이유가 잘 안느껴지는데 리액트 문법으로 태그화해서 이용하면
         아웃렛(Outlet)이 가능하다.

         아래와 같이 쓰면 복잡 (3번방식)
         {OrderedList({children:[<li>2</li>,<li>2</li>,<li>2</li>,<li>2</li>]})}         

         function OrderedList(props:any){
            return <ol>{props.children}</ol>;
         }
         root.render(
            <div>
                <OrderedList>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                </OrderedList>
            </div>
         );



    ------------------------------------------------------------------------
    8. 리액트의 태그를 다른 tsx파일에 작성한 함수로 대체하는 기능 ⇒ 컴포넌트
       함수를 통해서 컴포넌트를 만드는 방식 ⇒ 함수형 컴포넌트

       ● header.tsx → 새 파일 생성 (추가 컴포넌트)
            import React from 'react';
            export default function(){
                return <div>
                    <div>Header Area</div>
                    <div>Header Data</div>
                </div>
            };

       ● main.tsx → 메인
            import Header from './header';
            root.render(
                <div>
                    <Header/>
                </div>
            );



    ------------------------------------------------------------------------  
    9. 리액트 태그 문법을 이용해서 컴포넌트를 사용할 때
       대상 컴포넌트에 외부에서 정보를 전달하는 방법 ⇒ props 방식

       → 컴포넌트 태그에 key=value 형식의 값을 넣으면
         해당하는 데이터가 props.key=value 형식으로 매개변수에 자동 할당된다.

         props의 value가 문자열인 경우에는 그냥 작성이 가능하다.
         그외 숫자, 함수의 결과, 연산식의 결과인 경우 {}를 작성
*/