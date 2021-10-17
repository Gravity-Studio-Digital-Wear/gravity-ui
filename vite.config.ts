import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import replace from '@rollup/plugin-replace';

import nodePolyfills from 'rollup-plugin-polyfill-node';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const svgr = require('@svgr/rollup').default


// https://vitejs.dev/config/
export default defineConfig({
    build: {

      commonjsOptions: {transformMixedEsModules: true}
    },

    plugins: [
        svgr(),
        reactRefresh(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.API_URL': JSON.stringify(process.env.API_URL),
        }),
        nodeResolve({browser: true}),
        commonjs({}),
        nodePolyfills( /* options */ )
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://gravity-dev.easychain.dev/',
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },

        }
    }
})