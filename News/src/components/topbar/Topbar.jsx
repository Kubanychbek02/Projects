import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

import "./topbar.scss";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <header className={"topbar " + (menuOpen && "topbar--active")}>
      <div className="topbar__inner">
        <div className="topbar__left">
          <a className="topbar__logo" href="#intro">
            Orozmatov.
          </a>
          <div className="topbar__contact-item">
            <PhoneIcon className="topbar__icon" />
            <span>+996 123 12 34 56</span>
          </div>
          <div className="topbar__contact-item">
            <MailIcon className="topbar__icon" />
            <span>test@test.com</span>
          </div>
        </div>
        <div className="topbar__right">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="topbar__nav-toggler"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
