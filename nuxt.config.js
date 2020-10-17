module.exports = {
	head: {
		title: 'My Awesome App',
		meta: [
			{charset: 'utf-8'},
			{lang: 'en'},
			{nativeUI: true},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Nuxt.js project'},
			{
				hid: 'keywords',
				name: 'keywords',
				content: 'vuejs, nuxt, javascript, tutorials, development, software'
			}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{
				rel: 'stylesheet',
				type: 'text/css',
				href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
			}
		]
	},
	manifest: {
		name: 'My Awesome App'
	},
	build: {
		// Vendor: ['axios'],
		extractCSS: false
	},

	css: ['~/assets/css/main.css'],
	modules: [
		[
			'@nuxtjs/vuetify',
			{
				theme: {
					primary: '#009688',
					secondary: '#8bc34a',
					accent: '#03a9f4',
					error: '#ff5722',
					info: '#2196f3',
					success: '#4CAF50',
					warning: '#ffc107'
				}
			}
		],
		[
			'@nuxtjs/axios',
			{
				// BaseURL: 'http://localhost:3000'
			}
		]
		// ['@nuxtjs/pwa', { icon: false }]
	],
	serverMiddleware: ['~/api/status.js', '~/api/blog.js'],
	ignorePaths: ['/api'],

	publicRuntimeConfig: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	}
}
