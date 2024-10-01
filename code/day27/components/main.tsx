import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import App from './app';
import './main.css';


hydrateRoot(
     document.querySelector("#reactRoot") as HTMLElement,
     <ChakraProvider>
          <App/>
     </ChakraProvider>
)

/*
const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

root.render(
     <ChakraProvider>
          <App/>
     </ChakraProvider>
)
*/