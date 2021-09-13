import React from "react";
import ABC from "./ABC.pdf";
import { makeStyles } from "@material-ui/core/styles";
import "./Resume.css";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    maxWidth: 150,
    maxHeight: 150,
  },
}));

export default function Resume({ handleChange, checked }) {
  checked = !checked;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grow in={checked}>
          <Paper
            elevation={4}
            className={classes.paper}
            // style={styles.paperContainer2}
          >
            <svg className={classes.svg}></svg>
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
            // style={styles.paperContainer1}
          >
            <svg className={classes.svg}></svg>
          </Paper>
        </Grow>
        <Grow in={checked}>
          <Paper
            elevation={4}
            className={classes.paper}
            // style={styles.paperContainer3}
          >
            <svg className={classes.svg}></svg>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}
