import React from 'react';
import './App.css';
import Header from './Header';
import LeftMenu from './LeftMenu';
import Content from './Content';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <LeftMenu/>
      <Content/>
      </>
    )
  }
}
