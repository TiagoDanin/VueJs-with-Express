<template>
	<section class="container">
		<h2>
			Error: {{ error.statusCode }}
		</h2>
		<nuxt-link class="button" to="/">
			Homepage
		</nuxt-link>
	</section>
</template>

<script>
export default {
	props: ['error']
}
</script>

<style scoped>
</style>
