<template>
	<div>
		<v-footer absolute color="primary lighten-1">
			<v-layout justify-center row wrap>
				<v-card flat tile width="100%" class="text-center" color="primary lighten-1">
					<v-btn v-for="(link, index) in links" :key="index" color="white" class="mx-3" text rounded :to="link.to">
						{{ link.title }}
					</v-btn>
					<v-card-text class="white--text">
						&copy;{{ new Date().getFullYear() }} — <strong>Tiago Danin</strong>
					</v-card-text>
				</v-card>
			</v-layout>
		</v-footer>
	</div>
</template>

<script>
	export default {
		name: 'appfooter',
		data() {
			return {
				links: [{
						title: 'Home',
						to: '/'
					},
					{
						title: 'Blog',
						to: '/blog'
					},
					{
						title: 'Status',
						to: '/status'
					}
				]
			}
		}
	}
</script>

<style scoped>

</style>
