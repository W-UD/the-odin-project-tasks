const path = require("node:path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
// const { ESLint } = require('eslint');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/main.html",
      filename: "index.html",
    }),
    // new ESLintPlugin([
    // ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ],
  },
};
