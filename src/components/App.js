import React from "react";
import Card from "./Card";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui centered grid">
          <div className="row">
            <div>
              <h2>BMI Calculator</h2>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
