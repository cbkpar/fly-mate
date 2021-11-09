import React, { Component } from 'react'
import './Nav.scss';
import cities from '../data/cities.json'

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <h1>어디로 여행가세요?</h1>
          <div className="from">
            <h3>출발지</h3>
            <ul>
              <li>
                <select Classname="continent">
                  {cities.continent.map((ele)=>(
                    <option value={ele.name}>{ele.kor_name}</option>
                  ))}
                </select>
              </li>
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
    )
  }
}
export default Nav
