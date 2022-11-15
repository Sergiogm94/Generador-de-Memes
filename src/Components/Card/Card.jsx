import "./Card.scss";
import domtoimage from "dom-to-image";
import { useContext, useRef } from "react";
import { MemeContext } from "../../Context/MemeContext";


const Card = ({item}) => {
    const memeRef = useRef();
    const {text} = useContext(MemeContext);



    const downloadImage = () =>{
        domtoimage.toJpeg(memeRef.current, { quality: 0.95 })
        .then(function (dataUrl) {
        let link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
    }

    return(
        <div>
             <div ref={memeRef}>
                <h3 style={{left: text?.topX + "%", top: text?.topY + "%"}} className="text">{text?.top}</h3>
                <img  className="img" src={item.url} alt="meme"></img>
                <h3 style={{left: text?.bottomX + "%", top: text?.bottomY + "%"}} className="text-botoom">{text?.bottom}</h3>
            </div>
             <div>
                <button className="btn" onClick={() => downloadImage()}>Descargar</button>
             </div>
        </div>
    )
}

export default Card;