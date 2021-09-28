import React from "react";

class Form extends React.Component {
  state = { gender: "", height: 0, weight: 0 };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSumit(this.state.gender, this.state.height, this.state.weight);
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Gender</label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={(e) => this.setState({ gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="field">
          <label>Height in feet</label>
          <input
            type="number"
            value={this.state.height}
            onChange={(e) => this.setState({ height: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Weight in kg</label>
          <input
            type="number"
            value={this.state.weight}
            onChange={(e) => this.setState({ weight: e.target.value })}
          />
        </div>
        <div className="field">
          <button type="submit">Calculate</button>
        </div>
      </form>
    );
  }
}

export default Form;
