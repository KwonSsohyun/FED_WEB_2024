// ▶ 사용자 정의 훅(Custom Hook)
/*

   훅을 통해서 컴포넌트를 작성할 때 특정 코드를 비슷하게 작성하는 경우가 매우 많이 존재
   대표적인 예로 useReducer 같은게 존재

   정보를 관리하는 훅은 useState, useContext 두 개 뿐이었다.

   useReducer가 useState를 이용해서 만든 커스텀 훅이기 때문이다.
   useState만으로도 충분히 정보를 관리하는 최저조건을 만족시키기 때문에
   특별히 다른 훅이 필요하진 않는데 
   문제는 useState만으로 만들다보니 비슷한 코드를 만드는 경우가 많이 생겼다.

   그게 바로 useReducer를 사용하는 상황처럼 복잡한 데이터 변환을 함수로 대체시키는 코드

   ⇒ useReducer
      사용자가 useState로 특별한 방법으로 사용하던 함수 동작들을 따로 빼서 만든 훅 




   ▶ Custom Hook
      사용자가 훅을 이용해서 컴포넌트를 만들다보면 특정 과정의 코드가 많이 생기는데
      이걸 미리 훅으로 만들어 둔다면 편리하게 코드를 만들 수 있겠다.

      ⇒ 사용자 정의 훅을 만드는 방법 + 편리하게 이용하는 방법


      ▶ 사용자 정의 훅을 만들때 무조건 제일 먼저 해야하는 것!
         ● 훅들을 모아둘 폴더를 만든다. (제일 중요한 첫 번째)
           → "📁hook" 새 폴더 생성

         ● 훅들을 모아둘 폴더에 index.tsx 파일을 만드는 것 (제일 중요한 두 번째)
           → "📜index.tsx" 새 파일 생성
               → ex) import React, { useState, useReducer, useEffect } from 'react';
                     export {useState, useReducer, useEffect};

                     const test = 1;
                     const other = 'hello';
                     export {test, other};
              

               스크립트에서 import 할때
               export하는 대상이 적힌 파일명을 명시

               이게 훅들을 각각의 파일에 따로 만들수록 관리가 어렵고 귀찮아진다.

               스크립트의 기본 문법 기능 중에 
               → import ~ from '폴더명' 
                 폴더명을 적는다면 해당 폴더에 들어있는 index라는 이름을 가진 파일의 export를 가져온다.   
                 ex) "app.tsx" 에서 훅 가져와 쓸 수 있다.
                     import {test, other} from '../hook';  
                     import { useEffect } from '../hook';

                     export default function () {
                        return <>
                           {test},{other}
                           {useEffect}
                        </>
                     }

                 index파일에서 모든 훅을 import한 후에 export 한다면?

                 그렇다면 여러파일에서 만든 훅들을 index에서 export하게 한다면
                 나는 해당 폴더를 import해서 사용할 함수만 {이름, 이름} 으로 작성해줘서 가져올 수 있다.

                 훅을 폴더를 통해서 가져올 수 있다면
                 → 컴포넌트도 관리를 쉽게하기위해 폴더를 만들고 index를 만들어서 관리




      ▶ 이제 사용자 정의 훅을 만들고 
         "📁hook/📜index.tsx" ⇒ "export"하면 된다.
         → ex) import React, { useState, useReducer, useEffect } from 'react';
               export {useEffect};
         
         그럼 이제 알아야할 것 
         → "사용자 정의 훅(Custom Hook)" 만드는 방법

         ● 훅(Hook) → 함수를 실행했을 때 혹은 함수의 결과물을 이용했을 때
                      리액트의 기능과 연동되어서 동작하도록 만들어주는 함수




      ▶ 어떻게 리액트와 연관성을 만드는가?(핵심)
         어차피 사용자 정의 훅이라는게 특별히 새로운 동작을 하길 바라는것인가?(❌)
         어차피 원래 할 수 있던 동작인데 그걸 쉽게 쓰고싶다.(⭕)

         ⇒ 그렇다면 원래 있던 훅으로 만들 수 있는 코드라는 소리
            그럼, 원래 있던 훅으로 코드를 만들어서 해당 코드를 훅으로 만든다면?
            내가 리액트와 연관성을 만드는 방법을 모른다고 해도 연동이 된다.


         ⇒ ⭐커스텀 훅을 만드는 방법
              : 원래 있던 훅을 이용해서 만드는 것




      ▶ 토글(Toggle) 훅
         버튼 클릭 시 보여지다가 다시 누르면 안보여지는 효과를 쓰는 경우가 꽤 있는데
         이걸 useState로 만들려고 하면 코드가 난잡해지는 경우가 생긴다.

         기본값 false
         Toggle 함수    : 호출 시 현재값 반전
         On 함수        : 호출 시 true
         Off 함수       : 호출 시 false



         ⇒ 훅의 결과값이 []배열인 경우
            const [a,b,c] = 훅
            → 훅의 결과값을 첫번째 a, 두번째 b, 세번째 c

         ⇒ 훅의 결과값이 {} 오브젝트인 경우
            const {a,b,c} = 훅
            훅 결과값의 a,b,c를 가져오겠다.

            그랬을 때 이름이 겹치는 경우
            {a:d, b:e, c:f} = 훅
            → "원래이름:새이름" 작성하면 왼쪽에 있는 이름의 값을 오른쪽의 이름으로 변경해서 획득
               a이름을 이제 d로 쓸 수 있다.




      ▶ 클램프(Clamp) 훅
         최소 0이라고 적으면
         -1(0), -2(0), -1000000(0) 범위 안의 값으로 강제로 잘라내기하는 기능 



      ▶ 디테일(Details) 훅 
         → 접기 태그 만드는 훅
           : HTML <details> 태그가 현재는 있다.


*/