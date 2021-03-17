$(function(){

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

    $(".rating").rateYo({
      starWidth: "17px",
      rating: 3.5,
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true
    });

});