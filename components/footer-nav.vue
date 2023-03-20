<template>
	<div id="footer_box" :class="className">
		<a class="icp" href="https://beian.miit.gov.cn/" target="_blank">{{ icp }}</a>
	</div>
</template>

<script>
export default {
	name: 'footerPage',
	data() {
		return {
			className: '',
			icp: '备案号：xxxxxxx'
		}
	},
	mounted() {
		const page = this.$route.name
		console.log(this.$route.name)
		if (page === 'index') this.className = 'bottom'
	}
}
</script>

<style lang="scss" scoped>
#footer_box{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 60px;
	.icp{
		color: var(--pdd-color-white);
	}
}
.bottom{
	position: fixed !important;
	left: 0;
	bottom: 0;
	background-color: transparent !important;
}
</style>
