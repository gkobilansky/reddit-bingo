import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as JsSearch from 'js-search';
import * as SquareActions from '../actions/squares';
import style from './App.css';

@connect(
  state => ({
    squares: state.squares
  }),
  dispatch => ({
    actions: bindActionCreators(SquareActions, dispatch)
  })
)
export default class App extends Component {
  render() {
    const { squares, actions } = this.props;

    return (
      <div className={style.normal}>
        <Header />
        <MainSection squares={squares} actions={actions} />
      </div>
    );
  }
}
