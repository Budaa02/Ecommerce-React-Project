
import CardData2 from "../data/card"
import AliceCarousel from "react-alice-carousel"
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";


function Cards(props) {


    const ratingChanged = (newRating) => {
        // console.log(newRating);
    };
    const ListItems = CardData2.map(list => {
        const children = list.children.map(el => {
            return (
                <div className=" card w-25 p-2">

                    <img src={el.img} className="w-100 p-2 h-75"></img>
                    <img src={el.icon} className="w-25 p-2" onClick={() =>{
                        props.setWishList(props.wishList + 1)
                        console.log(props.wishList);
                    }}></img>
                    <div className="card-body">
                        <h7>{el.name}</h7>
                        <p>{el.price}</p>
                        <a>Go somewhere</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>

                </div>

            )
        })
        return (
            <div className="container d-flex flex-wrap">
                {children}
            </div>
        )
    })
    return (
        <div>
            <AliceCarousel
             disableButtonsControls
            className="container d"
            >
                {ListItems}
            </AliceCarousel>

        </div>
    )
}

export default Cards

