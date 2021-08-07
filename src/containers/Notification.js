import { Snackbar, makeStyles } from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(12),
    right: theme.spacing(14),
  },
}));

export const Notification = (props) => {
  const { notify, setNotify } = props;
  const classes = useStyles();
  const handleClose = () => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };
  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};
