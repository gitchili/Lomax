import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <div style={{ color: "white", display: "inline" }}>
          <ul>
          <a>
            {" "}
            <i class="fa fa-instagram" aria-hidden="true" />
          </a>
          <a>
            {" "}
            <i class="fa fa-twitter" aria-hidden="true" />
          </a>
          <a>
            {" "}
            <i class="fa fa-youtube-square" aria-hidden="true" />
          </a>

          <a>
            {" "}
            <i class="fa fa-google" aria-hidden="true" />
            </a>
            </ul>
        </div>
        <form className="form-inline">
          <button className="btn btn-outline-success my-2 my-sm-0">
            Call 970-225-3869
          </button>
        </form>
      </nav>
    );
  }
}

export default Header;
