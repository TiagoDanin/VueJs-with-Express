<template>
<v-footer height="auto" color="primary lighten-1">
	<v-layout justify-center row wrap>
		<v-btn v-for="(link, index) in links" :key="index" color="white" flat round :to="link.to">
			{{ link.title }}
		</v-btn>
		<v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
			&copy;{{ new Date().getFullYear() }} — <strong>Tiago Danin</strong>
		</v-flex>
	</v-layout>
</v-footer>
</template>

<script>
	export default {
		name: 'appfooter',
		data () {
			return {
				links: [
					{ title: 'Home', to: '/' },
					{ title: 'Blog', to: '/blog' },
					{ title: 'Status', to: '/status' }
				]
			}
		}
	}
</script>

<style scoped>

</style>
