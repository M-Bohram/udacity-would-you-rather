import { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import DetailedQuestion from "./components/DetailedQuestion";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { handleGetQuestions } from "./actions/question";
import { handleGetUsers } from "./actions/user";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
    this.props.dispatch(handleGetUsers());
  }
  render() {
    return (
      <Fragment>
        <hr />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={NewQuestion} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route
              exact
              path="/question/:questionId"
              component={DetailedQuestion}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

// function mapStateToProps({ users, questions }) {

// }

export default connect()(App);
