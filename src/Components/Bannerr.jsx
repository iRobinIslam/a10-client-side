// import banner1 from "../assets/banner1.jpg"
// import banner2 from "../assets/banner2.jpg"
// import banner3 from "../assets/banner3.webp"
// import banner4 from "../assets/banner4.jpg"
// import banner001 from "..//assets//banner-img 001.jpg"
// import banner002 from "../assets//banner002.jpg"
// import banner004 from "../assets//banner img004.jpg"
import React from "react";
import banner3 from "../assets/banner3.webp"
import banner001 from "..//assets//banner-img 001.jpg"
import banner002 from "../assets//banner002.jpg"
import banner004 from "../assets//banner img004.jpg"

const Bannerr = () => {
  return (
    <div className="carousel w-full mt-4">
      <div id="slide1" className="carousel-item relative w-full">
        <img 
          src={banner001}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner002}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner3}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={banner004}
         className="w-full h-[400px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannerr;


