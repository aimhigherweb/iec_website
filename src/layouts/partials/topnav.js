import React, { Component } from "react"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"

class TopNav extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="header__container">
          <div className="navbar__logo">
            <Link to="/"><img src="/images/logo.svg" alt="innovative eye care" /></Link>
            </div>
          <a href="#" className="navbar__opener">
            <span/> <strong className="hidden">opener</strong>
          </a>
          <div className="navbar__slide">
            <div className="navbar__slide__holder">
              <a href="#" className="navbar__opener navbar__opener--close">
                <span/> <strong className="hidden">opener</strong></a>
              <div className="navbar__contact-info navbar__contact-info--in-slide">
                <ul className="navbar__contact-list">
                  <li>
                    <i className="icon-call-answer"/>
                    <span className="navbar__contact-list__title">City</span>
                    <a href="tel:0882319341">(08) 8231 9341</a>
                  </li>
                  <br/>
                  <li>
                    <i className="icon-call-answer"/>
                    <span className="navbar__contact-list__title">Woodville</span>
                    <a href="tel:0884459050">(08) 8445 9050</a>
                  </li>
                </ul>
              </div>
              <ul className="main-nav main-nav--floated-left">
                <li>
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/who-we-are">
                    <span>Who We Are</span>
                  </Link>
                </li>
                <li>
                  <Link to="/what-we-do">
                    <span>What We Do</span>
                  </Link>
                </li>
                <li>
                  <Link to="/patient-resources">
                    <span>Patient Resources</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <span>Blog</span>
                  </Link>
                </li>
                <li><a href="http://eyesolutions.com.au/">Shop</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TopNav;
