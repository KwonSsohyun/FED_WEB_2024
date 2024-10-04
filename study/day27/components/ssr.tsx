import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';

export default function render(){
    const html = renderToString(
        <App/>
    );

    return { html };
}