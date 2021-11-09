import React, {Component} from 'react'
import './Header.scss';

class Header extends Component {
  
  home = (e) => {
    e.preventDefault();
  }

  myschedule = (e) => {
    e.preventDefault();
  }

  community = (e) => {
    e.preventDefault();
  }
  
  render() {
    return (
      <header className="header">
      <div className="container">
        <h1>Logo</h1>
        <ul>
          <li><a href="#" onClick={(e)=>this.home(e)}>홈</a></li>
          <li><a href="#" onClick={(e)=>this.myschedule(e)}>내 여행 일정</a></li>
          <li><a href="#" onClick={(e)=>this.community(e)}>커뮤니티</a></li>
        </ul>
        <div className="dark ir_pm">dark mode</div>
      </div>
    </header>
    )
  }
}
export default Header
