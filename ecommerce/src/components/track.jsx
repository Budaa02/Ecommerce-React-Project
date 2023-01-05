import react from "react";
// import Icon from "./icons"
import {GeoAlt, Truck} from "react-bootstrap-icons"

function ourStore() {
    return (
        <div class="track container">
            <p>Need help? call us:(+98)0234 456 789</p>
            <div class="track_append">
                <p><GeoAlt/>Our store</p>
                <p><Truck/>Track your order</p>
            </div>

        </div>
    )
}

export default ourStore




