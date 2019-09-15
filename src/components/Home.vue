<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col sm10">
					<div class="card">
						<div class="card-title">
							Welcome to Astronomize
						</div>
						<div class="carousel">
							<a class="carousel-item" href="#"><img class="carousel-image" src="@/assets/nebula.jpg" alt="Image of a nebula"></a>
							<a class="carousel-item" href="#"><img class="carousel-image" src="@/assets/galaxies.jpg" alt="Image of galaxies"></a>
							<a class="carousel-item" href="#"><img class="carousel-image" src="@/assets/space.jpg" alt="Image of space"></a>
							<a class="carousel-item" href="#"><img class="carousel-image" src="@/assets/space2.jpg" alt="Image of space"></a>
						</div>
						<div class="card-text">
							Astronomize is the app you need for all your 
							astronomy and intergalactic needs. Here you can 
							read about the latest news from outer space, search
							for information about space related topics or view
							the NASA Astronomy Picture Of The Day (NAPOD).
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
		}
	}	
}
</script>

