const { merge } = require("webpack-merge");
const webpack = require('webpack');
const dotenv = require('dotenv');
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(), 
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env.NODE_ENV': JSON.stringify('production'),
      REACT_ENV: JSON.stringify(dotenv.config().parsed),
  }),
  ],
  optimization: {
    runtimeChunk: "single",
    minimizer: [
      new TerserPlugin(),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
});
