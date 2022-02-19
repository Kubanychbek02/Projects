import { useState } from "react";

import {
  Topbar,
  Intro,
  Menu,
  Portfolio,
  News,
  Contacts,
} from "./components";

import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu
        items={[
          { name: "home", link: "intro" },
          { name: "portfolio", link: "portfolio" },
          { name: "news", link: "news" },
          { name: "contacts", link: "contacts" },
        ]}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="app__sections">
        <Intro />
        <Portfolio />
        <News />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
