import { useState, useEffect } from "react";
import "./App.scss";
import { CardPokemon } from "./components/CardPokemon";
import { Navbar } from "./components/Navbar";
import { Page } from "./components/Page";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Page />
      </div>
    </>
  );
}

export default App;
