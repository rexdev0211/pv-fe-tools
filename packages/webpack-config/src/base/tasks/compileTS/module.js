export const moduleCompileTS = {
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                [require.resolve("@babel/preset-env"), {
                  targets: {
                    esmodules: true
                  }
                }],
                require.resolve("@babel/preset-typescript")
              ],
              plugins: [
                [require.resolve("@babel/plugin-proposal-decorators"), {
                  legacy: true 
                }],
                require.resolve("@babel/plugin-syntax-dynamic-import"),
                require.resolve("@babel/plugin-proposal-class-properties"),
			          require.resolve("@babel/plugin-proposal-object-rest-spread")
              ],
            }
          },
        ]
      }
    ]
  }
};
