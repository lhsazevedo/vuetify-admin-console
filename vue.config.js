module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuetify-google-admin/'
    : '/',

  'transpileDependencies': [
    'vuetify'
  ]
}
