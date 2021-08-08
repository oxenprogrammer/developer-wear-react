/* eslint-disable no-unused-vars */
import {
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link, Route, Router, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Favourites from "./containers/Favourites";
import { Home } from "./components/Home";
import Login from "./containers/Login";
import MenuIcon from "@material-ui/icons/Menu";
import Register from "./containers/Register";
import Shirt from "./containers/Shirt";
import Shirts from "./containers/Shirts";
import { clearMessage } from "./redux/actions/mesage";
import { history } from "./helpers/history";
import { logout } from "./redux/actions/auth";
import mobileLink from "./helpers/mobileLink";

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
    "@media(max-width: 540px)": {
      backgroundColor: "rgba(33, 33, 33, 0.1)",
    },
  },
  navbarBrand: {
    display: "inherit",
    alignItems: "center",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#FF5617",
    textTransform: "capitalize",
    fontSize: "300%",
    paddingLeft: "0.4rem",
    "@media(max-width: 480px)": {
      width: "120%",
      fontSize: "180%",
    },
  },
  navLink: {
    display: "inherit",
    alignItems: "center",
    paddingRight: "2.4rem",
    "@media(max-width: 480px)": {
      paddingRight: "0",
    },
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
    "@media(max-width: 480px)": {
      margin: "0 0.4rem",
      fontSize: "0.7rem",
      color: "#000000",
    },
  },
  menuItem: {
    backgroundColor: "#FF5617",
  },
  menuButton: {
    color: "#FF5617",
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

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <Router history={history}>
      <div className={classes.root}>
        <nav className={classes.navbar}>
          {isMobile ? (
            <>
              <Link to={"/"} className={classes.navbarBrand}>
                Sudo Wear
              </Link>
              {currentUser ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon className={classes.menuIcon} />
                  </IconButton>
                  <Menu
                    className={classes.menu}
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => setAnchor(null)}
                      component={mobileLink}
                      to="/favourites"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography className={classes.navItem}>
                        My Favourites
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => setAnchor(null)}
                      component={mobileLink}
                      to="/shirts"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography className={classes.navItem}>
                        Shirts
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={logOut}
                      component={mobileLink}
                      to="/login"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography className={classes.navItem}>
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon className={classes.menu} />
                  </IconButton>
                  <Menu
                    className={classes.menu}
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => setAnchor(null)}
                      component={mobileLink}
                      to="/login"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography className={classes.navItem}>Login</Typography>
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => setAnchor(null)}
                      component={mobileLink}
                      to="/register"
                    >
                      <ListItemIcon></ListItemIcon>
                      <Typography className={classes.navItem}>
                        SignUp
                      </Typography>
                    </MenuItem>
                  </Menu>
                </>
              )}
            </>
          ) : (
            <>
              <Link to={"/"} className={classes.navbarBrand}>
                Sudo Wear
              </Link>

              {currentUser ? (
                <div className={classes.navLink}>
                  <Link to={"/favourites"} className={classes.navItem}>
                    My Favourites
                  </Link>
                  <Link to={"/shirts"} className={classes.navItem}>
                    Shirts
                  </Link>
                  <Link
                    to={"/login"}
                    className={classes.navItem}
                    onClick={logOut}
                  >
                    LogOut
                  </Link>
                </div>
              ) : (
                <div className={classes.navLink}>
                  <Link to={"/login"} className={classes.navItem}>
                    Login
                  </Link>
                  <Link to={"/register"} className={classes.navItem}>
                    SignUp
                  </Link>
                </div>
              )}
            </>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/shirts/:id" component={Shirt} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shirts" component={Shirts} />
            <Route exact path="/favourites" component={Favourites} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
