import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import replace from '@rollup/plugin-replace';
const svgr = require('@svgr/rollup').default;

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            manualChunks: {
                'vendor': [
                    'node_modules/react/index.js',
                    'node_modules/react-dom/index.js'
                ]
            },
        },
        commonjsOptions: {transformMixedEsModules: true},



    },

    plugins: [
        svgr(),
        reactRefresh(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.API_URL': JSON.stringify(process.env.API_URL)
        })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://gravity-dev.easychain.dev/',
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },

            '/video': {
                target: 'https://gravity-dev-images.easychain.dev/',
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    }
})