import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

const svgr = require('@svgr/rollup').default

const port = 3000;
const host = process.env.HOST || '0.0.0.0';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),

        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.API_URL': JSON.stringify(process.env.API_URL),
        }),
        svgr(),
        commonjs()
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://gravity-dev.easychain.tech',
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },

        }
    }
})