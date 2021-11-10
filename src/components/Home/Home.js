import { Component } from 'react';
import Nav from "./Nav";
import Article from './Article';
import PopularArticle from './PopularArticle';


class Home extends Component {
  
  render() {
    return (
      <>
        <Nav />
        <Article />
        <PopularArticle />
      </>
    )
  }
}
export default Home
