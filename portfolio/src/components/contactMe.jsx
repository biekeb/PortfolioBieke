import React from "react";
import lkicon from "../images/Icon awesome-linkedin-in.svg";
import ghicon from "../images/Icon awesome-github.svg";
import emailicon from "../images/Icon simple-email.svg";
const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1>CONTACT ME</h1>
      <p>
        Let's connect! Feel free to reach out to me at [Your Email Address].
        Connect with me on [LinkedIn](link-to-your-linkedin) | Follow me on
        [GitHub](link-to-your-github)
      </p>
      <div className="contact-flex">
        <div className="contact-flex-item">
          <a href="https://www.linkedin.com/in/bieke-bellot-b8b8a11b8/">
            <img src={lkicon} alt="linkedin icon" />
          </a>
        </div>
        <div className="contact-flex-item">
          <a href="https://github.com/biekeb">
            <img src={ghicon} alt="github icon" />
          </a>
        </div>

        <div className="contact-flex-item">
          <a href="https://www.linkedin.com/in/leah-kim-1b1a3b1b0/">
            <img src={emailicon} alt="email icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
