const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  dev: process.env.NODE_ENV === 'development',
  srcDir: resolve(__dirname, '..', 'resources'),
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
   
    'iview/dist/styles/iview.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/base.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/ElementUI',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    // 防止多次引入，多次打包
    vendor:['element-ui']
  }
}
