import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import App from './app';
import './main.css';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

root.render(
     <ChakraProvider>
          <App/>
     </ChakraProvider>
)