import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Manynews } from "./components/Manynews/Manynews";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Foryou from "./components/foryou/Foryou";
function App() {
  useEffect(() => {
    document.title = "Jago Bangla";
    const faviconLink = document.querySelector("link[rel='icon']");
    if (faviconLink) {
      faviconLink.href =
        "https://cdn.brandfetch.io/jagobangla.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed";
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Foryou />}></Route>
          <Route path="/:news" element={<Manynews />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
