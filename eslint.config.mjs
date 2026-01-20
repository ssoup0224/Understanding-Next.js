import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
]);

export default eslintConfig;
