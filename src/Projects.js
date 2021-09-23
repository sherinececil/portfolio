import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import HackerNewsClone from "./HackerNewsClone.png";
import KnowYourIp from "./KnowYourIp.png";
import Capture from "./Capture.PNG";
import Todolist from "./Todolist.PNG";
import "./Projects.css";

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
        <ul>
          <Grow in={checked}>
            <Paper
              elevation={4}
              className={classes.paper}
              style={styles.paperContainer2}
            >
              {" "}
              <a
                href="https://nervous-bose-e8cd03.netlify.app/"
                target="_blank"
              >
                <svg className={classes.svg}></svg>
              </a>
              <h4>Know Your IP App</h4>
              <a href="https://github.com/sherinececil/Ip-App" target="_blank">
                <GitHubIcon />{" "}
              </a>
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
              {" "}
              <a href="https://vibrant-boyd-67473f.netlify.app" target="_blank">
                <svg className={classes.svg}></svg>{" "}
              </a>
              <h4>Hacker news</h4>
              <a
                href="https://github.com/sherinececil/HackerNews"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </Paper>
          </Grow>
          <Grow in={checked}>
            <Paper
              elevation={4}
              className={classes.paper}
              style={styles.paperContainer3}
            >
              <a
                href="https://vibrant-wescoff-1211b0.netlify.app/"
                target="_blank"
              >
                <svg className={classes.svg}></svg>{" "}
              </a>
              <h4>Healthy Twist App</h4>
              <a
                href="https://github.com/sherinececil/Healthy-Twist"
                target="_blank"
              >
                <GitHubIcon />
              </a>
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
              <a
                href="https://romantic-banach-56d860.netlify.app/"
                target="_blank"
              >
                <svg className={classes.svg}></svg>
              </a>

              <h4>ToDo List</h4>
              <a
                href="https://github.com/sherinececil/To-do-list-app"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </Paper>
          </Grow>
        </ul>
      </div>
    </div>
  );
}
