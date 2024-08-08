function A(){
    console.log('A함수');
}

function B(){
    console.log('B함수');
}

function C(){
    console.log('C함수');
}
// ▶ 추가 내보내기는 as를 통해 이름 변경 가능
export {B as FuncB, C};

// export {B, C};      // 추가 내보내기
export default A;   // 기본 내보내기

// ▶ 기본 내보내기는 → 1개만 내보낼 수 있고
// ▶ 추가 내보내기는 중괄호 안에 → 여러개를 적어서 내보낼 수 있다.