import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(document.querySelector("#reactRoot") as HTMLElement);

import ServerlessAPI from './ServerlessAPI';

root.render(
     <>
          <ServerlessAPI/>
          {/* <App/> */}
     </>
);