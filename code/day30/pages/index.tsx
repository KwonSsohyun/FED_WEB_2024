import react from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import Image from 'next/image';


// SSG
export async function getStaticProps({ locale }){
    return {
        props: {
            ssgData: 20,
            ...(await serverSideTranslations(locale,[
                'common'
            ]))
        },
        revalidate: 10  // 10초마다 다시 빌드해
    }
}


// ▶ http://localhost:3000/
export default ({ ssgData })=> {

    const { t } = useTranslation('common');

    return <div>
        <div>{t('hi')}</div>

        <div>{ssgData}</div>

        <Link href="/sub">링크이동</Link>
        {/* <Image src="/image.jpg" alt="" width={20} height={50} /> */}
        
        <h1 className='red'>Index Page</h1>
        <img src="/app/image.jpg"/>
    </div>
}