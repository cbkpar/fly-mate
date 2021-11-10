import { Component } from 'react';
import Nav from "./Nav";
import Article from './Article';


class Home extends Component {
  
  render() {
    return (
      <>
        <Nav />
        <Article />
      </>
    )
  }
}
export default Home
