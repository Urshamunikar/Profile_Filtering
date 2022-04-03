import { signalValue, statusValue } from "../../../helpers/functions";

import Image from "./image";

const Card = ({ profile }) => {

    return (
        <div className="card">
            <div className="card_status">
                <div style={{
                    width: "0",
                    height: "0",
                    borderStyle: "solid",
                    borderWidth: "50px 50px 0 0",
                    borderColor: `${statusValue(profile.status)} transparent transparent transparent`

                }}>

                </div>


            </div>
            <div className="card_details">
                {/* card image */}
               <Image photos = {profile.photos} />

                {/* card name */}
                <div className="card_name">
                    <p>{profile?.firstName} {profile?.lastName}</p>
                </div>

                {/* signal */}
                <div className="card_signal">
                    <span style={{
                        backgroundColor: (profile?.signal === 1 || profile?.signal === 2)
                            ? "#0F60DA"
                            :
                            (profile?.signal === 3) ? "#F3AD63" : "#5FDBA7",
                        color: (profile?.signal === 1 || profile?.signal === 2) ? "#FFFFFF" : '#000000'

                    }}>{signalValue(profile.signal)}</span>
                </div>

            </div>

        </div>

    )
}
export default Card;