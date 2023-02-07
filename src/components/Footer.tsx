import React from "react";
import staticContent from "../staticContent";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between">
      <p className="copyrigth">© {staticContent.author}</p>
      <p className="version">
        {staticContent.codename} - {staticContent.version}
      </p>
    </div>
  );
};

export default Footer;
