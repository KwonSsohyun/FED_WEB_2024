import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; // 서버에서 번역 데이터 가져오는 함수
import { useTranslation } from 'next-i18next'; // 클라이언트에서 번역을 사용하는 훅
import { useRouter } from 'next/router'; // Next.js의 라우터 훅을 임포트

/*
    [다국어 페이지]
    언어에 따라 화면에 맞는 텍스트(번역) 표시

    ⇒ http://localhost:3000/ko    ➡️ 국문 페이지
    ⇒ http://localhost:3000/en    ➡️ 영문 페이지
*/


// ▶ 경로가 바뀔 때마다 번역본을 가져오기 위해서는 getServerSideProps가 반드시 필요
//   locale : 현재 페이지의 언어 정보 ('ko' 또는 'en')
export async function getServerSideProps({ locale }) {
    console.log("locale : " ,locale);

    // ● serverSideTranslations : 서버에서 번역 파일을 로드하여 props로 전달
    return {
        props: {
            ...(await serverSideTranslations(locale , ['common'])), // 'common' 네임스페이스로 번역 데이터 가져옴
        },
    };
}

export default function Home() {
    // ▶ 'common' 파일에 있는 번역을 사용
    //    번역 함수 t와 i18n 객체 가져오기
    const { t, i18n } = useTranslation('common');

    // ▶ Next.js의 라우터 사용
    //   라우터 인스턴스 생성
    const router = useRouter(); 

    // ▶ 언어를 변경하는 함수 (사용자가 버튼을 클릭하면 언어가 변경됨)
    //   i18next의 changeLanguage 함수 호출하여 언어 변경
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => { // 언어 변경 비동기 작업이므로 then을 사용하여 완료 후 작업 수행
            // ● 페이지를 새로고침 없이 번역된 내용을 가져오기 위해 현재 경로를 변경
            //   언어 변경이 완료된 후 현재 경로를 변경
            router.replace(router.pathname, router.asPath, { locale: lang });
        }); 
    };

    return (
        <div>
            {/* 언어 변경 버튼 */}
            <button onClick={() => changeLanguage('en') }>영문</button>
            <button onClick={() => changeLanguage('ko') }>국문</button>

            {/* 번역된 텍스트 표시 */}
            <h1>{t('welcome')}</h1>     {/* common.json 파일의 "welcome" 키값에 해당하는 번역된 텍스트 */}
            <p>{t('description')}</p>   {/* common.json 파일의 "description" 키값에 해당하는 번역된 텍스트 */}
        </div>
    );
}