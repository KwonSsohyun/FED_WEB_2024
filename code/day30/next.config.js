export default {
    reactStrictMode: true,
    env: {
        API_PATH: "https://www.naver.com"
    },
    basePath: "/app",
    // assetPrefix: ""
    pageExtensions: ["js","jsx","ts","tsx"],
    i18n: {
        defaultLocale: "ko",
        locales: ["en", "ko", "jp"]
    },
    fallbackLng: {
        default: ["ko"],
        "jp": ["en"]
    },
    nonExplicitSupportedLngs: true,
    trailingSlash: false,
    poweredByHeader: false,
    outputFileTracing: true
}