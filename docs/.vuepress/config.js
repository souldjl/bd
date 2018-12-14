module.exports = {
	title: 'vuepress',
	description: '网站描述',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		['link', {rel: 'icon', href: '/favicon.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
	],
	base: '/blog/vuepress/', // 这是部署到github相关的配置 下面会讲
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
		lastUpdated: 'Last Updated',
		nav: [
			{text: 'android开发', link: '/android/'}, // 内部链接 以docs为根目录
			{text: '博客', link: 'http://www.baidu.com/'}, // 外部链接
			// 下拉列表
			{
				text: 'GitHub',
				items: [
					{
						text: 'GitHub地址',
						link: 'https://github.com/OBKoro1'
					},
					{
						text: '算法仓库',
						link: 'https://github.com/OBKoro1/Brush_algorithm'
					}
				]
			}
		],
		sidebar: [
			'/android/', '/ios/'
		]

	}
}