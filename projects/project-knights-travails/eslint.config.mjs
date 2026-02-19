import js from "@eslint/js";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigESLintBase from "eslint-config-eslint/base";
import eslintConfigESLintCJS from "eslint-config-eslint/cjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  globalIgnores(["dist/", ".*"]),
  {
    files: ["**/*.{js}"],
    plugins: { js },
    extends: ["js/recommended", eslintConfigESLintBase],
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
  },
  {
    files: ["**/*.cjs", "**/*.mjs"],
    extends: [eslintConfigESLintCJS],
    ignores: ["eslint.config.mjs"],
  },
  eslintConfigPrettier,
]);
