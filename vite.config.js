import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()], // Correct: Single array with both plugins
});
  

  



// esbuild: {
//     loader: 'jsx', // Process JSX in files
//     include: [
//       // Include .js and .jsx files
//       'src/**/*.js',
//       'src/**/*.jsx',
//     ],
