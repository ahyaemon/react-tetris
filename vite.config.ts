import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        sourcemap: true,
    },
    base: "/react-tetris/"
})
