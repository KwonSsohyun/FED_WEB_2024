function A(){
    console.log('A함수');
}

function B(){
    console.log('B함수');
}

// ▶ require를 위해서 내보내는 기능을 작성
//    module.export에 내보내고 싶은 대상을 작성
// module.exports = A;


// ▶ 단지 commonjs방식 내보내기를 할때 중요한 점
//    여러개를 적는다고 여러개가 넘어가지는 않는다.
//    → B만 보임
// module.exports = B;


// ▶ 여러개를 내보내기 위해서는 오브젝트형으로 묶어서 반환
module.exports = {
    A, B
};