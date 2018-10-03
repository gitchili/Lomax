import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href="/">
            <h6 className="nav-link active">
              Home
            </h6>
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
            <h6 className="nav-link" href="#">
              About
            </h6>
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
            <h6 className="nav-link" href="#">
              Windows
            </h6>
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
            <h6 className="nav-link" href="#">
              Doors
            </h6>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
