import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(() => {
// export default defineConfig(({ mode }) => {
    // const env = loadEnv(mode, process.cwd(), 'VITE');
    return {
        plugins: [react()],
        resolve: {
            alias: [
                { find: '@', replacement: '/src' },
            ],
        },
        server: {
            // WSL2 환경에서 Hot Reload 미작동 이슈 대응
            watch: {
                usePolling: true,
            },
            // proxy: {
            //     [env.VITE_SAMPLE_API_PREFIX]: {
            //         target: `${ env.VITE_API_BASE_URL }/${ env.VITE_SAMPLE_API_PREFIX }`,
            //         changeOrigin: true,
            //         rewrite: (path) => path.replace(new RegExp(`^${env.VITE_SAMPLE_API_PREFIX.replace('/', '\\/')}`), ''),
            //         secure: false,
            //     },
            // },
        },
    }
});