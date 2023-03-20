// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')

export default {
	target: 'static',
	// 全局页眉: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Blogs',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
			{ name: 'description', content: '前端劝退师' },
			{ name: 'keywords', content: '前端劝退师,前端导航,前端大全,鹏多多,前端开发' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: '/styles/reset.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/styles/animation.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/styles/common.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/styles/theme.css' }
		]
	},
	// 全局CSS: https://go.nuxtjs.dev/config-css
	css: [],
	// 页面渲染之前就安装的插件: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '@/plugins/icons', ssr: true }],
	// 自动导入组件: https://go.nuxtjs.dev/config-components
	components: true,
	// 用于开发和构建的模块: https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/style-resources', '@nuxt/postcss8'],
	// 模块: https://go.nuxtjs.dev/config-modules
	modules: [],
	// 构建配置: https://go.nuxtjs.dev/config-build
	build: {
		extend(config, ctx) {
			const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
			svgRule.exclude = [path.resolve(__dirname, 'assets/svg')]
			// Includes /icons/svg for svg-sprite-loader
			config.module.rules.push({
				test: /\.svg$/,
				include: [path.resolve(__dirname, 'assets/svg')],
				loader: 'svg-sprite-loader',
				options: {
					symbolId: 'icon-[name]'
				}
			})
		}
	},
	// eslint缓存
	eslint: { cache: false }
}
