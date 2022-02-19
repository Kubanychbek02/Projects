import { init } from "ityped";
import { useEffect, useRef } from "react";

import "./intro.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Intro() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["React.js Developer"],
    });
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__right-inner">
          <h1>John Doe</h1>
          <h2>Hello World!</h2>
          <h3>
            <span ref={animatedTextRef}></span>
          </h3>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="intro__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
