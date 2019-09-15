const routes = [
	{ 	
		path: '*',
		name: 'notfound',
		component: require('./components/NotFound'),
	},
	{ 	
		path: '/',
		name: 'home',
		component: require('./components/Home'),
	},
	{
		path: '/apod',
		name: 'apod',
		component: require('./components/Npod'),
    },
	{
		path: '/search',
		name: 'search',
		component: require('./components/Search'),
    },
	{
		path: '/news',
		name: 'news',
		component: require('./components/News'),
    }
  ]
  
 export default routes;