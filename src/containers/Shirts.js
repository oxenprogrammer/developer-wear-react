import { Card, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import React from "react";
import { Redirect } from "react-router-dom";
import { getAllShirts } from "../redux/actions/wear";
import tee from "../assets/img/tee.png";

export const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "auto auto auto",
    "@media(max-width: 768px)": {
      gridTemplateColumns: "auto auto",
    },
    "@media(max-width: 480px)": {
      display: "block",
      whiteSpace: "nowrap",
      overflowScrolling: "touch",
      WebkitOverflowScrolling: "touch",
      overflowX: "scroll",
      overflowY: "hidden",
      width: "100%",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 0 1rem",
    margin: "1rem",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    "@media(max-width: 480px)": {
      padding: "1rem",
      display: "inline-block",
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
    fontSize: "1rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    padding: "1rem",
  },
  cardLink: {
    textDecoration: "none",
    width: "100%",
    backgroundColor: "#ff5617",
    padding: "1rem",
    color: "#ffffff",
    fontWeight: "bold",
    "@media(max-width: 480px)": {
      padding: "0.4rem",
      backgroundColor: "transparent",
      color: "#000000",
    },
  },
}));
const Shirts = () => {
  const classes = useStyles();
  const { user: currentUser } = useSelector((state) => state.auth);
  const getShirts = useSelector((state) => state.getAllShirts);
  const dispatch = useDispatch();

  const fetchAllShirts = (page = 1) => {
    dispatch(getAllShirts(page));
  };

  React.useEffect(() => {
    fetchAllShirts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (getShirts.loading) {
    return <div>loading . . .</div>;
  }

  if (getShirts.error !== "") {
    return <p>{getShirts.error}</p>;
  }

  let image;

  return (
    <Grid className={classes.root}>
      {getShirts.data.map((element) => {
        if (element.image.url === null) {
          image = tee;
        } else {
          image = element.image.url;
        }
        return (
          <Card key={element.id} className={classes.card}>
            <img className={classes.cardImage} src={image} alt={element.name} />
            <div className={classes.cardName}>{element.name}</div>
            <Link className={classes.cardLink} to={`/shirts/${element.id}`}>
              View Detail
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Shirts;
