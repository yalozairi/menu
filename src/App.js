// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//         <div>
//           <p>
//             Here is the <code>Zombie</code> Menu.
//           </p>
//         </div>

//         <div>
//           <a className="App-link" target="_blank" rel="noopener noreferrer">
//             Menu
//           </a>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import darkLogo from "./media/0bbc3140-74c4-4a04-af3c-7ca02e41103c.svg";
import lightLogo from "./media/1f3cbc72-e04e-4672-87ed-21cd69fa1f2d.svg";
import logo from "./media/85699723-05ca-4073-9290-8a3efbe09932.svg";
import greenLogo from "./media/e0992c22-55c5-4ecd-9be2-1ae516b3f410.svg";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  creepyFont: {
    fontFamily: "Creepster",
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const appetizers = [
  {
    key: 1,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: darkLogo,
  },
  {
    key: 2,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: darkLogo,
  },
  {
    key: 3,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: darkLogo,
  },
];

const mainCourses = [
  {
    key: 1,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: lightLogo,
  },
  {
    key: 2,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: lightLogo,
  },
  {
    key: 3,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: lightLogo,
  },
  {
    key: 4,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: lightLogo,
  },
];
const desserts = [
  {
    key: 1,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: greenLogo,
  },
  {
    key: 2,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: greenLogo,
  },
  {
    key: 3,
    content: "THIS IS THE BEST MEAL",
    heading: "TEST",
    image: greenLogo,
  },
];
export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ background: "#78C165" }}>
        <Toolbar>
          <img
            src={logo}
            alt="zombie icon"
            style={{ width: "3%", minWidth: "30px", margin: "10px" }}
          />
          <h1 noWrap style={{ fontFamily: "Creepster" }}>
            Zombites
          </h1>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              className={classes.creepyFont}
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              fontFamily="Creepster"
              gutterBottom
            >
              Zombites
            </Typography>
            <Typography
              className={classes.creepyFont}
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              At Zombites, we focus on the precise brain parts that will bring
              you only the greatest of benefits
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    className={classes.creepyFont}
                    variant="contained"
                    style={{ background: "#78C165", color: "white" }}
                    href="https://gizmodo.com/why-is-it-that-zombies-eat-brains-1669204056"
                    target="_Blank"
                  >
                    Learn more about brains!
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.creepyFont}
                    variant="contained"
                    style={{
                      background: "#78C165",
                      color: "white",
                    }}
                    href="https://goo.gl/maps/pV8sQYtMrPYwF9ii8"
                    target="_Blank"
                  >
                    Locate us!
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Typography
          className={classes.creepyFont}
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          fontFamily="Creepster"
          gutterTop
        >
          Appetizers
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {appetizers.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.heading}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.creepyFont}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.heading}
                    </Typography>
                    <Typography
                      className={classes.creepyFont}
                      style={{ color: "grey" }}
                    >
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.creepyFont}
                      size="small"
                      color="primary"
                    >
                      View
                    </Button>
                    <Button
                      className={classes.creepyFont}
                      size="small"
                      color="primary"
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Typography
          className={classes.creepyFont}
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          fontFamily="Creepster"
          gutterTop
        >
          Main Courses
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {mainCourses.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.heading}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.creepyFont}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.heading}
                    </Typography>
                    <Typography
                      className={classes.creepyFont}
                      style={{ color: "grey" }}
                    >
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.creepyFont}
                      size="small"
                      color="primary"
                    >
                      View
                    </Button>
                    <Button
                      className={classes.creepyFont}
                      size="small"
                      color="primary"
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Typography
          className={classes.creepyFont}
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          fontFamily="Creepster"
          gutterTop
        >
          Desserts!
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {desserts.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.heading}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.creepyFont}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.heading}
                    </Typography>
                    <Typography
                      className={classes.creepyFont}
                      style={{ color: "grey" }}
                    >
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.creepyFont}
                      size="small"
                      color="primary"
                    >
                      View
                    </Button>
                    <Button
                      className={classes.creepyFont}
                      size="small"
                      color="primary"
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          className={classes.creepyFont}
          variant="h6"
          align="center"
          gutterBottom
        >
          Footer
        </Typography>
        <Typography
          className={classes.creepyFont}
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
