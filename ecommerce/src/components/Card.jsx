import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

export default function Card(props) {
  const [liked, setLiked] = useState(false);
  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };
  const el = props.el;
  return (
    <div className=" card w-25 p-2">
      <img
        src={el.img}
        className="w-100 p-2 h-75"
      ></img>
      <a
        onClick={() => {
          props.setWishList(props.wishList + 1);
          console.log(props.wishList);
          //   console.log(wishList);
        }}
      >
        {liked ? (
          <AiOutlineStar
            size={28}
            className="star"
            activeColor="red"
            // fullIcon={<i className="bi bi-star"></i>}
            // isHalf={true}
            // src={el.icon}
            // className="w-25 p-2"
            onClick={() => {
              setLiked(!liked);
            }}
          />
        ) : (
          <AiFillStar
            size={28}
            className="star"
            activeColor="blue"
            onClick={() => {
              setLiked(!liked);
            }}
          />
        )}
      </a>

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
  );
}
