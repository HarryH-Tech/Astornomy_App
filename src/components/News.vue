<template>
	<div>
		<div class="card">
			<div class="container">
				<div class="row">
					<div class="col s12">
						<div class="card-title">
							<h2> Hubble News </h2>
							<hr>
						</div>
						<div class="news_links" v-for="(item, index) in hubbleNews" v-if="index <= 2">					
						<ul>
							<li>
								<a  target="_blank" :href="item.url"> {{ item.name }} </a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	</br>
	<div class="video_spaceflight_news_container">
		<h2> 
			News From The Spaceflight 
				<a href="https://www.spaceflightnewsapi.net/">
					API
				</a>	
		</h2>
		<div class="spaceflight_news_container">
			<div v-for="(item, index) in spaceflightNews" v-if=" index <= 7">
				<img class="spaceflight_image" :src="item.featured_image"/>
				<br>
				<p class="spaceflight_caption"> <a :href="item.launches" target="_blank"> {{ item.title }} </a></p>
				<br>
			</div>
		</div>
	</div>
	<br>
</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		name: 'News',
		data() {
			return { 
				hubbleNews: [],
				videos: [],
				spaceflightNews: []
			}
		},
		methods: {				

			loadHubbleNews() {
				const url = "http://hubblesite.org/api/v3/news";
				const proxyUrl = "https://cors-anywhere.herokuapp.com/";
				axios.get(proxyUrl + url) 
					.then(response => {											
						this.hubbleNews = response.data;
					})
			},			
			loadSpaceflightNews() {
				const url = "https://spaceflightnewsapi.net/api/v1/articles";
				const proxyUrl = "https://cors-anywhere.herokuapp.com/";
				axios.get(proxyUrl + url)
					.then(response => {											
						this.spaceflightNews = response.data.docs;
					})	
			}
		},
		beforeMount() {
			this.loadHubbleNews();
			this.loadSpaceflightNews();
		},
		filters: {
			truncate: function(text, length, suffix) {
				return text.substring(0, length) + suffix;
			}
		}
	};
	
</script>

<style scoped>
	.card {
		width: 85%;
		margin: 5% auto auto auto;
		border-radius: 18px;
	}
		
	.news_links {
		margin: auto;
	}

	.spaceflight_caption:hover, .news_links:hover {
		text-decoration: underline;
	}
	
	.spaceflight_image {
		height: 60%;
		width: 60%;
	}
	
	.spaceflight_caption {
		width: 50%;
		margin: auto;
		
	}
	
	.spaceflight_news_container {
		border: 2px solid black;
		width: 85%;
		margin: auto;
		border-radius: 5px;
		background-color: #F2F4FF;
		box-shadow: 2px 4px 4px;
		padding: 8px;
	}
</style>
