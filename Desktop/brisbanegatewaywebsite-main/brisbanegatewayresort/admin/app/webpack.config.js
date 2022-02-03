const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 2000,
    static: "./dist",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        rules: [
          {
            test: /\.txt$/,
            use: "raw-loader",
          },
        ],
      },
      {
        rules: [
          {
            test: /\.html$/,
            use: "html-loader",
          },
        ],
      },
      {
        rules: [
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            loader: "file-loader",
          },
        ],
      },
      {
        rules: [
          {
            test: /\.svg$/,
            use: "@svgr/webpack",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production2",
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      inject: "body",
    }),
  ],
};
