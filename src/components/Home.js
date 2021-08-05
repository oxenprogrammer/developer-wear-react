import { Button, Card, Grid, Paper, Typography } from "@material-ui/core";

import { Footer } from "./Footer";
import back from "../assets/img/back.jpg";
import backgroundImage from "../assets/img/swag.png";
import bug from "../assets/img/bug.png";
import girl from "../assets/img/naava.png";
import html from "../assets/img/html.png";
import { makeStyles } from "@material-ui/core";
import read from "../assets/img/read.png";
import tee from "../assets/img/tee.png";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    backgroundColor: "#212121",
  },
  columnOne: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "4rem",
  },
  topImage: {
    width: "30%",
    "@media(max-width: 600px)": {
      width: "60%",
    },
  },
  topTag: {
    color: "#ffffff",
    paddingLeft: "3.6rem",
    position: "absolute",
    top: "3.6rem",
    fontWeight: "bolder",
    fontSize: "2rem",
  },
  pTag: {
    color: "#ffffff",
    paddingLeft: "3.6rem",
    position: "absolute",
    top: "8.6rem",
  },
  columnTwo: {
    paddingTop: "2rem",
    textAlign: "center",
  },
  nerds: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#7A7B77",
  },
  smart: {
    fontSize: "2.4rem",
    fontWeight: "bold",
  },
  backgroundTwo: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    justifyContent: "space-around",
    padding: "2rem 3.6rem",
    "@media(max-width: 719px)": {
      gridTemplateColumns: "auto",
    },
  },
  columnTwoimage: {
    display: "flex",
    justifyContent: "flex-end",
    "@media(max-width: 719px)": {
      justifyContent: "center",
    },
  },
  secondImage: {
    width: "60%",
  },
  secondTag: {
    fontWeight: "bolder",
    fontSize: "2rem",
    textAlign: "left",
    paddingTop: "2.8rem",
    lineHeight: "-0.2px",
    "@media(max-width: 768px)": {
      textAlign: "center",
    },
  },
  secondTagSpan: {
    fontSize: "1rem",
    lineHeight: "-0.2px",
    textAlign: "left",
    "@media(max-width: 768px)": {
      textAlign: "center",
    },
  },
  dumbButton: {
    backgroundColor: "#ED5201",
    color: "#ffffff",
    borderRadius: "1.2rem",
    padding: "0.6rem 1.2rem",
    fontWeight: "bold",
    margin: "1.6rem 0",
    display: "flex",
    "@media(max-width: 768px)": {
      margin: "1.6rem auto",
    },
  },
  columnThree: {
    backgroundColor: "#E7F1FE",
  },
  columnFour: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "1rem",
    width: "100%",
    padding: "1rem",
    justifyContent: "space-evenly",
    "@media(max-width: 768px)": {
      gridTemplateColumns: "auto auto",
    },
    "@media(max-width: 480px)": {
      gridTemplateColumns: "auto",
    },
  },
  columnFourCard: {
    height: "20rem",
  },
  scrollImage: {
    height: "80%",
  },
  columnFive: {
    background: `url(${back})`,
    height: "10rem",
    width: "100%",
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.background}>
        <div className={classes.columnOne}>
          <img
            className={classes.topImage}
            src={backgroundImage}
            alt={"man on a developer t-shirt"}
          />
        </div>
        <Typography className={classes.topTag}>Developers T-Shirts</Typography>
        <Typography className={classes.pTag}>
          If you recognise the words on the tees then you’re root.
          <br /> $ sudo --call 0755850709 <br />$ sudo wear Based in Kampala
        </Typography>
      </Grid>
      <Grid item className={classes.columnTwo}>
        <article>
          <Typography className={classes.nerds}>
            Printed by Nerds for Nerds
          </Typography>
          <Typography className={classes.smart}>
            Tees for World Best Developers
          </Typography>
        </article>
        <article className={classes.backgroundTwo}>
          <div>
            <Typography className={classes.secondTag}>
              Change the World.
            </Typography>
            <Typography className={classes.secondTagSpan}>
              You will look really smart in these Tees, Code will just flow and
              you will not event realize the day coming to an end.
            </Typography>
            <Button className={classes.dumbButton}>LEARN MORE</Button>
          </div>
          <div>
            <img
              className={classes.secondImage}
              src={tee}
              alt={"t-shirt with change the world code tag"}
            />
          </div>
        </article>
      </Grid>
      <Grid item className={(classes.columnTwo, classes.columnThree)}>
        <article className={classes.backgroundTwo}>
          <div>
            <img
              className={classes.secondImage}
              src={girl}
              alt={"girl wearing a stackoverflow developer t-shirt"}
            />
          </div>
          <div>
            <Typography className={classes.secondTag}>
              Best in Sale Programmers Tees.
            </Typography>
            <Typography className={classes.secondTagSpan}>
              You will look really smart in these Tees, Code will just flow and
              you will not event realize the day coming to an end. It is the
              look you have been waiting, worth a lifetime.
            </Typography>
            <Button className={classes.dumbButton}>LEARN MORE</Button>
          </div>
        </article>
      </Grid>
      <Paper className={classes.columnFour}>
        <Card className={classes.columnFourCard}>
          <img
            className={classes.scrollImage}
            src={read}
            alt={"can you read it t-shirt"}
          />
        </Card>
        <Card className={classes.columnFourCard}>
          <img
            className={classes.scrollImage}
            src={bug}
            alt={"it is not a bug t-shirt"}
          />
        </Card>
        <Card className={classes.columnFourCard}>
          <img
            className={classes.scrollImage}
            src={html}
            alt={"i know html t-shirt"}
          />
        </Card>
        <Card className={classes.columnFourCard}>
          <img
            className={classes.scrollImage}
            src={tee}
            alt={"change the world t-shirt"}
          />
        </Card>
      </Paper>
      <div className={classes.columnFive}></div>
      <Footer />
      {/* <footer className={classes.footer}>
        <Typography className={classes.footerTitle}>Sudo Wear</Typography>
        <address>Kampala Uganda</address>
        <div>
        <i className={classNames(classes.fa, "fa fa-facebook-official")} aria-hidden="true"></i>
        <i className={classNames(classes.fa, "fa fa-twitter")} aria-hidden="true"></i>
        <i className={classNames(classes.fa, "fa fa-instagram")} aria-hidden="true"></i>
        </div>
        <address>All Rights Reserved</address>
      </footer> */}
    </Grid>
  );
};
