function path(path) {
	return () => import(`@/views/${path}.vue`)
}

export default [
	{
		path: '/',
		redirect: {name: 'home'}
	},
	{
		path: '/',
		component: path('layouts/wrapper'),
		children: [
			{
				path: 'home',
				name: 'home',
				component: path('Home'),
				meta: {
					title: '首页'
				}
			},
			{
				path: 'about',
				name: 'about',
				component: path('About'),
				meta: {
					title: '关于'
				}
			},
			{
				path: 'error',
				name: 'error',
				component: path('errors/error'),
				meta: {
					title: '页面不存在'
				}
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: path('auth/Login')
	},
	{
		path: '/register',
		name: 'register',
		component: path('auth/Register')
	},
	{
		path: '*',
		redirect: 'error'
	}
]