import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return (
    <div className="app-container">
      <Header />

      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignupForm} />
        <Route exact path="/" component={SigninForm} />
      </Switch>
    </div>
  );
}
