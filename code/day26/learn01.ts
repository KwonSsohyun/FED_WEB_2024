// ▶ Chakra UI 사용자 인터페이스 컴포넌트 및 테마 설정
/*

   ▶ Chakra UI 사용자 인터페이스 컴포넌트와 훅

      ▶ Accordion
         웹페이지에서 일부 내용을 접었다 폈다 할 수 있는 기능을 제공하는 컴포넌트
         HTML5의 <details> 태그와 비슷하지만, Chakra UI에서는 더 많은 기능과 스타일을 지원

         ⇒ Accordion
            여러 개의 Accordion 아이템을 감싸는 그룹 컴포넌트

           → 속성
             ● allowToggle
               하나의 아이템을 열고 닫을 수 있는지 여부

             ● allowMultiple
               여러 개의 아이템을 동시에 열 수 있는지 여부

         ⇒ AccordionItem
            각각의 Accordion 항목을 감싸는 컴포넌트
         
         ⇒ AccordionButton
            각 항목의 제목(버튼) 역할을 하는 부분

         ⇒ AccordionPanel
            Accordion이 펼쳐졌을 때 나타나는 내용

         ⇒ AccordionIcon
            제목 옆에 표시되는 화살표 아이콘 (∨)



      ▶ Tabs
         여러 화면 중 하나만 선택해서 보여주는 컴포넌트

         ⇒ Tabs
            탭 전체를 감싸는 컴포넌트
            
           → 속성
             ● variant
               탭의 스타일 설정
               옵션 : line, enclosed, enclosed-colored, soft-rounded, solid-rounded, unstyled

             ● align
               탭 버튼의 정렬 위치 설정
               start, center, end

             ● isFitted
               탭 버튼들이 가로 폭을 가득 채울지 여부


         ⇒ TabList
            탭 제목들을 감싸는 컴포넌트

         ⇒ Tab
            각 탭의 제목을 나타내는 컴포넌트

         ⇒ TabPanels
            각 탭에 해당하는 화면(콘텐츠)을 감싸는 컴포넌트

         ⇒ TabPanel
            각 탭의 내용을 표시하는 영역



      ▶ Modal / useDisclosure 훅
         웹사이트 화면 가운데에 창을 띄우는 컴포넌트

         ⇒ Modal
            모달 전체를 감싸는 컴포넌트

           → 속성
             ● isCentered
               모달을 화면 중앙에 위치

             ● motionPreset
               모달이 나타날 때 사용할 애니메이션 효과를 설정
               옵션 : slideInBottom, slideInRight, slideInLeft, scale, none


         ⇒ ModalContent
            모달의 전체 내용을 담는 컴포넌트

         ⇒ ModalHeader
            모달의 제목을 표시하는 컴포넌트

         ⇒ ModalCloseButton
            모달을 닫는 버튼

         ⇒ ModalBody
            모달의 본문 내용을 담는 컴포넌트

         ⇒ ModalFooter
            모달 하단의 꼬릿말이나 추가 버튼을 넣는 부분

         ⇒ ModalOverlay
            모달 외부를 덮는 가림막으로, 이 부분을 클릭하면 모달이 닫힘


          ex) 📁components/📜app.tsx ▶ 이것만으로는 모달 제어 불가 (useDisclosure 훅 함께 사용)
               <Modal isOpen={true} onClose={()=>{}}>
                     <ModalOverlay/>
                     <ModalContent>
                        <ModalHeader>제목</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>본문</ModalBody>
                        <ModalFooter>꼬릿말</ModalFooter>
                     </ModalContent>
               </Modal>

            

         ⇒ ➕ useDisclosure 훅
            useDisclosure는 모달 창을 열고 닫는 것을 간단하게 관리하기 위한 훅

             ● isOpen
               모달이 열려 있는지(true), 닫혀 있는지(false)를 나타냄
               true, false 값

             ● onOpen
               모달을 열 때 사용 - (isOpen을 true로 바꿉니다)

             ● onClose
               모달을 닫을 때 사용 - (isOpen을 false로 바꿉니다)


          ex) 📁components/📜app.tsx ▶ useDisclosure 훅 사용
               import React from 'react';
               import { Modal, ModalBody, ModalCloseButton, ModalHeader, ModalFooter, ModalContent, ModalOverlay, Button } from '@chakra-ui/react';
               import { useDisclosure } from '@chakra-ui/react';

               export default function (){
                  
                  const { isOpen, onClose, onOpen } = useDisclosure();

                  return <div>
                     <Button onClick={onOpen}>모달창</Button>
                     <Modal isOpen={isOpen} onClose={onClose}>
                           <ModalOverlay/>
                           <ModalContent>
                              <ModalHeader>제목</ModalHeader>
                              <ModalCloseButton/>
                              <ModalBody>본문</ModalBody>
                              <ModalFooter>꼬릿말</ModalFooter>
                           </ModalContent>
                     </Modal>
                  </div>
               }




      ▶ Drawer / useDisclosure 훅
         Drawer는 화면의 한쪽에서 슬라이드 형태로 창을 띄우는 기능을 제공하는 컴포넌트
         Modal과 사용 방식이 유사하며, Modal 대신 Drawer 컴포넌트를 사용
         placement 속성을 통해 Drawer가 나오는 방향을 지정할 수 있다는 점만 다르다.

         ⇒ Drawer
            Drawer 전체를 감싸는 컴포넌트

           → 속성
             ● placement
               Drawer가 나타나는 방향을 지정
               옵션 : left, right, top, bottom


         ⇒ DrawerContent
            Drawer의 내용을 담는 컴포넌트

         ⇒ DrawerHeader
            Drawer의 제목을 표시하는 컴포넌트

         ⇒ DrawerCloseButton
            Drawer를 닫는 버튼

         ⇒ DrawerBody
            Drawer의 본문 내용을 담는 컴포넌트

         ⇒ DrawerFooter
            Drawer 하단에 꼬릿말이나 추가 버튼을 넣는 부분

         ⇒ DrawerOverlay
            Drawer 외부를 덮는 가림막. 이 부분을 클릭하면 Drawer가 닫힘



      ▶ Popover / useDisclosure 훅
         버튼 밑이나 이런 곳에서 추가적인 창을 띄우는 구조
         Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter, PopoverAnchor


         Popover              : Popover의 전체 구조를 감싸는 컴포넌트
         PopoverTrigger       : Popover를 여는 트리거 요소 (예: 버튼)
         PopoverAnchor        : Popover의 위치를 기준으로 하는 앵커 역할을 하는 컴포넌트
         PopoverContent       : Popover 내부에 표시될 내용을 담는 컴포넌트
         PopoverArrow         : Popover의 화살표 부분으로, Popover가 연결된 요소를 가리키는 역할
         PopoverHeader        : Popover의 제목을 표시하는 컴포넌트
         PopoverBody          : Popover의 본문 내용을 담는 컴포넌트
         PopoverFooter        : Popover 하단에 추가적인 내용이나 버튼을 넣는 부분
         PopoverCloseButton   : Popover를 닫는 버튼
         
         





   ▶ Chakra UI 테마(Theme)
      Chakra UI에서도 Tailwind CSS에서 사용했던 것과 유사하게 테마 기능을 제공

      그렇다면 Chakra UI에서 사용하는 Theme는 어떻게 사용하는가?


      ⇒ 기본적으로 테마를 만드는 방법
         데이터 구조 : Tailwind와 유사한 형식
         <ChakraProvider theme={}>

         

      ⇒ 1) 최상위 컴포넌트 테마 정보 설정
      
            1. extendTheme 임포트
               import { ChakraProvider, extendTheme } from '@chakra-ui/react';


            2. 테마 정보 변수 선언
               const 테마정보변수명 = {};

               테마를 설정할 때 가장 먼저 정의하는 값
               정해진 카테고리명을 사용

               ● colors
                 색상에 대한 테마 설정

                 값을 설정할 때는 key: value 형태로 설정하되, 
                 그룹화하여 brand: { key: value } 형태로도 정의 가능
                 그룹화한 경우, brand.key 방식으로 접근

               ● fonts        : 폰트 종류
               ● fontSizes    : 폰트 크기
               ● breakpoints  : 미디어 쿼리 제한 지정
               ● space        : 간격
               ● typography, border-radius, z-index


               ● ⭐components
                    기본 컴포넌트들의 디자인 또는 속성 데이터를 따로 정의

                    (props: StyleFunctionProps)=>{}
                    함수를 이용해서 제어하는 방식
                    기본 카테고리에서 동작이 안되도록 수정
                    삼항연산자 사용

                    'solid':(props: StyleFunctionProps)=>({ // 기본값
                         bg: props.colorMode === 'light' ? 'gray' : 'white',
                         color: props.colorMode === 'light' ? 'pink' : 'black',
                    }),                    

               ● ⭐config
                    다크 모드와 같은 설정 정보를 구성하는 값

                 ➕ useColorMode 훅을 이용해서 mode값을 가지고
                     dark모드인지 light모드인지 구별 후 사용


               ● ⭐style
                  Chakra UI는 기본적으로 컴포넌트를 미리 만들어두고
                  만들어둔 컴포넌트를 이용해서 디자인을 짜는 라이브러리
                  미리 만들어진 컴포넌트를 이용하다 보니까 생기는 문제가 
                  a태그 같이 기본 태그는 디자인이 안꾸며진다.

                  Chakra UI의 가장 큰 단점은 무엇이냐?
                  없는 컴포넌트는 꾸미기가 어렴다.
                  정해진 컴포넌트만 이용하도록 라이브러리가 만들어져있다.

                  Chakra UI 만들어둔 컴포넌트가 아닌 다른 태그를 이용할 때도
                  Chakra UI 기능을 연계할 수 있도록 만들기 위한 옵션

                  styles: { global:{} } 
                  → global 전역으로 동작시키기 위해 사용

                  <a href='https://www.naver.com/' className='link'>링크 버튼</a>
                  → className 사용


            3. ChakraProvider에 테마 정보 전달
               <ChakraProvider theme={extendTheme(테마정보변수명)}>




      ⇒ 2) 사용할 컴포넌트에 정의한 테마 사용
            <Text color="빨강">텍스트</Text>
            <Text color="brand.text">텍스트</Text>
            <Button variant="solid2">버튼 1</Button>
            <Button>버튼 2</Button>




*/