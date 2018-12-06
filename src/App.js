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

class ScrollingBody extends Component {
  constructor(props) {
    super(props);

    const images = [];

    for(let i=0; i<10; i++) {
      images.push(<img src={logo} className="body--logo" alt="logo" />);
    };

    this.state = {
      images: images
    }
  }

  scrollHandler = (e) => {
    if(isTop(e)) {
      console.log("Top reached")
    } else if (isBottom(e)) {
      console.log("Bottom reached")

      const images = [];

      for(let i=0; i<10; i++) {
        images.push(<img src={logo} className="body--logo" alt="logo" />);
      };

      this.setState({
        images: [...this.state.images, ...images]
      });
    }
  }

  render() {

    const { images } = this.state;
    
    return (
      <div className="app--body" onScroll={this.scrollHandler}>
        {this.state.images}
      </div>
    );
  }
}

const isTop = e => e.target.scrollTop === 0;
const isBottom = e => e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

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
        <ScrollingBody/>
        <Footer/>
      </div>
    );
  }
}

export default App;
