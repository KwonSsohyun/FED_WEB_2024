/* 
    [🔒문제]
        서버리스 본인 계정으로 calculator 등록

        ⇒ req.query(URL파라미터)에서 받아오는 값
            operator    : *, +, -, D 연산자
            left        : 왼쪽 숫자
            right       : 오른쪽 숫자

    [📝출력]
        ⇒ 결과값        : { result: 결과값 }

*/
// 🔑Code
/*

    【 React 애플리케이션에서 서버리스 함수와 통신하기 】

    ▶ 서버리스 함수(Cloud Functions)
       ☁️serverlessFunctions/📜calculator.js
       서버리스에 등록된 계산기 함수


    ▶ 리액트 애플리케이션에서 서버리스 함수 호출
       📁components/📜app.tsx
       리액트 애플리케이션은 `fetch`를 사용하여 서버리스에 등록된 함수를 호출하고 계산 결과를 가져옵니다. 
       이 결과는 리액트 컴포넌트에서 상태를 업데이트하는 데 사용됩니다. 
       이 과정은 리액트 애플리케이션 내에서 실행되며,
       서버리스 함수는 계산을 완료한 후 결과를 반환합니다.

*/