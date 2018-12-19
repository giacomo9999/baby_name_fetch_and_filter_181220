import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  let strOut=props.name+" "+props.race;
  return (
    <div className="contact">
      <span>{strOut}</span>
    </div>
  );
}

Contact.propTypes = { name: PropTypes.string.isRequired };

export default Contact;
