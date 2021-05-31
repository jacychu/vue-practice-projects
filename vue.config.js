module.exports = {
  publicPath: process.env.NONE_ENV === 'production'
  ? '/my-vue-project/'
  : '/'
}