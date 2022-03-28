import React from "react";
import { render } from "react-dom";
import Dashboard from "./components/dashboard";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <Dashboard />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
