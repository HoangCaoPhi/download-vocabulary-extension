import path from "path";

export default {
  entry: {
    background: "./src/background.ts",
    content: "./src/content.ts",
    popup: "./src/popup/popup.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "production",
};
