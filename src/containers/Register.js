import * as Yup from "yup";

import { Grid, Typography } from "@material-ui/core";

import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useStyles } from "./Login";
import { register as userRegister } from "../redux/actions/auth";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    password_confirmation: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = ({ username, password, password_confirmation, email }) => {
    dispatch(userRegister(username, email, password, password_confirmation))
      .then((response) => {
        console.log("successful", response);
      })
      .catch((e) => {
        console.log("registration failed", e.message);
      });
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <div className={classes.background}></div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography className={classes.signIn}>Sign up</Typography>
        <Typography className={classes.tag}>
          Hello there, sign up and find your favourite developer T-shirt.
        </Typography>
        <div className="form-group">
          <input
            name="username"
            type="text"
            {...register("username")}
            className={classNames(
              classes.input,
              `${errors.username ? "is-invalid" : ""}`
            )}
          />
          <div className={classes.invalidFeedback}>
            {errors.username?.message}
          </div>
        </div>

        <div className="form-group">
          <input
            name="email"
            type="text"
            {...register("email")}
            className={classNames(
              classes.input,
              `${errors.email ? "is-invalid" : ""}`
            )}
          />
          <div className={classes.invalidFeedback}>{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <input
            name="password"
            type="password"
            {...register("password")}
            className={classNames(
              classes.input,
              classes.password,
              `${errors.password ? "is-invalid" : ""}`
            )}
          />
          <div className={classes.invalidFeedback}>
            {errors.password?.message}
          </div>
        </div>

        <div className="form-group">
          <input
            name="password_confirmation"
            type="password"
            {...register("password_confirmation")}
            className={classNames(
              classes.input,
              classes.password,
              `${errors.password_confirmation ? "is-invalid" : ""}`
            )}
          />
          <div className={classes.invalidFeedback}>
            {errors.password_confirmation?.message}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            {...register("acceptTerms")}
            className={`form-check-input ${
              errors.acceptTerms ? "is-invalid" : ""
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className={classes.invalidFeedback}>
            {errors.acceptTerms?.message}
          </div>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className={classNames(classes.input, classes.button)}
          >
            Register
          </button>
          <button
            type="button"
            onClick={reset}
            className={classNames(classes.input, classes.button, classes.reset)}
          >
            Reset
          </button>
        </div>
      </form>
    </Grid>
  );
};

export default Register;
