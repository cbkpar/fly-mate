import { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

class Header extends Component {
  
  render() {
    return (
      <header className="header">
      <div className="container">
        <h1>Logo</h1>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/Myplan">내 여행 일정</Link></li>
          <li><Link to="/Community">커뮤니티</Link></li>
        </ul>
        <div className="avatar ir_pm">avatar</div>
      </div>
    </header>
    )
  }
}
export default Header
