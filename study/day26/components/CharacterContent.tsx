import React from 'react';
import { Box, HStack, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Circle, SimpleGrid } from '@chakra-ui/react';


// ● 캐릭터 이름을 담은 배열
const characterData = [
    "로보카폴리", "캐리TV송", "라바", "로보카폴리", "티디키즈", 
    "쥬니버동요", "꼬마히어로 슈퍼잭", "깨비키즈", "아쿵다쿵 니하오",
    "초코송", "곰세뚱이", "퍼피구조대", "샌드박스", "신비아파트", 
    "신나는 노래", "아기상어", "햄찌와 친구들", "모두의 마법", "호기심 해결사",
    "로보카폴리", "캐리TV송", "라바","로보카폴리", "캐리TV송", "라바"
];

// ● 한 줄에 9개 표시
const charactersPerRow = 9;


// ▶ 2. 캐릭터 탭 컴포넌트
export default function CharacterContent() {
    return <div>
        {/* ▶ 배너 영역 */}
        <Box mx="300px">
            <HStack mt="50px" justify="center" spacing={8}>
                <Box {...boxBannerStyle}>
                    <VStack align="start" justify="center" height="100%"> 
                        <Text variant="bannertitle">달님이와 함께 <br /> 노래하고 춤 춰요</Text>
                        <Text variant="bannersubtitle">달님이와 신나는 <br /> 뮤지컬 세상 속으로!</Text>
                    </VStack>
                </Box>
                <Box {...boxBannerStyle}>
                    <VStack align="start" justify="center" height="100%"> 
                        <Text variant="bannertitle">콩순이 <br /> 인기 동요 모음</Text>
                        <Text variant="bannersubtitle">언제나 즐거운 콩순이와 <br /> 신나게 놀아봐요!</Text>
                    </VStack>
                </Box>
                <Box {...boxBannerStyle}>
                    <VStack align="start" justify="center" height="100%"> 
                        <Text variant="bannertitle">망태와 함께 <br /> 행복 구슬을 찾아보자!</Text>
                        <Text variant="bannersubtitle">우리 모두모두 <br /> 행복하게 만들어 줄게!</Text>
                    </VStack>
                </Box>
            </HStack>
        </Box>

        {/* ▶ 아코디언 영역 */}
        <Box mx="300px">
            <Accordion allowToggle pt="80px">
                <AccordionItem>
                <Flex align='center' justify='center'>
                    <AccordionButton>
                        <Box as="span">
                            주제별
                        </Box>
                        <AccordionIcon />
                        <Text m={0}>로 찾아요</Text>
                    </AccordionButton>
                    </Flex>
                    <AccordionPanel>
                        <Text textAlign="center">주제별</Text>
                        <Text textAlign="center">가나다순</Text>
                        <Text textAlign="center">최근본</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>

        {/* ▶ 탭 영역 */}
        <Box mx="300px">
            <Flex align='center' justify='center' pt="30px">
                <Tabs variant="solid-rounded">
                    <TabList display="flex" justifyContent="center" gap={3}>
                        <Tab>동요</Tab>
                        <Tab>동화</Tab>
                        <Tab>TV동영상</Tab>
                        <Tab>키즈엔터</Tab>
                        <Tab>놀이학습</Tab>
                        <Tab>플레이존</Tab>
                    </TabList>
                    <TabPanels pt="30px">
                        {/* 각 TabPanel 생성 */}
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <TabPanel key={idx}>
                                <SimpleGrid columns={charactersPerRow} spacing={8}>
                                    {/* 각 캐릭터 표시 */}
                                    {characterData.map((character, idx) => (
                                        <VStack key={idx}>
                                            <Circle size="120px" bg="gray.400" color="white">{character}</Circle>
                                            <Text variant="subtitle">{character}</Text>
                                        </VStack>
                                    ))}
                                </SimpleGrid>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Flex>
        </Box>
    </div>
}


// ▶ 컴포넌트 스타일 정의
// 01. Box 배너
const boxBannerStyle = {
    bg: "gray.300",          // 기본 백그라운드 색상 추가
    borderRadius: 'xl',      // 테두리 반경 추가
    p: 6,                    // 20px의 패딩 추가 (4 * 5px = 20px)
    aspectRatio: '50 / 25',  // 가로가 더 긴 비율로 조정
    minHeight: '200px',      // 최소 높이를 설정하여 높이 증가
    height: 'auto'           // 자동으로 높이 조정
};