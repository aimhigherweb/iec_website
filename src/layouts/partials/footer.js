import React, {Component} from "react"
import {Helmet} from 'react-helmet'
import {Link} from "gatsby"

class Footer extends Component {

  render() {
    return (
      <footer id="footer">
        <div className="footer__holder">
          <div className="container container--with-layout">
            <div className="footer__left-col">
              <div className="footer-logo">
                <a href="#">
                  <img src="/images/footer-logo.png" alt="innovative eye care"/>
                </a>
              </div>
              <p>&copy; 2016 <a href="#">Innovative Eye Care Pty Ltd</a> All rights reserved.</p>
            </div>
            <div className="footer__info">
              <div className="footer__col">
                <strong className="footer__info__title">ADELAIDE CITY</strong>
                <address className="footer__address">
                  <span>60 Hutt Street</span>
                  <span>Adelaide, SA 5000</span>
                  <span className="footer__tel">
                    <a href="tel:0882319341">(08) 8231 9341</a>
                  </span>
                </address>
              </div>
              <div className="footer__col">
                <strong className="footer__info__title">WOODVILLE</strong>
                <address className="footer__address">
                  <span>850 Port Road</span>
                  <span>Woodville, SA 5011</span>
                  <span className="footer__tel"><a href="tel:0884459050">(08) 8445 9050</a></span>
                </address>
              </div>
              <div className="footer__col">
                <form id="demo-2" action="/search" method="GET">
                  <input type="search" placeholder="Search" name="s" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container container--with-layout">
            <ul className="partners-list">
              <li>
                <img src="/images/partner-logo01.jpg" alt="optometry australia member" />
              </li>
              <li>
                <img src="/images/partner-logo02.jpg"
                     alt="cornea &amp; contact lens society of australia" />
              </li>
              <li>
                <img src="/images/partner-logo03.jpg" alt="cornea &amp; contact leans society" />
              </li>
              <li>
                <img src="/images/partner-logo04.jpg" alt="orthokeratology society of oceania" />
              </li>
              <li>
                <img src="/images/partner-logo05.jpg" alt="IAO" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
  }
  }

  export default Footer;
