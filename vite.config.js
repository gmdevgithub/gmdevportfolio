import { defineConfig } from 'vite'
import glsl from 'rollup-plugin-glsl'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // glsl({
    //   include: '**/*.glsl',
    //   exclude: 'node_modules/**'
    // }),
    terser(),
    visualizer({ filename: 'bundle-stats.html' })
  ],
  build: {
    outDir: 'dist'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
})

//rollup-plugin-glsl allows you to import GLSL shader files.
//rollup-plugin-terser minifies your JavaScript code.
//rollup-plugin-visualizer generates a visual representation of your bundle.
//This setup will help you optimize and manage your 3D-heavy site more effectively.