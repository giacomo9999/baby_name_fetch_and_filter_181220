import React from "react";
import PropTypes from "prop-types";

function List(props) {
  console.log("Now I'm in List");
  const strOut = props.sex + " • " + props.race + " • " + props.birthYear;

  const itemStyle = {
    listStyleType: 'none'
  };
  const nameList = props.topFiveNames.map((name,index) => (
    <li style={itemStyle}>{index+1+".  "+name}</li>
  ));
  return (
    <div className="list">
      <h4>{strOut}</h4>
      <ul>{nameList}</ul>
    </div>
  );
}

List.propTypes = { name: PropTypes.string.isRequired };

export default List;
