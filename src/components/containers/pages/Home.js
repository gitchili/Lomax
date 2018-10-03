import React, { Component } from "react";
import bg from "../../../assets/bg.png";
import bg1 from "../../../assets/bg-1.jpg";
import "../../../App.css";
class Home extends Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src=".../800x400?auto=yes&bg=777&fg=555&text=First slide"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    );
  }
}

// <img className="homeImg" src={bg1} alt="First slide" />
export default Home;
