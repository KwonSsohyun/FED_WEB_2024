// ▶ 서버리스 함수에 등록하여 
//    http://192.168.100.20:5555/upload 해당 파일 등록
/*
    해당 URL 접속 시
    쿼리 파라미터 'left', 'right', 'operator'를 받아서 계산 결과를 반환

    http://192.168.100.20:5555/cloud/sohyun/calculator?left=5&right=3&operator=P
    ➡ {"result":8}

    http://192.168.100.20:5555/cloud/sohyun/calculator?left=5&right=3&operator=-
    ➡ {"result":2}

    http://192.168.100.20:5555/cloud/sohyun/calculator?left=5&right=3&operator=*
    ➡ {"result":15}

    http://192.168.100.20:5555/cloud/sohyun/calculator
    ➡ {"result":"잘못된 연산자 처리"}

*/
export default (req, res) => {
    const left = parseInt(req.query.left) || 0;
    const right = parseInt(req.query.right) || 0;
    const operator = req.query.operator;

    let result;

    switch (operator) {
        case 'P':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case 'D':
            result = right!==0 ? (left / right) : '계산오류';
            break;
        default:
            result = "잘못된 연산자 처리";
    }

    return JSON.stringify({ result });
}