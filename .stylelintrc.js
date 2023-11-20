module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended",
  ],
  plugin: ["stylelint-order"],
  rules: {
    // ::before, ::afterのコロンを2つにする
    "selector-pseudo-element-colon-notation": "double",
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    "scss/selector-no-union-class-name": true,
    "order/properties-alphabetical-order": true,
  },
  ignoreFiles: ["**/node_modules/**"],
};
