import React, {Suspense, useState} from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./Components/Footer";
import ItemPage from "./pages/ItemPage";

function App() {
    const [active, setActive] = useState(false);
    const [searchWrap, setSearchWrap] = useState(false);
  return (
    <div className={`"App" ${active || searchWrap ? "app_flow" : ""}`}>
      <Suspense fallback="loading">
        <Header setSearchWrap={setSearchWrap} searchWrap={searchWrap} active={active} setActive={setActive}/>
          <Routes>
              <Route path="/" element={ <Main/> } />
              <Route path="/catalog" element={ <Catalog/> } />
              <Route path="/catalog/:id" element={ <Catalog/> } />
              <Route path="/about" element={ <About/> } />
              <Route path="/contacts" element={ <Contacts/> } />
              <Route path="/itempage/:id" element={ <ItemPage/> } />
          </Routes>
          <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
