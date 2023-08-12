export default {
  infinite: false,
  centerPadding: "24px",
  slidesToShow: 6,
  slidesToScroll: 6,
  speed: 500,
  initialSlide: 0,
  arrows: true,
  autoplay: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        centerPadding: "24px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: "24px",
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "24px",
      },
    },
    {
      breakpoint: 539,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "16px",
      },
    },
  ],
};
