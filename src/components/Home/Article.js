import React, { Component } from 'react'
import './Article.scss';
import Clock from 'react-live-clock'

class Article extends Component {
  render() {
    return (
      <section className="article">
      <div className="container">
        <div className="date">
          <Clock format={'YYYY년 MM월 DD일'} ticking={false} /> 코로나 19 정보
        </div>
        <div className="search">
          <h4>내가 원하는 지역 코로나 정보 알아보기</h4>
          <div className="search_detail">
            <ul>
              <li>대륙</li>
              <li>국가</li>
              <li>도시</li>
            </ul>
            <h3>검색</h3>
          </div>
        </div>
        <div className="board">
          <div className="board_left"></div>
          <div className="board_right"></div>
        </div>
      </div>
    </section>
    )
  }
}
export default Article
