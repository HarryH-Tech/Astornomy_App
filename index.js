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
  
      $(document).ready(function () {
        $(".sidenav-trigger").sideNav();
      });