import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      // Thay globals.browser bằng globals.node hoặc kết hợp cả hai
      globals: {
        ...globals.browser,
        ...globals.node  // Thêm các biến toàn cục của Node.js
      } 
    } 
  },
]);