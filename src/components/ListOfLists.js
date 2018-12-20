import React from "react";
import List from "./List";

function ListOfLists(props) {
  console.log("Now I'm in ContactList", props.namesData[0]);

  return (
    <div>
      <h2>-List Of Lists-</h2>
      <List />
      {/* {props.namesData.map(c => (
        <List key={c.key} race={c.race} name={c.name} year={c.birthYear} />
      ))} */}
    </div>
  );
}

export default ListOfLists;
