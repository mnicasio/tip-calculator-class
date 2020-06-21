import React from "react";
import InputWrapper from "./components/input-wrapper/input-wrapper";
import "./App.css";

class App extends React.Component {
  state = {
    billValue: "",
    tipPercent: "",
    tipTotal: "",
  };

  handleForm = (e) => {
    let bill = this.state.billValue;
    let tipPercent = this.state.tipPercent / 100;
    this.setState({
      tipTotal: (bill * tipPercent).toFixed(2),
    });
    e.preventDefault();
  };

  handleBillAmount = (e) => {
    this.setState({
      billValue: e.target.value,
    });
  };

  handleTipPercent = (e) => {
    this.setState({
      tipPercent: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Tip Calculator</h1>
        </div>
        <div>
          <form onSubmit={this.handleForm}>
            <InputWrapper
              label="Bill Amount"
              name="bill"
              type="text"
              onChange={this.handleBillAmount}
              value={this.state.billValue}
            />
            <InputWrapper
              label="Tip Percent"
              name="tip"
              type="text"
              onChange={this.handleTipPercent}
              value={this.state.tipPercent}
            />
            <input className="submit-button" type="submit" value="Submit" />
          </form>
          {this.state.tipTotal ? (
            <div>Tip Total: ${this.state.tipTotal}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default App;
