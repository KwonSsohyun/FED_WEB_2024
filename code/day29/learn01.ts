// ▶ 리액트 서버리스 아키텍처(ServerLess)
/*

   ▶ 서버리스(ServerLess)
      서버가 없는 구조처럼 보이는데
      실은 서버가 존재한다.

      ⇒ 서버에 신경을 덜 쓸 수 있는 구조



   ▶ 서버리스 핵심구조
      서버에 쓸 신경을 로직과 프론트에 쏟아부을 수 있게 만드는 구조
      서버에 쓸 노력이 100%를 기준으로 50%라면, 그 중 10%만 신경쓰고 나머지를 다른 곳에 신경쓸 수 있다면?



   ▶ 서버리스 구조의 가장 대표적인 것
      ⇒ Cloud Functions
         우리는 함수를 해당 Cloud Functions에 등록
         해당 서비스가 내가 등록한 함수를 동작시키는 것

         함수를 파일로 등록한 후 해당 경로에 접속하면 
         파일이 동작하고 결과를 반환하는 구조


   ▶ Cloud Functions 함수를 등록하면 해당 경로가 생성되고 
      해당 경로에 접근하면 따로 제어할 필요 없이 동작하는 것

      http://192.168.100.20:5555/cloud/cx/sd
      http://192.168.100.20:5555/direct/abc/test.jpg

      서버리스가 어떤 원리로 돌아가는 것인지를 설명



   ▶ 서버리스에서 프론트엔드가 신경쓰고 제어할건 SSR을 할때와 동일
      SSR에서 프론트엔드가 신경쓰고 작업할 것
      ⇒ 빌드한 파일을 백엔드에게 제공하는 것
      
      서버리스에서 프론트엔드가 신경쓸 건, 빌드한 파일을 서버리스 아키텍처로 업로드하는 것

      서버리스 === 백엔드 개발자(서버)
      빌드한 파일을 서버에 등록하는 것과 다를바 없다.




   ▶ 서버리스 배포방법
      1) 클라이언트 빌드
         ⇒ npm run build:client

      2) 📁day29/dist/client/index.html 파일에서
            "/direct/sohyun/" 코드 추가해준다.
         ⇒ <script type="module" crossorigin src="/direct/sohyun/index-CkoBStN7.js"></script>

      3) 🌐http://192.168.100.20:5555/upload 사이트에 파일 등록
            클라이언트 빌드파일 등록
         ⇒ 📁day29/dist/client/assets/📜index-CkoBStN7.js
         ⇒ 📁day29/dist/client/📜index.html

      4) 🌐http://192.168.100.20:5555/direct/sohyun/index.html 경로 접속
            리액트 빌드한 메인 화면 뜬다.


      ⇒ 사용자가 서버에 대한 이해 없이 파일을 올리는 것만으로
         원하는 결과를 가져오는 경로를 제작하는 구조



   ▶ 






*/