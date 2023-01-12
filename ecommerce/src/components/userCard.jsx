
import { React } from "react";
import UserCardData from "../data/usercad";
import AliceCarousel from "react-alice-carousel";





export default function UserCardData1() {
    const userCard = UserCardData.map(el => {
        return (
            <div className="card m-4 text-start rounded-4 p-3">
                <div className="d-flex align-items-center ">
                    <img src={el.user} />
                    <p className="m-4">{el.name}</p>
                </div>
                <br />
                <p className="bg-warning p-3 rounded-4">
                    {el.text}
                </p>
            </div>
        )
    })
    return (
        <AliceCarousel disableButtonsControls="true" responsive={{
            0: {
                items: 3
            }
        }
        }
        >
            {userCard}


        </AliceCarousel>
    )


}







