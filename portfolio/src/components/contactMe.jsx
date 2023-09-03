import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1>CONTACT ME</h1>
      <p>
        Let's connect! Feel free to reach out to me at [Your Email Address].
        Connect with me on [LinkedIn](link-to-your-linkedin) | Follow me on
        [GitHub](link-to-your-github)
      </p>
      <div
        className="flex"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContactMe;
