import { Component } from 'react';

import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Article'
import './App.scss';

class App extends Component {

  render() {

    return (
      <div className="main">
        <Header />
        <Nav />
        <aside></aside>
        <Article />
        <footer></footer>
      </div>
    );
  }
}

export default App;