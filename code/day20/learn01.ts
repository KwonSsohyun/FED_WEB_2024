// ▶ 리액트 동적 라우팅(Dynamic Routing)
/*

   리액트 라우터 돔에서 배웠던 내용 중에
   /path:value 라는 parameter라는 것을 존재한다는 것만 배우고 사용은 안했음
   훅을 이용해야하기 때문


   ⇒ 오늘 배우는 내용
      react-router-dom 에서 우리가 배웠던 곳까지 사용할만한 훅들
      일반적으로 많이 이용하는 훅들만 배운다.



   ▶ 훅을 배우기 전에 먼저 할 것
      1) routes 만든다.
         → URL의 일부분이 값으로써 활용되고 싶을때 parameter 방식을 작성
           그랬을 때 parameter방식의 일부분을 가져오기 위한 훅 필요

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}></Route>
                    <Route path="/board/:number" element={<Board/>}></Route>
                    <Route path="/user" element={<User/>}></Route>
                </Routes>
            </BrowserRouter>




      2) useParams 훅
         → 경로 파라미터(Path Parameters)를 가져오는 훅
         → URL 경로에서 지정한 부분만 가져오며, 
           ? 뒤에 붙는 쿼리 스트링(Query String)은 가져오지 않습니다.
           
           parameter 방식으로 작성한 URL의 일부분이 변수가 되어서 가져와진다.
           단, 이름을 입력해서 가져오지는 않는다.
           왜냐하면 parameter방식을 여러개 쓸 수도 있다.

           여러개인 경우에는 가져올 때 누구를 가져올지가 매우 중요하기 때문에
           모든 parameter를 name:value 형식으로 오브젝트로 획득

           :number/:price   → {number:0, price:0}
                              {"number":"0"}




      3) useLocation 훅
         → URL의 전체 정보를 가져옵니다.
           URL 전체 정보를 몽땅 가져오기만 한다.
           useLocation 은 그대로 이용하기보다 사용자 정의 훅으로 한번 감싸서 이용

           http://localhost:9999/board/0?username=thgus
           {"pathname":"/board/0","search":"?username=thgus","hash":"","state":null,"key":"default"}
           "search":"?username=thgus"

           http://localhost:9999/board/0?username=thgus&age=20
           {"pathname":"/board/0","search":"?username=thgus&age=20","hash":"","state":null,"key":"default"}
           "search":"?username=thgus&age=20"


         ⇒ 정해진 훅이나 정해진 컴포넌트를 그대로 이용하기보다 원하는대로 가공해서 사용할 줄 알아야한다.
            완벽하게 원본을 아는 것보다 적당히 이해하고 응용하는게 더 좋다. 




      4) 커스텀 훅
         → useLocation을 활용하여 URL의 쿼리 스트링을 객체 형태로 변환

         📁hooks/query.tsx

            import React, { useState } from "react";
            import { useLocation } from "react-router-dom";

            export default function hook(){
                const urlData = useLocation();

                if(!urlData.search || urlData.search == '?') return {};

                const datas = urlData.search.substring(1).split('&').map(v=>v.split("="));

                let result:any = {};

                for(let data of datas){

                    result[data[0]] = 
                        parseInt(data[1]) ? parseInt(data[1]) :
                        (
                            parseFloat(data[1]) ? parseFloat(data[1]) : result[data[0]] = data[1]
                        )

                }

                const [query, _] = useState(result);
                return query;
            }




      5) useNavigate 훅
         → 경로 이동을 함수에 의해서 처리하기 위한 훅      
           이 훅을 이용하면 함수가 한개 반환되고 해당 함수로 경로 이동을 할 수 있다.

         → a 링크처럼 언로드가 되는게 아닌 Link처럼 언로드 없이 이동이 된다.           

         → 리액트의 Route경로 이동을 제어하는 훅

         → 단순하게 경로만 적어서 이동할 수 있는게 아니라
           쿼리스트링 전달이 가능하다.
           
           페이지 히스토리의 이동이 가능하다.
           숫자도 적을 수 있다. (delta)
           ● 음수면 이전 페이지를,
           ● 양수면 다음 페이지를 이동하도록 구성
            
            → http://localhost:9999/user?userName=thgus
                <button onClick={()=>{
                    nav("/user?userName=thgus")
                }}>버튼</button>

            → 다음 페이지 이동
                <button onClick={()=>{
                    nav(1)
                }}>버튼</button>


           단순한 링크이기 때문에 클릭했을 때 이동밖에 못한다.
           단순 링크가 아니라 다른 동작과 함께 이동이 되고 싶은 경우
           그래서 시스템적으로 직접 경로를 이동시키는 기능이 필요해졌다.

           Browser Object Model ▶ Location ▶ href   : 그러면 언로드가 된다.(성능저하)

           ● Link, NavLink 링크
             a 링크처럼 언로드가 불리는게 아니라 
             Link처럼 언로드 없이 경로변경이 되는 시스템적인 이동 기능 필요




      6) useSearchParams 훅
         → 페이지 경로에 정보를 담아서 이동할 때 
           쿼리스트링으로 정보를 획득하는데

           쿼리스트링을 만들기위한 serch 정보를 구현해야할 때가 있다.

           {a:b} -> ?a=b
           {a:b, c:d} -> ?a=b,c=d

           그럴 때 일일히 코드로 작성하기보다 알아서 값을 넣으면 함수가 작성해준다면 편리하겠다.
           그래서 값을 넣으면 알아서 처리되도록 만들어주는 훅

           useNavigate 와 동일
           훅을 쓰면 함수를 돌려준다.

           해당 함수를 이용해서 값을 변경하면
           search string을 만들어주는 훅

           useState와 매우 비슷
           [value, changer] 를 받아와서
           changer함수를 통해서 값을 변경하면 value가 바뀌는 구조

           대신, value가 초기값에 변경한 값이 들어가는게 아니라
           search string 이 들어온다.

           원래는 value에 ?a=b,c=d 가 자동으로 변환되어서 들어가는데 그 기능이 삭제
           ★ 훅의 원리가 바뀌어서 useLocation으로 가져올 정보의 변경을 위한 훅



      7) 커스텀 훅

         📁hooks/search.tsx

            import React, { useEffect, useState } from "react";

            export default function (def:{}){
                const [obj, objChanger] = useState(def);
                const [search, searchChanger] = useState('');

                const addPair = (key:string, value:string|number) => {
                    let target = {...obj};
                    //@ts-ignore
                    target[key] = value;
                    objChanger(target);
                };

                useEffect(()=>{
                    let result = '?';

                    for(let key in obj){
                        //@ts-ignore
                        result += `${key}=${obj[key]}&`;
                    }

                    searchChanger(result.substring(0, result.length-1));
                }, [obj])

                return {search, addPair};

            }

        왜 중요하냐
        nav, Link, NavLink 같이 경로 이동을 위한 경로 작성을 매우 많이
        그때 내가 넘기고자 하는 값이 있을 때 그걸 url에 포함시켜야지만 같이 넘길 수 있다.
        기본적으로는 form을 이용하는 수 밖에 없으니까
        그래서 게시판에 특정 게시글로 이동하는 기능, 그리고 돌아오는 기능, 페이지 이동 기능 같은걸 만들고 싶을때
        useSearch가 있느냐 없느냐에 따라 페이지 제작 난이도가 매우 많이 바뀐다.


*/