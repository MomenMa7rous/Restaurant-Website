window.onload = () => {
  initFlowbite();
}

// Owl Carousel jQuery Initialization
$(document).ready(function(){
  $(".owl-carousel.hero").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, // Autoplay interval in milliseconds
    autoplayHoverPause: true, // Pause autoplay on hover
    autoHeight: true,
  });
});

$(document).ready(function(){
  $(".owl-carousel.sections").owlCarousel({
    items: 2,
    autoplay: true,
    autoplayTimeout: 5000, // Autoplay interval in milliseconds
    autoplayHoverPause: true, // Pause autoplay on hover
    autoHeight: true,
    responsive: {
      768: {
          items: 4 // Number of items to show at 768px and above
      },
      992: {
          items: 6 // Number of items to show at 992px and above
      },
    },
    margin: 20,
  });
});

$(document).ready(function(){
  $(".owl-carousel.products").owlCarousel({
    items: 2,
    autoplay: true,
    autoplayTimeout: 5000, // Autoplay interval in milliseconds
    autoplayHoverPause: true, // Pause autoplay on hover
    autoHeight: true,
    responsive: {
      768: {
          items: 3 // Number of items to show at 768px and above
      },
      1200: {
          items: 5 // Number of items to show at 992px and above
      },
    },
    margin: 20,
  });
});