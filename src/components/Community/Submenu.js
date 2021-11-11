import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Submenu.scss';

class Submenu extends Component {
  render() {
    return (
      <div className="myplan_sub">
        <ul>
          <li><Link to="/Community/1" onClick="">서브메뉴 1</Link></li>
          <li><Link to="/Community/2" onClick="">서브메뉴 2</Link></li>
          <li><Link to="/Community/3" onClick="">서브메뉴 3</Link></li>
          <li><Link to="/Community/4" onClick="">서브메뉴 4</Link></li>
        </ul>
      </div>
    )
  }
}
export default Submenu
