import { Typography } from "@material-ui/core";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    textAlign: "center",
    padding: "3rem",
  },
  footerTitle: {
    fontSize: "2rem",
    color: "#ED3170",
    fontWeight: "bold",
  },
  fa: {
    color: "#26569D",
    padding: "0.4rem",
    fontSize: "2rem",
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography className={classes.footerTitle}>Sudo Wear</Typography>
      <address>Kampala Uganda</address>
      <div>
        <i
          className={classNames(classes.fa, "fa fa-facebook-official")}
          aria-hidden="true"
        ></i>
        <i
          className={classNames(classes.fa, "fa fa-twitter")}
          aria-hidden="true"
        ></i>
        <i
          className={classNames(classes.fa, "fa fa-instagram")}
          aria-hidden="true"
        ></i>
      </div>
      <address>All Rights Reserved</address>
    </footer>
  );
};
