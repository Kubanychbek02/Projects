// мой код

import { useState } from "react";

import {
  Topbar,
  Baner,
  About,
  Menu,
  Contacts,
  Skills,
  Projects,
  News,
} from "./mycomponents"

function App() {
  const filter = <About/>

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <div className="block">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu 
      items={[
        { name: "banner", link: "baner" },
        { name: "skills", link: "skills" },
        { name: "projects", link: "projects" },
        { name: "about", link: "about" },
        { name: "contacts", link: "contacts" },
      ]} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="app_sections">
        <Baner/>
        <Skills/>
        <Projects/>
        <About/>
        {/* <News/> */}
        <Contacts/>

      </div>
    </div>
  )
}

export default App;






// // styled component

// import Header from "./componet/header/Header";
// import Global from "./componet/sytledGlobals/globalsStyled";
// import { ThemeProvider} from "styled-components";

// const theme = {
//   color: {
//     accent: "blue",
//   },

//   fontSize: {
//     accent: "50px",
//   },
// }

// function App() {
//   return(
//     <>
//       <ThemeProvider theme={theme}>
//         <Header/>
//         <Global/>
//       </ThemeProvider>
//     </>
//   )
// }

// export default App;