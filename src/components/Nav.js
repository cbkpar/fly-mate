import React, { Component } from 'react'
import './Nav.scss';
import cities from '../data/cities.json'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open_num: 0,
      from_continent: 0,
      from_countries: 0
    };
  }

  from_a_ref = React.createRef();
  from_b_ref = React.createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.state.open_num === 1) {
      if (!this.from_a_ref.current.contains(event.target)) {
        this.setState({
          open_num: 0,
        });
      }
    }
    if (this.state.open_num === 2) {
      if (!this.from_b_ref.current.contains(event.target)) {
        this.setState({
          open_num: 0,
        });
      }
    }
  };

  openselector = (e, idx) => {
    e.preventDefault();
    this.setState({
      open_num: idx
    });
  }

  render() {
    return (
      <nav className="nav">
        <div className="container">
          <h1>어디로 여행가세요?</h1>
          <div className="from">
            <h3>출발지</h3>
            <ul>
              <li>
                <div ref={this.from_a_ref} className={this.state.open_num === 1 ? "selectBox active" : "selectBox"}>
                  <button className="label" onClick={(e) => this.openselector(e, 1)}>{this.state.from_continent === 0 ? "대륙" : cities.continent[this.state.from_continent].kor_name}</button>
                  <ul className="optionList">
                    {cities.continent.map((ele, idx) => (
                      <li className="optionItem" value={ele.name} onClick={() => this.setState({ from_continent: idx, open_num: 0, from_countries: 0 })}>{ele.kor_name}</li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <div ref={this.from_b_ref} className={this.state.open_num === 2 ? "selectBox active" : "selectBox"}>
                  <button className="label" onClick={(e) => this.openselector(e, 2)}>{this.state.from_countries === 0 ? "국가" : cities.countries[this.state.from_countries-1].kor_name}</button>
                  <ul className="optionList">
                    {cities.countries.map((ele, idx) => (
                      (this.state.from_continent === 0 || this.state.from_continent === ele.continent) &&
                      <li className="optionItem" value={ele.name} onClick={() => this.setState({ from_continent: ele.continent, from_countries: ele.id, open_num: 0 })}>{ele.kor_name}</li>
                    ))}
                  </ul>
                </div>
              </li>
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
