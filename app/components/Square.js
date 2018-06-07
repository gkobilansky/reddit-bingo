import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
//import TodoTextInput from './TodoTextInput';
import style from './Square.css';

export default class Square extends Component {
  static propTypes = {
    test: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    // deleteTodo: PropTypes.func.isRequired,
    matchSquare: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      matched: false
    };
  }

  handlePlay = () => {
    this.setState({ matched: true });
    const { square, matchSquare } = this.props;
    matchSquare(square.id);
  };

  // handleSave = text => {
  //   const { todo, deleteTodo, editTodo } = this.props;
  //   if (text.length === 0) {
  //     deleteTodo(todo.id);
  //   } else {
  //     editTodo(todo.id, text);
  //   }
  //   this.setState({ editing: false });
  // };
  //
  // handleComplete = () => {
  //   const { todo, completeTodo } = this.props;
  //   completeTodo(todo.id);
  // };
  //
  // handleDelete = () => {
  //   const { todo, deleteTodo } = this.props;
  //   deleteTodo(todo.id);
  // };

  render() {
    const { square } = this.props;
    return (
      <div
        data-id={square.id}
        onClick={this.handlePlay}
        className={this.state.matched ? style.square.played : style.square}>
        {square.text}
      </div>
    );
  }
}
