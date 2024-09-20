// ▶ Tailwind CSS 커스텀(Custom)
/*

    ▶ Tailwind 커스터마이징(Customizing)
       Tailwind CSS에 정해진 내용을 사용하는게 아니라
       내가 만든 내용을 쓰고 싶다.

       심화 과정은 커스터마이징과 상황에 따라 사용 가능한 Tailwind 기능



    ▶ Tailwind 커스텀(Custom)
       : '📜tailwind.config.js' 파일에 적용
          - Theme 커스텀
          - Base Style 커스텀
          - Components Classes 커스텀
          - Utilities 커스텀
    

    ▶ Theme 커스텀
       원래 테일윈드에서 사용이 가능한 기능을 덮어쓰기 하는 옵션
       작성이 어렵다.
       테마를 작성할 때 Key값에 대응하는 Value값이 어떤 형태의 데이터인지를 구분하기가 어렵다.

       테마는 카테고리로 먼저 구분한 다음에 할당
       해당하는 값이 어떤 카테고리인지를 먼저 구분할 필요성이 있다.

       ⇒ colors, spacing, fontSize, fontFamily, fontWeight, lineHeight, borderRadius, borderWidth, boxShadow, ...
          20종이 넘어가는데 다 외우고 사용하는건 어렵다.
          보통은 많이 이용되는 colors, border-, spacing, screens, width, height, animation 정도만 외워둔다.
          그 외에는 필요할 때 찾아서 쓴다.

            ex) "📜tailwind.config.js" ➡ 'colors' 카테고리 사용
                theme: {
                    colors: {
                    'red': 'rgb(255,0,0)',
                    },
                    extend: {},
                },      


       ⇒ 내가 colors에 값을 넣으면 모든 색상값을 덮어쓴다.
          내가 colors에 내 색상을 넣으면 원래있던 색상이 인식 ❌ → 다 재정의 필요
          "다 재정의" 해야 한다면 사용하기가 너무 어렵지 않나?
          그래서 생긴 것이 특수 카테고리 → extend(확장)


       ⇒ ⭐extend(확장) 옵션
          원래는 덮어쓰기를해서 값이 변경하는 옵션을 추가하는 형식으로 변경하는 옵션
          다 재정의하는 것이 아니라 필요한 것만 추가를 한다.(확장)

          원래 있던 값을 유지한 상태로 원하는 값만 추가하기에 유연하게 대응 가능한 테마 방식

            ex) "📜tailwind.config.js" ➡ 'colors'를 'extend' 카테고리에 추가한다.
                theme: {
                    extend: {
                    colors: {
                        'red': 'rgb(255,0,0)',
                    },
                    },
                },




    ▶ Tailwind CSS 반응/상태 선택자
       - 가상 클래스            :hover, :focus, :first-child, :required 등
       - 가상 요소              ::before, ::after, ::placeholder, ::selection 등
       - 속성 선택자            [dir="rtl"], [open] 등
       - 미디어 및 기능 쿼리    반응형 브레이크포인트, 다크 모드, prefers-reduced-motion 등


       ⇒ 이제 테마를 이용해서 사용자가 정의한 값을 웹페이지에 넣다보면
          언제나 꾸며지는 옵션이 마음에 안드는 경우 존재

          특정 상황에서만 옵션이 먹히고 싶은 경우가 생긴다.
          특정 상황에서만 옵션을 먹이기 위해서 옵션에 상황을 부여하는 이벤트 속성
          CSS에서 특수한 셀렉터를 의미하는 가상 선택자 ➡ :, ::

          아무때나 빨간색 ❌
          마우스 올렸을 때만 빨간색 ⭕

          사용방법은 매우 단순
          원하는 이벤트 이름에 ':(콜론)'을 붙히면 된다.
          ➡ hover:옵션     ▶ 마우스를 올렸을 때 CSS 적용

          사용자가 어떤 환경에 처하면 그에 따라 반응해서 화면을 구성하도록 만드는 옵션


          ex) "📜app.tsx" ➡ 'hover:' 가상 선택자 적용
                import React from 'react';

                export default function (){
                    return <div>
                        <div className='w-44 h-44'>
                            <div className='hover:animate-pumping bg-pink-400 w-20 h-20'></div>
                        </div>
                        <div className='bg-red'>Red Color</div>
                        <div className='bg-brand-color'>Brand Color</div>
                    </div>
                }



    ▶ Tailwind CSS 가상 선택자

       ⇒ dark   : 다크 모드 일때
                   예) dark:bg-black ➡ 다크 모드일 때 배경 검은색

       ⇒ hover                  : 마우스가 올라갔을 때
       ⇒ focus                  : 대상을 선택 중일 때
       ⇒ focus-within           : 해당 태그 하위 태그가 focus 중일 때
       ⇒ active                 : 활성화 때(:active) 예)active:bg-red 사용함
       ⇒ enabled                : 활성화 중일 때(:enabled)
       ⇒ disabled               : 비활성화 중일 때
       ⇒ visited                : 방문한 링크일 때
       ⇒ checked                : 체크박스(라디오버튼) 체크 중일 때
       ⇒ focus-checked          : 체크박스(라디오버튼) 체크 중이면서 focus 중일 때
       ⇒ placeholder            : input text 같은 곳에 있는 placeholder 꾸미기 옵션
       ⇒ read-only              : input text 등에 읽기 전용일 때
       ⇒ first                  : 몇 번째 자식인지 설정 (첫번째)
       ⇒ last                   : 몇 번째 자식인지 설정 (마지막)
       ⇒ odd                    : 몇 번째 자식인지 설정 (홀수)
       ⇒ even                   : 몇 번째 자식인지 설정 (짝수)
       ⇒ group-hover            : 동일한 그룹(태그) 안에 있는 대상에게 hover가 됬을 때
       ⇒ group-focus            : 동일한 그룹(태그) 안에 있는 대상에게 focus가 됬을 때
       ⇒ required               : input 등 입력이 required 속성일 때
       ⇒ invalid                : input 등 입력한 값이 올바른 값이 아닐 때



       ⇒ before, after
          CSS에서의 역할 : 요소 추가 속성
          before:, after: 사용법은 동일

          특정 상황에서 동작 ❌ 
          "특정 요소를 추가 ⭕"

          ● content-["value"]     : 해당 요소에 데이터를 넣는 속성
            → before:, after: 와 함께 쓰이는 CSS속성
          
          ex) "📜app.tsx" ➡ 'after:' 가상 선택자 적용
               <div className='hover:text-blue-700 font-bold inline-block after:content-["원"] after:bg-red'>14,000</div>
               → 14,000 뒤에 "원" 텍스트를 추가하고, 가상 요소에 배경색을 적용


       ⇒ sm, md, lg, xl, 2xl
          특정 레이아웃일 때 동적하는 속성
          미디어쿼리(Media Query) ➡ 특정 레이아웃에 대응해서 CSS를 선택하게하는 셀렉터
          미디어쿼리를 동작시키는 속성

          <평균 해상도 규격 따름>
          ● sm(모바일)  : 640px ~
          ● md(태블릿)  : 768px ~
          ● lg(태블릿)  : 1024px ~
          ● xl(노트북)  : 1280px ~
          ● 2xl(PC)     : 1536px ~

          sm:bg-red     ➡ 640px 이상일 때
          2xl:bg-red    ➡ 1536px 이상일 때


          ex) "📜app.tsx" ➡ 'sm:' 반응형 클래스 적용
               <div className='bg-red w-96 h-96 sm:bg-blue-500'></div>
               → 640px 이상일 때 배경색이 파란색으로 적용



          ⭐ "📜tailwind.config.js" ➡ 테마 중에 screens 라는 값을 추가해서 이용하는 편
               screens에 {min:value, max:value} 형식으로 추가 해상도를 지정하여 쓰는 편

                ex) "📜tailwind.config.js" ➡ 'screens' 카테고리 사용('mobile'의 설정이 'max' 속성을 포함)
                    theme: {
                        extend: {
                        screens: {
                            'mobile': {
                                'min':'200px', 'max':'768px'
                            }
                        },
                    }


                    "📜app.tsx" ➡ '사용자 정의 미디어 쿼리' 적용
                        <div className='bg-red w-96 h-96 sm:bg-blue-500 mobile:text-green-500'>텍스트</div>
                        → 해상도가 200px ~ 768px일 때 텍스트가 초록색으로 변함



          ⭐ 특수한 환경에서 미디어쿼리를 하는 디자인을 지원하기 위해서
              "raw screens"를 지원

                ex) "📜tailwind.config.js" ➡ 'screens' 카테고리 사용(portrait의 설정에 raw 속성 포함)
                    theme: {
                        extend: {
                        screens: {
                            'portrait': {
                                'raw' : 'orientation:portrait'
                            }
                        },
                    }

                    "📜app.tsx" ➡ '사용자 정의 미디어 쿼리' 적용
                        <div className='portrait:bg-blue-900'>텍스트</div>
                        → 해상도가 세로 모드일 때 배경색이 파란색으로 적용





    ▶ Variants 옵션
       Tailwind의 실수를 줄이기 위해서 특정환경에서 특정옵션을 사용 불가능으로 바꾸는 옵션

       : '📜tailwind.config.js' 파일에 적용
           이벤트 속성을 이용해서 특정 환경, 특정 레이아웃, 추가 태그 등을 이용해서 화면을 꾸며나가면 된다.
           Tailwind 에는 특정 환경에서 이벤트속성이 동작하지 않도록 하는 옵션
           Theme 처럼 extend로 추가 제약조건을 작성하는 방식으로 사용

           카테고리가 존재하지 않는다.
           특정 환경에서 특정 옵션을 끄는 방식이기 때문에 카테고리와는 상관이 없다.

           ⇒ 속성:[환경1, 환경2, ...,환경N] 방식으로 작성
       
            ex) "📜tailwind.config.js" ➡ 'variants' 카테고리 사용(extend를 통해 추가 제약조건 방식 사용)
                    variants: {
                        extend: {
                            fontSize: ['hover']
                        }
                    },

                "📜app.tsx" ➡ '사용자 정의 Variants' 적용
                    <a href='https://www.naver.com' className='hover:text-5xl'>네이버</a>
                    → 마우스를 올렸을 때만 텍스트 크기가 5xl로 변경


            ex) backgroundColor:['hover']   ▶ hover:bg- 가 동작이 된다.
                backgroundColor:[]          ▶ 어떤 이벤트 속성도 배경 변경은 불가능해

                이벤트 속성을 사용하는 원리
                hover:bg-red                ▶ .~:hover { backfround-color: red; }



*/