import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function List(props) {
  console.log("Now I'm in List");
  // let strOut=props.name+" "+props.race+" "+props.year;
  let strOut=props.race;
  return (
    <div className="list">
      <span>{strOut}</span>
    </div>
  );
}

List.propTypes = { name: PropTypes.string.isRequired };

export default List;
