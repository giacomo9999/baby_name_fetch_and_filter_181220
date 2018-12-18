import React, { Component } from "react";
import "./App.css";

import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome To Contact Manager</h1>
          <Contact />
        </header>
        
      </div>
    );
  }
}

export default App;
