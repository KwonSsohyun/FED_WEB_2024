// ▶ 차크라 UI(Chakra UI)
/*

    ▶ Chakra UI / Chakra Icons 라이브러리 설치
       ⇒ npm i @chakra-ui/react @chakra-ui/icons



    ▶ Chakra UI 란?
       ⇒ 테일윈드(Tailwind)는 속성을 일일히 다 작성해야해서 유지보수 측면에서 어려움이 많은데
          따로 컴포넌트방식으로 만들어진 대상을 이용한다면 조금 더 편리하게 이용할 수 있지 않을까?

          외부에서 미리 만들어진 디자인을 가져다 사용하는 방법은 매우 많다.
          ex) Material Design

          그 중에 리액트(React)에 걸맞는 방법은 몇개 안된다.


       ⇒ Chakra UI
          React 전용으로 디자인된 컴포넌트 라이브러리
          그렇게 골라놓은 리액트 전용 외부 라이브러리에서 선택한 라이브러리 


       ⇒ 왜 많고 많은 것중에 Chakra 냐?
          1. 높은 사용 빈도
          2. 대응 가능한 여러 디자인


       ⇒ 리액트(React)에 디자인을 손쉽게 구현할 수 있다.
          우리는 디자인만 신경쓰면되는 Front-end 이기 때문.




    ▶ Chakra UI 기본 사용법
       Chakra-UI의 모든 것들이 컴포넌트화 되어있기 때문이다.
       필요한 컴포넌트를 가져다 쓰면 된다.

       ⇒ 테마(Theme)
          Chakra UI에서도 테마 시스템이 존재하며, 사용자 정의가 가능하다.


       ⇒ useContext(전역변수저장소) 사용 
          Chakra UI 내부에서 사용하는 개념으로, 테마 적용을 위한 방법이다.
          Chakra UI를 사용하려면 ChakraProvider로 컴포넌트를 감싸야 한다. 
          테마를 사용하든 사용하지 않든 ChakraProvider로 감싸는 것이 필수다.

          보통 최상위 컴포넌트인 App을 ChakraProvider로 감싸서 사용
          app.render(<App/>) 에서 ChakraProvider로 감싸는 편이다.

          ChakraUI 는 모든 기능이 컴포넌트화 되어있기 때문에
          가져다 쓰기만 하면 디자인을 매우 손쉽게 구현할 수 있다.



          ex) 📁components/📜main.tsx ▶ 최상위 컴포넌트에서 하위 컴포넌트를 ChakraProvider로 감싼다.
                import React from 'react';
                import ReactDOM from 'react-dom/client';

                import { ChakraProvider } from '@chakra-ui/react';
                import App from './app';
                import './main.css';

                const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

                root.render(
                    <ChakraProvider>
                        <App/>
                    </ChakraProvider>
                )              


                📁components/📜app.tsx ▶ 하위 컴포넌트에서 Chakra UI를 사용하여 컴포넌트 스타일로 UI를 구성한다.
                    import React from 'react';
                    import { Text, VStack, HStack } from '@chakra-ui/react';

                    export default function (){
                        return <div>
                            <HStack>
                                <VStack>
                                    <Text>텍스트1</Text>
                                    <Text>텍스트2</Text>
                                    <Text>텍스트3</Text>
                                    <Text>텍스트4</Text>
                                </VStack>
                            </HStack>
                        </div>
                    }





    ▶ Chakra UI 레이아웃 주요 컴포넌트
       → https://v2.chakra-ui.com/getting-started

       → 속성 정의
         a=""   기본적인 태그 문법
         a={}   리액트 태그 문법


       ⇒ AspectRatio (비율)
          내부에 들어오는 태그의 비율을 지정하는 컴포넌트

          ◆ 속성
             ● ratio
               비율을 적는 속성
               비율은 가로/세로
               1:1(1), 4:3(1.3333)
               보통은 값을 적기보다 가로/세로의 비율로 작성



       ⇒ ⭐Box (박스)
          div를 대체하여 내부 태그를 그룹화하는 컴포넌트



       ⇒ Center, Circle, Square
          ● Center
            가운데에 내용물을 위치시키는 div 태그

          ● Circle / Square
            인라인으로 내용물의 크기만큼만 크기를 차지해서 원과 박스를 만드는 태그
            글자나 이런거를 사용할 때보다 아이콘을 만들때 많이 이용



       ⇒ Flex, Spacer
          ● Flex
            규칙적으로 간격을 만드는 태그       

          ● Spacer
            내용물 사이 사이에 넣어서 간격을 동일하게 만든다.
            gap을 직접 제어하기 위함
            alignItems, gap, ... 이런 속성을 직접 넣어서 따로 구현할 수도 있다.



       ⇒ Grid, GridItem
          ● Grid
            규칙대로 만든 칸에 내용물을 할당하는 태그
            GridItem에 내용물을 넣어서 칸을 확정
            templateColumns, templateRows에 repeat등을 설정하여 사용

          ● GridItem
            rowSpan, colSpan 을 넣어서 크기 지정 가능



       ⇒ ⭐Stack, VStack, HStack, StackDivider
          ● Stack (양방향)
            쌓는 구조로 내용물을 순서대로 나열하는 태그
            내가 직접 속성으로 방향을 지정하는 스택

            ◆ 속성
               ● direction={'column'}           세로 방향
               ● direction={'row'}              가로 방향

               ● divider={<StackDivider/>}      구분선 추가 <StackDivider/>
                 구분선 추가 <StackDivider/>(반드시 divider 속성 안에 넣어야 한다.)
                 


          ● ⭐VStack (세로)
            Column Stack 세로로 쌓는 구조

          ● ⭐HStack (가로)
            Row Stack 가로로 쌓는 구조





    ▶ Chakra UI 주요 컴포넌트

       ⇒ Image
          이미지 넣는 태그
          fallbackSrc 속성을 사용하면 로딩 중에 보여줄 대체 이미지를 설정


       
       ⇒ Editable(EditablePreview, EditableInput, EditableTextarea)
          보여지는 Label과 입력하는 Input을 자연스럽게 전환하는 태그

          Editable 태그 안에 
          EditablePreview와 EditableInput을 포함해야 합니다.

          입력 필드 처음 클릭을 위해서 w(너비)를 설정하거나 defaultValue를 설정
          EditableInput 대신에 EditableTextarea를 넣으면 여러줄 입력도 수정 가능



       ⇒ Input, InputGroup(InputAddon, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement)
          Input 태그도 존재하지만, 일반 input과 차이점이 그닥 없다.

          ● InputGroup
            Input을 꾸미기 위한 그룹을 만드는 태그

            순서를 지켜서 사용한다.
            InputLeftAddon/InputLeftElement  >>>  Input  >>>  InputRightElement/InputRightAddon 순서로 사용하는게 좋다.


          ● InputLeftAddon, InputLeftElement
            InputGroup에 InputLeftAddon을 넣으면 왼쪽에 고정된 값이 추가된 것처럼 꾸미고
            InputGroup에 InputLeftElement를 넣으면 입력창 왼쪽에 특정 글자가 들어있는 것처럼 꾸민다.

          ● InputRightAddon, InputRightElement
            Left를 Right로 바꾸면 반대편 구성도 손쉽게 넣을 수 있다.



       ⇒ Chakra Icons 아이콘 사용
          https://v2.chakra-ui.com/docs/components/icon

          ex) 📁components/📜app.tsx ▶ 하위 컴포넌트에서 Chakra UI와 Chakra Icons 사용
            import React from 'react';
            import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
            import { SearchIcon } from '@chakra-ui/icons';

            export default function (){
                return <div>
                    <InputGroup>
                        <InputLeftElement><SearchIcon/></InputLeftElement>
                        <Input/>
                    </InputGroup>
                </div>
            }



       ⇒ PinInput, PinInputField
          ● PinInput
            OTP(One-Time Password) 기능을 활용하기 위해서 각각 자리별로 따로 Input을 만드는 입력 태그

            ◆ 속성
               ● type
                 alphanumber    : 기본값
                 number         : 숫자만 입력

               ● mask
                 입력 시 내용을 비밀번호처럼 가려주는 속성

               ● defaultValue
                 초기값 설정
            

          ● PinInputField
            PinInput 태그 안에 PinInputField를 자릿수만큼 추가하면 
            자동으로 입력 필드를 생성하는 컴포넌트


          ex) 📁components/📜app.tsx
                import React from 'react';
                import { PinInput, PinInputField, HStack } from '@chakra-ui/react';

                export default function (){
                    return <div>
                        <HStack>
                            <PinInput type='number' mask placeholder='예시글자' defaultValue='12'>
                                <PinInputField/>
                                <PinInputField/>
                                <PinInputField/>
                            </PinInput>
                        </HStack>
                    </div>
                }


*/