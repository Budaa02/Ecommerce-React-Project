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

import { Children, useState } from "react";
import Cards from "./components/SliderCard";
import Background from "./components/background";
import ThreeCards from "./components/ThreeList"
import FreeDelivery from "./components/delivery"
import UserCardData1 from "./components/userCard"
import LogoPng from "./components/footerLogo";
import LatestNews from "./components/latestNews";
import FooterEmail from "./components/footerEmail"
import FooterLi from "./components/footer"
import SignIn from "./components/Sign/SignIn";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";

function App() {
  const [wishList, setWishList] = useState(0)

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
        <Search wishList={wishList} setWishList={setWishList} />

      </div>
      
      <div>
        <MainMenu />
      </div>
      <Routes>
        <Route path="/" element={<Main wishList={wishList} setWishList={setWishList}/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
      {/* <Main /> */}

      <div className="container  ">
        <FooterEmail />
        <FooterLi />
      </div>



      {/* <h1>React Bootstrap Component</h1>
      <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
