export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'test_FN',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
            },
        ],
        script: [{
            type: 'text/javascript',
            src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        }, {
            type: 'text/javascript',
            src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
        }, {
            type: 'text/javascript',
            src: 'https://kit.fontawesome.com/f59f2f6742.js',
        }, ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/style.css', 'slick-carousel/slick/slick.css', 'slick-carousel/slick/slick-theme.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '~/plugins/slick', mode: 'client' }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}