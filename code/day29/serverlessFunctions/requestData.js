// ▶ 사용자 요청 데이터 반환 함수
//    서버리스 함수에 등록하여
//    클라이언트의 요청 본문과 URL 파라미터를 합쳐 JSON 형식으로 반환
//    해당 파일을 ☁️http://192.168.100.20:5555/upload 경로로 서버리스 함수로 등록
/*
    해당 URL 접속 시
    서버리스 서버 설정에 따라 user와 filename이 자동으로 추출되어 응답 JSON에 포함
    또한 "test": "message"가 추가로 포함

    ☁️ http://192.168.100.20:5555/cloud/sohyun/requestData
    ➡ {"user":"sohyun","filename":"requestData","test":"message"}
*/
/*
    ⭐ req
        클라이언트의 요청 객체
        → req.body    : 클라이언트가 전송한 요청 본문 데이터를 가져옵니다.
                        ※ 구성 요소 필수
                        - Method  : 요청을 전송하는 방법
                                    method: 'POST'
                        - Headers : 요청의 메타데이터를 포함하며, 요청 본문의 데이터 형식 정의 
                                    headers: { 'Content-Type': 'application/json' }
                        - Body    : 클라이언트가 서버에 보내는 실제 데이터
                                    body: JSON.stringify({ name, age })

        → req.params  : 클라이언트가 전송한 URL의 파라미터를 가져옵니다.

        +) 이 두 객체를 스프레드 연산자(...)를 사용하여 병합


    ⭐ res
        서버의 응답 객체
        클라이언트에게 응답을 보내는 역할
        +) 병합된 객체를 JSON 문자열로 변환하여 클라이언트에게 응답으로 전송

*/

export default (req, res)=>{
    res.send(JSON.stringify({...req.body, ...req.params ,test:"message"}));
}


/*
export default (req, res) => {
  // POST 요청인지 확인
  if (req.method === 'POST') {
      const { reqName, reqAge } = req.body; // 클라이언트에서 보낸 데이터

      // 요청 데이터 로깅 (디버깅 용도)
      console.log('Received data:', req.body);

      // 기존 데이터와 클라이언트 데이터 통합
      const responseData = {
          user: "sohyun",                   // 고정된 데이터
          filename: "requestData",           // 고정된 데이터
          test: "message",                   // 고정된 데이터
          name: reqName,                     // 클라이언트에서 보낸 이름
          age: reqAge                        // 클라이언트에서 보낸 나이
      };

      // 응답으로 데이터 전송
      res.status(200).send(JSON.stringify(responseData));
  } else {
      // GET 요청일 경우 기본 데이터 전송
      res.status(200).send(JSON.stringify({
          user: "sohyun",
          filename: "requestData",
          test: "message"
      }));
  }
};
*/
