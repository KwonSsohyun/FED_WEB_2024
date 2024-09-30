import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

// ▶ 4. 즐겨찾기 탭 컴포넌트
export default function FavoritesContent() {
    return <div>
        {/* ▶ 인기 캐릭터 영역 */}
        <Box mx="300px">
            <Text variant="title">즐겨찾기한 목록을 볼래요</Text>
            <HStack justifyContent="center" mt="30px">
                <a href="/">로그인</a>
                <Text m={0}>후 이용해주세요</Text>
            </HStack>
        </Box>        
    </div>
}