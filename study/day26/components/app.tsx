import React from 'react';
import { Box, Button, Flex, Heading, Input, InputGroup, InputRightAddon, Tabs, TabList, Tab, TabPanels, TabPanel, HStack, Text, VStack, Circle } from '@chakra-ui/react';
import { SearchIcon, SettingsIcon, AtSignIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';

import RecommendationContent from './RecommendationContent';    // 추천 컴포넌트
import CharacterContent from './CharacterContent';              // 캐릭터 컴포넌트
import CategoryContent from './CategoryContent';                // 카테고리 컴포넌트
import FavoritesContent from './FavoritesContent';              // 즐겨찾기 컴포넌트


export default function App() {
    return <Box display="flex" flexDirection="column" minHeight="100vh">
        {/* ▶ 헤더 영역 */}
        <Box as="header" position="fixed" top="0" left="0" right="0" zIndex="1000" bg="white" width="100%" h="100px" boxShadow="sm">
            <Flex align='center' justify='space-between' mx="400px" h="100%">
                <Heading>로고</Heading>
                <Flex flex="0.5">
                    <InputGroup>
                        <Input placeholder='검색어를 입력하세요'/>
                        <InputRightAddon children={<SearchIcon />} />
                    </InputGroup>
                </Flex>
                <Flex>
                    <Button marginRight="10px">로그인</Button>
                    <Button><SettingsIcon/></Button>
                </Flex>
            </Flex>
        </Box>

        {/* ▶ 네비게이션 바 영역 */}
        <Box as="nav" mt="120px" flex="1">
            <Tabs align='center'>
                <TabList>
                    <Tab>추천</Tab>
                    <Tab>캐릭터</Tab>
                    <Tab>카테고리</Tab>
                    <Tab>즐겨찾기</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <RecommendationContent />
                    </TabPanel>
                    <TabPanel>
                        <CharacterContent />    
                    </TabPanel>
                    <TabPanel>
                        <CategoryContent />
                    </TabPanel>
                    <TabPanel>
                        <FavoritesContent />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

        {/* ▶ 푸터 영역 */}
        <Box as="footer" {...boxFooterStyle} mt="120px">
            <Flex align='center' justify='space-between' mx="400px" pt="50px">
                <VStack align='left'>
                    <Text variant="subtitle">
                        공지사항 | 이용약관 | 운영원칙 | 개인정보 처리방침 | 청소년보호정책 | 고객센터 | 제휴제안
                    </Text>
                    <Text variant="subtitle">© Connect Foundation</Text>
                </VStack>
                <HStack>
                    <Circle size="46px" bg="gray.500" color="white"><AtSignIcon/></Circle>
                    <Circle size="46px" bg="gray.500" color="white"><EmailIcon/></Circle>
                    <Circle size="46px" bg="gray.500" color="white"><PhoneIcon/></Circle>
                </HStack>
            </Flex>
        </Box>
    </Box>
}


// ▶ 컴포넌트 스타일 정의
// 01. Box 푸터 영역
const boxFooterStyle = {
    bg: 'gray.200',
    width: '100%',     // 전체 너비
    height: '200px',
};