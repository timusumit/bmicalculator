import React from "react";
import Form from "./Form";
import Result from "./Result";

class Card extends React.Component {
  state = { bmifinal: 0 };
  onFormSubmit = (gender, height, weight) => {
    console.log(gender);
    const hcm = height * 30.48;
    const hm = hcm / 100;
    const bmi = weight / (hm ^ 2);
    this.setState({ bmifinal: bmi });
  };

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <Form onSumit={this.onFormSubmit} />
          <Result bmiresult={this.state.bmifinal} />
        </div>
      </div>
    );
  }
}
export default Card;
