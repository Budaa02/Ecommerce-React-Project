
import footer from "../data/footer"
export default function FooterLi() {


    // const Footer = footer.map (list => {
    //     return(
    //         <div>
    //             <p>{list.name}</p>
    //         </div>
    //     )
    // })

    return (
        <div className="d-flex justify-content-between p-2">
            <div className="w-25">
                <img src="images/logo-1.svg" />
                <p>64 st james boulevard hoswick, ze2 7zj</p>
                <hr></hr>
                
            </div>
            <div>
                <p>Find product</p>
                <ul>
                    <li>Brownze arnold</li>
                    <li>Chronograph blue</li>
                    <li>Smart phones</li>
                    <li>Automatic watch</li>
                    <li>Hair straihteners</li>
                </ul>
            </div>
            <div>
                <p>Get help</p>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Return policy</li>
                    <li>Privacy policy</li>
                    <li>Payment policy</li>
                </ul>
            </div>
            <div>
                <p>About us</p>
                <ul>
                    <li>News</li>
                    <li>Services</li>
                    <li>Our policy</li>
                    <li>Custmer care</li>
                    <li>Faq's</li>
                </ul>
            </div>

            {/* {Footer} */}
        </div>
    )
}

