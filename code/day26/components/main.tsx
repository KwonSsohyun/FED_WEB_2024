import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider, extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import App from './app';
import './main.css';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

// ▶ 테마 정보
const themeExtend = {
     styles: { 
          global:(props: StyleFunctionProps)=>({
               'a.link':{     // 셀렉터 작성 방식
                    bg: props.colorMode === 'dark' ? 'black': 'white',
                    color: props.colorMode === 'dark' ? 'red.700': 'teal.500'
               },
               'div > span':{
                    
               }
          }) 
     },
     colors: {
          "빨강": "#ff0000",
          "brand": {
               "text" : "#38a915",
               "bg" : "#3a2b33"
          }
     },
     config:{
          initialColorMode: 'light',
          useSystemColorMode: false
     },
     components: {  
          "Modal": {},
          "DrawerBody": {},
          Button: {
               baseStyle: {
                    fontWeight: 'bold'
               },
               sizes: {
                    xl: {
                         h: '80px',
                         fontSize: 'lg'
                    },
                    '2xl': {
                         h: '130px',
                         fontSize: 'lg'
                    }
               },
               variants: {
                    'solid':(props: StyleFunctionProps)=>({ // 기본값
                         bg: props.colorMode === 'light' ? 'gray' : 'white',
                         color: props.colorMode === 'light' ? 'pink' : 'black',
                    }),
                    'solid2':{
                         bg: 'red',
                         color: 'white'
                    },
                    sm: { //sm → small → media query  }
                         }
               },
               defaultProps: {
                    variant: 'solid'
               }
          }
     }
};

root.render(
     <ChakraProvider theme={extendTheme(themeExtend)}>
          <App/>
     </ChakraProvider>
)