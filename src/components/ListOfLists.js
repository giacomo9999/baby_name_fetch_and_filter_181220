import React from "react";
import List from "./List";

class ListOfLists extends React.Component {
  state = {
    lists: [
      {
        list_id: "1",
        birthYear: "2011",
        sex: "Female",
        race: "Asian/Pacific"
      },
      {
        list_id: "2",
        birthYear: "2015",
        sex: "Male",
        race: "Hispanic"
      }
    ]
  };

  render() {
    console.log("Lists: ", this.state.lists);
    return (
      <div>
        <h2>-List Of The Lists-</h2>
        <List race={this.state.lists[0].race} />
      </div>
    );
  }
}

export default ListOfLists;
