import { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabidx: 0,
    };
  }

  changetab = (e, idx) => {
    e.preventDefault();
    this.setState({
      tabidx: idx
    });
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div onClick={(e) => this.changetab(e, 1)}><Link to="/">
            <img className="logo" src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
            <img className="logotitle" src={process.env.PUBLIC_URL + "/logotitle.png"} alt="" />
          </Link>
          </div>
          <ul>
            <li className={this.state.tabidx === 1 ? "active" : ""} onClick={(e) => this.changetab(e, 1)}><Link to="/">홈</Link></li>
            <li className={this.state.tabidx === 2 ? "active" : ""} onClick={(e) => this.changetab(e, 2)}><Link to="/Myplan">내 여행 일정</Link></li>
            <li className={this.state.tabidx === 3 ? "active" : ""} onClick={(e) => this.changetab(e, 3)}><Link to="/Community">커뮤니티</Link></li>
          </ul>
          <div className="avatar ir_pm">avatar</div>
        </div>
      </header>
    )
  }
}
export default Header
