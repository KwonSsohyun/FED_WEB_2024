import React from 'react';
import { Box, Text, HStack, VStack, Image, Button, Flex, Circle } from '@chakra-ui/react';
import { ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';

// ▶ 3. 카테고리 탭 컴포넌트
export default function CategoryContent() {
    return <div>
        {/* ▶ 동요 영역 */}
        <Box mx="300px">
            <HStack mt="50px">
                <Text variant="title" flex="1" m={0}>
                    동요
                </Text>
                <Button>
                    <ArrowForwardIcon />
                </Button>
            </HStack>
            <HStack mt="50px" justify="center" spacing={8}>
                {Array.from({ length: 5 }).map((_,idx) => (
                    <Box {...boxSingBannerStyle} position="relative" key={idx}>
                        <Image 
                            src="https://cdn.pixabay.com/photo/2022/03/31/21/20/peeps-7103696_1280.png" 
                            objectFit="cover"   // 이미지를 박스에 맞추면서 비율을 유지
                            w="100%"            // 가로를 박스에 맞춤
                            h="100%"            // 세로를 박스에 맞춤
                        />
                        {/* 배경 박스 추가 */}
                        <Box
                            position="absolute"     // 절대 위치 설정
                            bottom="0"              // 하단에 위치
                            left="0"                // 왼쪽에 맞춤
                            w="100%"                // 가로 100%
                            h="35%"                 // 세로는 35%로 설정하여 이미지의 일부를 가림
                            bg="gray.300"           // 배경색
                            display="flex"          // Flexbox를 사용하여 중앙 정렬
                            alignItems="center"     // 수직 중앙 정렬
                            justifyContent="center" // 수평 중앙 정렬
                        >
                            <Text variant="bannertitle" m={0}>인기동요</Text>
                        </Box>
                    </Box>
                ))}
            </HStack>
        </Box>

        {/* 버튼(이벤트, 공지사항) */}
        <Box mx="300px">
            <Flex mt="100px" justify="space-between" gap={5}>
                <Box {...boxInfoBannerStyle} aspectRatio="16 / 2" width="40%">
                    <Text display="flex" alignItems="center" m={0} fontWeight="bold" fontSize="20px">
                        <StarIcon mr={1} />
                        이벤트
                    </Text>
                </Box>
                <Box {...boxInfoBannerStyle} aspectRatio="26 / 2" width="55%">
                    <Text display="flex" alignItems="center" m={0} fontWeight="bold" fontSize="20px">
                        <StarIcon mr={1} />
                        공지사항 
                    </Text>
                    <Text variant="subtitle" m={0}  ml={4}>모두를 위한 소프트웨어, AI교육 페스티벌 SEF로 여러분을 초대합니다!</Text>
                </Box>
            </Flex>
        </Box>
    </div>
}


// ▶ 컴포넌트 스타일 정의
// 01. Box 동요 배너
const boxSingBannerStyle = {
    bg: 'gray.300',
    borderRadius: 'xl',
    aspectRatio: '3 / 2',
    minHeight: '160px',
    overflow: 'hidden' // 이미지가 박스를 넘지 않도록 숨김 처리
};

// 02. Box 이벤트,공지사항 배너
const boxInfoBannerStyle = {
    bg: 'white',                // 배경색을 화이트로 설정
    border: '5px solid',        // 테두리 두께와 스타일 설정
    borderColor: 'gray.200',    // 테두리 색상 설정
    borderRadius: 'full',       // 가장 둥글게 설정
    minHeight: '60px',          // 최소 높이 설정
    maxWidth: '900px',          // 최대 너비 설정
    display: 'flex',            // Flexbox를 사용하여 정렬
    alignItems: 'center',       // 수직 중앙 정렬
    justifyContent: 'center'    // 수평 중앙 정렬
};