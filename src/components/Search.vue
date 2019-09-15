<template>
	<div class="search">
		<h5> Search the images available on the NASA API </h5>
		<form v-on:submit.prevent="getResult(query)">
			<input class="center" autofocus type="text"  v-model="query" placeholder="Enter term here"/>
			</br>
			<input type="button" @click="getResult(query)" value="Search"/>
		</form>
			<div class="container">
				<div class="results" v-for="(r, index) in Math.ceil(results.length / 4)" v-if="index <= 3">
				    <div class="row">
						<div class="col s12">
							<span class="result" v-for="result in results.slice((r - 1) * 4, r * 4)">
								<img :src="result.links[0].href" :alt="result.data[0].keywords[0]"/>
								<p class="truncate"> {{ result.data[0].title }} </p>
							</span>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Search',
	data() {
		return {
			query: '',
			results: ''
		}
	},
	methods: {
		getResult(query) {
			axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image')
			.then(response => {
				this.results = response.data.collection.items;
			});
		}
	}
}


  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.result {
	display: inline-block;
}

.results img {
	height: 80%;
	width: 80%;
	padding: 5px;
	margin: auto !important;
}
	



h3 {
  margin: 40px 0 0;
}


a {
  color: #42b983;
}

input[type='button'] {
	cursor: pointer;
}

input[type='text'] {
	width: 60%;
	padding: 4px;
}
</style>
