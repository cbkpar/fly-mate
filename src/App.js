import { Component } from 'react';

import './App.scss';

class App extends Component {

  render() {

    return (
      <div className="main">
        {/* 헤더 */}
        <header className="header">
          <div className="container">
            <h1>Logo</h1>
            <ul>
              <li>홈</li>
              <li>내 여행 일정</li>
              <li>커뮤니티</li>
            </ul>
            <div className="dark ir_pm">dark mode</div>
          </div>
        </header>
        {/* 네비게이션 */}
        <nav className="nav">
          <div className="container">
            <h1>어디로 여행가세요?</h1>
            <div className="from">
            <h3>출발지</h3>
              <ul>
                <li>대륙</li>
                <li>국가</li>
                <li>도시</li>
              </ul>
            </div>
            <div className="to">
              <h3>도착지</h3>
              <ul>
                <li>대륙</li>
                <li>국가</li>
                <li>도시</li>
              </ul>
            </div>
            <div className="btn_add_schedule"><h3>내 여행 일정에 추가하기</h3></div>
          </div>
        </nav>
        <aside></aside>
        {/* 기사 */}
        <section className="article">
          <div className="container">
            <div className="date">
              0000년 00월 00일 코로나 19 정보
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
        <footer></footer>
      </div>
    );
  }
}

export default App;