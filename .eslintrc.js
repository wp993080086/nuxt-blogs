module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
	plugins: [],
	rules: {
		'vue/component-definition-name-casing': ['off', 'PascalCase'],
		'vue/html-self-closing': 'off',// 强制实施自动关闭样式
		'vue/no-v-html': 'off',// 禁止使用 V-HTML 来防止 XSS 攻击
		'vue/no-v-for-template-key': 'on',
		semi: ['error', 'never'], // 使用分号
		'comma-dangle': [
			// 语句后面是否使用逗号
			'error',
			{
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],
		'no-useless-escape': 'off',
		'no-sparse-arrays': 'off', // 禁用稀疏数组
		'no-prototype-builtins': 'off', // 禁止直接使用Object.prototypes 的内置属性
		'no-constant-condition': 'off', // 禁止在条件中使用常量表达式
		'no-use-before-define': 'off', // 不允许在变量定义之前使用它们
		'no-restricted-globals': 'off', // 禁用特定的全局变量
		'no-restricted-syntax': 'off',// 禁止使用特定的语法
		'generator-star-spacing': 'off',// 强制 generator 函数中 * 号周围有空格
		'no-unreachable': 'off', // 禁止在return、throw、continue 和 break语句之后出现不可达代码
		'no-multiple-template-root': 'off',// template中只允许模板里存在一个根节点
		'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], // 禁止出现未使用过的变量
		'no-v-model-argument': 'off',// 检查自定义组件上是否没有参数
		'no-case-declarations': 'off', // 不允许在 case 子句中使用词法声明
		'no-console': 'off', // 禁用console
		'arrow-parens': 'off', // 箭头函数一个参数可以不要括号
		'no-eq-null': 2, // 禁止对null使用==或!=运算符
		quotes: [1, 'single'], // 引号类型
		'prefer-const': 0, // 首选const
		eqeqeq: 2, // 必须使用全等
		'default-case': 2, // switch语句最后必须有default
		'no-var': 0, // 禁用var，用let和const代替
		'no-trailing-spaces': 1 // 一行结束后面不要有空格
	}
}
