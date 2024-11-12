// ▶ 프록시(Proxy)
/*

   ▶ 프록시란?
      대체자
      원래 사용되던 어떤 동작을 다른 동작으로 변경시키는 기능

      프록시 서버 ⇒ 사용자가 요청을 할때 프록시 서버를 경유해서 사용자 정보를 가리는 기능
      완성본이 어떤 문제가 있건없건 상관없이 별개로 구조를 만드는 것 


   ▶ 언제 쓸까?
      계정정보를 사용 ⇒ 비번이 보이면 안돼
      어떤 정보를 활용하다가 바꿔야할때 바꾸는 내용이 너무 많은 양이 될 때


   ▶ Proxy Class
      특정 환경에서 정보의 원본은 변경이 없이
      추가적인 또는 변형 정보를 만들어야할 때

      ⇒ 해당하는 변수 안에 어떤 접근을 했을 때(변수, 함수, 연산자 등)
         해당 접근을 함수로 처리하는 클래스

      ● new Proxy(원본정보, 처리할함수목록) ⇒ 원본 정보를 래핑한 프록시 객체
                                             처리할 함수 목록은 정해져 있다.

                                             [함수 목록]
                                              ⇒ get(origin, props)
                                                 변수 접근
                                                 프록시객체.변수 
                                                 → 이때 대신 불리는 함수

                                                 origin → 프록시 객체를 만들때 받아왔던 원본 정보
                                                 props  → 프록시 객체에서 접근한 변수 이름


                                              ⇒ set(origin, props, value)
                                                 변수 변경
                                                 프록시객체.변수 = 값;

                                                 실제 값을 변경하게 하는것이 아니다.
                                                 함수에서 값을 변경하도록 작성하는 것

                                                 origin → 원본정보
                                                 props  → 변수이름
                                                 value  → 값 


                                              ⇒ has(origin, props)
                                                 in 연산자
                                                 array형 같이 여러개짜리는 안에 무엇이 포함되어있는지
                                                 a in b 식으로 작성
                                                 이걸 대신 하는 함수 이다.

                                                 origin → 원본정보
                                                 props  → 변수이름                                                 


                                              ⇒ deleteProperty(origin, props)
                                                 delete 연산자
                                                 delete a 이것을 대신하는 함수

                                                 origin → 원본정보
                                                 props  → 변수이름    


                                              ⇒ apply(origin, thisArg, args)
                                                 함수형
                                                 프록시객체() 
                                                 즉, new Proxy(함수, {apply}) 를 넣을 때 대체하는 기능

                                                 origin → 원본정보
                                                 thisArg → 함수에서 사용될 this 인자
                                                 args    → 함수에 넣은 매개변수 목록


                                              ⇒ construct(origin, args, newTarget)
                                                 생성자

                                                 origin    → 원본정보
                                                 args      → 함수에 넣을 매개변수 목록
                                                 newTarget → 생성될 객체



      ● 프록시객체.Value, 프록시객체.Func() ⇒ 처리할 함수 목록의 특정 함수가 호출되게 한다.



*/