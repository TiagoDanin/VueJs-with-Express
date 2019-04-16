<template>
	<div class="container">
		<h1>{{ping.text}} {{pong.text}}!</h1>
	</div>
</template>

<script>
	export default {
		asyncData: async function ({ $axios, params }) {
			const ping = await $axios.get('/api/status/ping').then(res => {
				return { text: res.data.ping }
			})
			const pong = await $axios.get('/api/status/pong').then(res => {
				return { text: res.data.pong }
			})
			return {
				ping,
				pong
			}
		}
	}
</script>
