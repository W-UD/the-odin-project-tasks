const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].js",
  },
  devtool: "source-map",
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
});
