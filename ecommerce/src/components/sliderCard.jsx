import CardData2 from "../data/card";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import Card from "./Card";

function Cards(props) {
  const ListItems = CardData2.map((list) => {
    const children = list.children.map((el) => {
      return (
        <Card
          el={el}
          wishList={props.wishList}
          setWishList={props.setWishList}
        />
      );
    });
    return <div className="container d-flex flex-wrap">{children}</div>;
  });
  return (
    <div>
      <AliceCarousel
        disableButtonsControls
        className="container d"
      >
        {ListItems}
      </AliceCarousel>
    </div>
  );
}

export default Cards;
