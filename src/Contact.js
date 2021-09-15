import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  function triggerOutlook() {
    console.log("Do u see ...");
    var body = escape(
      window.document.title + String.fromCharCode(13) + window.location.href
    );

    var subject = "Take a look at this cool code snippet from CodeDigest.Com!!";

    window.location.href = "mailto:?body=" + body + "&subject=" + subject;
  }
  return (
    <div>
      <p> GET IN TOUCH </p>
      <ul>
        <li>
          {" "}
          <a href="#" onclick={triggerOutlook}>
            <Icon icon="line-md:email" width="35" />
          </a>
        </li>
        <li>
          <Icon icon="eva:phone-call-outline" width="35" />
        </li>
        <li>
          <Icon icon="et:linkedin" width="35" />
        </li>
        <li>
          <Icon icon="akar-icons:github-outline-fill" width="35" />
        </li>
      </ul>
    </div>
  );
};
export default Contact;
