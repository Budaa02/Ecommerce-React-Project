// import logo from "./logo.svg";
import "./App.css";
import MainMenu from "./components/MainMenu";
// import Button from "react-bootstrap/Button";
import OurStore from "./components/track";
import Search from "./components/search";
import slider from "./data/slidercard"
import carouselData from "./data/slider";
import AliceCarousel from "react-alice-carousel";
import Popular from "./components/Popular";
import CardSlider from "./data/card";
import { Children, useState } from "react";
import Cards from "./components/sliderCard";
import Background from "./components/background";
import ThreeCards from "./components/ThreeList"
import FreeDelivery from "./components/delivery"
import UserCardData1 from "./components/userCard"
import LogoPng from "./components/footerLogo";
import LatestNews from "./components/latestNews";
import FooterEmail from "./components/footerEmail"
import FooterLi from "./components/footer"
function App() {
  const [wishList, setWishList] = useState(0)
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
        <img src={data.url} className="sliderimg" />
      </div>
    );
  });
  const sliders = slider.map((product) => {
    return (
      <div className="container d-flex justify-content-around caroCard">
        <div className="cardSlider card align-items-center justify-content-between w-80 p-4 m-0">

          <div className="d-flex">
            <img src={product.url} className={product.style} id="sliders2-img" />
            <p>{product.price}</p>
          </div>
          <div className="">
            <p>{product.name}</p>
            <p>{product.item}</p>
          </div>

        </div>

      </div>
    )
  })
  // const CardList = CardSlider.map((el) => {

  // })
  // const ListItems = CardSlider.map(list => {
  //   const children = list.children.map(el => {
  //     return (
  //       <div>
  //         <img src={el.img}></img>
  //       </div>
  //     )
  //   })
  // })



  return (

    <div className="App">

      <OurStore />
      <div className="menu ">
        <Search wishList={wishList}/>
      </div>
      <div>
        <MainMenu />
      </div>
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
        <AliceCarousel className="container "
          responsive={{
            0: {
              items: 3
            }
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
        <Cards wishList={wishList} setWishList={setWishList}/>

        
      </div>
      <div>
        <Background />
      </div>
      <div className="container">
        <ThreeCards/>
      </div>
      <div className="container bg-secondary">
        <FreeDelivery/>
      </div>
      <div className="container">
      <UserCardData1/>
      </div>
      <div className="container bg-secondary">
          <LogoPng/>
      </div>
      <div className="container">
        <LatestNews/>
      </div>
      <div className="container  ">
          <FooterEmail/>
          <FooterLi/>
      </div>



      {/* <h1>React Bootstrap Component</h1>
      <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
