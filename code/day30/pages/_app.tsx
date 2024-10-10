import react from 'react';
import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css';

export default appWithTranslation(({Component, pageProps})=>{
    return <Component {...pageProps} />
})