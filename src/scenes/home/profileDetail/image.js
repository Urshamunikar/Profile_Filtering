import { useState, useEffect } from "react";


const Image = ({ photos }) => {

    const [src, setSrc] = useState("/logo192.png");

    useEffect(() => {
        setSrc("/logo192.png")
        photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.url
            img.onload = () => {
                setSrc(photo.url)
            }
        });
    }, [photos])
    return (
        <div className="card_image">
            <img src={src} alt="person" />
        </div>
    )

}
export default Image;