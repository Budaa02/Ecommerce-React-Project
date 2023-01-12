
function Background() {
    return (

        <div className="background_footer container">
            <p></p>
            {/* <img src="images/SaleLaptop.png" alt="" /> */}
            <div className="" style={{
                backgroundImage: "url(images/SaleLaptop.png)"
                , color: "white", width: "100%", height: "500px",
                backgroundRepeat: "no-repeat",

            }}>
                <div className="row">
                    <div className="" style={{ padding:"100px", marginLeft:"20%"}}>
                        <a style={{ backgroundColor:"orange" ,border:"15px solid orange", borderRadius:"25px", width:"134px",height:"45px"}}>New laptop</a>
                        <p style={{fontSize:"41px", color:"#2E8FC5"}}>Sale up to 50% off</p>
                        <p>12 inch hd display</p>
                        <a style={{ backgroundColor:"orange" ,border:"15px solid orange", borderRadius:"25px", width:"134px",height:"45px"}}>Shop now</a>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Background


