import React from 'react';
import reactDOM from 'react-dom/client';

const reactRoot = document.querySelector("div#reactRoot");

reactDOM
    .createRoot(reactRoot as HTMLElement)
    .render(
        <div>
            <h1>환영!</h1>
            <h2>리액트!</h2>
        </div>
    );