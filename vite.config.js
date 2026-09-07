import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// تنظیمات Vite برای ساخت و اجرای فروشگاه
export default defineConfig(
{
    plugins:
    [
        react()
    ],

    // مسیر پایه برای اجرای صحیح سایت روی GitHub Pages
    base: "/hadadian-shop-demo/"
});