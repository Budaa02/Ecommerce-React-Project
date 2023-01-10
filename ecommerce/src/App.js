// import logo from "./logo.svg";
import "./App.css";
import MainMenu from "./components/MainMenu";
// import Button from "react-bootstrap/Button";
import OurStore from "./components/track";
import Search from "./components/search";
import slider from "./data/slidercard"
import carouselData from "./data/slider";
import AliceCarousel from "react-alice-carousel";

function App() {
  const crouselData1 = carouselData.map((data) => {
    console.log(data);
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
    console.log(product)
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

  return (
    <div className="App">
      <OurStore />
      <div className="menu ">
        <Search />
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
      <div>
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

      {/* <h1>React Bootstrap Component</h1>
      <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
