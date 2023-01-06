import react from "react";
// import Icon from "./icons"
import {GeoAlt, Truck} from "react-bootstrap-icons"

function ourStore() {
    return (
        <div class="track container">
            <p>Need help? call us:(+98)0234 456 789</p>
            <div class="track_append">
           <GeoAlt/>     <p className="tracks">Our store</p>
               <Truck/> <p>Track your order</p>
            </div>

        </div>
    )
}

export default ourStore




