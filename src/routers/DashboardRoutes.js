import React from "react";
import { InitialScreen } from "../components/InitialScreen";
import { PostingsScreen } from "../components/PostingsScreen";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={InitialScreen} />
          <Route exact path="/postings" component={PostingsScreen} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};
