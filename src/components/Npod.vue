<template>
	<div class="apod">
		<h3> Nasa Picture Of The Day (NPOD)</h3>
		<br>
		<p class="intro_text"> 
			Discover the cosmos! Each day a different image or 
			photograph of our universe is featured, along
			with a brief explanation.</br></br>
			<span>
				Select a date below to view the NASA Picture of The Day for that day.
			</span>
		</p>
		<br>
		
		<div class="date_container">
			<div class="date">
				<date-dropdown default="2010-01-01" class="date_picker" min="2010" max="2020" v-model="selectedDate"></date-dropdown>
				<br>
				<button class="date_button" @click="getApod(); removeTodayText();">Search NPOD</button>
			</div>
		</div>
		<br>
		
		<div class="apod_information" v-if="text">
			<h2 class="apod_title"> {{ this.title }} </h2>
			<p class="apod_text"> {{ this.text }} </p>
			</br>
			<img class="apod_image" v-if="imgSrc" :src="imgSrc" :alt="imgAlt"/>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import DateDropdown  from 'vue-date-dropdown';

export default {
	name: 'Npod',
	components: {
		DateDropdown
	},
	data() {
		return {
			title: '',
			image: '',
			text: '',
			imgSrc: '',
			selectedDate: '',
			imgAlt: '',
			todaysPhotoText: true
		}
	},
	methods: {
		getApod() {
		const url = "https://api.nasa.gov/planetary/apod?api_key=";
		const apiKey = "fGLK24NO0ezujjPmNDQjnQPIfR1veADDHJef3ZkA";
		const modifiedDate = this.selectedDate.replace(/\./g,'-');
		const todaysDate = modifiedDate.split("-").reverse().join("-");
	
		this.show = false;
			axios.get(url + apiKey + "&date=" + todaysDate) 	
				.then(response => {
					this.title = response.data.title;
					this.text = response.data.explanation;
					this.imgSrc = response.data.url;
					this.imgAlt = response.data.title;
				})
			},
		removeTodayText() {
			this.todaysPhotoText = false;
		}
	}
}
</script>

<style scoped> 
.intro_text {
	width: 65%;
	margin: auto !important;
	text-align: justify;
	text-align-last: center;
}

span {
	font-weight: bold;
}

.apod_information {
	background-color: #F2F4FF;
	width: 90%;
	margin: auto auto 20px auto !important;
	border-radius: 14px;
	padding-bottom: 10px !important;
	
}

.apod_title {
	font-weight: bold;

}

.apod_text {
	width: 80%;
	text-align: justify;
	text-align-last: center;
	margin:  auto;
}

.apod_image {
	width: 80%;
	height: 80%;
	margin: auto;	
	margin-bottom: 10px;
	border-radius: 12px;

}

.date_container {
	text-align: center
}

.date {
	display: inline-block;
}	
.date_button:hover {
	cursor: pointer;
}

.date_button:focus {
	background-color: #DDDDDD;
}


</style>
