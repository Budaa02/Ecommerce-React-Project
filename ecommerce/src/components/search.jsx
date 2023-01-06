import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsPerson } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Nav, NavLink, NavDropdown } from "react-bootstrap";

function search() {
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
                   <p className=''> <BsPerson />Sign in</p>
                  <p className=''>  <AiOutlineHeart/>0</p>
                    <p className=''><AiOutlineShoppingCart />0</p>
                </div>

            </div>

        </div>
    )
}

export default search



