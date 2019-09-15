<template>
	<div id="app">
		<!-- Navbar -->
		<nav>
			<div class="nav-wrapper">
				<h5 class="brand-logo center">Astronomize</h5>
			    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><router-link class="link" active-class="active" to="/">Home</router-link></li>
					<li><router-link class="link" active-class="active" to="/search">NASA Image Search</router-link></li>
					<li><router-link class="link" active-class="active" to="/Npod">NASA Picture Of The Day</router-link></li>
					<li><router-link class="link" active-class="active" to="/news">News</router-link></li>
				</ul>
			</div>
		</nav>

		<ul class="sidenav" id="mobile-demo">
			<li><router-link class="link" active-class="active" to="/">Home</router-link></li>
			<li><router-link class="link" active-class="active" to="/search">Search</router-link></li>
			<li><router-link class="link" active-class="active" to="/Npod">NASA Picture Of The Day</router-link></li>
			<li><router-link class="link" active-class="active" to="/news">News</router-link></li>
		</ul>
		<router-view></router-view>				
	</div>
</template>

<script>
import Home from './components/Home.vue';

export default {
	name: 'App',
	components: {
		Home: Home
	},
	mounted() {
		  //initialize navbar for mobile device
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems);
		});
	  
	  //create image carousel in App.vue
		document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.carousel');
			var instances = M.Carousel.init(elems);
		});
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.card {
	padding: 4px;
}

.card-text {
	width: 90%;
	text-align: justify;
	text-align-last: center;
	margin: auto;
	font-weight: bold;
}
	
.carousel-image {
	min-height: 250px !important;
	min-width: 250px !important;
}
	
</style>
