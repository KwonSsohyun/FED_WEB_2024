// ▶ 비트(Vite) 설정 파일
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ▶ 작성 → 빌드 → 완성본 ⇒ 작업1
//    완성본 → 사용자에게 전달 → 렌더링 ⇒ CSR
//    완성본 → 랜더링 → 사용자에게 전달 ⇒ SSR

export default defineConfig({
    plugins : [react()],        // 추가 애드온
    root: "./components",       // .tsx 가 들어갈 폴더
    base: "/",                  // www.naver.com/뒤에/경로 (SSL전용 옵션) - 베이스 경로
    build: {                    // 빌드에 관한 설정
        outDir: "../dist"
    },
    server: {                   // 내장 서버 설정 (SSR❌)
        port: 9999,             // → 포트번호 수정
        open: true              // → vite 명령어로 개발 시작 시 자동으로 서버 열리게 함
    }
});