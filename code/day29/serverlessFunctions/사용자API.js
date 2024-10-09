// ▶ API 데이터 가져오기 함수
//    서버리스 함수에 등록하여
//    외부 API에서 사용자 데이터를 가져와 JSON 형식으로 반환
//    해당 파일을 ☁️http://192.168.100.20:5555/upload 경로로 서버리스 함수로 등록
/*
    ● fetch("API요청URL경로")
      지정된 API 경로에 HTTP 요청을 보내고,
      이 요청은 비동기적으로 실행되며, 서버의 응답을 기다립니다.

    ● then(v => v.json())
      서버에서 응답이 오면, then 메서드가 호출됩니다.
      응답 데이터를 JSON 형식으로 변환

    ● await
      fetch와 then이 모두 완료될 때까지 기다립니다.
      응답 데이터가 JSON 형식으로 변환되고 나면, 
      그 결과를 result 변수에 저장

*/
// 참고파일 : menulistfilter.js
export default async () => {
    const result = await fetch("사용자 API 경로").then(v=>v.json());
    return JSON.stringify(result);
}