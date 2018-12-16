module.exports = {
	title: 'vuepress',
	description: '网站描述',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
	],
	base: '/bd/', // 这是部署到github相关的配置 下面会讲
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
		lastUpdated: 'Last Updated',
		nav: [
			{text: 'vue', link: '/vue/'}, // 内部链接 以docs为根目录
			{text: 'sql', link: '/sql/'}, // 内部链接 以docs为根目录
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
		sidebar: {
			'/vue/': [
				{
					title:'vue总结',
					collapsable: true,
					children:[
						'/vue/',
						'vue基础/',
						'vue常用/'

					]
				}
			],
			'/sql/': [
				{
					title:'sql笔记',
					collapsable: true,
					children:[
						'sql基础/'
					]
				}
			]
		}
	}
}

// sidebar:[
// 	{
// 		title:'vue学习笔记',
// 		collapsable: true,
// 		children:[
// 			'/vue/vue基础/',
// 			'/vue/vue常用/',
// 		]
// 	},
// 	{
// 		title:'sql笔记',
// 		children:[
// 			'/sql/'
// 		]
// 	}
// ],



// sidebar: {
// 	'/vue/': [
// 		{
// 			title:'vue',
// 			collapsable: true,
// 			children:[
// 				'vue基础/',
// 				'vue常用/'
//
// 			]
// 		}
// 	],
// 		'/sql/': [
// 		{
// 			title:'sql笔记',
// 			collapsable: true,
// 			children:[
// 				'/'
//
// 			]
// 		}
// 	]
// }