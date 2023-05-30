import React, { useState } from "react";
import info from "../cards";
import CardInformation from "./CardInformation";

function Information() {
    const [state, setState] = useState("gastro");
    const [gastro, histo, pira] = info;

    const { title: gastrotitle } = gastro;
    const { title: histotitle } = histo;
    const { title: piratitle } = pira;

    const { text: gastrotext } = gastro;
    const { text: histotext } = histo;
    const { text: piratext } = pira;

    var fTitle = "";
    var fText = "";

    function onMouse(value) {
        setState(value);
    }

    if (state === "gastro") {
        fTitle = gastrotitle;
        fText = gastrotext;
    } else if (state === "histo") {
        fTitle = histotitle;
        fText = histotext;
    } else {
        fTitle = piratitle;
        fText = piratext;
    }

    return (
        <section className="information">
            <div className="middle">
                <section className="collage">
                    <div className="container">
                        <div className="wrapper">
                            <div className="slide">
                                <div className="gallery-container">
                                    <div className="gallery-wrap">
                                        <div className="item" id="gastro" onMouseOver={() => { onMouse("gastro") }}></div>
                                        <div className="item" id="histo" onMouseOver={() => { onMouse("histo") }}></div>
                                        <div className="item" id="pira" onMouseOver={() => { onMouse("pira") }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-box">
                    <CardInformation title={fTitle} text={fText} className="card" />
                </section>
            </div>
        </section>
    );
}

export default Information;