import { Card, Grid, Typography, makeStyles } from "@material-ui/core";
import { addFavourite, getSingleShirt } from "../redux/actions/wear";
import { useDispatch, useSelector } from "../react-redux-hooks";

import { Notification } from "./Notification";
import PropTypes from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import tee from "../assets/img/tee.png";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 0 1rem",
    margin: "auto",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    width: "80%",
    "@media(max-width: 480px)": {
      width: "96%",
    },
  },
  cardImage: {
    width: "100%",
    "@media(max-width: 480px)": {
      height: "100%",
    },
  },
  cardName: {
    color: "#FF5617",
    fontSize: "1.8rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    padding: "1rem",
  },
  cardDesc: {
    fontSize: "1.3rem",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  cardLink: {
    textDecoration: "none",
    width: "100%",
    backgroundColor: "#ff5617",
    padding: "1rem",
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "1.4rem",
    border: "none",
    fontSize: "1.2rem",
  },
}));

const Shirt = (props) => {
  const classes = useStyles();
  const shirtId = props.match.params.id;
  const { user: currentUser } = useSelector((state) => state.auth);
  const getShirt = useSelector((state) => state.getSingleShirt);
  const dispatch = useDispatch();

  const fetchSingleShirt = (shirtId) => {
    dispatch(getSingleShirt(shirtId));
  };

  React.useEffect(() => {
    fetchSingleShirt(shirtId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const shirtData = getShirt.data[shirtId];

  const handleFavourite = () => {
    dispatch(addFavourite(shirtData.id));
    setNotify({
      isOpen: true,
      message: `Successfully Added to Favourite`,
      type: "success",
    });
  };

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (getShirt.loading) {
    return <div className="loading">loading . . .</div>;
  }

  if (getShirt.error !== "") {
    return <p>{getShirt.error}</p>;
  }

  if (!_.isEmpty(getShirt.data[shirtId])) {
    let image;
    if (shirtData.image.url === null) {
      image = tee;
    } else {
      image = shirtData.image.url;
    }
    return (
      <Grid className={classes.root}>
        <Card className={classes.card}>
          <Typography className={classes.cardName}>{shirtData.name}</Typography>
          <img className={classes.cardImage} src={image} alt={shirtData.name} />
          <Typography className={classes.cardDesc}>
            {shirtData.description}
          </Typography>
          <button className={classes.cardLink} onClick={handleFavourite}>
            Add to favourites
          </button>
        </Card>
        <Notification notify={notify} setNotify={setNotify} />
      </Grid>
    );
  }

  return <div>Nothing to Show</div>;
};

Shirt.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Shirt;
