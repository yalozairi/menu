import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
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

//Media

import forkBrain from "./media/pink-brain-with-fork-icon-isolated-vector-14373962.jpg";

//Logos
// import darkLogo from "./media/0bbc3140-74c4-4a04-af3c-7ca02e41103c.svg";
// import lightLogo from "./media/1f3cbc72-e04e-4672-87ed-21cd69fa1f2d.svg";
import logo from "./media/85699723-05ca-4073-9290-8a3efbe09932.svg";
// import greenLogo from "./media/e0992c22-55c5-4ecd-9be2-1ae516b3f410.svg";

//Recipes
import stemChops from "./media/dishes//Brain Stem Chops.jpg";
import broccaSmoothie from "./media/dishes/Brocca Smoothie.jpeg";
import motorShake from "./media/dishes/Freshly Blended Motor-Shake.png";
import hippoSalad from "./media/dishes/Hippomemory Salad.jpg";
import brainBurger from "./media/dishes/Hypo-Spicy Brain Burger.jpg";
import frontalCake from "./media/dishes/Iced Frontal Cake.jpg";
import clubSandwich from "./media/dishes/Loud-Ear Club Sandwich.jpg";
import miniBites from "./media/dishes/Mini baked bites of pain.jpg";
import sensoryStew from "./media/dishes/Sensory Stew.jpg";
import brainlessBoyz from "./media/dishes/The Brainless Boys.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function Copyright() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link
          color="inherit"
          href="https://drive.google.com/file/d/1xMBPuKMuQmu25w9KDTGdQIoPpyfgQa3_/view?usp=sharing"
          target="_Blank"
        >
          Click here to view my 600 lines of source code!
        </Link>
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ marginTop: "15px" }}
      >
        {"Copyright © "}
        Zombites {""}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
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
    backgroundColor: "white",
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
    content:
      "Midbrain galore smushy wrinkly outer layer bits soaked in ‘brain juice’ EYE-OPENING Meal The sensory cortex includes portions of the cerebral cortex, that wrinkly outer layer of the brain that process and make sense out of information gathered by our five senses: vision, audition (sound), olfaction (smell), gustation (taste), and somatosensation (touch) enlighten your senses for the day ahead of you with this perfect breakfast stew Motor cortex and sensory cortex are also like headbands. On top of corpus callosum (the communication linkage). it receives info from skin surfaces and all sense organs except smell because olfactory bulb goes directly into the brain. Auditory function: MRI Scans showed the auditory cortex is activated in patients who hallucinate, so to them, what they see and hear comes straight from their auditory and visual cortexes, which seems very real. Visual function: Functional MRI scan shows the visual cortex activating as the subject looks at faces. This is one of the brain parts that are working when seeing others",
    heading: "Sensory Stew",
    ingredients: [
      {
        key: 1,
        name: "Sensory Cortex",
        link: "https://en.wikipedia.org/wiki/Sensory_cortex",
      },
    ],
    image: sensoryStew,
  },
  {
    key: 2,
    content:
      "Fresh Hippocampus salad to allow you to create new memories to recall this taste later on and increase your emotions during the meal. works perfectly with. Try to remember how many Hippocampi you ate!",
    heading: "Hippo-Memory Salad",
    ingredients: [
      {
        key: 1,
        name: "Hippocampus",
        link: "https://en.wikipedia.org/wiki/Hippocampus",
      },
    ],
    image: hippoSalad,
  },
  {
    key: 3,
    content:
      "do you miss feeling pain? If so, take this quick boost of thalamus that will for sure make you feel something again! connect to your long lost nervous system that will make you nostalgic for the amazing human you once was! -pain receptors -nostalgic memories that Nostalgic experiences stimulate metabolic activity and blood flow in several regions of the brain, particularly the frontal, limbic, paralimbic, and midbrain areas. *A hint of herby “Basil Ganglia”",
    heading: "The mini baked bites of Pain",
    ingredients: [
      {
        key: 1,
        name: "Thalamus",
        link: "https://en.wikipedia.org/wiki/Thalamus",
      },
      {
        key: 2,
        name: "Basal Ganglia",
        link: "https://en.wikipedia.org/wiki/Basal_ganglia",
      },
    ],
    image: miniBites,
  },
];

