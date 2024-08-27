// ▶ 리액트 훅(React Hooks)
/*
     ▶ useState
        한 개의 정보를 관리하는데에 있어서는 매우 유용
        두 개 이상의 정보를 관리할 때는 가독성과 편리성이 상황에 따라 떨어지기도 한다.
        여러개의 정보를 관리하는데 편리하면서 가독성도 좋은 훅이 존재한다면?




     ▶ useReducer
        복잡한 정보를 관리하기 위해서 나온 상태관리 훅
        여러개(복잡한) 정보를 관리할 때 useState에 비해서 편리성이나 가독성이 보편적으로 좋아지는 훅

        → const [value, changer] = useReducer(변경함수, 초기값);
          const [value, changer] = useReducer(actionFunction, defaultValue);

          defaultValue에 일반적으로 object 객체형 정보     ⇒ {key:value}
          값을 변경할 때 어떻게 변경될지를 정하는 함수       ⇒ actionFunction

          actionFunction
          ⇒ 첫 번째 매개변수    - 현재 값
          ⇒ 두 번째 매개변수    - 변경시키는 명령어

          const [value, changer] = useReducer() 를 통해 만든 
          changer 함수에 넣은 매개변수 값이
          actionFunction의 두번째 매개변수 인자로 할당되어 들어간다.
          받아온 두번째 매개변수에 의해 값을 변경하고 최종적으로 변경된 값을 반환하면
          현재 값이 갱신되어 새로운 값이 된다.


          ● 값 이동
            changer({ type: 'increment', value:2 })   ⇒ function _change_action_(action: actionProps)   ⇒ action 매개변수 값으로 들어감
            return now + action.value                 ⇒ const [value]                                   ⇒ value 값으로 들어감
            const [value]                             ⇒ function _change_action_(now: number)           ⇒ now 매개변수 값으로 들어감

        
          useState에 비해 한개의 정보를 관리하는데에는 과한 사전 준비가 필요하지만
          두개 이상의 복잡한 정보를 관리할 때는 직관성이 매우 높아진다.

          복잡한 정보를 처리할수록 더욱 유용해지는 훅




     ▶ useContext
        → 전역 정보관리 훅
          전역 정보를 관리하기 위해서 만들어진 훅이다 보니까 사전 준비가 매우 귀찮음
          대신 귀찮음만 넘어서면 어느 컴포넌트에서건 직접적으로 정보에 접근이 가능하다.

        테마 - 라이트모드, 다크모드 변경하는 경우 useState나 useReducer 조금 부족
        테마같이 모든 컴포넌트에게 영향을 끼쳐야 하는 정보는 어떻게 관리해야할까?
        한개의 컨포넌트에서 처리하기 어렵거나 단방향 처리를 하면 메모리를 많이 소모하는 경우

        → 내가 관리하는 정보가 useState, useReducer 처럼 특정 컴포넌트에게 종속되지않고 만들 수 있다면?
          useContext 훅


        1. 파일 생성 (파일명은 마음대로)
        2. useState 불러오기
           → import React, { useState } from 'react';
             useContext는 전역적인 방식으로 정보를 '관리'하는 훅
             그래서 렌더링 자동 호출 기능이 없다.
             그렇다보니 useState나 useReducer와 함께 쓰임


        3. createContext(기본값);       ⇒ 으로 컨텍스트 생성
        4. export default 컨텍스트;     ⇒ 내보내기


        5. 사용할 태그들 위쪽에 Provider 태그를 추가
           → Provider 공급자

           ● 공급자 태그를 추가할 파일에 
             import 컨텍스트 파일, useContext   ⇒ 불러오기

           ● 사용할 태그들을 <Context.Provider></Context.Provider> 로 감싼다.
             Provider는 정해진 함수다.

           ● Provider value에 초기값 넣어준다.
             초기값은 createContext할때 넣은 자료형과 동일해야한다.
             const context = React.createContext('dark');   ⇒ 우리는 string을 넣어야 한다.

             <Context.Provider value='dark'></Context.Provider>


        6. 사용할 공간에서 useContext(Context파일) 하면 전역 정보 불러오기가 된다.
           단, 이 방식은 전역정보를 불러올 수만 있고, 변경이 안된다.

           ● Context 객체
             → 관리할 정보가 담긴 객체

           ● Provider 태그
             → Context 객체를 하위태그에 전달하는 구조

           ● useContext 객체
             → Provider에 의해 전달한 Context 객체를 받아서 이용한 훅


           ex) 리덕스,모벡스 대체

*/