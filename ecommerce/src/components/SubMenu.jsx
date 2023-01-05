import React from "react"
import { Nav, NavLink, NavDropdown } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

const SubMenu = (props) => {


    const subMenu = props.children.length > 0 ? (
        <NavDropdown title={props.title}>
            {props.children.map(child => {
                return (
                    <NavDropdown.Item>
                        {child.title}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>

    ) : (
        <NavLink>{props.title}</NavLink>
    );

    return (
        <div>
            <Nav className="me-auto ">
                {subMenu}
            </Nav>
        </div>

    );
};

export default SubMenu

