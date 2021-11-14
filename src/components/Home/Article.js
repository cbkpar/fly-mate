import React, { Component } from 'react'
import './Article.scss';
import Clock from 'react-live-clock'
import Worldmap from './Worldmap';

class Article extends Component {

  render() {
    return (
      <section className="article">
        <div className="container">
          <div className="date">
            <Clock format={'YYYY년 MM월 DD일'} ticking={false} /> 코로나 19 정보
            <h4>방문 예정 국가를 클릭하거나 검색해서 전 세계의 코로나 19 정보를 확인하세요.</h4>
          </div>
                
          <div className="board">
            <div className="board_left">
              <div className="search">
                <input placeholder="검색" />
              </div>
              <Worldmap />
              </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Article
