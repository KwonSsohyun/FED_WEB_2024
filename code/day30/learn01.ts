// ▶ Next JS
/*

   ▶ Next JS 소개
      SSR이나 SSG를 쓰는 경우가 많아지는데 문제는 이걸 만들기 위해서 
      프론트엔드 개발자가 신경쓸게 많다.

      이전 SSR 배울때도 기본적인 구조만 어느정도 만들어두면 
      명령어만 치면 알아서 동작되게 만들었다.

      나는 CSR 만드는 것처럼 만들면 
      알아서 SSR과 SSG가 만들어지면 좋겠다.

      많은 방법이 생겼고 각각의 방법에는 장단점들이 있었다.
      즉 모두를 만족시킬 방법이 없었다.

      그때 모두를 만족시키지는 못하더라도 간편함에 있어서는 
      극한을 달리는 라이브러리를 만들자!
      ⇒ Next JS



   ▶ Next JS
      리액트를 CSR이 아닌 
      SSR과 SSG로 자동으로 추출하는 라이브러리

      리액트를 구성하면 SSR과 SSG를 위한 추가 코드가 필요 없다.
      알아서 자동으로 SSR, SSG를 처리한다.

      Next JS는 풀스택 기반의 라이브러리이기 때문에 서버도 따로 구축할 필요가 없다.
      
      자동으로 처리가 되는데 
      ⇒ react-router-dom 도 필요 없다.
         라우팅도 자동 처리하기 때문이다.





   ▶ Next JS 기본 사용법
      1) 라이브러리 설치
         ⇒ npm init -y
         ⇒ npm i next react react-dom


      2) 📜package.json 설정
          "type": "module" 
           ES 모듈 방식 사용


      3) 폴더 구조 - 4가지 주요 폴더 생성
         📁components
            우리가 만든 리액트 컴포넌트 파일이 들어갈 폴더
            그래서 폴더명이 중요하지는 않다.

         📁pages
            폴더명 고정
            SSG에서는 경로별로 HTML을 따로 생성
            경로별 리액트가 따로 구성
            이 안에 적은 파일은 한개 한개가 그대로 경로가 된다.

         📁public
            폴더명 고정
            정적 데이터 제공 경로
            이미지 같이 제공할 파일을 저장하는 공간
            이 폴더 내의 파일은 / 경로로 접근

         📁styles
            폴더명 고정
            CSS가 들어가는 폴더
            일반적으로는 안쓰이는 폴더
            Tailwind CSS 같이 기본 CSS를 쓰는 경우에 사용



      3) 📜next.config.js 생성
            넥스트를 실행하기 위한 설정 파일

           ● reactStrictMode: boolean
             리액트 엄격 모드 (두번씩 렌더링되게하는 기능)
             성능이 크기 때문에 개발시에만 사용


           ● env: { "키값": any }
             환경 변수를 만드는 속성
             만든 환경 변수는 process.env.키값 으로 참조를 할 수 있다.
             Client Side 에서도 접근 가능


           ● basePath: string
             웹사이트 기본 경로를 만드는 속성
             도메인/서브/경로 
             → 도메인/기본경로/서브/경로


           ● assetPrefix: string
             src 속성이나 href 속성으로 파일을 연결할때
             public에 있는 파일이 아닌 외부 사이트에서 가져오도록 하는 속성

             ex) assetPrefix: "https://www.naver.com"
                 /file     →  "https://www.naver.com/file" 로 변경되게하는 속성


           ● pageExtensions: [...string]
             사용될 파일 확장자
             ex) pageExtensions: ["js","jsx","ts","tsx"]


           ● i18n: { locales: [...string], defaultLocale: string, localeDetection: boolean }
             다국어 세팅을 지원하는 속성
             locales 에 지원 가능 언어를 적고, 
             defaultLocale 에 기본 언어를 적어서 언어별 페이지를 만드는 방법
             localeDetection 은 자동 브라우저 언어로 변경하는지 여부


           ● trailingSlash
             경로 마지막에 /가 붙는지 여부


           ● poweredByHeader: boolean
             넥스트가 자동적으로 헤더에 X-Powered-By:Next.js 를 붙힘
             보안상 유리하지 않다.
             → 제거하는지 여부         


           ● images: { domains: [...string], deviceSizes: [...number] }
             이미지 최적화 기능
             next/Image 태그가 따로 존재
             특정 디바이스 사이즈에서 자동 압축하는 옵션


           ● redirects: function => [...{ source: string, destination: string, permanent: boolean }]
             source path로 들어오면 destination 경로로 자동 갱신하는 옵션


           ● rewrites: function => [...{ source: string, destination: string }]
             source path로 들어오면 destination 경로로 포워딩하는 옵션


           ● headers: function => [...{ source: string, headers:[...{key: string, value: string}] }]
             특정 경로에 들어올때 사용자가 정의한 헤더를 붙히는 옵션


           ● outputFileTracing: boolean
             빌드할때 사용된 파일만 포함하는지 옵션
             보통 true를 많이 쓴다.



      4) 📜package.json 명령어 설정
            개발, 빌드, 프로덕션 환경을 위한 명령어 3가지

           ● npx next dev
              넥스트로 개발 빌드를 시작
              수정한 코드가 서버에 바로 적용
              → 단축어 : npm run dev

           ● npx next build
              개발이 끝난 후 
              개발된 내용을 빌드하는 구조
              SSR, SSG 코드가 자동 생성
              → 단축어 : npm run build

           ● npx next start
              생성된 SSR, SSG
              즉, 빌드된 파일을 이용해서 실제 서비스 제공하는 프로덕션 스테이지
              → 단축어 : npm start


         📜package.json 단축어 설정
            "scripts": {
               "dev": "npx next dev",
               "build": "npx next build",
               "start": "npx next start",
            },              



      5) 📁pages 기본 페이지 구성
          pages 경로가 제작될 폴더
          리액트에서 만들듯이 파일에서 함수 한개를 만들고 export default 하면 된다.

          pages 폴더에 파일을 생성하면, 파일명이 그대로 경로로 사용됩니다.

          ● 📁pages/🌐index.tsx
             index 라는 이름을 가진 파일 → 기본 경로
             http://localhost:3000/

          ● 📁pages/🌐sub.tsx
             sub 라는 이름을 가진 파일 → /sub 경로
             http://localhost:3000/sub


          ● 📁pages/📜_app.tsx
             _app 파일을 생성 시
             해당 파일은 경로가 되지 않고 
             모든 경로가 만들어지기 전 사용되는 부모 컴포넌트가 된다.
             각 경로가 생성되기 전에 공통 컴포넌트 역할을 함

               📁pages/📜_app.tsx 
               import react from 'react';
               import '../styles/globals.css';

               export default ({Component, pageProps})=>{
                  return <Component {...pageProps} />
               }    
                  
               📁pages/🌐index.tsx → 글로벌 CSS 스타일 사용
               import react from 'react';

               // ▶ http://localhost:3000/
               export default ()=> {
                  return <div>
                     <h1 className='red'>Index Page</h1>
                     <img src="/image.jpg"/>
                  </div>
               }


          ● 기본 경로(basePath) 작성하는게 귀찮으면 
            'next/link' 'next/image' 등을 이용 시 basePath가 자동으로 적용
             경로를 수동으로 작성하지 않아도 됩니다.
             → import Link from 'next/link';
             → import Image from 'next/image';         


          ● SSR / SSG
            페이지별로 SSR이나 SSG를 하고 싶을 때 하는 방법이 매우 간편
            기본적으로 페이지별 SSR, SSG는 기본 동작

            대신 SSR과 SSG가 편한만큼 NextJS의 서버를 이용해야해서
            NextJS의 서버 개발 방식을 이해해야한다.(백엔드)


            ⇒ SSR(Server-Side Rendering)
               "SSR"은 getServerSideProps 함수로 SSR을 적용
               export function getServerSideProps(){} 함수 호출해서 쓴다.
               리턴값으로 { props: {정보} } 를 리턴할 시
               
               export default 의 매개변수에 해당 정보가 담겨져 오게 된다.
               그리고 이건 SSR이기 때문에 사용자는 확인이 안된다.
               리턴된 props는 SSR로 처리되어 클라이언트에서는 확인 불가


            ⇒ SSG(Static Site Generation)
               "SSG"는 getStaticProps 함수를 사용하여 SSG를 적용
               export function getStaticProps(){} 함수 호출해서 쓴다.
               리턴값으로 { props: {정보} } 를 리턴할 시
               
               export default 의 매개변수에 해당 정보가 담겨져 오게 된다.
               그리고 이건 SSG이기 때문에 사용자는 확인이 안된다.

               이때 props 외에 추가적으로 revalidate 라는 값을 추가할 수 있다.
               revalidate 에 적은 시간(초) 지난 후에 누군가가 요청하면 그때 SSG를 다시 재빌드





   ▶ Next JS 다국어 지원
      1) 라이브러리 설치
         ⇒ npm i next-i18next react-i18next i18next

      2) 📜next.config.js 설정
            i18n: {
               defaultLocale: "ko",
               locales: ["en", "ko", "jp"]
            },
            fallbackLng: {
               default: ["ko"],
               "jp": ["en"]
            },
            nonExplicitSupportedLngs: true,


      3) 📁pages/📜_app.tsx 설정
            → appWithTranslation 감싼다.

            import react from 'react';
            import { appWithTranslation } from 'next-i18next'
            import '../styles/globals.css';

            export default appWithTranslation(({Component, pageProps})=>{
               return <Component {...pageProps} />
            })


      4) 다국어 SSG 지원
         → export function getStaticProps({ locale }){ }
           http://localhost:3000/app/en
           http://localhost:3000/app/ko
           http://localhost:3000/app/jp



      5) 📁public/📁locales 각 언어별 폴더 생성
         각 언어별 폴더마다 json 파일을 모두 동일한 파일명으로 생성

         📁public/📁locales/📁en/📜common.json
         📁public/📁locales/📁ko/📜common.json
         📁public/📁locales/📁jp/📜common.json

            {
               "h1": "hello"
            }        
            {
               "h1": "안녕"
            } 
            {
               "h1": "こんにちは"
            }


      6) 📁pages/📜index.tsx 설정 (※CommonJS 방식으로 써야함)
         이제 불러올 페이지의 getStaticProps 가 적힌 pages/라우팅에
         import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 작성

         ...(await serverSideTranslations(locale,[ 'common' ]))

         import { useTranslation } from 'next-i18next';

         const { t } = useTranslation(파일명) 으로 함수 획득
         t(키워드) → 번역된 언어 사용

*/