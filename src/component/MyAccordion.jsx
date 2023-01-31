import React, { Component } from "react";

class MyAccordion extends Component {
  state = { show: false };
  handleClick = () => {
    this.setState((state) => ({
      show: !state.show,
    }));
  };
  render() {
    const { question, answer } = this.props;
    const { show } = this.state;

    return (
      <>
        <div className="shadow-lg p-3 text-left rounded-md">
          <div className="flex items-center justify-between space-x-6 mb-3">
            <h4 className="w-9/12">{question}</h4>
            <span onClick={this.handleClick} className="cursor-pointer">
              {show ? "➖" : "➕"}
            </span>
          </div>
          <span className="mt-6">{show && answer}</span>
        </div>
      </>
    );
  }
}

export default MyAccordion;
