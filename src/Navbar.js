import React from "react";
import Link from "react-router-dom/Link";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Navbar = () => {
  return (
    <div className="navbar-link">
      <nav>
        <ul
          className="navbar-link-ul"
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "100px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="link1">About</li>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <li className="link2">Projects</li>
          </Link>
          <Link to="/resume" style={{ textDecoration: "none" }}>
            <li className="link3">Resume</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="link4">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
