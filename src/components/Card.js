import React from "react";
import Form from "./Form";

class Card extends React.Component {
  onFormSubmit = (gender, height, weight) => {
    console.log(gender);
    const hcm = height * 30.48;
    const hm = hcm / 100;
    const bmi = weight / (hm ^ 2);
    console.log(bmi);
  };

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <Form onSubmit={this.onFormSubmit} />
        </div>
      </div>
    );
  }
}
export default Card;
