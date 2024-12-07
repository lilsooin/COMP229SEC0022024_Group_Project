import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const { PORT = 3000} = process.env;


export default defineConfig({
 plugins: [react()],
 server:{
     proxy:{
     '/api':{
     target:`https://comp229sec0022024-group-project-3.onrender.com`,
     changeOrigin: true,
     rewrite: (path) => path.replace(/^\/api/, '')
     },
     '/auth': {
     target:`https://comp229sec0022024-group-project-3.onrender.com`,
     changeOrigin: true,
     rewrite: (path) => path.replace(/^\/auth/, '')
     },
     },
    },

// export default defineConfig({
//     plugins: [react()],
//     server:{
//         proxy:{
//         '/api':{
//         target:`http://localhost:3000`,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//         },
//         '/auth': {
//         target:`http://localhost:3000`,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/auth/, '')
//         },
//         },
//        },
   

    host: '0.0.0.0',
    
    build: {
        outDir: 'dist',
        manifest: true,
        rollupOptions: {
            input: ['src/main.jsx', './index.html']
        },
    },
});
