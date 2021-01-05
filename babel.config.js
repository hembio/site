// babel.config.js
module.exports = {
  presets: ["next/babel"],
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    [
      "babel-plugin-styled-components",
      { ssr: true, displayName: true, preprocess: false },
    ],
  ],
};
