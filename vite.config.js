import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change to your desired port
    // Optional: automatically open browser
    open: true,
    // Optional: if port is in use, use next available port
    strictPort: false,
  }
})