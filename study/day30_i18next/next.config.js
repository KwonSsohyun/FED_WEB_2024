/*
    next-i18next는 CommonJS 모듈을 반드시 사용해야 합니다.
    CommonJS 방식은 Node.js에서 모듈을 가져오고 내보내는 표준 방식입니다.
*/

// ▶ next-i18next 설정 파일을 가져오기
const nextI18NextConfig = require('./next-i18next.config.js');

// ▶ Next.js 설정 내보내기
module.exports = {
    reactStrictMode: true,
    env: {
        API_PATH: "https://www.naver.com"
    },
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    trailingSlash: false,
    poweredByHeader: false,
    outputFileTracing: true,
    // ▶ i18n 설정 추가
    //   가져온 설정에서 i18n 부분만 사용
    i18n: nextI18NextConfig.i18n,
};