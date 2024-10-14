const path = require('path'); // path 모듈을 require로 가져오기

const nextI18NextConfig = {
    i18n: {
        defaultLocale: 'ko',
        locales: ['en', 'ko'], // 지원할 언어를 배열로 지정
    },
    localePath: path.resolve('./public/locales'), // JSON 파일 경로
};

module.exports = nextI18NextConfig; // CommonJS 방식으로 모듈 내보내기