import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Favourites } from "./pages/Favourites";
import { HomePage } from "./pages/HomePage";
import {Tailewind} from "./pages/Tailewind";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favorites" element={<Favourites/>}/>
        <Route path="/tailewind" element={<Tailewind/>}/>
      </Routes>
    </>
  );
}

export default App;
