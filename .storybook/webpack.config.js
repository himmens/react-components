// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            require.resolve('babel-preset-react'),
            [require.resolve('babel-preset-env'), {
              targets: {browsers: ['last 2 versions', 'ie >= 11', 'safari >= 9']},
              modules: false
            }]
          ],
          plugins: [
            require.resolve('babel-plugin-syntax-dynamic-import'),
            require.resolve('babel-plugin-syntax-object-rest-spread'),
            require.resolve('babel-plugin-transform-object-rest-spread'),
            require.resolve('babel-plugin-syntax-class-properties'),
            require.resolve('babel-plugin-transform-class-properties'),
            require.resolve('babel-plugin-syntax-export-extensions'),
            require.resolve('babel-plugin-transform-export-extensions')
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules=true']
      },
      {
        test: /\.css$/,
        include: '/src',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:4]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  },
};
