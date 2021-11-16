import type { ESLintConfigType } from "./type";

export const eslintConfig = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
  ],
  ignorePatterns: ["dist", "node_modules"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    jest: true,
    browser: true,
    commonjs: true,
  },
  rules: {
    "@typescript-eslint/array-type": [
      2,
      {
        "default": "array-simple",
        "readonly": "array-simple",
      },
    ],
    "@typescript-eslint/ban-ts-comment": [
      2,
      {
        "ts-check": false,
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      "record",
      2,
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "interface",
      2,
    ],
    "@typescript-eslint/consistent-type-imports": [
      2,
      {
        "prefer": "type-imports",
      },
    ],
    "@typescript-eslint/member-delimiter-style": 2,
    "@typescript-eslint/member-ordering": [
      2,
      {
        "default": [
          "constructor",
          "instance-field",
          "instance-method",
          "private-constructor",
          "private-instance-field",
          "private-instance-method",
          "private-static-field",
          "private-static-method",
          "protected-constructor",
          "protected-instance-field",
          "protected-instance-method",
          "protected-static-field",
          "protected-static-method",
          "public-constructor",
          "public-instance-field",
          "public-instance-method",
          "public-static-field",
          "public-static-method",
          "signature",
          "static-field",
          "static-method",
        ],
      },
    ],
    "@typescript-eslint/method-signature-style": [
      "property",
      2,
    ],
    "@typescript-eslint/no-base-to-string": 2,
    "@typescript-eslint/no-confusing-non-null-assertion": 2,
    "@typescript-eslint/no-dynamic-delete": 2,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": 2,
    "@typescript-eslint/no-require-imports": 2,
    "@typescript-eslint/no-type-alias": 0,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": 2,
    "@typescript-eslint/no-unnecessary-condition": 2,
    "@typescript-eslint/no-unnecessary-qualifier": 2,
    "@typescript-eslint/no-unnecessary-type-arguments": 2,
    "@typescript-eslint/non-nullable-type-assertion-style": 2,
    "@typescript-eslint/prefer-enum-initializers": 2,
    "@typescript-eslint/prefer-for-of": 2,
    "@typescript-eslint/prefer-function-type": 2,
    "@typescript-eslint/prefer-includes": 2,
    "@typescript-eslint/prefer-literal-enum-member": 2,
    "@typescript-eslint/prefer-nullish-coalescing": 2,
    "@typescript-eslint/prefer-optional-chain": 2,
    "@typescript-eslint/prefer-readonly": 2,
    "@typescript-eslint/prefer-return-this-type": 2,
    "@typescript-eslint/prefer-string-starts-ends-with": 2,
    "@typescript-eslint/restrict-template-expressions": [
      2,
      {
        "allowAny": false,
        "allowArray": false,
        "allowBoolean": true,
        "allowNullable": false,
        "allowNumber": true,
        "allowObject": false,
        "allowRegExp": true,
        "allowString": true,
      },
    ],
    "array-bracket-newline": [
      "consistent",
      2,
    ],
    "array-bracket-spacing": [
      "never",
      2,
    ],
    "array-callback-return": 2,
    "arrow-body-style": [
      "as-needed",
      2,
    ],
    "arrow-parens": [
      "as-needed",
      2,
    ],
    "arrow-spacing": [
      2,
      {
        "after": true,
        "before": true,
      },
    ],
    "block-spacing": [
      "always",
      2,
    ],
    "brace-style": [
      "1tbs",
      2,
      {
        "allowSingleLine": true,
      },
    ],
    "comma-dangle": [
      "always-multiline",
      2,
    ],
    "comma-spacing": [
      2,
      {
        "after": true,
        "before": false,
      },
    ],
    "comma-style": [
      "last",
      2,
    ],
    "computed-property-spacing": [
      "never",
      2,
    ],
    "curly": [
      "multi-line",
      2,
    ],
    "default-case": 2,
    "default-case-last": 2,
    "dot-location": [
      "property",
      2,
    ],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": 2,
    "func-call-spacing": [
      "never",
      2,
    ],
    "generator-star-spacing": [
      2,
      {
        "after": true,
        "before": false,
      },
    ],
    "implicit-arrow-linebreak": [
      "beside",
      2,
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1,
      },
    ],
    "key-spacing": [
      2,
      {
        "afterColon": true,
        "beforeColon": false,
      },
    ],
    "linebreak-style": [
      "unix",
      2,
    ],
    "lines-between-class-members": [
      "always",
      2,
    ],
    "multiline-ternary": [
      "always-multiline",
      2,
    ],
    "new-parens": [
      "never",
      2,
    ],
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 2,
      },
    ],
    "no-await-in-loop": 2,
    "no-constructor-return": 2,
    "no-dupe-class-members": 0,
    "no-duplicate-imports": 2,
    "no-extra-parens": [
      "all",
      2,
      {
        "conditionalAssign": false,
        "enforceForArrowConditionals": false,
        "ignoreJSX": "all",
        "nestedBinaryExpressions": false,
        "returnAssign": false,
      },
    ],
    "no-multi-spaces": [
      2,
      {
        "exceptions": {
          "ImportDeclaration": true,
          "VariableDeclarator": true,
        },
      },
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 1,
      },
    ],
    "no-prototype-builtins": 0,
    "no-return-await": 2,
    "no-trailing-spaces": [
      2,
      {
        "ignoreComments": true,
        "skipBlankLines": true,
      },
    ],
    "no-unmodified-loop-condition": 1,
    "no-unsafe-optional-chaining": 0,
    "no-var": 2,
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": [
      "beside",
      2,
    ],
    "object-curly-newline": [
      2,
      {
        "consistent": true,
        "multiline": true,
      },
    ],
    "object-curly-spacing": [
      "always",
      2,
    ],
    "prefer-const": 2,
    "prefer-destructuring": 2,
    "prefer-object-spread": 2,
    "prefer-template": 2,
    "quotes": [
      "double",
      2,
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true,
      },
    ],
    "radix": [
      "as-needed",
      2,
    ],
    "rest-spread-spacing": [
      "never",
      2,
    ],
    "semi": [
      "always",
      2,
    ],
    "semi-spacing": [
      2,
      {
        "after": true,
        "before": false,
      },
    ],
    "semi-style": [
      "last",
      2,
    ],
    "space-before-function-paren": [
      "never",
      2,
    ],
    "space-in-parens": [
      "never",
      2,
    ],
    "space-unary-ops": [
      2,
      {
        "nonwords": false,
        "words": true,
      },
    ],
    "spaced-comment": 2,
    "switch-colon-spacing": [
      2,
      {
        "after": true,
        "before": false,
      },
    ],
    "wrap-regex": 2,
  },
} as ESLintConfigType;

module.exports = eslintConfig;
export default eslintConfig;
