// ▶ API 라우팅
/*

   ▶ Node.js 프로젝트 초기화
      npm init -y


   ▶ Express 서버 설치
      npm i express


   ▶ 📦package.json 스크립트 추가
      "scripts": {
         "start": "node server.js"
      }


   ▶ 📜server.js 파일 생성
      const express = require('express');
      const app = express();
      app.listen(9999);


   ▶ 서버 실행
      npm start

   ▶ http://localhost:9999




   ▶ 프론트에서 백엔드로 정보를 넘길때 사용하는 2가지 방법
      1. form 태그를 이용해서 데이터를 묶어서 보내는 방법
         ⇒ 사용자가 변경해야하는 데이터를 보낼때 사용

      2. 보내고자하는 데이터를 미리 명시해두고 보내는 방법
         ⇒ 사용자가 변경하지 않는 정보(몰라도 되는 정보) 데이터를 보낼때 사용
            사용자가 정보를 보더라도 수정할 수 없고, 수정하더라도 의미가 없고,
            보더라도 용도를 파악하지 못하도록 한다. 
            → API Route



   ▶ API Route
      웹사이트의 경로를 일종의 변수처럼 사용하는 방법
      웹사이트에서 사용자가 변경하면 안되는 정보 혹은 변경했을때 의미가 없어져야하는 정보를
      경로로 작성해서 변경하지 못하도록 하는 기법
      
      간혹 Path parameter 라고 부르기도 한다.


   ▶ 중첩 라우팅
      API 라우팅을 한개가 아닌 여러개를 사용해서 
      여러 경로가 변수로써 사용되는 것


   ▶ API 라우팅 단점
      1) 생략이 안된다. 매개변수 갯수를 꼭 맞춰야 한다.
         쿼리스트링은 생략이 된다.
         고정되게 사용해야해서 융통성이 없다.

      2) API 라우팅은 데이터 크롤링이 손쉽다.

      3) 경로 만들기가 어렵다. (오탈자 실수)





   ▶ 프론트엔드 프레임워크
      ⇒ Vue.js    : React와 유사한 선언적 렌더링 및 컴포넌트 기반 프레임워크
      ⇒ Angular   : 타입스크립트 기반의 대규모 애플리케이션 프레임워크


   ▶ React용 UI 라이브러리
      ⇒ Material UI(MUI)   : Material Design 기반의 반응형 UI 라이브러리
                              https://mui.com

      ⇒ Ant Design         : 기업용 애플리케이션에 적합한 UI 컴포넌트 라이브러리
                              https://ant.design

      ⇒ Blueprint JS       : 대시보드 및 데이터 시각화에 적합한 고급 UI 라이브러리
                              https://blueprintjs.com

      ⇒ Blueprint UI       : 데이터 대시보드 및 관리 시스템 최적화 UI 라이브러리 (React 비호환)
                              https://blueprintui.dev


   ▶ 자바스크립트 빌드 도구
      ⇒ Bun.js    : 빠르고 경량화된 자바스크립트 빌드 도구



*/