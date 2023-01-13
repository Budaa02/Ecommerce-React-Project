
export default function ThreeCards() {
    return (
        <div className="row container mainCards">
            <div className="d-flex">
                <div className="d-flex col-8 border rounded-4 m-1 p-3">
                    <img src="images/camera.png" />
                    <div>
                        <p>Jbl bar 2.1 deep bass</p>
                        <p>$11,70</p>
                        <i></i>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className="rCard col-4">
                    <div className=" border rounded-4 m-1 d-flex p-2">
                        <img src="images/camera.png" />
                        <div>
                            <p>Play game</p>
                            <p>$11,70</p>
                            <i></i>
                        </div>

                    </div>
                    <div className=" border rounded-4 m-1 d-flex p-2 ">
                        <img src="images/camera.png" />
                        <div>
                            <p>Play game</p>
                            <p>$11,70</p>
                            <i></i>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}



