import "./baner.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { init } from "ityped";
import { useEffect, useRef } from "react";

function Baner() {

    const animatedText = useRef();

    useEffect(() => {
        init(animatedText.current, {
            showCursor: true,
            backDelay: 2500,
            backSpeed: 100,
            startDelay: 900,
            strings: ["Frontend Developer"],
        });
    }, []);

    return(
        <section className="baner" id="baner">
            <div className="baner__bg"></div>
            <div className="baner__info">
                <h2 className="baner__title">Здраствуйте! Меня зовут Кубанычбек и я</h2>
                <h3>
                    <span className="baner__descr" ref={animatedText}></span>
                </h3>
                <h3 className="baner__suptitle">полный решимости выполнить любой Ваш заказ</h3>
                <a href="#skills"><KeyboardArrowDownIcon className="baner__icon"/></a>
            </div>
        </section>
    )
}

export default Baner;