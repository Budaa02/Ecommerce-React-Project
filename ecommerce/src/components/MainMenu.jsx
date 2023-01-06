
import React from "react"
import SubMenu from "./SubMenu"
import { Nav, Navbar } from "react-bootstrap"
import menus from "../data/menus"
import { NavLink, NavDropdown } from "react-bootstrap";
function MainMenu() {

    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu className="justify-content-end"
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
            />

        )
    })

    return (
        <div className="main-frame">

            <Navbar bg="light" expand="lg" className="p-0">
                <div className="container ">
                    <div className="browse_category  d-flex me-0 frame-1 bg-warning">
                        <p>Browse_categories </p>
                        <NavDropdown>

                        </NavDropdown>


                    </div>
                    <div className="d-flex me-5">
                        {subMenus}
                    </div>

                    <div className="">
                        30 Days Free Return
                    </div>
                </div>



            </Navbar>
        </div>

    )
}
console.log(Navbar);

export default MainMenu







