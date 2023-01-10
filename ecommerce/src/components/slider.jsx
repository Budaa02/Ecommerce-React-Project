// import { carouselData } from "../data/slider"
// import AliceCarousel from 'react-alice-carousel'

// function Sliders1() {
//     const crouselData1 = carouselData.map(data => {
//         return (
//             <div className="caroContainer flex-md-row flex-column-reverse py-5">
//             <div>
//               <h2>{data.title}</h2>
//               <button className="btn btn-warning rounded-4 px-4 py-3 text-white">
//                 Shop Now
//               </button>
//               <button className="btn btn-outline-secondary rounded-4  px-4 py-3 ms-3">
//                 Shop Now
//               </button>
//             </div>
//             <img src={data.url} className="sliderimg" />
//           </div>
//         );
//     });

//     return (
//         <AliceCarousel
//         autoPlay
//         infinite
//         autoPlayInterval="3000"
//         disableButtonsControls="true"
//         mouseTracking
//       >
//         {crouselData1}
//       </AliceCarousel>

//     )
// }
// export default Sliders1
//     // return (
//     //     <AliceCarousel disableButtonsControls="true">
//     //         {carouselData2}
//     //     </AliceCarousel>
//     // )
// }
// export default Sliders2

// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//       <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//       <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//       <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,

// ]

// const Gallery = () => {
//   return (
//     <AliceCarousel mouseTracking items={items} />
//   );
