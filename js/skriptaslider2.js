$(document).ready(function(){
    $('.okvir-objava-strojari').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.sljedeca-strojari'),
        prevArrow:$('.prosla-strojari'),
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 934,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },   
        ]



      });
      $('.okvir-objava-racunalci').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.sljedeca-racunalci'),
        prevArrow:$('.prosla-racunalci'),
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 934,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },       
        ]
      });
      $('.okvir-objava-mehici').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.sljedeca-mehici'),
        prevArrow:$('.prosla-mehici'),
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 934,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },     
        ]
      });
      $('.okvir-objava-elektrici').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.sljedeca-elektrici'),
        prevArrow:$('.prosla-elektrici'),
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 934,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },      
        ]
      });
      
});