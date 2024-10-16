// ▶ 합산 결과 반환 함수
//    서버리스 함수에 등록하여 쿼리 파라미터 합산결과 반환
//    해당 파일을 ☁️http://192.168.100.20:5555/upload 경로로 서버리스 함수로 등록
/*
    해당 URL 접속 시
    쿼리 파라미터 'data'와 'ammount'를 받아서 합산한 결과를 JSON 형태로 반환

    ☁️ http://192.168.100.20:5555/cloud/sohyun/plus?data=5&ammount=3
    ➡ {"message":8}

*/
export default (req,res)=>{
    const data = parseInt(req.query.data) || 0;
    const ammount = parseInt(req.query.ammount) || 1;

    return JSON.stringify({ message : data + ammount });
}