import "./App.css";
import Backk from "./Header/Back";

import Header from "./Header/Header";
// import {  } from "react--dom";
// import SignUp from "./Sign-Up Form/Form";

import { Routes, Route } from "react-router-dom";

import Footer from "./Footer/Footer";
import {
  Singer1,
  Bakk1,
  Pitb1,
  Jeni1,
  Radf1,
  Mar1,
  Alex1,
  Akc1,
  Yankee1,
  Char1,
  Kish1,
  Bru1,
  Tay1,
  Jub1,
  SignUp,
  Home,
} from "./Artists.js/All_Pages_Route/Route";

// import { Singer } from "./Artists.js/All_Pages_Route/Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Singer1 path="/Artist" element={<Singer1 />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Pitsong" element={<Pitb1 />} />
        <Route path="/Jenisong" element={<Jeni1 />} />
        <Route path="/Radfoosong" element={<Radf1 />} />
        <Route path="/Maroonsong" element={<Mar1 />} />
        <Route path="/Alexasong" element={<Alex1 />} />
        <Route path="/Akcentsong" element={<Akc1 />} />
        <Route path="Dadyyankeesong" element={<Yankee1 />} />
        <Route path="/Kishorkumarsong" element={<Kish1 />} />
        <Route path="/Puthsong" element={<Char1 />} />
        <Route path="/Brunosong" element={<Bru1 />} />
        <Route path="/Taylorsong" element={<Tay1 />} />
        <Route path="/Jubinsong" element={<Jub1 />} />
      </Routes>
    </>
  );
}

export default App;
