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

  displayListParams = () => {
    const lists = this.state.lists.map((list, index) => (
      <List
        key={"list_" + index}
        race={this.state.lists[index].race}
        sex={this.state.lists[index].sex}
        birthYear={this.state.lists[index].birthYear}
      />
    ));
    return lists;
  };

  render() {
    const lists = this.displayListParams();
    console.log("Lists: ", lists);
    return (
      <div>
        <h2>-List Of The Lists-</h2>
        {lists}
      </div>
    );
  }
}

export default ListOfLists;
