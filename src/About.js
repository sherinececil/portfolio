import React from "react";
import "./About.css";
import Grow from "@material-ui/core/Grow";

const About = ({ handleChange, checked }) => {
  checked = !checked;
  return (
    <div>
      <h1 text-data="Folded">Hi, I'm Sherine Cecil.</h1>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <p>
          I am a Frontend Developer, living in Stuttgart, Germany.
          <br />I build clean and responsive interfaces, always seeking to
          provide the best user experience. I enjoy working in interdisciplinary
          and intercultural teams and learning something new every single day.{" "}
          <br />
          <br />
          • Languages: JavaScript, HTML/CSS, React JS, <br /> • Tools: Git, SQL,
          MySQL, NoSQL, REST, React Bootstrap, MaterialUI, Netlify, Heroku,
          MongoDB, Strapi, Contentful
          <br />
        </p>
      </Grow>
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
