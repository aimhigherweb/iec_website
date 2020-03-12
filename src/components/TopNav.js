import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

export default function() {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="navbar">
      <div
        className={`header__container ${showNav === true ? 'nav-active' : ''}`}
      >
        <div className="navbar__logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="innovative eye care" />
          </Link>
        </div>
        <a href="#" className="navbar__opener" onClick={() => setShowNav(true)}>
          <span /> <strong className="hidden">opener</strong>
        </a>
        <div className="navbar__slide">
          <div className="navbar__slide__holder">
            <a
              href="#"
              className="navbar__opener navbar__opener--close"
              onClick={() => setShowNav(false)}
            >
              <span /> <strong className="hidden">opener</strong>
            </a>
            <div className="navbar__contact-info navbar__contact-info--in-slide">
              <ul className="navbar__contact-list">
                <li>
                  <i className="icon-call-answer" />
                  <span className="navbar__contact-list__title">City</span>
                  <a href="tel:0882319341">(08) 8231 9341</a>
                </li>
                <br />
                <li>
                  <i className="icon-call-answer" />
                  <span className="navbar__contact-list__title">Woodville</span>
                  <a href="tel:0884459050">(08) 8445 9050</a>
                </li>
              </ul>
            </div>
            <ul className="main-nav main-nav--floated-left">
              <Location>
                {({ location }) => {
                  return (
                    <>
                      <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/who-we-are' ? 'active' : ''
                        }
                      >
                        <Link to="/who-we-are">
                          <span>Who We Are</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/what-we-do' ? 'active' : ''
                        }
                      >
                        <Link to="/what-we-do">
                          <span>What We Do</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/patient-resources'
                            ? 'active'
                            : ''
                        }
                      >
                        <Link to="/patient-resources">
                          <span>Patient Resources</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/contact' ? 'active' : ''
                        }
                      >
                        <Link to="/contact">
                          <span>Contact</span>
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/blog' ? 'active' : ''
                        }
                      >
                        <Link to="/blog">
                          <span>Blog</span>
                        </Link>
                      </li>
                    </>
                  )
                }}
              </Location>
              <li>
                <a href="http://eyesolutions.com.au/">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
