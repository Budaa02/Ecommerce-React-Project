import Cards from "./SliderCard";
import Background from "./background";
import ThreeCards from "./ThreeList";
import FreeDelivery from "./delivery";
import UserCardData1 from "./userCard";

import LatestNews from "./latestNews";
import AliceCarousel from "react-alice-carousel";
import Popular from "./Popular";
import { useState } from "react";
import LogoPng from "./footerLogo";
import slider from "../data/slidercard";
import carouselData from "../data/slider";

export default function Main(props) {
  const crouselData1 = carouselData.map((data) => {
    return (
      <div className="caroContainer flex-md-row flex-column-reverse py-5 container">
        <div>
          <h2>{data.name}</h2>
          <button className="btn btn-warning rounded-4 px-4 py-3 text-white">
            Shop Now
          </button>
          <button className="btn btn-outline-secondary rounded-4  px-4 py-3 ms-3">
            Shop Now
          </button>
        </div>
        <img
          src={data.url}
          className="sliderimg"
        />
      </div>
    );
  });
  const sliders = slider.map((product) => {
    return (
      <div className="container d-flex justify-content-around caroCard">
        <div className="cardSlider card align-items-center justify-content-between w-80 p-4 m-0">
          <div className="d-flex">
            <img
              src={product.url}
              className={product.style}
              id="sliders2-img"
            />
            <p>{product.price}</p>
          </div>
          <div className="">
            <p>{product.name}</p>
            <p>{product.item}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="container-banner">
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval="3000"
          disableButtonsControls="true"
          mouseTracking
        >
          {crouselData1}
        </AliceCarousel>
      </div>
      <div className="container">
        <AliceCarousel
          className="container "
          responsive={{
            0: {
              items: 3,
            },
          }}
          autoPlay
          infinite
          autoPlayInterval="3000"
          disableButtonsControls="true"
          mouseTracking
        >
          {sliders}
        </AliceCarousel>
      </div>
      <div className="container">
        <Popular />
      </div>
      <div className="">
        <Cards
          wishList={props.wishList}
          setWishList={props.setWishList}
        />
      </div>
      <div>
        <Background />
      </div>
      <div className="container">
        <ThreeCards />
      </div>
      <div className="container bg-secondary">
        <FreeDelivery />
      </div>
      <div className="container">
        <UserCardData1 />
      </div>
      <div className="container bg-secondary">
        <LogoPng />
      </div>
      <div className="container">
        <LatestNews />
      </div>
    </div>
  );
}
