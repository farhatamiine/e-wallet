import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../Components/sidebar";
import { Header1, Main, Wrapper } from "../styles";
import Dashboard from "./Dashboard/Dashboard";
import Transaction from "./Transactions/Transaction";

class Home extends React.Component {
  render() {
    const { balance, income, expance, currency } = this.props.financialOverview;

    return (
      <Router>
        <Wrapper>
          <SideBar />
          <Switch>
            <Route path="/dashboard" exact>
              <Dashboard
                currency={currency}
                balance={balance}
                income={income}
                expance={expance}
              />
            </Route>
            <Route path="/transaction" component={Transaction}></Route>
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
}
const mapStateToProps = (state) => {
  return {
    financialOverview: state.wallet.financialOverview,
  };
};

export default connect(mapStateToProps)(Home);
