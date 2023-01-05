
import React from "react"
import SubMenu from "./SubMenu"
import { Nav, Navbar } from "react-bootstrap"
import menus from "../data/menus"
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
        <div>
            <div>Here is main menu</div>
            <Navbar bg="light" expand="lg" className="">
                <div className="browse_category">
                    browse_categories
                    
                </div>
                {subMenus}
                <div>
                    30 Days Free Return
                </div>
            </Navbar>
        </div>
        
    )
}
console.log(Navbar);

export default MainMenu







