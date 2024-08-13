// ▶ 초기 셋팅
/*
    npm init -y             ▶ package.json 파일 생성
    npm i typescript        ▶ 타입스크립트 설치
    npx tsc -init           ▶ 타입스크립트 tsconfig.json 설정 파일 생성
    npm i react react-dom   ▶ 리액트 설치

    ※ 명령어 나오기 : Ctrl + C
*/



// ▶ 리액트(React)
/*
    HTML 웹페이지 구조를 
    효율적으로 작성하고 관리할 수 있도록 만들어진
    스크립트 관리 도구

    그렇다면? 
    내가 이 HTML웹페이지 구조를 손수 제어하고 관리한다면
    섬세하게 관리할 수는 있겠지만 학습곡선이 가파르다.

    리액트는 너무 어렵지 않고 관리가 적당히 효율적이 되도록
    만들어진 라이브러리

    리액트는 기본적으로 스크립트로 작성된 코드가
    HTML 웹페이지를 만드는 도구

    그래서 리액트의 기본적인
    동작원리 자체가 컴파일러(번역기)

    리액트로 기본적으로는 실행(개발)되는 도중에 무언가가 동작하는게 아니라
    최종적으로 작성한 후 완성본을 만드는 구조


    ▶ 리액트에는 2가지 방식 존재
       1. 최종적인 파일을 만들기 전 테스트하는 개발 실행 방식
       2. 최종적인 파일을 만드는 빌드 방식


    리액트를 단순 번역만 하는게 아니라
    실제 이용을 하기 위해서 추가적인 '관리 툴'을 만들었다.


    ▶ 리액트 관리 툴
       ● CRA : create react app(facebook)
               → npm i create-react-app
               → npx create-react-app my-app

               ※ CRA가 초보자가 이용하기에는 매우 좋은 패키지인데 단점이 있다.
                  1. 미리 코드를 다 완성해서 만들어주다 보니까 제어하는게 처음엔 어렵다.
                  2. SPA(Single Page Application) 기반
                  3. CSR(Client Side Rendering) 기반    → SEO 검색엔진 안걸림

       ● Vite : 비트(Vite) 배워서 리액트를 제어
                Vite로 리액트 화면 띄우기

*/



// ▶ 비트(Vite)
//    작성 → 오류 검사 → 빌드 → 컴파일 검사 → 완성
/*
    ▶ 비트 설치
       ● npm i vite      
         → 비트(Vite) 설치
    
       ● npm i @types/react @types/react-dom @vitejs/plugin-react    
         → 리액트를 타입스크립트처럼 쓰기 위함 (@types/react | @types/react-dom)
           바이트 리액트 사용플러그인 (파일 저장 시 알아서 서버 껐다 키는 라이브서버) (@vitejs/plugin-react)

       ● vite.config.ts  
         → 비트(Vite) 설정 파일 (새 파일 생성)



    ▶ 리액트(React) 사용 기본 설정
       → 3군데 바꾼다.
         1) vite.config.ts   
            → 신규 파일 생성 후 코드 작성

         2) tsconfig.json
            → 전체적으로 다 코드 변경

         3) package.json
            → "type":"module", 추가



    ▶ 리액트(React) 실행
        1) components 폴더 > 'index.html' 새 파일 생성
           <div id="reactRoot"></div>
           → 리액트가 들어갈 위치

        2) <script type="module" src="main.tsx"></script> 
           → 1번 div안에 코드 작성
           → 리액트 동작 구간
    
        3) components 폴더 > 'main.tsx' 파일
           → 리액트 실행 코드 작성


        4) 리액트 실행 명령어
           → npx vite dev
             ● 'package.json'   ▶ "scripts" 안에 단축어 작성
                ⇒ "start": "npx vite dev", 작성
                    > npm start


        5) 리액트 빌드 명령어
           → npx vite build
             (dist 폴더 생성됨)
              'vite.config.ts' > build: { outDir: "../dist" }
               적은대로 dist폴더가 생성되는 것임.

           → 기본적으로 빌드(build)는 모든 패키지(package)를 다 포함   
             npx vite optimize  ▶ 불필요한것을 제외(최적화)
             npx vite build
             ● 'package.json'   ▶ "scripts" 안에 단축어 작성
                ⇒ "build": "npx vite optimize & npx vite build",
                    > npm run build

*/

/*
    ▶ 리액트(React) 개발환경 세팅하기
       → 'components' 폴더 복붙
          - index.html
          - main.tsx
    
       → vite.config.ts
       → tsconfig.json
       → package.json

*/

/*
    ● 리액트(React)        → html태그를 적으면 리액트 문법으로 번역해주는 것
    ● 비트(Vite)           → 빌드 html로 추출해주는 것
    ● 리액트 돔(react-dom) → 리액트와 비트를 연결해 주는 것
*/

/*
    리액트를 이용해서 화면에
        환영!
        리액트!
    를 띄우기
*/