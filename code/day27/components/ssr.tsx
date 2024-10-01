import React from 'react';
import { renderToString } from 'react-dom/server';

import { ChakraProvider } from '@chakra-ui/react';
import App from './app';
import './main.css';


export default function render(){
    const html = renderToString(
        <ChakraProvider>
             <App/>
        </ChakraProvider>
   );

   return { html };
}