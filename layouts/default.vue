<template>
	<div id="container">
		<header-nav />
		<nuxt />
		<footer-nav />
	</div>
</template>

<script>
import headerNav from '../components/header-nav.vue'
import footerNav from '../components/footer-nav.vue'

export default {
	name: 'defaultLayout',
	components: {
		footerNav,
		headerNav
	}
}
</script>

<style lang="scss" scoped>
#container {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
