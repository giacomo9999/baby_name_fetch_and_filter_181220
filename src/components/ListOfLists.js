import React from "react";
import List from "./List";

class ListOfLists extends React.Component {
  state = {
    lists: [
      {
        list_id: "1",
        birthYear: "2011",
        sex: "FEMALE",
        race: "ASIAN AND PACIFIC ISLANDER"
      },
      {
        list_id: "2",
        birthYear: "2012",
        sex: "MALE",
        race: "HISPANIC"
      },
      {
        list_id: "3",
        birthYear: "2014",
        sex: "MALE",
        race: "HISPANIC"
      },
      {
        list_id: "4",
        birthYear: "2013",
        sex: "FEMALE",
        race: "WHITE NON HISPANIC"
      },
    ]
  };

  getTopNames = entry => {
    if (this.props.namesData.length === 0) {
      console.log("data is not in yet.");
      return [];
    } else {
      const filteredNamesData = this.props.namesData.filter(
        record =>
          record.birthYear === entry.birthYear &&
          record.sex === entry.sex &&
          record.race === entry.race
      );
      const topFive = [];
      for (let i = 0; i <= 4; i++) {
        topFive.push(filteredNamesData[i].name.toUpperCase());
      }
      console.log(topFive);
      return topFive;
    }
  };

  displayListParams = () => {
    const lists = this.state.lists.map((list, index) => (
      <List
        key={"list_" + index}
        race={this.state.lists[index].race}
        sex={this.state.lists[index].sex}
        birthYear={this.state.lists[index].birthYear}
        topFiveNames={this.getTopNames(list)}
      />
    ));
    return lists;
  };

  render() {
    const lists = this.displayListParams();
    console.log("Lists: ", lists);
    return <div>{lists}</div>;
  }
}

export default ListOfLists;
