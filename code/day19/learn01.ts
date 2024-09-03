// ▶ 리액트 라우터 돔(React Router DOM)
/*

   ▶ 리액트 라우터 라이브러리 설치
      → npm i react-router-dom



   ▶ 리액트 라우터
      원래 설치해야 하는건 react-router

      ⇒ router의 뜻?
         올바른 위치로 이동할 수 있도록 만들어주는 기기
         리액트의 기본적인 동작은 SPA(Single Page Application)
         당연히 서브 경로가 존재할 수 없는 웹페이지

         이런 상황이 안좋을 때가 몇가지 존재
         대표적으로 React Native등을 이용할 때
         ex. 뒤로가기



   ▶ React Router
      그렇다면 리액트에서 MPA(Multi Page Application)를 만들 수는 없을까?
      그래서 MPA를 위해서 만들어진 라이브러리


   ▶ React Router DOM
      react-router와 기능은 동일
      DOM 구조에 결합되어서 웹사이트의 경로 연결 제작에 특화
      react-router-dom이 react-router의 모든 기능을 포함(확장)
      일반적으로는 웹사이트 개발에서는 react-router-dom을 이용

      ※ 근데 가끔 react-router를 써야만 하는 경우
         → React Native를 써야하는 경우
         → SSR(Server-Side Rendering)을 만들어야 하는 경우
           정확히는 SSR이 서버에서 제어되어야 하는 경우



   ▶ 리액트 라우터 돔
      경로를 만드는 라이브러리에서 제일 먼저 해야하는 것

      공급자 태그를 만들어야 한다.
      경로를 만드는데 이 경로를 여러군데에서 만들 수 있을까?❌
      공급자 태그로 함수를 호출해서 경로 생성 알고리즘을 실행
      
      공급자 태그는 어떻게 작성하는가?
      → 매번 태그 적듯이 <div> <Provider></Provider> </div>
        ★ 최상단에 한개만 만들고 그 안에서 모두 처리

         ※ 대신 주의할 점
            공급자는 원래 없던 기능을 강제로 추가
            여러개를 적을 수 없다.



   ▶ 리액트 라우터 돔을 이용하는 기본적인 환경

      ⇒ <BrowserRouter>
         → 공급자 태그
           URL같은 경로 시스템을 생성하는 컴포넌트
          
           ◆ basename
              → 기본 이름이라는 그 뜻대로 
                경로의 기본 값을 셋팅



      ⇒ <Routes>
         → 경로 연결 태그
           경로 시스템을 올바르게 Route에 연결하는 태그



      ⇒ <Route/>
         → 경로 태그
           실제 경로 시스템에서 받아온 경로값을 어떤 태그와 연결할지 지정하는 컴포넌트

           ◆ path
              → Route 속성값
                실제 연결될 경로를 작성

              → 경로를 적는 방법이 4가지
                ● 기본 방식
                  /index         : 직접 명시

                ● 와일드 토큰 방식
                  *              : 모든 것
                  /index/*       : 인덱스로 시작하는 모든 경로

                ● 옵셔널 방식
                  /index/test?   : test가 경로가 있을수도 있고 없을 수도 있다.

                ● 파라미터 방식
                  /index/:test   : test 위치에 아무거나 적을 수 있다.
                                   아무거나 적은 내용을 나중에 훅으로 가져올 수 있다.

              → 경로 생성 시 주의사항
                Route 경로는 위쪽에서 아래로 순차적 비교를 한다.
                만약 위쪽에 포괄적인 Route 경로를 적는다면?
                그렇다면 아래에 접근이 불가능해질 수 있다.
                그래서 Route 경로는 위쪽은 자세히
                아래쪽이 포괄적이게 작성해야 한다.(아래에 *와이드 써서 오류페이지 이동하는 방식 추천)


           ◆ element
              → 실제 연결될 경로일 때
                무엇이 렌더링될지 컴포넌트


           ◆ index
              → 따로 값을 넣는 속성값은 아니고 이름만 적으면 적용되는 속성값
                일반적으로 아무런 경로가 없을때를 지정하는데 그런 아무런 경로가 없을때가 없을때
                즉, 모든 path가 /이름 으로 이름이 다 존재할 때
                그랬을 때 아무런 경로가 매칭되지 않는다면 기본 매칭되는 경로를 만들어주는 속성
                ※ 단, 업데이트 사항 : path가 작성되면 안된다. 없어야지만 동작


           ◆ caseSensitive
              → 경로의 대소문자를 따로 처리하게 만드는 속성
                무조건 좋은건 아니다.
                일반적으로 대소문자 구분이 안되는게 좋은데 특수한 경우

           ◆ errorElement
              → element 속성에 적은 컴포넌트가 에러가 날때 빨간 화면에 에러 코드를 띄우지 않고
                대신 내가 만든 다른 화면이 뜨도록 만드는 속성

           ◆ lazy, action, loader, ...
              → 최신 createBrowserRouter 함수를 이용해야지만 쓸 수 있다.



           ◆ 중첩 Route
              → 하다보면 Route로 경로를 적을 때 비슷한 경로가 여러개 생기는 경우
                비슷한 경로끼리는 디자인도 비슷할 수 있기 때문에
                이러한 경로 중첩을 처리하기 위한 중첩 Route가 존재

                <Route path="/board/write" element={<div>Write</div>}/>
                <Route path="/board/read" element={<div>Read</div>}/>


              → 중첩 Route란?
                Route 안에 Route를 적는 방법
                중첩 Route의 바깥쪽 Route는 element가 있으면 안된다.

                <Route path="/board">
                    <Route path="write" element={<div>Write</div>}/>
                    <Route path="read" element={<div>Read</div>}/>
                </Route>


              ※ 중첩 Route 주의사항
                 1) 중첩 Route는 Route 아래에 바로 Route가 와야 한다.
                    중첩 Route가 동작 될 수 있는 코드가 Route 내부에 자동 삽입
                    Route아래에 바로 Route를 안 작성하면 중첩 코드를 동작시키지 않는다.

                 2) path 경로 적을 때 앞에 /를 붙히면 안된다.
                    중첩 경로일 때 /는 Route에서 자동으로 붙임
                    근데 만약 /를 내가 더한다면? 더블슬래시가 붙어서 코드가 꼬인다.
                    단, 맨 앞에 /만 제외



           ◆ Outlet (중첩 Route 안에 씀)
              → Outlet은 중첩된 Route 태그에서
                바깥쪽 Route에서 안쪽 Route를 가져오는 태그
                
                중첩된 내용을 미리 작성해두고 바뀌는 부분만 따로 작성할 수 있게하는 기능
                현재 Route 아래에 올바른 경로에 작성된 element를 가져오는 기능

                <Route path="/board" element={
                    <>
                        <header>헤더</header>
                        <Outlet/>
                        <footer>푸터</footer>
                    </>
                }>
                    <Route path="write" element={<div>Write</div>}/>
                    <Route path="read" element={<div>Read</div>}/>
                </Route>


              ※ Outlet 주의사항
                 Outlet은 Route의 element에 적어야만 하고
                 Outlet을 가진 Route는 중첩 Route의 위쪽이어야 한다.
                 즉, 아래에 Route가 필요하다.







      ⇒ 기본 사용예시
         import React from "react";
         import { BrowserRouter, Routes, Route } from 'react-router-dom';

         export default function (){
            return <div>
               <BrowserRouter>
                     <Routes>
                        <Route path="/" element={<div>기본 경로</div>}/>
                        <Route path="/index" element={<div>인덱스 경로</div>}/>
                        <Route path="/two" element={<div>2번째 경로</div>}/>
                     </Routes>
               </BrowserRouter>
            </div>
         }




   ▶ 리액트 라우터 돔을 이용하는 기본적인 환경이 마련
      그럼 이제 만들어낸 경로들이 서로 이동이 되도록 해야 하는데
      이때 필요한게 하이퍼링크 a태그가 필요

      <a href="/app/board/write">작성</a>
      <a href="/app/board/read">읽기</a>

      근데 진짜 a태그를 이용해서 하면 생기는 문제점
      a태그의 동작 → 페이지 이동
      a태그처럼 페이지 이동이 아니지만 이동한 것처럼 보이게 하는 동작의 태그를 따로 만들었다.


      ▶ <Link>
         ◆ <Link to="경로">읽기</Link>
            → "a태그를 대체" 하는 태그(어디든지 사용 가능)
               BrowserRouter의 기능이기 때문에 basename은 생략

               <Route path="/board" element={
                  <>
                     <header>헤더</header>
                     <Outlet/>
                     <Link to="/board/write">작성</Link>
                     <Link to="/board/read">읽기</Link>
                     <footer>푸터</footer>
                  </>
               }>
                  <Route path="write" element={<div>Write</div>}/>
                  <Route path="read" element={<div>Read</div>}/>
               </Route>


         ◆ relative
            → 상대 경로 사용 옵션
              route, path 어떤 방식 이용하는지 작성
              relative='route'

               <Route path="/board" element={
                  <>
                     <header>헤더</header>
                     <Outlet/>
                     <Link to="write" relative='route'>작성</Link>
                     <Link to="read" relative='route'>읽기</Link>
                     <footer>푸터</footer>
                  </>
               }>
                  <Route path="write" element={<div>Write</div>}/>
                  <Route path="read" element={<div>Read</div>}/>
               </Route>


         ◆ preventScrollReset
             → 원래 페이지 이동을 하면 스크롤이 X0, Y0으로 이동
               이 속성을 true로 적으면 페이지 이동을 해도 스크롤이 변경되지 않도록 작성이 가능
               <Link to="write" relative='route' preventScrollReset>작성</Link>



      ▶ <NavLink>
         Link를 조금 더 화려하게 만들 수 있는 화려한 Link태그가 따로 존재
         Link랑 동일 → 기능상 다른건 전혀 없다.
         다른건, style, className같은 속성값 적을 때 함수로 작성
         함수에 매개변수가 들어간다.

         원래 Link태그를 꾸밀 때 간단히 꾸미기만 하거나 복잡하게 꾸미려면 어렵게 꾸며야 했는데
         간단하게 꾸며도 복잡하게 꾸며질 수 있도록 속성값 추가

         ● isActive        : 동일한 경로 인지
         ● isPending       : 현재 보류상태 인지
         ● isTransitioning : 변경 중 인지
         ● end             : isActive가 동일 경로인지 판단하는게 일부만 동일해도 동일하다고 판단(isActive를 구분하기 위한 얘)
                             /a/b → /a       : true
                             /a/b → /a/b     : true

                             end 속성 추가 시
                             /a/b → /a       : false
                             /a/b → /a/b     : true

         <NavLink to="read" style={({isActive, isPending, isTransitioning})=>{
               return {};
         }}>읽기</NavLink>



*/