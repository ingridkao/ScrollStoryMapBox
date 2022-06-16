module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/ScrollStoryMapBox/'
      : '/',
    devServer: {
      port: 12539
    }
}