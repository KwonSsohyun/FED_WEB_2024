// ▶ Accordion
/*
import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';

export default function (){
    return <div>
        <Accordion allowToggle allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    제목
                    <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel>
                    내용
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    제목
                    <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel>
                    내용
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
}
*/



// ▶ Tabs
/*
import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

export default function (){
    return <div>
        <Tabs variant="soft-rounded">
            <TabList>
                <Tab>홈</Tab>
                <Tab>시리즈</Tab>
                <Tab>인기</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>홈 화면</TabPanel>
                <TabPanel>시리즈 화면</TabPanel>
                <TabPanel>인기 화면</TabPanel>
            </TabPanels>
        </Tabs>
    </div>
}
*/



// ▶ Modal / useDisclosure 훅
/*
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export default function (){
    
    const { isOpen, onClose, onOpen } = useDisclosure();

    return <div>
        <Button onClick={onOpen}>모달창</Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInLeft'>
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
*/



// ▶ Drawer / useDisclosure 훅
/*
import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton, DrawerBody, DrawerFooter, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export default function (){

    const { isOpen, onClose, onOpen } = useDisclosure();

    return <div>
        <Button onClick={onOpen}>드로우 창</Button>
        <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerHeader>제목</DrawerHeader>
                <DrawerCloseButton/>
                <DrawerBody>본문</DrawerBody>
                <DrawerFooter>꼬릿말</DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>
}
*/



// ▶ Chakra UI 테마 / useColorMode 훅
import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export default function (){

    const { colorMode, toggleColorMode } = useColorMode();

    return <div>

        <a href='https://www.naver.com/' className='link'>링크 버튼</a>

        <Text color="빨강">텍스트</Text>
        <Text color="brand.text">텍스트</Text>

        <Button onClick={toggleColorMode}>컬러모드 {colorMode}</Button>

        <Button variant="solid2">버튼 1</Button>
        <Button>버튼 2</Button>
        <Button>버튼 3</Button>
        <Button>버튼 4</Button>
        <Button>버튼 5</Button>
    </div>
}