const mainCourses = [
  {
    key: 1,
    content:
      "Full course meal eat the brains of any boy you pick. fully customize to your liking! Fun freestyle game you can utilize the FMRI scanner to detect the most active parts of the brain, to indulge in the most blood. you must scare your boy to detect the location of its amygdala, which will light up with his fear!",
    heading: "The Brainless Boys",
    ingredients: [
      {
        key: 1,
        name: "Amygdala",
        link: "https://en.wikipedia.org/wiki/Amygdala",
      },
    ],
    image: brainlessBoyz,
  },
  {
    key: 2,
    content:
      "Brain burger stuffed with Hypothalamus that is guaranteed to regulate your body temperatures to an all-time high! This meal is for the riskiest risk-takers as you are you to be sweating by the end, stressing you out ADD VISUAL CORTEX FOR THE EYE ON TOP",
    heading: "Hypo-Spicy Brain Burger",
    ingredients: [
      {
        key: 1,
        name: "Hypothalamus",
        link: "https://en.wikipedia.org/wiki/Hypothalamus",
      },
    ],
    image: brainBurger,
  },
  {
    key: 3,
    content:
      "bottom is Medulla for autonomic functions and heart increase top is pons. cherry on top is midbrain. DEAD-ication",
    heading: "Brain-Stem Chops (with a Hint of Midbrain",
    ingredients: [
      {
        key: 1,
        name: "Medulla Oblongata",
        link: "https://en.wikipedia.org/wiki/Medulla_oblongata",
      },
      { key: 2, name: "Pons", link: "https://en.wikipedia.org/wiki/Pons" },
    ],
    image: stemChops,
  },
  {
    key: 4,
    content:
      "Have an entire temporal lobe including the renowned Wernicke's area is the region of the brain that is important for language development. It is located in the temporal lobe on the left side of the brain and is responsible for the comprehension of speech choose from a salty right lobe or sweetened left lobe surrounded by two ears. Tomb-ato",
    heading: "Loud-ear club sandwich -‘Temporal’ily available",
    ingredients: [
      {
        key: 1,
        name: "Temporal Lobe",
        link: "https://en.wikipedia.org/wiki/Temporal_lobe",
      },
      {
        key: 2,
        name: "Wernicke's Area",
        link: "https://en.wikipedia.org/wiki/Wernicke%27s_area",
      },
    ],
    image: clubSandwich,
  },
];
const desserts = [
  {
    key: 1,
    content:
      "Especially after a hypo-spicy brain burger you can take this to cool yourself off, destress, and relax. It is a healthy vegetable smoothie with greenery coming from a variety of regions, but at its core we have a Rocca-infused Broca’s Area, a vital brain part for language. We have named this innovative new infused brain part, Brocca (Broca + Rocca). Additionally the Chinese spinach, persian carrots, Indian Ginger, Thai Tumeric, and of course italian rocca, bring an international flavor to this vegetable smoothie will give you a taste of all cultures and languages, a healthy practice",
    heading: "Brocca Smoothie",
    ingredients: [
      {
        key: 1,
        name: "Broca's Area",
        link: "https://en.wikipedia.org/wiki/Broca%27s_area",
      },
    ],
    image: broccaSmoothie,
  },
  {
    key: 2,
    content:
      "After enjoying your full-course meal, stimulate your senses with some ice cold frontal lobe ice cream cake. This is perfect as the frontal lobe will work wonders in controls important cognitive skills in humans, such as emotional expression, problem solving, memory, language, judgment, and sexual behaviors. It is, in essence, the “control panel” of our personality and our ability to communicate.",
    heading: "Iced Frontal Cake",
    ingredients: [
      {
        key: 1,
        name: "Frontal Lobe",
        link: "https://en.wikipedia.org/wiki/Frontal_lobe",
      },
    ],
    image: frontalCake,
  },
  {
    key: 3,
    content:
      "Open your eyes to the bright outside world and gets your muscles moving!",
    heading: "Freshly Blended Motor-Shake",
    ingredients: [
      {
        key: 1,
        name: "Occipital Lobe",
        link: "https://en.wikipedia.org/wiki/Occipital_lobe",
      },
      {
        key: 2,
        name: "Motor Cortex",
        link: "https://en.wikipedia.org/wiki/Motor_cortex",
      },
    ],
    image: motorShake,
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
            The Zombites Menu
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
              data-aos="fade-down"
              data-aos-once="true"
            >
              Zombites
            </Typography>
            <Typography
              className={classes.creepyFont}
              variant="h5"
              align="center"
              color="secondary"
              paragraph
              data-aos="flip-left"
              data-aos-once="true"
            >
              Congratulations on discovering the secret zombie market! At
              Zombites, it's always rainin' brains
            </Typography>
            <Typography
              className={classes.creepyFont}
              variant="h6"
              align="center"
              color="secondary"
              paragraph
              data-aos="flip-left"
              data-aos-once="true"
            >
              (CONFIDENTIAL... DO NOT SHARE)
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Button
                    className={classes.creepyFont}
                    variant="contained"
                    style={{ background: "#78C165", color: "white" }}
                    href="https://gizmodo.com/why-is-it-that-zombies-eat-brains-1669204056"
                    target="_Blank"
                    data-aos="fade-in"
                    data-aos-once="true"
                  >
                    Learn more about brains! 🧠
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
                    data-aos="fade-in"
                    data-aos-once="true"
                  >
                    🗺 Locate us!
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
          style={{ marginTop: "30px" }}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          Appetizers
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {appetizers.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  data-aos-once="true"
                  data-aos="zoom-in-down"
                  data-aos-duration="1000"
                >
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
                  <Typography
                    className={classes.creepyFont}
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      padding: "20px",
                      color: "green",
                      paddingBottom: "0px",
                    }}
                  >
                    Ingredients:
                  </Typography>
                  <CardActions>
                    {card.ingredients.map((ingredient) => (
                      <Button
                        className={classes.creepyFont}
                        size="small"
                        color="secondary"
                        href={ingredient.link}
                        target="_Blank"
                      >
                        {ingredient.name}
                      </Button>
                    ))}
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
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Main Courses
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {mainCourses.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  data-aos-once="true"
                  data-aos="zoom-in-down"
                  data-aos-duration="1000"
                >
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
                  <Typography
                    className={classes.creepyFont}
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      padding: "20px",
                      color: "green",
                      paddingBottom: "0px",
                    }}
                  >
                    Ingredients:
                  </Typography>
                  <CardActions>
                    {card.ingredients.map((ingredient) => (
                      <Button
                        className={classes.creepyFont}
                        size="small"
                        color="secondary"
                        href={ingredient.link}
                        target="_Blank"
                      >
                        {ingredient.name}
                      </Button>
                    ))}
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
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Desserts!
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {desserts.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  data-aos-once="true"
                  data-aos="zoom-in-down"
                  data-aos-duration="1000"
                >
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
                  <Typography
                    className={classes.creepyFont}
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      padding: "20px",
                      color: "green",
                      paddingBottom: "0px",
                    }}
                  >
                    Ingredients:
                  </Typography>
                  <CardActions>
                    {card.ingredients.map((ingredient) => (
                      <Button
                        className={classes.creepyFont}
                        size="small"
                        color="secondary"
                        href={ingredient.link}
                        target="_Blank"
                      >
                        {ingredient.name}
                      </Button>
                    ))}
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
          data-aos-duration="2000"
          data-aos="fade-in"
        >
          You can click on each of our brain ingredients to learn more!
        </Typography>
        <Grid container justify="center">
          <img
            src={forkBrain}
            alt="fork on a brain"
            style={{
              maxHeight: "100vh",
              minWidth: "40px",
            }}
            data-aos-duration="2000"
            data-aos="flip-right"
          />
        </Grid>
        <Typography
          className={classes.creepyFont}
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Fully Programmed by Yousif Alozairi -Using React, Javascript, HTML,
          and CSS{" "}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
