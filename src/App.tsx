import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import EmojiTray from "./components/EmojiTray";

// https://api.giphy.com/v1/gifs/translate?s=bday&api_key=dc6zaTOxFJmzC&weirdness=1

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      <Switch>
        <Route path="/" component={EmojiTray} exact />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
