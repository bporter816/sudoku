import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ButtonClicker from "./pages/ButtonClicker";

import { lightTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/button" component={ButtonClicker} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
