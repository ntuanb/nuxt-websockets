export default {

  generate: {

    dir: 'dist',

    fallback: false

  },

 

  target: 'server',

 

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {

    title: 'Test',

    meta: [

      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: '' },

      { name: 'format-detection', content: 'telephone=no' }

    ],

    link: [

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }

    ]

  },

 

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [

  ],

 

  alias: {

  },

 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [

  ],

 

  // Auto import components: https://go.nuxtjs.dev/config-components

  components: true,

 

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [

    // https://go.nuxtjs.dev/typescript

  ],

 

  modulesDir: [

    './node_modules',

  ],

 

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [

    'nuxt-socket-io'

  ],

 

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {

    baseURL: process.env.BASE_URL

  },

 

  // PWA module configuration: https://go.nuxtjs.dev/pwa

  pwa: {

    manifest: {

      lang: 'en'

    }

  },

 

  // Content module configuration: https://go.nuxtjs.dev/config-content

  content: {},

 

  // Sitemap configuration: https://sitemap.nuxtjs.org/guide/configuration

  sitemap: {

  },

 

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {

    babel: {

      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],

    }

  },

 

  serverMiddleware: [

    {

      path: '/api/event',

      handler: './serverMiddleware/event'

    }

  ],

 

  env: {

  },

 

  publicRuntimeConfig: {

  },

 

  privateRuntimeConfig: {

  },

 

  io: {

    // module options

    sockets: [{

      default: true,

      name: 'main',

      url: 'https://www.test-t6dnbai-n2eqhwdfk2pae.au.platformsh.site/ws'

    }]

  }

}