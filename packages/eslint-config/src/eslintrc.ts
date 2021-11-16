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
      2,
      "record",
    ],
    "@typescript-eslint/consistent-type-definitions": [
      2,
      "interface",
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
      2,
      "property",
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
      2,
      "consistent",
    ],
    "array-bracket-spacing": [
      2,
      "never",
    ],
    "array-callback-return": 2,
    "arrow-body-style": [
      2,
      "as-needed",
    ],
    "arrow-parens": [
      2,
      "as-needed",
    ],
    "arrow-spacing": [
      2,
      {
        "after": true,
        "before": true,
      },
    ],
    "block-spacing": [
      2,
      "always",
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true,
      },
    ],
    "comma-dangle": [
      2,
      "always-multiline",
    ],
    "comma-spacing": [
      2,
      {
        "after": true,
        "before": false,
      },
    ],
    "comma-style": [
      2,
      "last",
    ],
    "computed-property-spacing": [
      2,
      "never",
    ],
    "curly": [
      2,
      "multi-line",
    ],
    "default-case": 2,
    "default-case-last": 2,
    "dot-location": [
      2,
      "property",
    ],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": 2,
    "func-call-spacing": [
      2,
      "never",
    ],
    "generator-star-spacing": [
      2,
      {
        "after": true,
        "before": false,
      },
    ],
    "implicit-arrow-linebreak": [
      2,
      "beside",
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
      2,
      "unix",
    ],
    "lines-between-class-members": [
      2,
      "always",
    ],
    "multiline-ternary": [
      2,
      "always-multiline",
    ],
    "new-parens": [
      2,
      "never",
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
      2,
      "all",
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
      2,
      "beside",
    ],
    "object-curly-newline": [
      2,
      {
        "consistent": true,
        "multiline": true,
      },
    ],
    "object-curly-spacing": [
      2,
      "always",
    ],
    "prefer-const": 2,
    "prefer-destructuring": 2,
    "prefer-object-spread": 2,
    "prefer-template": 2,
    "quotes": [
      2,
      "double",
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true,
      },
    ],
    "radix": [
      2,
      "as-needed",
    ],
    "rest-spread-spacing": [
      2,
      "never",
    ],
    "semi": [
      2,
      "always",
    ],
    "semi-spacing": [
      2,
      {
        "after": true,
        "before": false,
      },
    ],
    "semi-style": [
      2,
      "last",
    ],
    "space-before-function-paren": [
      2,
      "never",
    ],
    "space-in-parens": [
      2,
      "never",
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
