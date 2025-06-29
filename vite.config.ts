import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 Make sure this is the exact repo name
export default defineConfig({
  base: '/Myportfolio/', // <-- VERY IMPORTANT
  plugins: [react()]
});
