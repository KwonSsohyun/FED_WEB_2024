// ▶ CDN 웹 라이브러리 사용
/*

    ▶ 웹 라이브러리
       - CryptoJS(데이터 암호화 및 복호화)
       - Dropzone(파일 업로드)
       - SweetAlert2(알림창 커스터마이징)
       - Swiper(슬라이더 커스터마이징)
       - Chart.js(차트 시각화)
       - interact.js(인터랙티브 기능)


    ▶ CDN(Content Delivery Network)
       CSS, JS, Image, ...
       별개의 웹사이트 경로에서 리소스를 외부에서 배달받아 사용하는 방법
       사이트에 종속적이지 않고 매우 유연하게 개발이 가능해지는 방법
       외부의 사이트에서 다른사람이 작성한 리소스를 받아오는 것


    ▶ CDN 장점
       1. 코드를 다운로드하지 않기 때문에 프로젝트 용량이 감소
       2. 서버의 부담이 줄어든다.

    ▶ CDN 단점
       1. CDN 서버가 모든 정보를 취합



    ▶ CDN 대표적인 사이트
       ⇒ https://www.jsdelivr.com
       ⇒ https://cdnjs.com



    ▶ CryptoJS
       ⇒ https://cdnjs.com/libraries/crypto-js

       ⇒ 암호화 라이브러리
       ⇒ 대칭키, 비대칭키, 해싱 지원
          SHA3 해싱 제공



    ▶ SweetAlert2(SA2)
       ⇒ https://sweetalert2.github.io
       ⇒ https://www.jsdelivr.com/package/npm/sweetalert2

       ⇒ 알림창 라이브러리
          사용자에게 알림 메시지, 경고창, 확인창 등을 표시
          Swal.fire({ options })



    ▶ Swiper
       ⇒ https://swiperjs.com
       ⇒ https://www.jsdelivr.com/package/npm/swiper

       ⇒ 슬라이더 라이브러리
          다양한 콘텐츠(이미지, 텍스트 등)를 슬라이드 형식으로 표시
          new Swiper('selector', {options})



    ▶ Chart.js
       ⇒ https://www.chartjs.org
       ⇒ https://cdnjs.com/libraries/Chart.js

       ⇒ 차트 라이브러리
          차트를 생성하고 데이터를 시각화하는데 사용
          new Chart(element, {options})

          ● 캔버스<canvas> 태그 사용
            document.querySelector('canvas')

          ● options에 data 설정
            차트의 데이터는 options 객체 내에 data 속성으로 전달



    ▶ Dropzone
       ⇒ https://www.dropzone.dev
       ⇒ https://docs.dropzone.dev/getting-started/installation/stand-alone

       ⇒ 파일 업로드 라이브러리
          드래그 앤 드롭 방식으로 파일 업로드 간편하게 구현
          new Dropzone('selector', {options})

       ⇒ 태그 드래그 가능



    ▶ interact.js          
       ⇒ https://interactjs.io
       ⇒ https://interactjs.io/docs/api/classes/core_Interactable.Interactable.html

       ⇒ 인터랙티브 기능 라이브러리
       ⇒ 드래그, 리사이즈, 회전 등 다양한 인터랙티브 기능 쉽게 구현


*/