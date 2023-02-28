$(function() {
    var header = $(".header-area");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("header_sticky");
        } else {
            header.removeClass("header_sticky");
        }
    });
});

$('.services-box-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.mb-team-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.testimonial-slider-wrapper').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  prevArrow: '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7L7 13" stroke="#B8824E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1L7 7L1 13" stroke="#B8824E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
  // autoplay: true,
  // autoplaySpeed: 2000,
});

// $('.').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows:false,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   centerMode: true,
//   centerPadding: '0px',
//   responsive: [
//     {
//       breakpoint: 1025,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 766,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow:1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });






// Active isotope with jQuery code:

  var $grid = jQuery('.grid').imagesLoaded( function() {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      gutter: 0,
      masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-sizer'
      }
    });
  });

  // Isotope click function
  jQuery('.iso-nav a').click(function(){
    jQuery('.iso-nav a').removeClass('active');
    jQuery(this).addClass('active');

    var selector = jQuery(this).attr('data-filter');
    jQuery('.grid').isotope({
      filter: selector
    });
    return false;
  });
