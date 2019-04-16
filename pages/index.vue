<template>
	<div class="container">
		<h1>Hello {{name}}!</h1>
	</div>
</template>

<script>
	export default {
		asyncData (context) {
			return {
				name: 'World'
			}
		},
		head () {
			return {
				title: 'Home'
			}
		}
	}
</script>

<style scoped>
.container {
	padding: 100px;
}
</style>
