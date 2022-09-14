import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MiApi from "./components/MiApi";

function App() {
  return (
    <>
      <Header />
      <MiApi />
      <Footer/>
    </>
  );
}

export default App;
