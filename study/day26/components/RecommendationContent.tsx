import React from 'react';
import { Box, Grid, GridItem, Text, HStack, Circle, VStack } from '@chakra-ui/react';

// ▶ 1. 추천 탭 컴포넌트
export default function RecommendationContent() {
    return <div>
        {/* ▶ 영상 썸네일 영역 */}
        <Box mx="300px">
            <Grid templateColumns='repeat(3, 1fr)' gap={10} mt="50px">
                <GridItem>
                    <Box {...boxStyle} />
                    <Text>엄마아빠 콩순이가 사랑해요❤️ #사랑해송 #콩순이 엉뚱발랄 콩순이와 친구들</Text>
                    <Text variant="subtitle">엉뚱발랄 콩순이와 친구들</Text>
                </GridItem>
                <GridItem>
                    <Box {...boxStyle} />
                    <Text>[주디세이 퀴즈쇼] 신데렐라 공주 변신 | 공주 동화 | 공주 애니메이션 | 명작동화</Text>
                    <Text variant="subtitle">주디세이</Text>
                </GridItem>
                <GridItem>
                    <Box {...boxStyle} />
                    <Text>달콤한 과자집에 놀러간 꼬마 스텔라 | 미술학교 Artschool</Text>
                    <Text variant="subtitle">캐리TV 북스</Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={2}>
                    <Box {...boxStyle} /> 
                    <Text>핑크퐁 자동차 마을 모음집 | 자동차 동요 | 핑크퐁 동화 | 핑크퐁! 인기동요</Text>
                    <Text variant="subtitle">핑크퐁 인기동화</Text>
                </GridItem>
                <GridItem>
                    <Box {...boxStyle} />
                </GridItem>
                <GridItem>
                    <Box {...boxStyle} />
                </GridItem>
            </Grid>
        </Box>

        {/* ▶ 인기 캐릭터 영역 */}
        <Box mx="300px">
            <Text variant="title">인기 캐릭터</Text>
            <HStack spacing={8} justifyContent="center" mt="50px">
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">로보카폴리</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">캐리TV송</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">라바</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">로보카폴리</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">티디키즈</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">쥬니버동요</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">꼬마히어로 슈퍼잭</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">깨비키즈</Text>
                </VStack>
                <VStack>
                    <Circle size="120px" bg="gray.400" color="white">캐릭터</Circle>
                    <Text variant="subtitle">아쿵다쿵 니하오</Text>
                </VStack>
            </HStack>
        </Box>

        {/* ▶ 배너 영역 */}
        <Box mx="300px">
            <HStack mt="120px" justify="center" spacing={8}>
                <Box {...boxBannerStyle}>
                    <VStack align="start">
                        <Text variant="bannertitle">동요 플레이리스트 대공개</Text>
                        <Text variant="subtitle">신나게 둠칫! 두둠칫!</Text>
                    </VStack>
                </Box>
                <Box {...boxBannerStyle}>
                    <VStack align="start"> 
                        <Text variant="bannertitle">앱 다운로드 받고</Text>
                        <Text variant="subtitle">언제 어디서든 재미난 영상 보자!</Text>
                    </VStack>
                </Box>
                <Box {...boxBannerStyle}>
                    <VStack align="start"> 
                        <Text variant="bannertitle">생활습관 캠패인</Text>
                        <Text variant="subtitle">양치습관부터 수면 습관까지 해결!</Text>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    </div>
}


// ▶ 컴포넌트 스타일 정의
// 01. Box 영상 썸네일
const boxStyle = {
    bg: 'gray.300',
    borderRadius: 'xl',
    aspectRatio: '16 / 9'  // 비율 유지
};

// 02. Box 배너
const boxBannerStyle = {
    bg: "gray.300",         // 기본 백그라운드 색상 추가
    borderRadius: 'xl',     // 테두리 반경 추가
    p: 4,                   // 20px의 패딩 추가 (4 * 5px = 20px)
    aspectRatio: '18 / 5',  // 가로가 더 긴 비율로 조정
    minHeight: '120px',     // 최소 높이를 설정하여 높이 증가
    height: 'auto'          // 자동으로 높이 조정
};