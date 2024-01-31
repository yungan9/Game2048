import React from "react";
import Header from "./component/Header";
import AboveGame from "./component/AboveGame";
import Game from "./component/Game";

export default function App() {
  return (
    <div className="contatiner">
      <Header />
      <AboveGame />
      <Game />
    </div>
  );
}
