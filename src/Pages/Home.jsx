import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../Components/sidebar";
import Dashboard from "../Pages/Dashboard";
import { Header1, Main, Wrapper } from "../styles";

export default function Home() {
  return (
    <Router>
      <Wrapper>
        <SideBar />
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/transaction">
            <Main>
              <Header1>transaction</Header1>
            </Main>
          </Route>
          <Route path="/report">
            <Main>
              <Header1>report</Header1>
            </Main>
          </Route>
          <Route path="/goal">
            <Main>
              <Header1>goal</Header1>
            </Main>
          </Route>
          <Route path="/setting">
            <Main>
              <Header1>setting</Header1>
            </Main>
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}
