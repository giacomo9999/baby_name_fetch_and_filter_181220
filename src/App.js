import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import ContactList from "./components/ContactList";

const contacts = [
  { id: 1, name: "Amber" },
  { id: 2, name: "Leah" },
  { id: 3, name: "Lisa" },
  { id: 4, name: "Jaesa" }
];

class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    axios
      .get(
        "https://data.cityofnewyork.us/api/views/25th-nujf/rows.json?accessType=DOWNLOAD"
      )
      .then(response => {
        const recordObj = {
          year: response.data.data[0][8],
          sex: response.data.data[0][9],
          race: response.data.data[0][10],
          name: response.data.data[0][11],
          numWithSameName: response.data.data[0][12],
          rank: response.data.data[0][13],
        };
        console.log("Test response: ",recordObj.year, recordObj.sex, recordObj.name);
      })
      .catch(error => console.log(error));

    // axios
    //   .get("https://data.cityofnewyork.us/api/views/25th-nujf/rows.json?accessType=DOWNLOAD")
    //   .then(response => {
    //     console.log(response.data.data);
    //     // create array of contacts with only the relevant info
    //     const newContacts = response.data.map(c => {
    //       return {
    //         id: c.id,
    //         name: c.name
    //       };
    //     });
    //     // create a new state object withut mutating the original one
    //     const newState = Object.assign({}, this.state, {
    //       contacts: newContacts
    //     });
    //     // store the new object in the component's state
    //     this.setState(newState);
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome To Contact Manager</h1>
        </header>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
