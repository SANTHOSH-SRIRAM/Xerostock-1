import React from 'react'
import "./landingpageMenu1.css";

export const LandingpageMenu1 = () => {
    const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
    return (
        <div id='Section1'>
            <div class="container">
                <div class="navbar">
                    <div class="menu">
                        <h3 class="logo">XEROSCAPE</h3>
                        <div class="hamburger-menu">
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>

                <div class="main-container">
                    <div class="main">
                        <header>
                            <div class="overlay">
                                <div class="inner">
                                    <h2 class="title">Future is here</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Laudantium illum tenetur consequatur veritatis?
                                    </p>
                                    <button class="btn">Read more</button>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div class="shadow one"></div>
                    <div class="shadow two"></div>
                </div>

                <div class="links">
                    <ul>
                        <li>
                            <label htmlFor="">HOME</label>
                            {/* <a href="">Home</a> */}
                        </li>
                        {/* <li>
                            <a href="#" style="--i: 0.1s;">Services</a>
                        </li>
                        <li>
                            <a href="#" style="--i: 0.15s;">Portfolio</a>
                        </li>
                        <li>
                            <a href="#" style="--i: 0.2s;">Testimonials</a>
                        </li>
                        <li>
                            <a href="#" style="--i: 0.25s;">About</a>
                        </li>
                        <li>
                            <a href="#" style="--i: 0.3s;">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>

            {/* <script src="/landingpage.js"></script> */}
        </div>
    )
}
