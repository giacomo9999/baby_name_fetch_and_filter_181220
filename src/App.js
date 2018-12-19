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
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // create array of contacts with only the relevant info
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });
        // create a new state object withut mutating the original one
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });
        // store the new object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
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
