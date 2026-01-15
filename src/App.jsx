import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import Flower from "./components/Flower";
import ButtonsRow from "./components/ButtonsRow";
import Message from "./components/Message";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Flower />
        <Timeline />
        <ButtonsRow />
        <Message />
      </div>
    </BrowserRouter>
  );
};

export default App;
