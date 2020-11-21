import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

import "./styles/index.css";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
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

      <Footer />
    </div>
  );
}
