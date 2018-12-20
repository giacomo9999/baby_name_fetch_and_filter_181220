import React from "react";
import PropTypes from "prop-types";

function List(props) {
  console.log("Now I'm in List");
  let strOut=props.sex+" • "+props.race+" • "+props.birthYear;
  return (
    <div className="list">
      <h4>{strOut}</h4>
      <h3>{props.topFiveNames[0]}</h3>
    </div>
  );
}

List.propTypes = { name: PropTypes.string.isRequired };

export default List;
