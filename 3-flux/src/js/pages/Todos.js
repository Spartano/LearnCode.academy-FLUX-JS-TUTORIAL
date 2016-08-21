import React from "react";
import Todo from "../components/Todo";


export default class Featured extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1134654812,
          text: 'Go Shopping',
          complete: false
        },
        {
          id: 1134655112,
          text: 'Pay Bills',
          complete: false
        }
      ]
    };
  }


  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
//{...todo} The properties of the object that you pass in are copied onto the component's props.
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
