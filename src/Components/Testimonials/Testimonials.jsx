import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero erat, aliquet sit amet mattis eu, blandit nec dui. Morbi id libero accumsan, fermentum felis sit amet, elementum dui. Fusce at augue sit amet nibh venenatis luctus non vel purus. Morbi pellentesque, ligula faucibus porttitor viverra, felis ex sollicitudin lectus, eu laoreet libero nisi vel nisi.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero erat, aliquet sit amet mattis eu, blandit nec dui. Morbi id libero accumsan, fermentum felis sit amet, elementum dui. Fusce at augue sit amet nibh venenatis luctus non vel purus. Morbi pellentesque, ligula faucibus porttitor viverra, felis ex sollicitudin lectus, eu laoreet libero nisi vel nisi.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero erat, aliquet sit amet mattis eu, blandit nec dui. Morbi id libero accumsan, fermentum felis sit amet, elementum dui. Fusce at augue sit amet nibh venenatis luctus non vel purus. Morbi pellentesque, ligula faucibus porttitor viverra, felis ex sollicitudin lectus, eu laoreet libero nisi vel nisi.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero erat, aliquet sit amet mattis eu, blandit nec dui. Morbi id libero accumsan, fermentum felis sit amet, elementum dui. Fusce at augue sit amet nibh venenatis luctus non vel purus. Morbi pellentesque, ligula faucibus porttitor viverra, felis ex sollicitudin lectus, eu laoreet libero nisi vel nisi.",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={clients.img} alt="" />
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
