const routers = [
	{
		path: '/',
		meta: {
			title: ''
		},
		component: (resolve) => require(['./views/index.vue'], resolve),
		children:[
			{
				path:'/hello',
				meta:{
				
				},
				component: (resolve) => require(['./views/hello.vue'], resolve)
			},
			{
				path:'/echarts',
				meta:{
				
				},
				component: (resolve) => require(['./views/echarts/index.vue'], resolve)
			},
			{
				path:'/makedown',
				meta:{
				
				},
				component: (resolve) => require(['./views/makeDown/index.vue'], resolve)
			},
			{
				path:'/world',
				meta:{
				
				},
				component: (resolve) => require(['./views/world.vue'], resolve)
			},
			{
				path:'/card',
				meta:{
				
				},
				component: (resolve) => require(['./views/Card/index.vue'], resolve)
			},
			{
				path:'/popur',
				meta:{
				
				},
				component: (resolve) => require(['./views/popur/index.vue'], resolve)
			},
		]
	},
	{
		path:'/404',
		meta:{},
		component: (resolve) => require(['./views/404/index.vue'], resolve)
	},
];
export default routers;