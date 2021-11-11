import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './PopularArticle.scss';

class PopularArticle extends Component {
  render() {
    return (
      <>
        <section className="popular">
          <h3>지금 가장 인기있는 여행 일정</h3>
            <expand><Link to="/" onClick="">더보기</Link></expand>
          <div className="container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
        <section className="popular">
          <h3>지금 가장 인기있는 여행 일기</h3>
            <expand><Link to="/" onClick="">더보기</Link></expand>
            <div className="container">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
        </section>
      </>
    )
  }
}
export default PopularArticle
