/*
    ▶ commonjs
       → 'require 함수' 이용해서 로드 
          패키지명을 작성하면 해당하는 패키지에서 중요한 내용을 로드한다.
          require는 동적 로드이기 때문에 사용할때 로드
          성능 최적화에 뛰어난 능력

          require(패키지명)

         + 직접만든 소스코드의 내용을 불러올때도 이용이 가능하다.
           require(패키지명 또는 파일명)
           
*/
// let react = require('react');


// ▶ 해당 소스코드의 내용물을 로드
//    ./폴더/파일명
// let req = require('./require');


// ▶ 오류난다. 내보내기 해줘야한다.
// req.A();

// ▶ 내보낸 대상을 그대로 받아온다.
//    req => A
//    터미널 → npm start
// req();


// ▶ 여러개를 오브젝트형으로 묶어서 반환하면
//    → A함수, B함수 다 받아온다.
// req.A();
// req.B();

// 디스트럭트
// let {A} = require('./require');
// A();



/*
    ▶ module
       → 동적 로드가 아닌 정적로드로 필요한것만 쉽게 로드하는 방식
         commonjs와 기능은 동일한데 사용법이 다른 로드 방식

         package.json에서 "type": "module" 방식으로 코드변경

         import 가져올 대상 from 가져올 패키지 또는 파일

*/
// ▶ 기본 내보내기는 이름만 올바르게 적어서 가져오면 된다.
// import A from './module.js';

// ▶ 추가 내보내기는 중괄호 안에 적어서 가져오면 된다.(디스트럭트 할당 사용)
// import A, { B } from './module.js';

// ▶ 추가 내보내기는 as를 통해 이름 변경 가능
import A, { FuncB } from './module.js';

// ▶ 패키지 있는거 가져오기
//    기본 내보내기는 이름만, 추가 내보내기는 중괄호 안에 이름
//    리엑트 패키지 안에 있는 변수,매서드 기입
import React, { useId, useCallback } from 'react';

A();
// B();
FuncB();




// 실행 명령어 : npm run beginCode
// 파일 : index.js
    // 시작 파일

// 파일 : math.js
    // 수학 함수 파일

// 동작 : 2와 3 두 숫자 중 큰수 출력