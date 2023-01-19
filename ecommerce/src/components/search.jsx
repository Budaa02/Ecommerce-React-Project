import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useState } from "react";
import { Link } from "react-router-dom";

function Search(props) {
  const [wish, setWish] = useState(false);
  function wishlistFunc() {
    setWish(!wish);
    console.log(wishlistFunc);
  }

  return (
    <div className="search_main d-flex">
      <div className="d-flex container search_container justify-content-around">
        <div className="d-flex ">
          <Link to={"/"}>
            <img src="images/logo-1.svg" />
          </Link>
        </div>
        <div>
          <Form className="d-flex search-input">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-0"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="d-flex align-items-center signing">
          <p className="p-2">
            {" "}
            <BsPerson />
            <Link to={"/signin"}>Sign in</Link>
          </p>

          {/* wishlist */}
          <AiOutlineHeart />
          {props.wishList.length}
          <a className="item active">
            <div class="ui simple dropdown item">
              <div class="menu">
                {props.wishList.map((w, index) => {
                  return (
                    <div>
                      <div className="item">
                        choice {w.name}
                        <button>X</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </a>
          <p className="">
            <AiOutlineShoppingCart />0
          </p>
          {/* {wish ? (
            <div className="wish">
              <p>{props.wishList}close</p>
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Search;
