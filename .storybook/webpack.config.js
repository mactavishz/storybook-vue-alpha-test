/* webpack.config.js for storybook */
module.exports = (storybookBaseConfig, configType) => {
  // IMPORTANT: Do not use any extract plugin or loader, is buggy for storybook right now

  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          // https://github.com/webpack-contrib/css-loader#importloaders
          importLoaders: 1
        }
      },
      'postcss-loader'
    ]
  })
  // Return the altered config
  return storybookBaseConfig
}