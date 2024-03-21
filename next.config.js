module.exports = {
  // StrictMode was set to false for the Sake of the Calendar, if set to true it wont function
  reactStrictMode: false,
  // webpack config was initialized here for the sake of the video player. Its is very vital for the videos to play.
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "videos/",
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};
