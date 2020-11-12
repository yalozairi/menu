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
      "This stew is something to wake up for! With its smushy wrinkly outer layer bits soaked in Hydrocephalus (what we like to call ‘brain juice’), this EYE-OPENING meal is stuffed with sensory cortexes. These cortexes excel in gathering and interpreting sensory information from all over the body -what this means for you is that this soup is sure to make the start of your day!! It will keep you alert, unleashing all of your senses like never before! *Please note that due to the Olfactory Bulb and its separate pathways, your smell will not be improved with this dish.",
    heading: "Sensory Stew",
    ingredients: [
      {
        key: 1,
        name: "Sensory Cortex",
        link: "https://en.wikipedia.org/wiki/Sensory_cortex",
      },
      {
        key: 2,
        name: "Hydrocephalus",
        link: "https://en.wikipedia.org/wiki/Hydrocephalus",
      },
    ],
    image: sensoryStew,
  },
  {
    key: 2,
    content:
      "You won't forget this fresh Hippocampus salad! Littered with chunks of hippocampus mixed with tomb-atoes and lethal lettuce, eating this salad will greatly improve your memory-making abilities! This is a perfect starter to your three-course-meal as, if you have enough hippocampi, you will have memorized your meal so accurately that you could even recall and enjoy the taste later on! And yet, there's more... One more function of the hippocampus is emotions, and so this fresh healthy salad will additionally work wonders to increase your emotions during the meal! After eating this scrumptious salad, try to remember how many Hippocampi you ate!",
    heading: "Hippo-Memory Salad",
    ingredients: [
      {
        key: 1,
        name: "Hippocampus",
        link: "https://en.wikipedia.org/wiki/Hippocampus",
      },
      {
        key: 2,
        name: "Tomb-atoes",
        link: "https://en.wikipedia.org/wiki/Tomato",
      },
      {
        key: 3,
        name: "Lethal Lettuce",
        link: "https://thewarwhoop.com/6248/news/lethal-lettuce/",
      },
    ],
    image: hippoSalad,
  },
  {
    key: 3,
    content: `Do you miss the feeling of pain? If so, take this quick boost of thalamus which will ensure that you feel something again! Connect to your long lost nervous system that will make you nostalgic for the amazing human you once were! These Thalamus-filled balls will bring even more benefits than just pain perception, as they can also help with your health and well being with improved sleep regulation and even sensory and motor signals, meaning your body will be as active and alert as ever! But of course, at Zombites, we did not stop there... we have topped these mouth-watering balls of pain perception with a hint of herby "Basil Gangliants", which comes from the Basal Ganglia of human brains which is essential in your movemnt and coordination, as well as developing and practicing skill patterns! As you eat these mini baked bites of crusty pain, you will only grow more coordinated, speedier, more alert, while feeling nostalgic for the pain you used to feel -all in one tightly-crumbled ball of goodness.`,
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
      "This is our signature meal! Not bothered to choose anything? Then this is perfect for you! We serve everything you need at once, as we farm and extract more brains from more boys -hence the name! As for benefits, you are free to eat as many brains from all the boys you may choose -being fully customizable to your liking! If you choose, you can even take part in our fun freestyle game utlizing some breakthrough FMRI scanning technology. To do this, you must come over to our live station (with living boys), equip them with a FRMI scanner, and feast away! What the FMRI scanner will do is automatically detect the most active parts of the brain for you, so that you can indulge in the most blood! However, the aim of the game is not simply to eat, no, you must instead hunt for the treasure in this boy's brain. Where all the blood rushes at once, as he grows more and more terrified as you indulge. This is none other than the Amygdala, which will light up the FMRI scanner as the boy's fear grows! Find this gem and bring all your amygdala back to our renowned chefs to cook up some fried up fear! This is certainly the most unique, once in a lifetime experience we offer here at Zombites.",
    heading: "The Brainless Boys",
    ingredients: [
      {
        key: 1,
        name: "Amygdala",
        link: "https://en.wikipedia.org/wiki/Amygdala",
      },
      {
        key: 2,
        name: "Brains",
        link: "https://en.wikipedia.org/wiki/Human_brain",
      },
      {
        key: 3,
        name: "Boys",
        link: "https://en.wikipedia.org/wiki/Boy",
      },
      {
        key: 4,
        name: "FMRI",
        link:
          "https://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging",
      },
    ],
    image: brainlessBoyz,
  },
  {
    key: 2,
    content:
      "This hyper-spicy Brain Burger has a trick up its sleeve! Stuffed to the brim with human eyes and Carolina Reaper Chilli Peppers, a burger this spicy would most likely blow you to your bones! However, we have stuffed it to the brim with Hypothalamus, only the greatest piece of stability in the brain. With this hypothalamus-infused burger, your body temperatures are 99% guaranteed to not even rise! It is incredible what the hypothalamus can do to achieve homeostasis, and so we perfectly adapted that to this hot and spicy meal! However, due to the 1% not covered in our homeostasis guarantee, this meal is for the riskiest risk-takers as, if the hypothalamus does not take into effect, you will be falling to your knees by the end of it!",
    heading: "Hypo-Spicy Brain Burger",
    ingredients: [
      {
        key: 1,
        name: "Hypothalamus",
        link: "https://en.wikipedia.org/wiki/Hypothalamus",
      },
      {
        key: 2,
        name: "Eyes!",
        link: "https://en.wikipedia.org/wiki/Human_eye",
      },
      {
        key: 3,
        name: "Carolina Reapers",
        link: "https://en.wikipedia.org/wiki/Carolina_Reaper",
      },
      {
        key: 4,
        name: "Red Buns",
        link: "https://www.shutterstock.com/search/burger+red+bun",
      },
    ],
    image: brainBurger,
  },
  {
    key: 3,
    content:
      "With this meal, we have looked to bring what the humans did with lambchops, back to their own brain stems. That's right! We have pioneered a new kind of 'chop', the Brain-Stem Chop! The stem is filled with beneficial brain parts top to bottom! At the bottom, there is a piece of Medulla, perfect for your autonomic functions surely to boost your heart rate! on the other end is the pons. Near the top of the stem, the pons also has great benefits for your posture and facial expressions. With zombie life becoming increasingly more civilized, this will not only help practice your facial expressions but also improve that ugly posture of yours! With our DEAD-ication to our customers, we coud not stop there, as the brainstem in topped with one 'cherry' on top of a midbrain. You're gonna love it!",
    heading: "Brain-Stem Chops (with a Hint of Midbrain",
    ingredients: [
      {
        key: 1,
        name: "Medulla Oblongata",
        link: "https://en.wikipedia.org/wiki/Medulla_oblongata",
      },
      { key: 2, name: "Pons", link: "https://en.wikipedia.org/wiki/Pons" },
      {
        key: 3,
        name: "Midbrain",
        link: "https://en.wikipedia.org/wiki/Midbrain",
      },
    ],
    image: stemChops,
  },
  {
    key: 4,
    content:
      "You haven't heard of this before! Our special temporary deal of a club sandwich has it all! This time, it's all about hearing! We've stuffed as much hearing as we can into this one package as to help you all out there! You can have an entire temporal lobe including the renowned Wernicke's area as well as full on human ears! These will bring huge benefits especially for your language development and comprehension of speech! Choose from a salty right lobe or sweetened left lobe surrounded by two ears!",
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
      "Especially after a hypo-spicy brain burger you can take this to cool yourself off, destress, and relax. It is a healthy vegetable smoothie with greenery coming from a variety of regions, but at its core we have a Rocca-infused Broca’s Area, a vital brain part for language. We have named this innovative new infused brain part, Brocca (Broca + Rocca). Additionally the Chinese spinach, persian carrots, Indian Ginger, Thai Tumeric, and of course italian rocca, bring an international flavor to this vegetable smoothie will give you a taste and practice of all cultures and languages, a healthy practice!",
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
      "After enjoying your full-course meal, stimulate your senses with some ice cold frontal lobe ice cream cake. This is perfect as the frontal lobe will work wonders in controlling your most important cognitive skills, including even emotional expression, problem solving, memory, language, judgment, aand more! In essence, you can obsorb the human personality “control panel” to communicate like never before! Socially, after having this freezing cold dessert, you will come out as almost a brand new zombie! A great change-up for your dead life.",
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
      "Open your eyes to the bright outside world and get your muscles moving with these freshly blended milkshakes! They include both the motor cortex and occipital lobe blended into one bloody mess of a drink! The bits of occipital lobe will drastically change your optical abilities, allowing you to see the world like never before! On top of that, the bits of motor cortex will work wonders for your neural impulses, energixing you like never before, as you will be eager to start moving out and about!",
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
              <Grid container spacing={2} justify="center">
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
          This website was entirely Programmed by Yousif Alozairi -Using React,
          Javascript, HTML, CSS and BRAIN POWER!{" "}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
