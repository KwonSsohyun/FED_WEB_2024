// ▶ 리액트(React) 기본태그(StrictMode, Fragment, Suspense, lazy, Profiler)
/*
     리액트 태그(컴포넌트)를 매우 많이 만들고 제어하며 사용해야 하는데
     대부분의 컴포넌트는 사용자가 직접 만들어야 하지만

     시스템적으로 '성능측정'이나 '비동기로딩'같이 
     특별한 태그는 만들기가 어렵기 때문에
     이미 만들어진 태그가 있다.


     ▶ 리액트 기본태그
        리액트에서 미리 만들어둔 컴포넌트 태그

        → 기본태그를 import 해야 한다.
          <2가지 방식>

          ● import React from "react";
            리액트를 사용하겠어!
            → React.Fragment
              점(.)으로 접근

          ★ import React, {StrictMode, Fragment, Suspense, Profiler} from "react";
             리액트를 각각 쪼개서 가져온다.



     ▶ StrictMode
        → 오류 검출을 위해 강제로 두번씩 렌더링
          엄격한 모드

          main.tsx에 전제척으로 감싸면 값 반전에 의한 
          동작이 오동작을 할 수 있기에 문제

          오류를 찾아내고 싶은 필수 구간에만 감싼다.
          빌드되면 없어짐.



     ▶ Fragment
        → <></> 동일한 역할을 하는 태그가 기본 태그로써 존재
          <></> 리액트의 기본 문법을 지키기 위해 나온 아무런 의미가 없는 태그
          
          <Fragment></Fragment> 이름이 붙었다.
          → 속성 넣을 수 있다
            <Fragment key="키값">



     ▶ Suspense / lazy
        → lazy와 Suspense를 따로 이용할 수 있지만 거의 함께 쓴다.
        → 완충제 - 대기화면을 만드는 태그
          리액트에서는 동기 렌더링을 할 때 속도편차에 의한 문제가 가끔 발생
          비동기 렌더링이라는 기능

          import ~ from ~; 동기로딩

          ● 비동기 렌더링을 위한 기능으로 import 함수 사용
            import('./파일명');

          비동기 로딩은 import로 가능한데 렌더링은 import만으로는 부족
          비동기 로딩이 끝난 import promise를 렌더링하기 위한 함수
          ● lazy
            import React, {lazy} from "react";
            lazy(()=>import('./파일명'));


          const LazyTag = lazy(()=>import('./test'));
          <Suspense>
             <LazyTag/>
          </Suspense>


          → 다른게 나오게 하기 위함(fallback 대체 속성)
          <Suspense fallback={<div>대체</div>}>
            <LazyTag/>
          </Suspense>

          lazy를 통해 비동기 렌더링하는 태그를 
          비동기 로딩중에 다른 화면 보이게 한다.



     ▶ Profiler
        → StrictMode에서 검출하지 못하는 성능상의 문제를 해결하기 위해
          성능을 감지하는 태그

          해당하는 태그 하위 태그가 렌더링될때 얼마만큼의 성능 측정
          성능을 감지하고 싶은 태그 범위에 감싸주면 된다.

          성능 감지를 여러곳에서 하면 구분이 되어야 하기 때문에
          ★ 구분자 id 필요!!!
             <Profiler id="StrictModeTest" onRender={ProfilerDetect}>
                <div>1</div>
             </Profiler>


          성능 감지를 통해 구한 정보를 어떻게 처리할지
          ★ onRender 함수 등록!!!
             onRender에 넣는 함수는 성능 감지가 끝난 후 
             감지정보를 매개변수로 동작하는 함수

             function ProfilerDetect(
                id: string, 
                phase: string, 
                actualDuration: number, 
                baseDuration: number,
                startTime: number,
                commitTime: number
             ){
                console.log(123);
             }


*/