const path = require("path");
const withVideos = require("next-videos");
const withLess = require("@zeit/next-less");
const withImages = require("next-images");
const withCss = require("@zeit/next-css");

module.exports = withVideos({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "../rsuite");
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 1,
          size: 16,
          hash: "sha512",
          digest: "hex",
          name: "[hash].[ext]",
          publicPath: "/",
        },
      },
    });
    return config;
  },
});
