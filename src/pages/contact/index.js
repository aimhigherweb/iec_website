import React, {Component} from 'react';
import {Link} from 'gatsby';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";

class Contact extends Component {

  render() {
    return (
      <>
        <Header/>
        <TopNav/>

        <div
          className="content-section location-section"
          style={{backgroundImage: 'url(/images/img04.jpg)'}}
        >
          <div className="container">
            <div className="content-section__haeding">
              <div className="contact-heading"><h1>Our Locations</h1></div>
              Innovative Eye Care has two convenient locations in South Australia - Hutt Street, Adelaide and Port Road,
              Woodville.
            </div>
            <div className="location">
              <div className="location__item">
                <div className="location__vid">
                  <video
                    className="video-js vjs-default-skin vjs-big-play-centered"
                    controls
                    preload="auto"
                    poster="/images/city-video.jpg"
                    data-setup='{"fluid":true}'
                  >
                    <track kind="captions" />
                    <source src="/videos/location-city.mp4" type='video/mp4'/>
                  </video>
                </div>
                <address className="location__address">
                  <Link to="/contact">
                    <h2 className="location__title">ADELAIDE CITY</h2>
                    <span className="location__text">60 Hutt Street <br/> ADELAIDE SA 5000</span>
                  </Link>
                  <a href="tel:0882319341" className="location__phone">Phone: (08) 8231 9341</a>
                  <span className="location__text"><b>Monday - Friday</b> 8.30 am - 5.30 pm <br/> <b>Saturday</b> 8.30 am - 12 pm</span>
                  <a
                    href="mailto:huttstreet@innovativeeyecare.com.au"
                    className="location__email"
                  >huttstreet@innovativeeyecare.com.au</a>
                  <br/><br/>
                  <div
                    className="1stAvailableWidget widget"
                    id="2798"
                    style={{cursor: 'pointer'}}
                  >
                    <p
                      className="btn btn-primary"
                      style={{textAlign: 'center'}}
                    >
                      <i className="fa fa-calendar" aria-hidden="true"/>
                      Book Online Now
                    </p>
                  </div>
                </address>
              </div>
              <div className="location__item">
                <div className="location__vid">
                  <video
                    className="video-js vjs-default-skin vjs-big-play-centered"
                    controls
                    preload="auto"
                    poster="/images/woodville-video.jpg"
                    data-setup='{"fluid":true}'
                  >
                    <track kind="captions" />
                    <source src="/videos/location-woodville.mp4" type='video/mp4'/>
                  </video>
                </div>
                <address className="location__address">
                  <Link to="/contact">
                    <h2 className="location__title">Woodville</h2>
                    <span className="location__text">850 Port Road <br/> WOODVILLE SA 5011</span>
                  </Link>
                  <a href="tel:0884459050" className="location__phone">Phone: (08) 8445 9050</a>
                  <span className="location__text"><b>Monday - Friday</b> 9.00 am - 5.30 pm<br/><br/></span>
                  <a
                    href="mailto:woodville@innovativeeyecare.com.au"
                    className="location__email"
                  >woodville@innovativeeyecare.com.au</a>
                  <br/><br/>
                    <div
                      className="1stAvailableWidget widget"
                      id="2797"
                      style={{cursor: 'pointer'}}
                    >
                      <p
                        className="btn btn-primary"
                        style={{textAlign: 'center'}}
                      >
                        <i className="fa fa-calendar" aria-hidden="true"/>
                        Book Online Now
                      </p>
                    </div>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-section online-book-section"
          style={{backgroundImage: 'url(/images/img38.jpg)'}}
        >
          <div className="container">
            <div className="online-box">
              <div className="online-box-heading">
                <h2>Book Online - It’s easy</h2>
              </div>
              <p>We’ve made it super easy to schedule your next appointment with our online booking system.</p>
              <p>Just pick a location above and click the "Book Online Now" button.</p>
            </div>
          </div>
        </div>

        <Footer/>
      </>
    );
  }
}

export default Contact;
