
function Background() {
    return (

        <div className="background_footer">
            <p>asd</p>
            {/* <img src="images/SaleLaptop.png" alt="" /> */}
            <div style={{
                backgroundImage: "url(images/SaleLaptop.png)"
                , color: "red", width: "100%", height: "500px",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="background-middle">
                    <a>New laptop</a>
                    <p>Sale up to 50% off</p>
                    <p>12 inch hd display</p>
                    <a>Shop now</a>
                </div>

            </div>
        </div>


    )
}

export default Background


