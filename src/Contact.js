import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icon } from "@iconify/react";
import Tooltip from "@material-ui/core/Tooltip";
import Grow from "@material-ui/core/Grow";
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

const Contact = ({ handleChange, checked }) => {
  checked = !checked;
  const classes = useStyles();
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleMail = () => {
    window.open("mailto:sherinececil@gmail.com");
  };

  const handleClick = () => {
    setText("015224823980");
  };

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div>
      <p>GET IN TOUCH</p>
      <ul
        className="contact-ul"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "20px" }}>
          {" "}
          <Grow in={checked}>
            <Tooltip
              classes={{ tooltip: classes.emailWidth }}
              title="sherinececil@gmail.com"
              placement="bottom"
            >
              <a href="#">
                <Icon icon="line-md:email" width="40" onClick={handleMail} />
              </a>
            </Tooltip>
          </Grow>
        </li>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <li style={{ margin: "20px" }}>
            <Tooltip
              classes={{ tooltip: classes.customWidth }}
              title="015224823980"
              placement="bottom"
              value="015224823980"
              id="myInput"
            >
              <Icon
                icon="eva:phone-call-outline"
                width="40"
                className="iconClass"
                onClick={handleClick}
              />
            </Tooltip>
          </li>
        </Grow>

        <Grow in={checked}>
          <li style={{ margin: "20px" }}>
            <a
              href="https://www.linkedin.com/in/sherine-cecil-a6b03318/"
              target="_blank"
            >
              <Icon icon="et:linkedin" width="40" />
            </a>
          </li>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <li style={{ margin: "20px" }}>
            <a href="https://github.com/sherinececil" target="_blank">
              <Icon icon="akar-icons:github-outline-fill" width="40" />
            </a>
          </li>
        </Grow>
      </ul>
    </div>
  );
};
export default Contact;
