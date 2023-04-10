export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: '/cv/',
        head: {
            title: 'Maxim Dvorovoi CV',
            htmlAttrs: { lang: 'en', dir: 'ltr' },
            meta: [
                { charset: 'utf-8' },
                { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
                { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },

                { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Maxim Dvorovoi CV' },
                { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'I\'m a Full Stack Web Developer from Kyiv, UA. I aim to make a functional applications with clean code.' },
                { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: 'Maxim Dvorovoi CV' },
                { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
            ]
        }
    },
    css: [
        '@/assets/scss/main.scss',
        '@/assets/font-awesome-6.1.1/css/all.min.css'
    ],
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Inter: true
        }
    }
})
