import React from "react";
import { Icon } from "@iconify/react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  customWidth: {
    width: 130,
    fontSize: 18,
  },
  emailWidth: {
    width: 180,
    fontSize: 16,
  },
}));

const Contact = () => {
  function triggerOutlook() {
    console.log("Do u see ...");
    var body = escape(
      window.document.title + String.fromCharCode(13) + window.location.href
    );

    var subject = "Take a look at this cool code snippet from CodeDigest.Com!!";

    window.location.href = "mailto:?body=" + body + "&subject=" + subject;
  }

  const classes = useStyles();

  return (
    <div>
      <p style={{ margin: "20px" }}>GET IN TOUCH</p>
      <ul
        className="contact-ul"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "20px" }}>
          {" "}
          <Tooltip
            classes={{ tooltip: classes.emailWidth }}
            title="sherinececil@gmail.com"
            placement="bottom"
          >
            <a href="#" onclick={triggerOutlook}>
              <Icon icon="line-md:email" width="35" />
            </a>
          </Tooltip>
        </li>
        <li style={{ margin: "20px" }}>
          <Tooltip
            classes={{ tooltip: classes.customWidth }}
            title="015224823980"
            placement="bottom"
          >
            <Icon icon="eva:phone-call-outline" width="35" />
          </Tooltip>
        </li>
        <li style={{ margin: "20px" }}>
          <a href="www.linkedin.com/in/sherine-cecil-a6b03318" target="_blank">
            <Icon icon="et:linkedin" width="35" />
          </a>
        </li>
        <li style={{ margin: "20px" }}>
          <a href="https://github.com/sherinececil" target="_blank">
            <Icon icon="akar-icons:github-outline-fill" width="35" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
