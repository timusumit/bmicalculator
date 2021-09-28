import React from "react";
class Result extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <h1>Result:{this.props.bmiresult}</h1>
      </div>
    );
  }
}

export default Result;
