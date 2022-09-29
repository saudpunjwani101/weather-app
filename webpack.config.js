const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "/assets"),
    filename: "index.bundle.js",
  },
  target: "web",
  devServer: {
    port: 2020,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, // folder to be excluded
        use: "babel-loader", // loader which we are going to use
      },
    ],
  },
}
