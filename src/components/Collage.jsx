import React, {useState} from "react";
import img1 from "../assets/images/5.jpg";
import img2 from "../assets/images/5.jpg";
import img3 from "../assets/images/5.jpg";

function Collage() {
    const [state, setState] = useState("");
    function onMouserover(value){
        setState(value);
    }
    return (
        <div className="container">
            <div className="wrapper">
                <div className="slide">
                    <div className="gallery-container">
                        <div className="gallery-wrap">
                            <div className="item" id="gastro" onMouseOver={()=>{onMouserover("gastro")}}></div>
                            <div className="item" id="Histo" onMouseOver={()=>{onMouserover("histo")}}></div>
                            <div className="item" id="pira"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collage;
export {state};