import React from "react";
import ABC from "./ABC.pdf";
import Button from "@material-ui/core/Button";
// import Chip from "@material-ui/core/Chip";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";
import "./Resume.css";
export default function Resume({ handleChange, checked }) {
  return (
    <div>
      {/* <a href={ABC} target="_blank">
        Download Resume
      </a> */}
      {/* <Button variant="contained" href={ABC} target="_blank">
        View Resume
      </Button> */}
      <br />
      <br />
      <div class="wrapper">
        <a class="resumeLink" href={ABC.pdf} target="_blank">
          View Resume
        </a>
      </div>

      <br />
      <br />
      <br />
      <h3>Technical Skills</h3>
    </div>
  );
}
