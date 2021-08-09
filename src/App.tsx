import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Room from "./pages/Room";
import Game from "./pages/Game";

import { lightTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/room/:id" component={Room} />
          <Route path="/game/:id" component={Game} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
