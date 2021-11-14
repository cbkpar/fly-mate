import React, { Component } from 'react'
import './Nav.scss';
import cities from '../../data/cities.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open_num: 0,
      from_countries: 0,
      to_countries: 0,
      from_to_swap : 0
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

  swapcountries = (e) => {
    e.preventDefault();
    this.setState({
      from_countries: this.state.to_countries,
      to_countries: this.state.from_countries,
      from_to_swap: (this.state.from_to_swap + 1) % 2
    });
  }

  render() {
    return (
      <nav className="nav">
        <div className="container">
          <h1>어디로 떠나시나요?</h1>
          <h4>여행 계획을 아주 손쉽게 세울수 있어요.</h4>
          <div className="from">
            <ul>
              <li>
                <div ref={this.from_a_ref} className={this.state.open_num === 1 ? "selectBox active" : "selectBox"}>
                  <button className="label" onClick={(e) => this.openselector(e, 1)}>{this.state.from_countries === 0 ? "출발지" : cities.countries[this.state.from_countries-1].kor_name}</button>
                  <ul className="optionList">
                    {cities.countries.map((ele, idx) => (
                      <li className="optionItem" value={ele.name} onClick={() => this.setState({ from_countries: idx+1, open_num: 0 })}>{ele.kor_name}</li>
                    ))}
                  </ul>
                </div>
              </li>
              <button className={`swap_countries ${this.state.from_to_swap==1 ? "active" : ""}`} onClick={(e)=>this.swapcountries(e)}><h3><FontAwesomeIcon icon={faRightLeft} /></h3></button>
              <li>
                <div ref={this.from_b_ref} className={this.state.open_num === 2 ? "selectBox active" : "selectBox"}>
                  <button className="label" onClick={(e) => this.openselector(e, 2)}>{this.state.to_countries === 0 ? "도착지" : cities.countries[this.state.to_countries-1].kor_name}</button>
                  <ul className="optionList">
                    {cities.countries.map((ele, idx) => (
                      <li className="optionItem" value={ele.name} onClick={() => this.setState({ to_countries: idx+1, open_num: 0 })}>{ele.kor_name}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="btn_add_schedule"><button><h3>내 여행 일정에 추가하기</h3></button></div>
        </div>
      </nav>
    )
  }
}
export default Nav
