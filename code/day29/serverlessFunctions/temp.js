// ▶ 쿼리 파라미터 JSON 반환 함수
//    서버리스 함수에 등록하여 HTTP 요청의 쿼리 파라미터 반환
//    해당 파일을 ☁️http://192.168.100.20:5555/upload 경로로 서버리스 함수로 등록
//
//    ⇒ HTTP 요청의 쿼리 파라미터를 받아 JSON 형태로 반환  
/*
    해당 URL 접속 시
    쿼리 파라미터를 JSON 형태로 반환

    ☁️ http://192.168.100.20:5555/cloud/sohyun/temp
    ➡ {}

    ☁️ http://192.168.100.20:5555/cloud/sohyun/temp?name=sohyun
    ➡ {"name":"sohyun"}

*/
export default (req, res) => {
    return JSON.stringify(req.query);
}