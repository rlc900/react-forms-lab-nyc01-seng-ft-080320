import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {input: ''};
  }

  handleOnChange = (evt) => {
    this.setState({
      input: evt.target.value
    })
  }

  render() {
    let {input} = this.state
    let {maxChars} = this.props
    let remainingChars = maxChars - input.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        value={input}
        onChange={evt => this.handleOnChange(evt)}
        />
        <h1>Remaining Chars: {remainingChars}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
