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
        birthYear: "2015",
        sex: "MALE",
        race: "HISPANIC"
      }
    ]
  };

  getTopNames = entry => {
    if (this.props.namesData.length===0){
      console.log('data is not in yet.');
      return [];
    }
    
    // console.log(filteredNamesData[0].name);
    const filteredNamesData = this.props.namesData.filter(
      record =>
        record.birthYear === entry.birthYear &&
        record.sex === entry.sex &&
        record.race === entry.race
    );
    console.log('filtered database entry: ',filteredNamesData[0]);

    const topFive = [];
    // for (let i = 0; i <= 4; i++) {
    //   // console.log(i, filteredNamesData[i].name);
    //   if (typeof filteredNamesData[i].name !== 'undefined') {
    //     topFive.push(filteredNamesData[i].name);
    //   }
    // }
    console.log(topFive);
    return topFive;
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
    return (
      <div>
        <h2>-List Of The Lists-</h2>
        {lists}
      </div>
    );
  }
}

export default ListOfLists;
