import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ESLintPlugin from 'eslint-webpack-plugin';
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx']
    })
  ],
  devServer: {
    port: 3000,
  },
};

export default config;