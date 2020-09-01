import React from "react";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 7,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
  autoplaySpeed: 5000,
  centerMode: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerPadding: "10px",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 7,
        swipeToSlide: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
};
