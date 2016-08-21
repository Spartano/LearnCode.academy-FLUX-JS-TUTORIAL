import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    console.log('this is a log from each Todo component ', this.props);
//the order doesnt matter thanks to ES6 destructuring of an object
    const { complete, edit, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
    );
  }
}
