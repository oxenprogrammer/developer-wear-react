import { Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Notification } from "./Notification";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import { login } from "../redux/actions/auth";
import loginBackground from "../assets/img/login.jpg";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  background: {
    backgroundImage: `url(${loginBackground})`,
    height: "100vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "0.2",
  },
  form: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  signIn: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: "2rem",
    padding: "1rem",
  },
  tag: {
    padding: "0 4rem 2rem 2rem",
    textAlign: "center",
  },
  input: {
    borderRadius: "1.4rem",
    height: "2.4rem",
    width: "16rem",
    marginBottom: "2rem",
    border: "0.5px solid gray",
    fontSize: "1.2rem",
    textAlign: "center",
    background: "transparent",
  },
  password: {
    border: "0.5px solid #ED3170",
    color: "#FF5617",
    fontSize: "2.4rem",
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      transform:'scale(0.45)',
      verticalAlign: 'middle',
    }
  },
  button: {
    width: "8rem",
    border: "none",
    fontSize: "1rem",
    color: "#ffffff",
    backgroundColor: "#FF5617",
    marginTop: "0.6rem",
  },
  reset: {
    backgroundColor: "gray",
    marginLeft: "0.6rem",
  },
  invalidFeedback: {
    color: "red",
    padding: "0.2rem 0",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/shirts");
          window.location.reload();
          setNotify({
            isOpen: true,
            message: `Login Successful`,
            type: "success",
          });
        })
        .catch(() => {
          setLoading(false);
          setNotify({
            isOpen: true,
            message: `Login Failed`,
            type: "warning",
          });
        });
    } else {
      setLoading(false);
      setNotify({
      isOpen: true,
      message: `You have Form Input Errors`,
      type: "warning",
    });
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/shirts" />;
  }

  return (
    <Grid container className={classes.root}>
      <div className={classes.background}></div>
      <Form className={classes.form} onSubmit={handleLogin} ref={form}>
        <Typography className={classes.signIn}>Sign in</Typography>
        <Typography className={classes.tag}>
          Welcome back, sign in and find your favourite developer T-shirt.
        </Typography>
        <Input
          type="email"
          className={classes.input}
          name="email"
          value={email}
          onChange={onChangeEmail}
          validations={[required]}
          placeholder="Email"
        />
        <Input
          type="password"
          className={classNames(classes.input, classes.password)}
          name="password"
          value={password}
          onChange={onChangePassword}
          validations={[required]}
          placeholder="Password"
        />
        <button
          className={classNames(classes.input, classes.button)}
          disabled={loading}
        >
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Sign in</span>
        </button>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
      <Notification notify={notify} setNotify={setNotify} />
    </Grid>
  );
};

export default Login;
