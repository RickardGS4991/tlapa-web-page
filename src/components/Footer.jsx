import React, {useState} from "react";
import w1 from "../assets/images/w1.svg";
import w2 from "../assets/images/w2.svg";
import w3 from "../assets/images/w3.svg";
import w4 from "../assets/images/w4.svg";

var y = new Date();
var year = y.getFullYear();

function Footer() {
    const [activeLink, setActiveLink] = useState("home");

    function changeActiveLink(value){
        setActiveLink(value);
    }

    return (
        <footer className="final">
            <section className="finalimg">
                <img src={w1} className="img1" />
                <img src={w2} className="img2" />
                <img src={w3} className="img3" />
                <img src={w4} className="img4" />
            </section>
            <section className="copyright-links">
                <div className="row">
                    <div className="column">
                    <a href="history"><p className={activeLink === "history" ? "active-footer" : "inactive"} onClick={()=>changeActiveLink("history")}>Historia</p></a>
                    <a href="places"><p className={activeLink === "places" ? "active-footer" : "inactive"} onClick={()=>changeActiveLink("places")}>Lugares</p></a>
                    </div>
                    <div className="column">
                    <a href="food"><p className={activeLink === "food" ? "active-footer" : "inactive"} onClick={()=>changeActiveLink("food")}>Gastronomía</p></a>
                    <a href="services"><p className={activeLink === "services" ? "active-footer" : "inactive"} onClick={()=>changeActiveLink("services")}>Servicios</p></a>
                    </div>
                </div>
                <div className="copy">
                    <h5 id="cop">© Copyright {year}</h5>
                </div>
            </section>
        </footer>
    );
}

export default Footer;