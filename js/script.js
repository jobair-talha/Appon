$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
});

// Screen part start
$('.screen-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
});

// venobox start
$('.venobox').venobox();

// Feedback text Slider
$('.user-text').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.user-img',
  fade: true,
});

// Feedback img Slider
$('.user-img').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  asNavFor: '.user-text',
  centerMode: true,
  centerPadding: "0",
  focusOnSelect: true
});
