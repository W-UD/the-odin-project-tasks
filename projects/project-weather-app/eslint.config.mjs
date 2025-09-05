import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-plusplus": 1,
      "prefer-promise-reject-errors": 1, // use Error object on reject argument
      "prefer-rest-params": 1, // prefer rest parameter to map out array or object
      "prefer-regex-literals": 1,
      "prefer-template": 2, // prefer template literal "`" instead of concatenation.
      "symbol-description": 2, // require description to create symbol from constructor
      yoda: ["warn", "always", { exceptRange: true }],
    },
    ignores: ["node_module/**", "dist/**"],
  },
  eslintConfigPrettier,
]);
