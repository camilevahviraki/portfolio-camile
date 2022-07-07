import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
  state = {
    showNav: false,
  };


  render() {
    return (
      <div>
        <header className="pc_header">
          <a href="#intro">Camilux</a>
          <nav>
            <a href="#projects">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <header className="mobile_header">
          <a href="#intro">Camilux</a>

          <nav>
            <div className={this.state.showNav ? "hideMenu" : "hamburger"} 
             onClick={() => this.setState({showNav: !this.state.showNav})}
            >
              <div id="child1" />
              <div id="child2" />
              <div id="child3" />
            </div>
            <ul className="menu" style={this.state.showNav ? {display: 'flex'} : {display: 'none'}}>
              <li>
                <a href="#projects"
                onClick={() => this.setState({showNav: !this.state.showNav})}
                >Portfolio</a>
              </li>
              <li>
                <a href="#about"
                onClick={() => this.setState({showNav: !this.state.showNav})}
                >About</a>
              </li>
              <li>
                <a href="#contact"
                onClick={() => this.setState({showNav: !this.state.showNav})}
                >Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
