import React from "react";
import Slider from "react-slick";
import { SLiderItem } from '.'
export default function SimpleSlider({ prodects }) {
   //1014
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        centerPadding: "60px",
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
       
        responsive: [
          {
            breakpoint: 1191,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1014,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 836,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Slider {...settings}>
            {
                prodects.map(item => <SLiderItem
                    key={item.id}
                    title={item.title}
                    src={item.src}
                    price={item.price}
                />)
            }
        </Slider>
    );
}