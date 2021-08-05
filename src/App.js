/* eslint-disable no-unused-vars */
import { Link, Route, Router, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Home } from "./components/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Shirt from "./containers/Shirt";
import Shirts from "./containers/Shirts";
import { clearMessage } from "./redux/actions/mesage";
import { history } from "./helpers/history";
import { logout } from "./redux/actions/auth";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
  },
  navbar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    zIndex: "2",
    padding: "2rem 1rem",
    backgroundColor: "#212121",
  },
  navbarBrand: {
    display: "inherit",
    alignItems: "center",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#ED3170",
    textTransform: "capitalize",
    fontSize: "200%",
    paddingLeft: "2.4rem",
    "@media(max-width: 480px)": {
      width: "120%",
    },
  },
  navLink: {
    display: "inherit",
    alignItems: "center",
    paddingRight: "2.4rem",
  },
  navItem: {
    textDecoration: "none",
    padding: "0.4rem 0.6rem",
    margin: "0 0.6rem",
    borderRadius: "1.2rem",
    color: "#ffffff",
    textTransform: "uppercase",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#7B7A76",
    },
  },
}));

const App = () => {
  const classes = useStyles();
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
      <div className={classes.root}>
        <nav className={classes.navbar}>
          <Link to={"/"} className={classes.navbarBrand}>
            Sudo Wear
          </Link>

          {currentUser ? (
            <div className={classes.navLink}>
              <Link to={"/shirts"} className={classes.navItem}>
                Shirt Detail
              </Link>
              <Link to={"#"} className={classes.navItem}>
                {currentUser.username}
              </Link>
              <Link to={"/login"} className={classes.navItem} onClick={logOut}>
                LogOut
              </Link>
            </div>
          ) : (
            <div className={classes.navLink}>
              <Link to={"/login"} className={classes.navItem}>
                Login
              </Link>
              <Link to={"/register"} className={classes.navItem}>
                Sign Up
              </Link>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/shirts/:id" component={Shirt} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shirts" component={Shirts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
