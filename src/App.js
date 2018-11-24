import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';


const Header = () => {
  return (
    <header className="app--header">
      <p>Header</p>
    </header>
  );
} 

const Body = ({count}) => {

  const images = [];

  for(let i=0; i<count; i++) {
    images.push(<img src={logo} className="body--logo" alt="logo" />);
  };

  return (
    <div className="app--body">
      {images}
    </div>
  );
} 

const Footer = () => {
  return (
    <footer className="app--footer">
      <p>(c) <a href="mailto:mikko.p.sopanen@gmail.com">mikko.p.sopanen@gmail.com</a>.</p>
    </footer>
  );
} 


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Body count={70}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
