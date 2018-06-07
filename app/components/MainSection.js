import React, { Component, PropTypes } from 'react';
import Square from './Square';
// import Footer from './Footer';
import { getComments } from '../api/reddit';

// import {
//   SHOW_ALL,
//   SHOW_COMPLETED,
//   SHOW_ACTIVE
// } from '../constants/TodoFilters';
import style from './MainSection.css';

// const TODO_FILTERS = {
//   [SHOW_ALL]: () => true,
//   [SHOW_ACTIVE]: todo => !todo.completed,
//   [SHOW_COMPLETED]: todo => todo.completed
// };

export default class MainSection extends Component {
  static propTypes = {
    board: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      commentsData: {}
    };
  }

  componentDidMount() {
    console.log('main component mounted');
    // window.addEventListener('load', () => {
    // HERE YOUR CODE
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      let tab = tabs[0];
      let url = tab.url;

      let commentsId = url.match(/(?<=comments\/)(.*)(?=\/.)/);
      console.log(url, commentsId);

      getComments(commentsId[0]).then(response => {
        console.log(response.data);
        this.setState({ commentsData: response.data });
      });
    });
    // });
  }

  // handleClearCompleted = () => {
  //   const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
  //   if (atLeastOneCompleted) {
  //     this.props.actions.clearCompleted();
  //   }
  // };
  //
  // handleShow = filter => {
  //   this.setState({ filter });
  // };

  // renderToggleAll(completedCount) {
  //   const { todos, actions } = this.props;
  //   if (todos.length > 0) {
  //     return (
  //       <input
  //         className={style.toggleAll}
  //         type="checkbox"
  //         checked={completedCount === todos.length}
  //         onChange={actions.completeAll}
  //       />
  //     );
  //   }
  // }
  //
  // renderFooter(completedCount) {
  //   const { todos } = this.props;
  //   const { filter } = this.state;
  //   const activeCount = todos.length - completedCount;
  //
  //   if (todos.length) {
  //     return (
  //       <Footer
  //         completedCount={completedCount}
  //         activeCount={activeCount}
  //         filter={filter}
  //         onClearCompleted={this.handleClearCompleted}
  //         onShow={this.handleShow}
  //       />
  //     );
  //   }
  // }

  render() {
    const { squares, actions } = this.props;
    //  const { filter } = this.state;

    //  const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const board = [];
    for (var i = 0; i < 25; i++) {
      //let check = this.checkForMatchingSquares(this.props.square);

      board.push(
        <Square
          square={squares[i]}
          key={squares[i].id}
          commentsData={this.state.commentsData}
          {...actions}
        />
      );
    }

    return (
      <div className={style.main}>
        <div className={style.wrapper}>{board}</div>
      </div>
    );
  }
}
