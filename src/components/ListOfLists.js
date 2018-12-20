import React from "react";
import Contact from "./Contact";

function ListOfLists(props) {
  console.log("Now I'm in ContactList");
  return (
    <div>
      <h2>-List Of Lists-</h2>
      {/* {props.contacts.map(c => (
        <Contact key={c.key} race={c.race} name={c.name} year={c.birthYear} />
      ))} */}
    </div>
  );
}

export default ListOfLists;
