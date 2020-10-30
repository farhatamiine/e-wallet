import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/SignInAndSignUp/Login";
import Register from "./Pages/SignInAndSignUp/Register";
function App() {
  return (
    <Router>
      <ThemeProvider>
        <CSSReset />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
export default App;
