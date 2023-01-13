import UseCard from "../data/twoSliderCard"
import AliceCarousel from "react-alice-carousel";
import { React } from "react";


export default function LatestNews() {
    const usersCard = UseCard.map(element => {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <p>Latest news</p>
                    <p>View all</p>
                </div>
                <div className="d-flex twocard">
                    <div className="d-flex border rounded-4 m-1 p-3 w-50 " >
                        <img src={element.img} />
                        <div className="w-50 p-4">
                            <p>{element.date}</p>
                            <h7>{element.title}</h7>
                            <p>{element.body}
                            </p>
                            <p>{element.end}</p>
                        </div>
                    </div>
                    <div className="d-flex border rounded-4 m-1 p-3 w-50" >
                        <img src={element.img} />
                        <div className="w-50 p-4">
                            <p>{element.date}</p>
                            <h7>{element.title}</h7>
                            <p>{element.body}
                            </p>
                            <p>{element.end}</p>
                        </div>
                    </div>
               

                </div>

            </div>
        )
    })
    return (
     <AliceCarousel disableButtonsControls="true" responsive={{
        0: {
            items: 1
        }
    }
    }
    >
        {usersCard}
    </AliceCarousel>
    )
}





