const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "test.js",
    path: path.resolve(__dirname, "build"),
  },
}