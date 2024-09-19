// ▶ 테일윈드 CSS(Tailwind CSS)
/*

   오늘 수업을 진행하기 위해서 미리 설치할 것
   → styled-components, tailwindcss, autoprefixer


   ▶ 명령어
      npm i styled-components tailwindcss autoprefixer



   ▶ CSS(Cascading Style Sheets)
      → 대상에 따라 스타일을 변경하는 문서

      ● CSS는 용도에 따라 종류가 나뉜다.
        인라인 CSS   : 태그에 직접 작성
        태그 CSS     : style 태그에 작성
        파일 CSS     : link 태그에 작성

        기본적으로 CSS는 한개의 태그를 대상으로 작성하는 경우는 거의 없다.
        셀렉터에 해당하는 태그 모두에게 스타일을 적용하는 방식

        리액트에서는 셀렉터를 기반으로 하는 CSS방식이 아닌 리액트 전용 방식으로 CSS를 구현




   ▶ 리액트의 CSS 사용방법
      1. 전역 방식
         이게 가장 초심자가 이해하기 쉬운 방식
         일반적인 CSS 방식

         ⇒ import './file.css';
            이렇게 파일을 추가하면 해당하는 파일이 전역방식으로 로딩되어서 적용
            전역방식은 다 좋은데 리액트스럽지 못하다.

            전역방식이 아닌 좀 더 리액트스러운 방식으로 동작하기 위해서 나왔다.




      2. 인라인 방식
         ⇒ 태그에 style={{backgroundColor:'red'}} 처럼
            직접적으로 속성을 지정하는 것

            장점 - 모든 태그를 각자 따로 제어 가능
            단점 - 귀찮다.




      3. 컴포넌트 방식
         "📜app.module.css" 새 파일 생성
           → CSS 파일명 확장자가 .module.css로 끝나야 한다.
           
         전역방식 + 인라인방식 장점을 적절히 섞은 구조의 CSS 사용법
         기본적으로 전역방식은 작성한 셀렉터에 전부 적용이 되게 작성
         아주 간단한 동작 한 개가 추가

         class 셀렉터에 해시값이 추가된다.


         1) 타입스크립트에서는 CSS확장자 인식 못함
            "📜global.d.ts" 새 파일 생성 (.tsx가 있는 위치에 저장)
            자료형 인식 불가 문제를 해결

            declare module "*.css" {
               const content: {[className: string]: string};
               export = content;
            }


         2) ⇒ import token from './file.css';
               이렇게 from절이 추가된 css파일 포함

               import token from './file.css'; 을 하면
               해당하는 파일에 .~ 라고 적혀있는 class 목록 모두 뒤에 무작위 해시값을 추가
               (컴포넌트 파일별로 동일)

               token.name  : 해당하는 name에 뒤에 해시값이 붙어있는 문자열이 반환된다.
               ex) <div class="_bg1_mqvbk_3">A</div>
               CSS의 뒤에 무작위한 해시값을 붙혀서 강제적으로 컴포넌트별로 따로 동작하도록하는 CSS방식




      4. 스타일 컴포넌트 방식
         인라인 방식의 최종 진화형
         각자 태그별로 꾸미는 스타일을 인라인 방식으로 작성하고 컴포넌트로 만들면 
         리액트스럽게 사용하는 방법 이건 너무 귀찮다.

         좀 더 편리하게 작성하지만 컴포넌트처럼 사용하는 방식 필요
         → 스타일 컴포넌트 방식

         ※ 많은 장점이 있음에도 속도가 느리기에 사용빈도가 낮음
            재활용성이 떨어지고 SSR과 SSG에 적합하지 않다.


         ⇒ styled-components 라는 라이브러리 설치 후 사용
            npm i styled-components


         ⇒ 1) import styles from 'styled-components'; 사용 후 이용

         ⇒ 2) const DivTag = styles.div``; 이용하여 태그를 만들어주는 라이브러리
               그렇게 만들어진걸 이용한다면 `` 사이에 적은 스타일이 적용된 태그를 만들어 쓰는것 같은 효과
               끝에 ``(백틱) 넣어줘야함

               styles.div`속성값`;
               ex) const DivTag = styles.div`
                     background-color: pink;
                   `;

                  export default function (){
                     return <div>
                        <DivTag>Styles A</DivTag>
                        <DivTag>Styles B</DivTag>
                        <DivTag>Styles C</DivTag>
                     </div>
                  }

               ● 또한 속성 사이에 
                 (props) => props.value 방식의 함수를 추가해서 동작할 수 있기에 매우 유연
                 SASS3방식의 &:hover 같은 것도 지원해서 매우 유연하며 편리

                  import React from 'react';
                  import styles from 'styled-components'; // 스타일 컴포넌트 방식

                  interface Props {
                     font? :string;
                  }

                  const DivTag = styles.div<Props>`
                     background-color: pink;
                     font-size:${(props) => props.font == 'medium' ? '15px' : '20px'};
                  `;

                  export default function (){
                     return <div>
                        <DivTag font='medium'>Styles A</DivTag>
                        <DivTag font='large'>Styles B</DivTag>
                        <DivTag>Styles C</DivTag>
                     </div>
                  }





      5. 테일윈드 방식(Tailwind CSS)
         스타일 컴포넌트 방식처럼 인라인방식이 아니라
         전역방식을 쓴다면 속도 문제를 해결할 수 있다.

         문제는 전역방식은 컴포넌트를 한개만 고르는게 어렵다는건데
         한개만 고르기 위해서 나온게 컴포넌트 방식
         컴포넌트 방식은 애매하다.

         그냥 전역방식으로 사용할 때 
         전역방식의 import 파일이 자동으로 생성된다면 어떨까?

         부트스트랩(Bootstrap)과는 다르다.
         부트스트랩은 CSS가 이미 존재 → class만 작성한거라면

         테일윈드(Tailwind) 
         → class를 작성 → CSS가 생성



         1) 라이브러리 설치 후 사용
            ⇒ npm i tailwindcss autoprefixer

               ● autoprefixer : CSS 최적화 및 압축, 공백 제거 및 전처리
               ● tailwindcss  : 테일윈드 라이브러리 사용

            
         
         2) "📜main.css" 새 파일 생성   
             → 전역방식으로 쓸 .css 파일을 한개 제작 필요
               테일윈드는 전역방식의 사용
               
            ⇒ @import 'tailwindcss/base';
               @import 'tailwindcss/components';
               @import 'tailwindcss/utilities';



         3) "📜main.tsx" 에 import 추가
             → 제작한 .css를 최상단 컴포넌트에 전역방식으로 추가 한다.

            ⇒ import './main.css';



         4) "📜postcss.config.js" 새 파일 생성
             → autoprefixer를 이용해서 테일윈드가 동작하도록 하는 설정 파일 제작

               import autoprefixer from 'autoprefixer';
               import tailwindcss from 'tailwindcss';

               export default {
                  plugins: [
                     autoprefixer,
                     tailwindcss
                  ]
               }
                           

         5) 명령어 : npx tailwindcss init -p
            → 테일윈드가 동작하기 위한 설정 파일
              명령어 실행하면 "📜tailwind.config.js" 파일이 자동 생성된다.

               /** @type {import('tailwindcss').Config} */
               /*
               export default {
                  content: [],
                  theme: {
                  extend: {},
                  },
                  plugins: [],
               }
               

               ★ content 
                  테일윈드가 동작할 파일을 지정하는 옵션
                    해당하는 폴더 아래에 .jsx, .tsx로 끝나는 모든 파일에 적용된다.

                  /** @type {import('tailwindcss').Config} */
                  
                  // export default {
                  //    content: [
                  //       './components/**/*{.jsx,.tsx}'
                  //    ],
                  //    theme: {
                  //    extend: {},
                  //    },
                  //    plugins: [],
                  // }


                  
         /*
         6) 테일윈드
            내가 className에 해당 태그에게 적용시키고 싶은 속성값을 적으면
            적힌 속성값에 의해 CSS가 만들어져서 동작되는 획기적인 구조

            "📜app.tsx" 파일에 작성

            import React from 'react';

            export default function (){
                return <div>
                    <div className='text-lg'>Hello 1</div>
                    <div>Hello 2</div>
                </div>
            }

            ⇒ https://tailwindcss.com/docs/installation
               이제 className만 외워서 작성
               문제는 외우는게 힘들다.
            
            ● 크기         : xs, sm, base, lg, xl
            ● 정렬         : left, center, right, justify
            ● 색상         : red-500, blue-700
            ● 가로, 세로   : w, h, min-w, max-h
            ● 패딩, 마진   : p, py, px, m, mt, mb
            ● 글자 대소문자 정렬 방식 : uppercase, lowercase
            ● border, flex, ...



            
         7) 테일윈드 확장 설치(VSCode)
            ⇒ "Tailwind CSS IntelliSense" 설치
                마우스 올리거나, 작성하면 연관된거 뜸

               import React from 'react';

               export default function (){
                  return <div>
                     <div className='text-lg bg-red-700 inline-block w-96 h-96'>Hello 1</div>
                     <div className='text-xl bg-blue-500'>Hello 2</div>
                  </div>
               }




         8) [] 속성 calculator (직접 속성 제작)
            테일윈드와 부트스트랩과 가장 큰 차이점은 순서가 다르다.
            테일윈드에서만 가능한 방법
            내가 클래스네임을 적은 기반으로 CSS를 후에 만들기 때문에 가능한거다.

            필요한 속성을 이용해서 작성하다 없는 속성값은 직접 작성해서 만들수도 있다.

            ⇒ 내가 어떤 값이 들어가는 위치에 값 대신 
               []를 적으면 직접적으로 값을 넣을 수 있다.
               ex) w-[100px]

               import React from 'react';

               export default function (){
                  return <div>
                     <div className='text-lg bg-red-700 inline-block w-[100px] h-96'>Hello 1</div>
                     <div className='text-xl bg-blue-500'>Hello 2</div>
                  </div>
               }





   ▶ 테일윈드 설정파일 알아보기
      tailwind.config.js
      → 테일윈드를 사용하기 위한 설정파일

        지금 당장 필요한건 content 뿐이지만 
        나중에 theme등이 필요하기에 어떤 것들이 있는지 정도는 알아두자.


        ★ theme
           ⇒ 속성에 대한 설정 값
              text-xl → 1.25rem 이걸
              text-xl → 1.4rem 으로 변경할 수 있게 하는 제어 옵션


        ★ variants
           ⇒ 다양한 상황에 대한 설정 값
              hover, active, focus, ... 
              특정 상황에 스타일을 변경하게 만드는 경우
              그걸 활성화하는 여부      

              마우스 올렸을 때는 배경색 변경이 불가능해 이런 설정


        ★ plugins
           ⇒ 외부 플러그인 연결하는 설정 값


        ★ darkMode
           ⇒ 어두운 테마를 설정하는 방법
              media(사용자 PC 환경), class(사용자가 바꿀 수 있게)

              ● media 방식은 OS의 Dark 모드를 감지해서 바뀌게 하는 것
              ● class 방식은 html 태그에 dark라는 속성이 있냐 없냐에 따라 바뀌게 하는 것




        ★ important
           ⇒ 충돌 방지 속성
              true, false 넣는 옵션

              ● true : 모든 CSS에 !important 추가(테일윈드 CSS가 우선시 되게 설정)


        ★ prefix
           ⇒ 충돌 방지 속성
              문자열 넣는 옵션
              접두사를 붙히는 옵션

              'tw-'
              원래 text-lg 
              → tw-text-lg 내가 앞에 무조건 'tw'를 붙혀야한다.


        ★ separator
           ⇒ 충돌 방지 속성
              문자열 넣는 옵션
              구분자 변경 옵션

              'F'
              원래 text-lg 
              → textFlg 내가 무조건 '-'에 대신에 'F' 붙혀야한다.



*/