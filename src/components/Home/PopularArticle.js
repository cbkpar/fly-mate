import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './PopularArticle.scss';

class PopularArticle extends Component {
  render() {
    return (
      <>
        <section className="popularArticle">
          <h3>여행 관련 코로나 19 소식이에요.</h3>
            <expand><Link to="/" onClick="">더보기</Link></expand>
          <div className="container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
        <section className="together">
          <h3>같이 여행 가실분?</h3>
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
          <div className="mymbti">
            <Link to="/mbti" onClick="">내 여행 스타일 알아보기</Link>
          </div>
        </section>
      </>
    )
  }
}
export default PopularArticle
