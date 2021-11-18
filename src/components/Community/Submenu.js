import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Submenu.scss';

class Submenu extends Component {
  render() {
    return (
      <div className="myplan_sub">
        <ul>
          <li><Link to="/Community/1" onClick="">가치가요</Link></li>
          <li><Link to="/Community/2" onClick="">코비드 뉴스</Link></li>
          <li><Link to="/Community/3" onClick="">여행 일기</Link></li>
        </ul>
      </div>
    )
  }
}
export default Submenu
