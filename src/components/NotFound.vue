<template>
	<div>
		<div class='_404'>404</div>
        <hr>
        <div class="_404_text">
			Sorry, we couldn't find the page you were looking for.
		</div>
    </div>
</template>

<script>
export default {
	name: 'NotFound',
	data() {
		return {
		}
	}
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=opensans:500);
body{
	background: #33cc99;
	color:#fff;
	font-family: 'Open Sans', sans-serif;
	max-height:700px;
	overflow: hidden;
}

._404{
	font-size: 220px;
	position: relative;
	display: inline-block;
	z-index: 2;
	height: 250px;
	letter-spacing: 15px;
}

._404_text {
	font-size: 40px;
	width: 80%;
	margin: auto;
}
		
</style>
