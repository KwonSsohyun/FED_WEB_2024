import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import App from './app';

hydrateRoot(
    document.querySelector("#reactRoot") as HTMLElement,
    <App/>
)