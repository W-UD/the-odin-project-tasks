const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
// const { ESLint } = require('eslint');

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: ["public-api-register", "weather-icon"],
    },
    "public-api-register": {
      import: "./src/data-api/public-api-register.json",
    },
    "weather-icon": {
      import: "./src/data-api/weather-icon.js",
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
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
  optimization: {
    usedExports: true,
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          enforce: true, // Force creation even if small
        },
        common: {
          name: "common",
          minChunks: 2, // Modules used in 2+ chunks
          chunks: "all",
          minSize: 0,
        },
      },
    },
    runtimeChunk: "single",
  },
};
