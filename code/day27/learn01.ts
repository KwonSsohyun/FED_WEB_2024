// ▶ React 렌더링 방식(CSR, SSG, SSR)
/*

   ▶ 라이브러리 설치
      ⇒ npm i express fs



   ▶ React 기본 렌더링 방식(CSR)
      React는 기본적으로 CSR(Client Side Rendering) 기반으로 동작

      CSR의 단점 SEO(검색엔진 최적화) 부족
      백엔드는 검색엔진이 읽을 수 있는 데이터를 제공하지만, 
      CSR은 클라이언트 측에서 데이터를 렌더링하기 때문에 
      검색엔진 크롤러가 데이터를 확인하기 어렵다.

      SSR과 SSG는 이러한 SEO 문제를 해결하기 위한 방안



   ▶ SSG(Static Site Generation)
      SSG는 SSR의 성능을 더 향상시키는 방법

      SSG란? 
      React-Router-Dom 에서 경로를 생성할 때
      해당 경로마다 .html파일을 따로 미리 만들어두는 기능
      Next.js 등에서 주로 사용



   ▶ ⭐SSR(Server Side Rendering)
        CSR의 SEO 문제를 해결하기 위한 방법으로 SSR 방안
        서버에서 HTML을 미리 렌더링하여 SEO 성능을 향상

        클라이언트가 서버로부터 완성된 HTML을 받아오기 때문에 SEO측면에서 CSR보다 유리
        SSR은 CSR보다 더 많은 채택




   ▶ React 빌드 및 서버 구동
      CSR로 사용 중인 리액트를 번들링
      
      개발 중인 React 코드는 Vite에 의해 실시간으로 변환되지만, 
      프로덕션 환경에서는 리소스를 최적화하기 위해 번들링이 필요함.

      번들링은 React 코드를 하나의 JS 파일로 압축하는 과정


      ⇒ build
         리액트의 코드를 한개의 JS파일로 변경하는 과정
         그래서 build가 끝나면 기본적으로 1개의 js, 1개의 html, 1개의 css가 생성됨

         이렇게 생성된 파일이 
         실제 서버에서 사용할 프론트엔드 파일이 된다.

         ● 원리는 Babel이라는 번역기로 
           리액트의 "📜main.tsx"을 인식해서 번역
           그 후 번역된 내용을 index.html에 연결

           이렇게 번역을 하기위해 Babel을 써야하는데 Babel이 신경쓸게 매우 많다.
           Babel은 JS번역기로써 React뿐만 아니라 여러가지를 번역할 수 있는 도구

           그래서 Vite에서는 Babel을 이용한 build를 명령어로 제공한다.
           우리가 Vite의 build 명령어를 쓴다면
           Babel로 "📜main.tsx"를 번역해준다.



      ⭐ Vite를 통한 Build 명령어
          ⇒ npx vite build --ssrManifest --outDir dist/client

             ● --ssrManifest  : SSR 관련 설정 파일을 생성
             ● --outDir       : 빌드된 파일이 저장될 폴더 경로 지정
                                dist/client 새파일에 빌드해라



      ▶ 리액트 빌드파일 서버 구동 (CSR 방식)
         이제 백엔트에서 build 후 제작된 파일을 제공하면
         서버에서 프론트엔드를 제공하는 과정
         근데 이 과정이 CSR이다.
         CSR은 기본적으로 제공되는 리액트 번들링 과정
         브라우저 개발자모드에서 "Network"에서 "index.html" Preview탭을 확인해보면 텅 비어있다.

         CSR로 기본 제공되면 처음 페이지 로딩 시 페이지가 비어있다.
         그렇기 때문에 SEO가 낮다.

         엄청나게 저렴한 서버에서 단순히 페이지를 보여주는게 목적이라면 이정도까지만으로도 충분


         1) "📜server.js" 새 파일 생성
               import express from 'express';
               const app = express();

               app.use('/', express.static('dist/client'));

               app.listen(9999);


         2) "📜package.json" 파일에 추가 입력(scripts 추가)
               "server": "node server.js",


         3) 서버 실행 명령어
            ⇒ npm run server
               기존에 키고 있는 리액트 서버가 있다면 끈 다음 실행


         4) 브라우저 URL
            ⇒ http://localhost:9999/index.html




      ▶ ⭐SSR 방식으로 서버 구동
           서버에서 리액트 코드를 한번 실행하고 결과물을 던진다면?
           서버에서 약간의 부담을 안고 내용을 한번 렌더링한 다음에 제공하는 기법

           SSR을 위해서 서버에서 파일을 제공하고 렌더링된 결과물을 연결하는 작업을 하지만
           그 외 렌더링을 하는 파이프라인과 연결을 하는 파이프라인은 프론트엔드 개발자가 직접 구성해야한다.

         
         ⇒ SSR을 사용하기 위한 방법
            SSR 렌더링하고 제공하면 <style></style> 태그나 작성한 리액트 태그가 올바르게 나오는데
            이게 그냥 text/plain 이지 html 형태가 아니다.
            수동으로 📜index.html 읽어올 수 있게 한다.

            SSR이 제대로 동작하기 위해서는 SSR로 렌더링한 HTML 📜index.html에 따로 수동 연결을 한 후 전달 필요
            그러면 SSR이 되어서 사용자가 받는 정보는 미리 그려진 웹페이지를 받게 된다.

            하지만 이렇게만 하면 렌더링은 되는데
            hydrateRoot로 인한 client 파일을 연결하지 않아서 동작은 안된다.


         1) "📜main.tsx" 파일 수정
              : 클라이언트에서 SSR 적용
                hydrateRoot()는 클라이언트에서 기존 HTML을 새로 렌더링하지 않고, 
                이미 렌더된 HTML과 React를 연결해 줍니다.

                먼저 createRoot 후 render를 hydrateRoot()로 변경
                hydrateRoot(element, reactNode) 로 사용 시 렌더링하는 과정 없이 연결만 해준다.


               import React from 'react';
               import ReactDOM, { hydrateRoot } from 'react-dom/client';

               import { ChakraProvider } from '@chakra-ui/react';
               import App from './app';
               import './main.css';


               hydrateRoot(
                  document.querySelector("#reactRoot") as HTMLElement,
                  <ChakraProvider>
                        <App/>
                  </ChakraProvider>
               )
         
      
         2) "📁components/📜ssr.tsx" 새 파일 생성
              : 서버에서 렌더링
                서버에서 renderToString() 함수를 사용해 React 컴포넌트를 HTML 문자열로 변환하고, 
                이 HTML을 클라이언트로 전달할 준비를 합니다.

                최초 서버에서 처음 렌더링을 하기위해서 렌더링을 위한 코드를 따로 작성해야한다.

               import React from 'react';
               import { renderToString } from 'react-dom/server';

               import { ChakraProvider } from '@chakra-ui/react';
               import App from './app';
               import './main.css';


               export default function render(){
                  const html = renderToString(
                     <ChakraProvider>
                           <App/>
                     </ChakraProvider>
                  );

                  return { html };
               }



         3) "📜index.html" 파일 수정
               : HTML 템플릿
                 <!-- root-container --> 주석을 추가한 부분에 
                 서버에서 렌더링한 React HTML이 들어가게 됩니다.

               <!DOCTYPE html>
               <html lang="ko">
                  <head>
                     <meta charset="UTF-8">
                     <title>Vite & React</title>
                  </head>
                  <body>
                     <div id="reactRoot"><!-- root-container --></div>
                     <script type="module" src="components/main.tsx"></script>
                  </body>
               </html>


         4) "📜server.js" 파일 수정
              : 서버 설정
                서버가 dist/server/ssr.js에서 가져온 SSR HTML을 
                index.html 파일의 <!-- root-container --> 부분에 삽입한 후 
                클라이언트에게 전달합니다.

                ./dist/client/index.html 로 연결한다.
                파일 입출력은 fs 모듈을 사용

                  import express from 'express';
                  import fs from 'fs';
                  import ssr from './dist/server/ssr.js';

                  const app = express();

                  app.use('/', express.static('dist/client'));
                  app.use('/app', (req, res) => {
                     const { html } = ssr();

                     const index = fs.readFileSync('./dist/client/index.html');
                     const result = `${index}`.replace('<!-- root-container -->', html);    

                     res.setHeader('Content-Type', 'text/html').send(result);
                  });

                  app.listen(9999);


         5) SSR 빌드 명령어
            ⇒ 클라이언트 빌드    : npx vite build --ssrManifest --outDir dist/client
            ⇒ 서버 빌드         : npx vite build --ssr components/ssr.tsx --outDir dist/server

            ● 클라이언트 빌드    : hydrateRoot를 사용해 이미 렌더링된 HTML과 React를 연결합니다. 
                                  이렇게 하면 사용자가 페이지와 상호작용할 때 
                                  필요한 JavaScript와 스타일이 로드되어 페이지가 원활하게 작동합니다.
                                  → 클라이언트에서 사용할 HTML, CSS 및 JavaScript 파일을 생성

            ● 서버 빌드          : renderToString을 사용해 React 페이지를 HTML로 미리 렌더링합니다. 
                                  이렇게 생성된 HTML은 검색 엔진이 쉽게 읽을 수 있어 SEO에 도움이 됩니다. 
                                  그래서 브라우저의 "Network" 탭에서 "index.html"을 열면 페이지 내용을 즉시 확인할 수 있습니다.
                                  → 서버에서 사용할 React 컴포넌트를 HTML로 변환하는 코드를 빌드

            : SSR 설정을 위한 빌드
              서버에서 실행할 React 코드를 번역하여 dist/server/ssr.js로 만들어 줍니다. 
              이 파일을 서버에서 사용하게 됩니다.

              SSR에서 react-dom/server에서 받아온 renderToString으로 리액트 태그를 한번 렌더링 한 후
              해당 렌더링한 결과를 반환하는 함수를 export default
            
              --ssr을 위해서 server 렌더링을 해라
              babel이 해당하는 ssr.tsx를 번역한 후 파일로 뽑아준다.

              dist/server/ssr.js 리액트 코드를 번역 후 렌더링하는 기능



            ➕) SSR 빌드 명령어 단축어 설정
               : "📜package.json" 파일에 추가 입력(scripts 추가)
                  이러한 명령어를 직접 매번 쓰기보다
                  package.json 에 위 방식으로 등록하고 사용한다.
               
               ⇒ npm run build 실행 가능해진다.

                  "build": "npm run build:client & npm run build:server",
                  "build:client": "npx vite build --ssrManifest --outDir dist/client",
                  "build:server": "npx vite build --ssr components/ssr.tsx --outDir dist/server",


         6) 서버 실행 명령어
            ⇒ npm run server


         7) 브라우저 URL
            ⇒ http://localhost:9999/app

            : 해당 URL에 접속하면 
              서버에서 미리 렌더링된 HTML을 브라우저가 받아와 페이지가 빠르게 로딩됩니다.

              ※ 파일을 수정할 때는 개발 서버처럼 즉시 반영되지 않으며, 
                 서버 빌드와 재실행이 필요합니다.




      ▶ SSR은 백엔드 지식이 없으면 단순히 빌드하고 제공한다.
         
         백엔드 지식이 없는 상태로 빠른 개발을 하고싶다면
         hydrate를 주석처리, createRoot를 살릴 상태로 npm start로 개발
         나중에 hydrate로 변경 후 build 하면 된다.
         


      ▶ SSR 작성 순서
         React 페이지 작성
         → npm run build (클라이언트와 서버 빌드를 모두 실행)
         → dist/빌드된 파일 서버에게 제공


      ▶ SSR 실행 순서
         사용자가 페이지 요청 → 서버 
         → dist/client/index.html 읽기
         → renderToString한 내용 덧붙히기
         → 사용자에게 send


*/