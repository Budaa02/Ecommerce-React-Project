import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsPerson } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Nav, NavLink, NavDropdown } from "react-bootstrap";
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function Search(props) {
    // const [wish, setWish] = useState(false)
    // function wishlistFunc() {
    //     setWish(!wish)
    //     console.log(wishlistFunc);

    // }



    return (
        <div className='search_main d-flex'>
            <div className='d-flex container search_container justify-content-around'>
                <div className='d-flex '>
                    <img src="images/logo-1.svg" />
              
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
                <div className='d-flex align-items-center signing'>
                   <p className='p-2'> <BsPerson />Sign in</p>
                  <a className='p-2'  >  <AiOutlineHeart />{props.wishList}</a>
                    <p className=''><AiOutlineShoppingCart />0</p> 
                       {/* {wish ? <div className='wish'>{props.wishlist}</div> : ""} */}
                </div>
                

            </div>

        </div>
    )
}

export default Search



