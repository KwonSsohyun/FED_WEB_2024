// ▶ 계산 결과 반환 함수
//    서버리스 함수에 등록하여 계산 결과 반환
//    해당 파일을 ☁️http://192.168.100.20:5555/upload 경로로 서버리스 함수로 등록
/*
    해당 URL 접속 시
    쿼리 파라미터 'left', 'right', 'operator'를 받아서 계산 결과를 JSON 형태로 반환

    ☁️ http://192.168.100.20:5555/cloud/sohyun/calculator?left=5&right=3&operator=P
    ➡ {"result":8}

    ☁️ http://192.168.100.20:5555/cloud/sohyun/calculator?left=5&right=3&operator=-
    ➡ {"result":2}

    ☁️ http://192.168.100.20:5555/cloud/sohyun/calculator?left=5&right=3&operator=*
    ➡ {"result":15}

    ☁️ http://192.168.100.20:5555/cloud/sohyun/calculator
    ➡ {"result":"잘못된 연산자 처리"}

*/
export default (req, res) => {
    const left = parseInt(req.query.left) || 0;
    const right = parseInt(req.query.right) || 0;
    const operator = req.query.operator;

    let result;

    // ● 연산자에 따른 계산 처리
    switch (operator) {
        case 'P': // 더하기
            result = left + right;
            break;
        case '-': // 빼기
            result = left - right;
            break;
        case '*': // 곱하기
            result = left * right;
            break;
        case 'D': // 나누기
            result = right!==0 ? (left / right) : '계산오류';
            break;
        default:
            result = "잘못된 연산자 처리";
    }

    // ● 결과를 JSON 형식으로 반환
    return JSON.stringify({ result });
}