// ▶ MobX 상태 관리 라이브러리
/*

    ▶ MobX 패키지 설치
       ⇒ npm i mobx mobx-react
          ● mobx
          ● mobx-react(mobx-react-lite)



    ▶ 외부 저장소
       useState가 영속성이 있는 정보를 만들고 관리할 수 있도록 하기위해 사용하는 훅이긴 한데
       여러가지 사유로 리액트 컴포넌트가 변경되는 경우
       훅을 이용해도 정보가 부득이한 사유로 소멸되는 경우가 간혹 있다.
       그래서 정보를 하위 컴포넌트에서 만들지 않고 상위 컴포넌트에서 만드는 경우가 생긴다.
       그래서 상위 컴포넌트에 정보를 관리하는 모든 훅을 만들고 관리하는 경우도 빈번하다.

       훅으로 정보를 관리하는건 정보가 삭제가 안되게 하기 위함
       정보가 삭제가 안되는 원리는 이전에 컴포넌트를 렌더링 했다면 다시 만들지 않아서 유지하는 방식
       해당 컴포넌트가 필요가 없어지면 유지할 필요가 없다.
       훅으로 만든 정보는 여러가지 사유에 의해 삭제될 수 있다.

       여러가지 사유에 의하더라도 삭제가 안되고 싶을 때
       위쪽 컴포넌트에 생성한다.

       상위 컴포넌트에 훅으로 정보를 만들고 관리하는건 매우 귀찮다.

       정보가 여러가지 상황에도 최대한 초기화가 안되도록 하기 위해서 
       맨 위 컴포넌트에 정보관리 훅을 만든다.
       이걸 쉽게 하고 싶다.

       원리는 useContext, useState와 다르지 않지만 사용 방법을 쉽게하기 위한
       상위 컴포넌트 정보 관리 라이브러리

       Redux, MobX, ...
       → Redux가 제일 유명




    ▶ Redux
       Redux는 학습 난이도가 매우 높은걸로 유명
       원리와 기능은 동일한데 학습 난이도는 조금 낮은 MobX 를 배운다.



    ▶ MobX
       상위 컴포넌트에서 정보를 관리해서 
       컴포넌트 종속적인 정보를 만들지 않는 
       외부 저장소 라이브러리

       → 그렇다면 MobX 를 어떻게 사용하는가?


       1) "📁mobx" 새 폴더 생성
          └ MobX에서 관리할 정보를 파일 단위로 제작
            파일 단위가 아니긴한데 보통은 파일 단위로 사용



       2) "📁mobx/📜counter.tsx" 새 파일 생성
          └ 파일 안에 class를 제작

          └ import { makeAutoObservable } from 'mobx';

          └ constructor(){} 생성자 함수 만든다.
            constructor 생성자 함수 안에 
            makeAutoObservable(this); 를 작성

          └ 만든 클래스를 export default new Class(); 해야하는데
            → export default Class명;
              한군데 모아서 처리 하기 위해서 자료형을 내보낸다.
              
          └ 이제 해당 클래스는 외부에서 공유되는 정보를 저장하는
            외부 저장소가 된다!

            import { makeAutoObservable } from 'mobx';

            class Counter {

                number: number;

                constructor() {
                    this.number = 0;
                    makeAutoObservable(this);
                }

                increment(value: number){
                    this.number += value;
                }

                decrement(value: number){
                    this.number -= value;
                }
            }

            export default Counter;





       3) "📁mobx/📜index.tsx" 새 파일 생성
          └ 내보내기
          
            import Counter from './counter';

            export default {
                counter: new Counter()
            };





       4) 사용할 컴포넌트에서 가져와서 쓰기
          "📁components/📜app.tsx"

          └ export한 클래스에서 인스턴스를 컴포넌트에서 가져다 사용      
            값은 바뀌는데 렌더링이 다시 안되서 리액트에 변화가 없다.
            리액트에 변화를 주기 위해서 단계가 필요하다.    

          └ observer 함수로 컴포넌트를 감싼다.
            리 랜더링이 일어난다.(화면 갱신)
            해당 MobX로 만든 클래스의 값이 변경되면 리렌더링이 동작!
            컴포넌트를 다시 그린다.


            import React from 'react';
            import stores from '../mobx';
            import { observer } from 'mobx-react';


            function LowComponent() {

                const counter = stores.counter;

                return <div>
                    <button onClick={()=>counter.increment(1)}>증가</button>
                    <button onClick={()=>counter.decrement(1)}>감소</button>
                    아래 컴포넌트
                    <div>{counter.number}</div>
                </div>
            }


            const Observer = observer(LowComponent);


            export default function() {
                return <div>
                    <Observer/>
                </div>
            }





    ▶ MobX 원리
       ⇒ observer 단어의 뜻
          관찰자, 관찰하다

       ⇒ MobX 는 값을 관찰

       1) 기본적으로 외부 파일에 만든 변수는 리액트와 연관성이 없다.
          기본적으로 외부에 작성된 모든 변수는 BOM구조 window 하위에 등록
          window → Browser Object Model
          let, const제외하면 모두 window 하위에 등록된다.
          그만큼 영구성(영속성)을 가진다.
          대신 연관성이 없는만큼 값이 바뀌어도 렌더링이 안된다.(화면이 바뀌게는 못함)



       2) 값을 감시하는 체제
          연속성이 있는 값을 감시해서 바뀌는걸 체크하는 기능을 추가
          값을 캐싱해서 변동을 감지
          감지를 누가하는가?

          ⇒ @observable 이 감지한다.
             데코레이터 → 함수를 꾸미는 함수
             근데 각 변수별로 다 적어야함(귀찮음)

             observable(['값']);


          ⇒ makeAutoObservable(this);
             쓰면 너가 정의한 변수들 알아서 @observable 해주는 것
             이걸 더 많이 쓴다.

             import { makeAutoObservable, observable } from 'mobx';

             class Counter {

                number: number;

                constructor() {
                    this.number = 0;
                    makeAutoObservable(this);
                }

             }

             export default Counter;



       3) 값 변경을 감지하면 동작하는 reaction 기능
          기본적으로 MobX는 React와는 별개
          ⇒ observer 함수

          ⇒ observer 함수는 해당 함수 안에서 
             리액트 컴포넌트를 반환하고
             컴포넌트 안에서 감시하던 값이 변경되는걸 감지하면 
             다시 렌더링하게 만든다.





    ▶ MobX 단점
       단순하게 이용할 수 있는만큼 단점 존재

       1) 메모리 많이 사용
          영속성 데이터이기 때문에 메모리를 많이 먹는다.


       2) 렌더링이 많이 불린다.
          단순히 값이 바뀔때마다 불리기 때문이 아니다.
          어떤 값이 바뀌더라도 렌더링하기 때문이다.
          단순히 observer 함수는 값이 변경되면 렌더링 된다.

          observer 는 값 변경이 무엇이든 감지되면 렌더링하기 때문에
          10개의 observer가 있다면 한개의 값만 바뀌어도 모두 렌더링



       ⇒ ⭐이러한 단점을 해결하기 위해서는 2가지 방법
          1) observer 를 모든 컴포넌트 보다 상위에 한 번 적는 것
             여러번 렌더링은 없다 하더라도 전체 렌더링이 되어서 사양 증가는 불가피


          2) ⭐ㄴinjection 을 이용한다.
             결국 observer 할때 어디를 렌더링할지 결정할 수 없는게 문제
             누가 바뀔 때 어떤 렌더링을 다시 해야하는지 알 수 있다면 해결

             ❌ 아무 store나 가져다 사용

             ⭕ 현재 컴포넌트에서 사용하는 store를 직접 지정해서 가져와서 이용
                 Props로 획득1

                 사용자가 해당 컴포넌트에서 어떤 저장소를 사용할지 명시
                 주입하다 → inject

                 대신 inject를 사용하기위한 방법이 조금 번거로움

                 1. 최상단에 MobX Provider 추가
                    import { observer, Provider } from 'mobx-react';

                 2. Provider에 key=value 형태로 MobX Store 주입

                 3. observer 함수를 inject 함수로 감싼다.
                    inject()(observer())

                    → inject 를 이용하면 내가 해당하는 observer 내부에서 사용할 스토어를 선택
                      해당하는 스토어가 변경될때만 렌더링 되도록 구성

                      성능 상승을 없애고 필요한 부분만 렌더링하도록 하는 주입 구조

*/