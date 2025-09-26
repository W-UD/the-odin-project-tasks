const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
// const { ESLint } = require('eslint');
module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
    },
    "public-api-register": {
      import: "./src/data-api/public-api-register.json",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "icon/[hash][ext][query]",
    clean: true,
  },
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2||eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
