import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";

import ContactList from "./components/ContactList";

const contacts = [
  { id: 1, name: "Amber" },
  { id: 2, name: "Leah" },
  { id: 3, name: "Lisa" },
  { id: 4, name: "Jaesa" }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome To Contact Manager</h1>
        </header>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
