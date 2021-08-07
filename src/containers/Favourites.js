import { Card, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "../react-redux-hooks";

import { Link } from "react-router-dom";
import React from "react";
import { Redirect } from "react-router-dom";
import { getMyFavourites } from "../redux/actions/wear";
import tee from "../assets/img/tee.png";
import { useStyles } from "./Shirts";

const Favourites = () => {
  const classes = useStyles();
  const { user: currentUser } = useSelector((state) => state.auth);
  const getShirts = useSelector((state) => state.getMyFavourites);
  const dispatch = useDispatch();

  const fetchAllShirts = (page = 1) => {
    dispatch(getMyFavourites(page));
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
        if (element.shirt_image.url === null) {
          image = tee;
        } else {
          image = element.shirt_image.url;
        }
        return (
          <Card key={element.id} className={classes.card}>
            <img className={classes.cardImage} src={image} alt={element.name} />
            <div className={classes.cardName}>{element.shirt_name}</div>
            <Link className={classes.cardLink} to={`/shirts/${element.id}`}>
              View Detail
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Favourites;
