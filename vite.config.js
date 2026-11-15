import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GANTI 'tugas-pertemuan12' dengan nama repo GitHub kamu
export default defineConfig({
  plugins: [react()],
  base: '/tugas-pertemuan12/',
})
