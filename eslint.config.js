import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/prop-types": [
        "warn", // или "off", "error"
        {
          ignore: ["children"], // Пропсы, которые нужно игнорировать
          customValidators: [], // Если у вас есть кастомные валидаторы
          skipUndeclared: true, // Пропуск компонентов без объявленных propTypes
        },
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
