<template>
	<div id="header">
		<!-- PC端 -->
		<div :class="['header_pc', chackHeaderStyle ? '' : 'fill']">
			<div class="header_pc_box">
				<div class="logo">
					<nuxt-link v-slot="{ navigate }" to="/" custom>
						<img src="~/static/images/logo.png" alt="logo" @click="navigate" />
					</nuxt-link>
				</div>
				<div class="menu">
					<template v-for="item in menuList">
						<nuxt-link v-slot="{ navigate, isActive }" :to="item.path" custom>
							<div :key="item.path" :class="['menu_item', isActive ? 'active' : '']" @click="navigate">
								{{ item.title }}
							</div>
						</nuxt-link>
					</template>
				</div>
			</div>
		</div>
		<!-- 移动端 -->
		<div :class="['header_h5', chackHeaderStyle ? '' : 'fill']">
			<div class="logo">
				<nuxt-link v-slot="{ navigate }" to="/" custom>
					<img src="~/static/images/logo.png" alt="logo" @click="navigate" />
				</nuxt-link>
			</div>
			<div class="menu">
				<svg-icon v-if="isMenu" icon-class="close" color="#000000" @click="isMenu = false" />
				<svg-icon v-else icon-class="menu" color="#000000" @click="isMenu = true" />
				<div :class="['menu_box', isMenu ? 'on' : 'off']" >
					<template v-for="item in menuList">
						<nuxt-link v-slot="{ navigate, isActive }" :to="item.path" custom>
							<div :key="item.path" :class="['menu_item', isActive ? 'active' : '']" @click="navigate">{{ item.title }}</div>
						</nuxt-link>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getScrollTop } from '~/assets/utils/index.js'

export default {
	name: 'pageHeader',
	data() {
		return {
			scrollTop: 0,
			menuList: [
				{ title: '前端手册', path: '/handbook/' },
				{ title: '关于我', path: '/about-me/' }
			],
			flag: ['index',], // 忽略header的动画
			isMenu: false
		}
	},
	computed: {
		chackHeaderStyle() {
			const bool = this.flag.includes(this.$route.name)
			if (bool) return bool
			return this.scrollTop > 0
		}
	},
	mounted() {
		this.scrollTop = getScrollTop()
		window.onscroll = () => {
			this.scrollTop = getScrollTop()
		}
	}
}
</script>

<style lang="scss" scoped>
#header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 84px;
	.fill {
		color: #353535 !important;
		background-color: #ffffff;
		border-color: #e0e0e0;
		box-shadow: 0 2px 8px #888888;
	}
	.header_pc {
		width: 100%;
		min-width: 1200px;
		height: 84px;
		transition: ease 0.5s;
		border-bottom: 1px solid transparent;
		color: #ffffff;
		.header_pc_box {
			width: 1080px;
			height: 100%;
			margin: 0 auto;
			overflow: hidden;
			.logo {
				float: left;
				width: 84px;
				height: 100%;
				&:hover img {
					animation: 0.5s bounceIn;
				}
				img {
					width: 48px;
					height: 48px;
					margin-top: 18px;
					cursor: pointer;
				}
			}
			.menu {
				height: 100%;
				overflow: hidden;
				float: right;
				.menu_item {
					position: relative;
					float: left;
					width: 68px;
					height: 100%;
					line-height: 83px;
					margin-left: 40px;
					text-align: center;
					font-size: 16px;
					cursor: pointer;
					transition: ease 0.5s;
					&:hover {
						color: #409EFF;
					}
				}
				.menu_item:first-child {
					margin-left: 0px;
				}
				.active {
					color: #409EFF;
					&::after {
						content: '';
						position: absolute;
						left: 0;
						bottom: 18px;
						width: 38px;
						height: 2px;
						background-color: #409EFF;
					}
				}
			}
		}
	}
	.header_h5 {
		align-items: center;
		justify-content: space-between;
		height: 78px;
		padding: 0px 20px;
		transition: ease 0.5s;
		border-bottom: 1px solid transparent;
		color: #ffffff;
		.fill {
			color: #353535 !important;
			background-color: #ffffff;
			border-color: #e0e0e0;
			box-shadow: 0 2px 8px #888888;
		}
		.logo {
			width: 36px;
			height: 36px;
		}
		.menu {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 20px;
			height: 100%;
			img {
				width: 20px;
				height: 20px;
			}
			.on {
				display: block;
				animation: fadeTo 0.5s;
			}
			.off {
				display: none;
				opacity: 0;
			}
			.menu_box {
				position: absolute;
				top: 78px;
				right: -20px;
				z-index: 999;
				width: 120px;
				height: auto;
				padding: 20px 0px;
				background-color: #ffffff;
				transition: ease 0.5s;
				.menu_item {
					width: 100%;
					padding: 20px 0px;
					font-size: 14px;
					line-height: 20px;
					text-align: center;
					cursor: pointer;
					transition: ease 0.5s;
					color: #353535;
					&:hover {
						color: #409EFF;
					}
				}
				.active {
					color: #409EFF;
				}
			}
		}
	}
}
// 当W大于1200px时
@media screen and (min-width: 1200px) {
	#header {
		height: 84px;
		.header_pc {
			display: flex;
		}
		.header_h5 {
			display: none;
		}
	}
}
// 当W小于1200px时
@media screen and (max-width: 1200px) {
	#header {
		height: 78px;
		.header_pc {
			display: none;
		}
		.header_h5 {
			display: flex;
		}
	}
}
</style>
