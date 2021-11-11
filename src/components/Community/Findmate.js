import React, { Component } from 'react'
import './Findmate.scss';

class Findmate extends Component {
  render() {
    return (
      <div className="myplan_findmate">
        <strong>함께 떠날 친구를 찾아보세요.</strong>
        <ul className="area">
          <li>지역</li>
          <li>지역</li>
          <li>지역</li>
        </ul>
        <ul className="profile">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}
export default Findmate
