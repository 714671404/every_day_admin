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
				component: path('Home')
			},
			{
				path: 'about',
				name: 'about',
				component: path('About')
			},
			{
				path: 'error',
				name: 'error',
				component: path('errors/error')
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