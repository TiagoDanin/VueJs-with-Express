module.exports = {
	head: {
		title: 'My Awesome App',
		meta: [
			{ charset: 'utf-8' },
			{ lang: 'en' },
			{ nativeUI: true },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' },
			{ hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, tutorials, development, software' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},
	manifest: {
		name: 'My Awesome App',
	},
	build: {
		vendor: ['axios'],
		vendor: ['vuetify'],
		extractCSS: false,
	},
	watch: [
		'~/api/*.js' 
	],
	css: [
		'~/assets/css/main.css',
		'~/assets/css/app.styl'
	],
	plugins: [
		'~/plugins/vuetify',
		'~/plugins/axios'
	],
	modules: [
		['@nuxtjs/axios', {
			//baseURL: 'http://localhost:3000'
		}],
		//['@nuxtjs/pwa', { icon: false }]
	],
	serverMiddleware: ['~/api/status.js']
}
