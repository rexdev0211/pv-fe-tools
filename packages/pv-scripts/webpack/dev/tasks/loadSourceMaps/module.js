/**
 * add source-map of any third party dependency to the output source-map
 */
module.exports = {
  module: {
    rules: [
      {
        // assuming third party dependencies such as @kluntje have only .js or .mjs extensions
        test: /\.(js|mjs)$/,
        use: require.resolve("source-map-loader"),
      },
    ],
  },
};
