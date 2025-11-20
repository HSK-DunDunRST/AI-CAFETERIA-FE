import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,       // true면 LAN IP에서도 접속 가능
        port: 5173,       // 원하는 포트 지정 가능
    },
});