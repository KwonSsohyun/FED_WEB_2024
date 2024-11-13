// ▶ 비동기 데이터 통신(Ajax, Fetch)
/*

   ▶ AJAX(Asynchronous JavaScript and XML)
      비동기적으로 사용하는 JS와 XML
      외부에 있는 정보를 가져올 때 해당 정보를 무조건 가져온다는 보장도 없고
      해당 정보가 있다는 보장도 없다.
      해당 정보를 바로 받아올 수 있다는 보장도 없다.

      해당 정보를 올바르게 받아오지 못하는 경우의 수를 처리하기 위해서 
      비동기 기법 이용


   ▶ XMLHttpRequest
      AJAX의 핵심 객체 ⇒ AJAX를 사용하는 최초의 방법
      단점  : 원하는 정보에 비해 작성할 내용이 너무 많다.
      하지만 XMLHttpRequest은 이름 그대로 XML을 이용하는게 기본 원칙
      
   ▶ JSON
      XML 방식을 대체하기 위한 구조



   ▶ Fetch
      XMLHttpRequest와는 다르게 무엇을 보내고 받던 
      상관없이 처리할 수 있도록 만들어진 AJAX 기능

      Fetch 이용해서 작성 
      ⇒ 손쉽게 쓸 수 있도록 만든 것
      ⇒ $ajax, axios

      AJAX가 비동기이기 때문에 Fetch도 비동기
      ⇒ Promise
      ⇒ Fetch가 Promise 기반의 함수

      Fetch를 이용해서 외부 링크의 정보를 획득할 수 있다.



   ▶ Fetch 옵션
      ● fetch(url, options)
        url       : 요청할 외부 링크 문자열
        options   : 추가로 상대방에게 전달할 정보를 object{}형으로 작성
                    생략가능

                    ● method
                      ⇒ HTTP 요청 종류 - GET, POST

                    ● headers
                      ⇒ 추가적으로 덧붙이고 싶은 헤더 정보

                    ● body
                      ⇒ 전달할 정보 - FormData, JSON, ...
                         method가 GET이 아닐때만 사용이 가능(POST만 가능)

                    ● mode
                      ⇒ 요청의 모드
                         cors, same-origin, no-cors

                         mail.naver.com(현재 내가 보고있는 사이트), cafe.naver.com, blog.naver.com, goole.com
                         cors → ⭕ ⭕ ⭕ ⭕
                         same-origin → ⭕ ⭕ ⭕ ❌
                         no-cors → ⭕ ❌ ❌ ❌

                    ● credentials
                      ⇒ 쿠키 포함 여부
                         same-origin, include

                    ● cache
                      ⇒ 동일 경로로 정보 요청을 할때 어떻게 처리할지에 대한 속성
                         no-cache, reload, no-store

                    ● redirect
                      ⇒ 다른 페이지로 이동하라는 옵션을 따를지말지 결정하는 속성
                         follow, menual



      ● 응답 변수 옵션 ▶ .then(response =>)
                    ● status
                      ⇒ 상태 번호(HTTP 상태 코드)

                    ● statusText
                      ⇒ 상태 번호에 따른 문자열

                    ● ok
                      ⇒ 200 ~ 299번 상태코드가 성공코드인지를 확인하는 변수
                         true, false 반환

                    ● headers
                      ⇒ 서버에서 추가적으로 덧붙힌 정보

                    ● url
                      ⇒ Fetch한 경로

                    ● redirected
                      ⇒ redirect를 시키는지 여부
                         true, false 반환


      ● 응답 함수 옵션 ▶ .then(response =>)
                    ● json()
                      ⇒ 응답받은 정보를 json으로 변환시키는 함수
                         ※ 주의사항
                            {a:b,} [1,2,] 이런 상황이 json() 함수는 오류가 난다.
                            맨 마지막 쉼표 오류냄

                    ● text()
                      ⇒ 응답받은 정보를 text로 변환시키는 함수
                         
                    ● blob()
                      ⇒ 응답받은 정보를 파일 객체 자료형 변환시키는 함수


*/