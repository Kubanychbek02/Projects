import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail";
import InstaIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import GithubIcon from "@material-ui/icons/GitHub";
import { usEffect, useState } from "react";

import "./topbar.scss"

function Topbar({menuOpen, setMenuOpen}) {

    const {scroll, setScroll} = useState;
    
    // useEffect(() => {
    //     let className = 'menu';
    //     if (this.props.header) {
    //         className += ' menu-active';
    //     }
    // })

    return(
        <header className={ "topbar " + (menuOpen && "topbar-active")} id="topbar">
            <div className="topbar__inner">
                <div className="topbar__left">
                    <a href="intro" className="topbar__logo">KО</a>
                    <div className="topbar__contacts">
                        <PhoneIcon className="topbar__icon"/>
                        <a className="topbar__contact" href="tel:+996 (552) 999 284">0552 999 284</a>
                    </div>
                    <div className="topbar__contacts">
                        <MailIcon className="topbar__icon"/>
                        <a className="topbar__contact" href="mailto:okubanyshbek@gmail.com">okubanychbek@gmail.com</a>
                    </div>
                    <div className="topbar__socials">
                        <div className="topbar__socials-icons">
                            <a href="https://www.instagram.com/orozmat0v_k_/"><InstaIcon className="topbar__icons"/></a>
                        </div>
                        <div className="topbar__socials-icons">
                            <a href="https://web.telegram.org/k/"><TelegramIcon className="topbar__icons"/></a>
                        </div>
                        <div className="topbar__socials-icons">
                            <a href="https://github.com/Kubanychbek02"><GithubIcon className="topbar__icons"/></a>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="topbar__nav-toggler" onClick={() => setMenuOpen(!menuOpen)}>

                    </button>
                </div>
            </div>
        </header>
    )
}

export default Topbar;