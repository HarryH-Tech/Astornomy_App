import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Npod from '@/components/Npod';
import Search from '@/components/Search';
import News from '@/components/News';
import NotFound from '@/components/NotFound';

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
    },
	{
		path: '*',
		name: 'NotFound',
		component: NotFound
    },
	{
		path: '/npod',
		name: 'Npod',
		component: Npod
    },
	{
		path: '/search',
		name: 'Search',
		component: Search
    },
	{
		path: '/news',
		name: 'News',
		component: News
    }
  ]
})
