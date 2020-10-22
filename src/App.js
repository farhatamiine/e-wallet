import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <Router>
      <ThemeProvider>
        <CSSReset />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
export default App;
