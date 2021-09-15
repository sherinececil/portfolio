import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Typography from "@material-ui/core/";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import HackerNewsClone from "./HackerNewsClone.png";
import KnowYourIp from "./KnowYourIp.png";
import Capture from "./Capture.PNG";
import Todolist from "./Todolist.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 120,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 150,
    height: 150,
  },
}));

const styles = {
  paperContainer1: {
    backgroundImage: `url(${HackerNewsClone})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 170,
  },
  paperContainer2: {
    backgroundImage: `url(${KnowYourIp})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 160,
  },
  paperContainer3: {
    backgroundImage: `url(${Capture})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 150,
  },
  paperContainer4: {
    backgroundImage: `url(${Todolist})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 200,
  },
};

export default function Projects({ handleChange, checked }) {
  checked = !checked;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grow in={checked}>
          <Paper
            elevation={4}
            className={classes.paper}
            style={styles.paperContainer2}
          >
            <svg className={classes.svg}></svg>
            <h4>
              <a
                href="https://nervous-bose-e8cd03.netlify.app/"
                target="_blank"
              >
                Know Your IP App
              </a>
            </h4>
            <GitHubIcon />
          </Paper>
        </Grow>

        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper
            elevation={4}
            className={classes.paper}
            style={styles.paperContainer1}
          >
            <svg className={classes.svg}></svg>
            <h4>
              <a href="https://vibrant-boyd-67473f.netlify.app" target="_blank">
                Hacker news
              </a>
            </h4>
            <GitHubIcon />
          </Paper>
        </Grow>
        <Grow in={checked}>
          <Paper
            elevation={4}
            className={classes.paper}
            style={styles.paperContainer3}
          >
            <svg className={classes.svg}></svg>
            <h4>
              <a
                href="https://vibrant-wescoff-1211b0.netlify.app/"
                target="_blank"
              >
                Healthy Twist App
              </a>
            </h4>
            <GitHubIcon />
          </Paper>
        </Grow>

        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper
            elevation={4}
            className={classes.paper}
            style={styles.paperContainer4}
          >
            <svg className={classes.svg}></svg>
            <h4>ToDo List</h4>
            <GitHubIcon />
          </Paper>
        </Grow>
      </div>
    </div>
  );
}
