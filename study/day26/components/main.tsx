import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

/* 
    [🔒문제]
        쥬니어네이버 페이지를 Chakra UI를 사용해 만들기

    [📝출력]
        쥬니어네이버 메인 페이지

*/
// 🔑Code
import { ChakraProvider, extendTheme } from '@chakra-ui/react'; // ▶ Chakra UI 전역 스타일 포함
import App from './app';

// ▶ 사용자 정의 테마 정의
const theme = extendTheme({
    components: {
        // ➡️ Text 컴포넌트 기본 스타일 설정
        Text: {
            baseStyle: {
                color: "#222",  // 기본 텍스트 색상 녹색 설정
                textAlign: 'left',
                mt: 2,
                overflow: 'hidden',          // 넘치는 부분 숨김
                textOverflow: 'ellipsis',    // 생략 부호(...)
                display: '-webkit-box',      // 플렉스 박스 사용
                WebkitBoxOrient: 'vertical', // 수직 정렬
                WebkitLineClamp: 2           // 라인 수 제한
            },
            variants: {
                title: {
                    color: 'black',          // 텍스트 색상: 검정색
                    textAlign: 'center',     // 텍스트 정렬: 가운데
                    fontSize: '30px',        // 텍스트 크기: 30px
                    fontWeight: 'bold',      // 텍스트 두께: 굵게
                    marginTop: '120px'       // 마진 탑: 150px
                },
                subtitle: {
                    color: 'gray',           // 텍스트 색상
                    WebkitLineClamp: 1,      // 라인 수 제한
                    overflow: 'hidden',      // 넘치는 부분 숨김
                    textOverflow: 'ellipsis' // 생략 부호(...)
                },
                bannertitle: {
                    color: 'gray.700',          
                    textAlign: 'left',
                    fontSize: '20px',       
                    fontWeight: 'bold'
                },
                bannersubtitle: {
                    color: 'gray',           
                    fontSize: '15px'
                },
            },
        },
        // ➡️ Accordion 컴포넌트 기본 스타일 설정
        Accordion: {
            baseStyle: {
                button: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",       // 기본 테두리 제거
                    borderWidth: "0",     // 테두리 두께 제거
                    outline: "none",      // 아웃라인 제거
                    boxShadow: "none",    // 그림자 제거
                    px: 4,                // 좌우 간격 설정
                },
            }
        }
    },
    // ➡️ HTML태그/CSS클래스 전역적 스타일 설정
    styles: {
        global: {
            // ➡️ 'a' 기본 태그에 대한 전역적 기본값 스타일 설정
            'a': {
                textDecoration: 'underline', // 링크에 밑줄 설정
                color: 'teal.500',           // 기본 텍스트 색상
                fontWeight: 'bold',          // 텍스트 굵기 설정
                // 호버 상태에서의 스타일 설정
                _hover: { 
                    color: 'white',     // 호버 시 텍스트 색상 변경
                    bg: 'teal.500'           // 호버 시 배경색 변경
                }
            }
        }
    }
});

root.render(
    <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider>
);