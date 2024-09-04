import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: "./",
    base: "/fruit/", // 앱이 /fruit 하위 경로에서 동작하도록 설정
    build: {
        outDir: "./dist"
    },
    server: {
        port: 3000,
        open: true
    }
});