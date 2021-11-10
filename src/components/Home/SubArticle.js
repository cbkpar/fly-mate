import React, { Component } from 'react'
import './SubArticle.scss';

class SubArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabidx: 0,
    };
  }

  changetab = (e, idx) => {
    e.preventDefault();
    this.setState({
      tabidx: idx
    });
  }

  render() {
    const Article_subArr = [
      {
        name: '카테고리 1',
      },
      {
        name: '카테고리 2',
      },
      {
        name: '카테고리 3',
      },
    ];

    return (
      <>
      <ul className="Article_sub">
        {Article_subArr.map((ele, idx) => {
          return (
            <li
              key={idx}
              className={this.state.tabidx === idx ? "active" : ""}
              onClick={(e) => this.changetab(e, idx)}
            ><a href="#">{ele.name}</a></li>
          )
        })}
      </ul>
      {this.state.tabidx+1}
      </>
    )
  }
}

export default SubArticle
