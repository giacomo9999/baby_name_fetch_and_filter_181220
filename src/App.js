import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import ContactList from "./components/ContactList";

class App extends Component {
  state = { namesData: [] };

  componentDidMount() {
    axios
      .get(
        "https://data.cityofnewyork.us/api/views/25th-nujf/rows.json?accessType=DOWNLOAD"
      )
      // extract relevant data from response object
      .then(response => {
        console.log('Assembling database...')
        const recordObj = response.data.data.map((entry, index) => ({
          key: "entry_" + index,
          birthYear: entry[8],
          sex: entry[9],
          race: entry[10],
          name: entry[11],
          withThatName: entry[12],
          nameRank: entry[13]
        }));
        // create a new state object without mutating the original one
        const newData = Object.assign({}, this.state, { namesData: recordObj });
        // store the new object in the component's state
        this.setState(newData);
        console.log('Database assembled.');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome To Contact Manager</h1>
        </header>
        <ContactList contacts={this.state.namesData} />
      </div>
    );
  }
}

export default App;
