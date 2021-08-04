/* eslint-disable no-unused-vars */
import { Link, Route, Router, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Login from "./containers/Login";
import Register from "./containers/Register";
import Shirt from "./containers/Shirt";
import Shirts from "./containers/Shirts";
import { clearMessage } from "./redux/actions/mesage";
import { history } from "./helpers/history";
import { logout } from "./redux/actions/auth";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Sudo Wear
          </Link>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/shirts"} className="nav-link">
                  Shirt Detail
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/shirts/:id" component={Shirt} />
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shirts" component={Shirts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
