import React, {Component} from 'react';
import {graphql, Link} from 'gatsby';
import {Helmet} from "react-helmet";
import Img from 'gatsby-image';
// import styled from 'styled-components';
import VideoJs from 'video.js';
import $ from 'jquery';

import Header from '../layouts/partials/header';
import TopNav from "../layouts/partials/topnav";
import Footer from "../layouts/partials/footer";

class Index extends Component {

  componentDidMount() {
    const e = document.createElement('script');
    e.type = 'text/javascript';
    e.async = true;
    e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://btn.createsend1.com/js/sb.min.js?v=3';
    e.className = 'createsend-script';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);

    document.body.appendChild(s);
  }

  playMainVideo = () => {
    $("#play-video-button").hide();
    $(".main-video__container").slideDown();
    VideoJs('main-video').play();
  };

  render() {
    const {
      imageFiles,
      uploadFiles,
    } = this.props.data;
    let Images = {};
    let UploadedImages = {};

    imageFiles.edges.map(({node}) => {
      if (node) {
        Images[node.name] = node.childImageSharp.fluid;
        return true;
      }
      return false;
    });

    uploadFiles.edges.map(({node}) => {
      if (node) {
        UploadedImages[node.name] = node.childImageSharp.fluid;
        return true;
      }
      return false;
    });

    return (
      <>
        <Helmet>
          <title>Innovative Eye Care</title>
        </Helmet>
        <Header/>
        <TopNav/>
        <div className="content-section simple-section content-section--white-color content-section--with-overlay white--overlay text-center">
          <Img
            sizes={Images['img01']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="content-section__haeding">
              Experience Premium Optometry
              <h1 className="haeding__top-text top-text--small">Welcome to Innovative Eye Care</h1>
              Optometrists in Adelaide, South Australia
            </div>
            <Link to="/contact" className="btn btn--transparent">BOOK WITH US</Link>
            <div className="main-video__container" hidden>
              <video
                id="main-video"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{"fluid":true}'
              >
                <track kind="captions" />
                <source src="/videos/video-main.mp4" type='video/mp4'/>
              </video>
            </div>
            <button
              id="play-video-button"
              onClick={this.playMainVideo}
              className="btn btn--transparent"
            >
              WATCH VIDEO
            </button>
          </div>
        </div>
        <div className="content-section location-section">
          <Img
            sizes={Images['img04']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="content-section__haeding">
              <h2>Our Locations</h2>
              Innovative Eye Care has two convenient locations in South Australia - Hutt Street, Adelaide and Port Road,
              Woodville.
            </div>
            <div className="location">
              <div className="location__item">
                <div className="location__vid">
                  <video
                    className="video-js vjs-default-skin vjs-big-play-centered"
                    controls preload="auto"
                    poster="/images/city-video.jpg"
                    data-setup='{"fluid":true}'
                  >
                    <track kind="captions" />
                    <source src="/videos/location-city.mp4" type='video/mp4'/>
                  </video>
                </div>
                <address className="location__address">
                  <Link to="/contact">
                    <strong className="location__title">ADELAIDE CITY</strong>
                    <span className="location__text">60 Hutt Street <br/> ADELAIDE SA 5000</span>
                  </Link>
                  <a href="tel:0882319341" className="location__phone">Phone: (08) 8231 9341</a>
                  <span
                    className="location__text"
                  >
                    <b>Monday - Friday</b> 8.30 am - 5.30 pm <br/> <b>Saturday</b> 8.30 am - 12 pm
                  </span>
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
                      <i
                        className="fa fa-calendar"
                        aria-hidden="true"
                      /> Book Online Now
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
                    <strong className="location__title">Woodville</strong>
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
                      <i
                        className="fa fa-calendar"
                        aria-hidden="true"
                      /> Book Online Now
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="content-section__haeding">
              <h2>Innovative Eye Care Services</h2>
            </div>
          </div>
          <ul className="services">
            <li>
              <Link to="/what-we-do/eyewear-collections">
                <Img
                  sizes={Images['img05']}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}
                />
                <div className="services__caption">
                  <div className="services__wrap">
                    <div className="services__icon">
                      <img src="/images/icon07.png" alt="Eyewear experts" />
                    </div>
                    <strong className="services__title">Eyewear experts</strong>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/what-we-do/contact-lenses">
                <Img
                  sizes={Images['img06']}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}
                />
                <div className="services__caption">
                  <div className="services__wrap">
                    <div className="services__icon">
                      <img src="/images/icon02.png" alt="Bespoke Contact Lenses" />
                    </div>
                    <strong className="services__title">Bespoke Contact Lenses</strong>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/what-we-do/childrens-vision">
                <Img
                  sizes={Images['img07']}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}
                />
                <div className="services__caption">
                  <div className="services__wrap">
                    <div className="services__icon">
                      <img src="/images/icon03.png" alt="Paediatric Vision" />
                    </div>
                    <strong className="services__title">Paediatric Vision</strong>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/what-we-do/dry-eye-disease">
                <Img
                  sizes={Images['img08']}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}
                />
                <div className="services__caption">
                  <div className="services__wrap">
                    <div className="services__icon">
                      <img src="/images/icon04.png" alt="Dry Eye Clinic" />
                    </div>
                    <strong className="services__title">Dry Eye Clinic</strong>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/what-we-do/oct">
                <Img
                  sizes={Images['img09']}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}
                />
                <div className="services__caption">
                  <div className="services__wrap">
                    <div className="services__icon">
                      <img src="/images/icon05.png" alt="Advanced Imaging Technology" />
                    </div>
                    <strong className="services__title">Advanced Imaging Technology</strong>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/what-we-do/orthokeratology-corneal-reshaping">
                <Img
                  sizes={Images['img10']}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}
                />
                <div className="services__caption">
                  <div className="services__wrap">
                    <div className="services__icon">
                      <img src="/images/icon06.png" alt="Overnight vision correction" />
                    </div>
                    <strong className="services__title">ORTHO-K: <br/> Overnight vision correction</strong>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="content-section__haeding heading--small-font">
              <h2>Meet the Team</h2>
              <p>Our optometrists are industry leaders. Our special interests include <br/> contact lenses, paediatric
                vision
                and therapeutic optometry.</p>
            </div>
          </div>
          <ul className="team-list">
            <li className="employee-box open-close">
              <div className="employee-inner hover-elem">
                <Img fluid={UploadedImages['lachlan-hoy']} alt="" />
                <Link to="/who-we-are/lachlan-hoy" className="employee-inner__rollover ">
                  <div className="employee-inner__rollover__box">
                    <strong className="name">Lachlan Hoy</strong>
                    <span className="position">Therapeutic Optometrist BAppSc(Optom)Hons FIAO FCCLSA</span>
                    <span className="btn-opener"><i className="icon-zoom" /></span>
                  </div>
                </Link>
              </div>
            </li>
            <li className="employee-box open-close">
              <div className="employee-inner hover-elem">
                <Img fluid={UploadedImages['karl-1']} alt="" />
                <Link to="/who-we-are/karl-evans" className="employee-inner__rollover ">
                  <div className="employee-inner__rollover__box">
                    <strong className="name">Karl Evans</strong>
                    <span className="position">Therapeutic Optometrist</span>
                    <span className="btn-opener"><i className="icon-zoom"/></span>
                  </div>
                </Link>
              </div>
            </li>
            <li className="employee-box open-close">
              <div className="employee-inner hover-elem">
                <Img fluid={UploadedImages['mark-1']} alt="" />
                <Link to="/who-we-are/mark-parsons" className="employee-inner__rollover ">
                  <div className="employee-inner__rollover__box">
                    <strong className="name">Mark Parsons</strong>
                    <span className="position">Optometrist</span>
                    <span className="btn-opener"><i className="icon-zoom"/></span>
                  </div>
                </Link>
              </div>
            </li>
            <li className="employee-box open-close">
              <div className="employee-inner hover-elem">
                <Img fluid={UploadedImages['joanna-1']} alt="" />
                <Link to="/who-we-are/joanna-rohrlach" className="employee-inner__rollover ">
                  <div className="employee-inner__rollover__box">
                    <strong className="name">Joanna Rohrlach</strong>
                    <span className="position">Therapeutic Optometrist</span>
                    <span className="btn-opener"><i className="icon-zoom"/></span>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-section simple-section content-section--white-color content-section--with-overlay blue--overlay text-center">
          <Img
            sizes={Images['img31']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="content-section__haeding haeding--extra-large text-uppercase">
              <strong className="haeding__top-text">Inside out, back to front, on and off your eyes - we know <br/>
                <strong
                  className="large-text text-uppercase"
                >CONTACT LENSES</strong>
              </strong>
            </div>
          </div>
        </div>
        <div className="content-section lenses-information content-section--white-color">
          <div className="bg-holder">
            <img src="/images/bg-box02.jpg" alt="" />
          </div>
          <div className="container">
            <div className="container__wrap container--left-position">
              <div className="content-section__haeding">
                <strong className="haeding-top-text haeding--extra-large">Contact Lenses</strong>
              </div>
              <div className="lenses-holder">
                <dl className="lenses__list">
                  <dt className="text-left"><span>DAILY DISPOSABLE</span></dt>
                  <dd><span>MONTHLY DISPOSABLE</span></dd>
                </dl>
                <dl className="lenses__list">
                  <dt><span>BESPOKE</span></dt>
                  <dd><span>RIGID GAS PERMEABLE (RGP)</span></dd>
                </dl>
                <dl className="lenses__list lenses--small-width">
                  <dt><span>SCLERAL</span></dt>
                  <dd className="hidden"/>
                </dl>
                <dl className="lenses__list">
                  <dt className="text-left"><span>ORTHO-К</span></dt>
                  <dd><span>FOR MYOPIA CONTROL</span></dd>
                </dl>
                <dl className="lenses__list">
                  <dt><span>FOR <br/> CHILDREN</span></dt>
                  <dd><span>FOR KERATOCONUS</span></dd>
                </dl>
                <dl className="lenses__list lenses--small-width">
                  <dt><span>FOR <br/> ATHLETES</span></dt>
                  <dd className="hidden"/>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section ortho-section content-section--white-color content-section__black-bg">
          <div className="bg-holder bg--left-position">
            <Img fluid={Images['bg-box']} alt="" />
          </div>
          <div className="container">
            <div className="container__wrap container--right-postion">
              <div className="content-section__haeding">
                <strong className="haeding-top-text haeding--extra-large">Ortho-K - Just your own eyes</strong>
              </div>
              <ul className="lenses-info same-height">
                <li>
                  <div className="lenses__image height">
                    <img src="/images/img33.png" alt="" />
                  </div>
                  <strong className="lenses-info__title">SIMPLE</strong>
                  <p>See without lenses during the day</p>
                </li>
                <li>
                  <div className="lenses__image height">
                    <img src="/images/img34.png" alt="" />
                  </div>
                  <strong className="lenses-info__title">EFFORTLESS</strong>
                  <p>Lenses work while you sleep</p>
                </li>
                <li>
                  <div className="lenses__image height">
                    <img src="/images/img35.png" alt="" />
                  </div>
                  <strong className="lenses-info__title">NON-SURGICAL</strong>
                  <p>Just put contacts in</p>
                </li>
                <li>
                  <div className="lenses__image height">
                    <img src="/images/img36.png" alt="" />
                  </div>
                  <strong className="lenses-info__title">BESPOKE</strong>
                  <p>Individually made lenses</p>
                </li>
                <li>
                  <div className="lenses__image height">
                    <img src="/images/img37.png" alt="" />
                  </div>
                  <strong className="lenses-info__title">REVERSIBLE</strong>
                  <p>Stop at any time</p>
                </li>
              </ul>
              <Link
                to="/what-we-do/orthokeratology-corneal-reshaping"
                className="btn btn--white btn--small">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="content-section online-book-section">
          <Img
            sizes={Images['img38']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="online-box">
              <div className="online-box-heading">
                <h2>Book Online - It’s easy</h2>
              </div>
              <p>We’ve made it super easy to schedule your next appointment with our online booking system.</p>
              <Link to="/contact" className="btn btn--light-blue">BOOK NOW</Link>
            </div>
          </div>
        </div>
        <div className="content-section simple-section content-section--white-color content-section--with-overlay white--overlay text-center">
          <Img
            sizes={Images['img30']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="content-section__haeding haeding__with-extra-border">
              <strong className="haeding__top-text top-text--small">Tell your friends about us so they can see their
                best
                too!</strong>
              <p>Help us build our community of healthy eyes</p>
            </div>
            <strong className="promo-text">Exceptional eye care for your
              friend <span>$50 Gift Card for you</span></strong>
          </div>
          <div className="icon-logo icon-logo--left">
            <img src="/images/icon-logo02.png" alt="Innovative Eye Care" />
          </div>
        </div>
        <div className="content-section symptoms-section text-center">
          <div className="container">
            <div className="container__wrap container--left-position">
              <strong className="statistic-text"><span className="small-text">Between</span> <span
                className="large-text">5 and 35%</span>
                of us suffer from dry eye disease</strong>
              <ul className="symptoms-list same-height">
                <li>
                  <div className="hold">
                    <strong className="symptoms__label">Symptoms <br/> Include:</strong>
                  </div>
                </li>
                <li>
                  <div className="hold">
                    <div className="symptoms__img height">
                      <img src="/images/eye01.png" alt="STINGING &amp; BURNING" />
                    </div>
                    <strong className="symptoms__title">STINGING &amp; BURNING</strong>
                  </div>
                </li>
                <li>
                  <div className="hold">
                    <div className="symptoms__img height extra-size">
                      <img src="/images/eye02.png" alt="GRITTY SENSATION" />
                    </div>
                    <strong className="symptoms__title">GRITTY SENSATION</strong>
                  </div>
                </li>
                <li>
                  <div className="hold">
                    <div className="symptoms__img height">
                      <img src="/images/eye03.png" alt="REDNESS" />
                    </div>
                    <strong className="symptoms__title">REDNESS</strong>
                  </div>
                </li>
                <li>
                  <div className="hold">
                    <div className="symptoms__img height">
                      <img src="/images/eye04.png" alt="WATERINESS" />
                    </div>
                    <strong className="symptoms__title">WATERINESS</strong>
                  </div>
                </li>
                <li>
                  <div className="hold">
                    <div className="symptoms__img height">
                      <img src="/images/eye05.png" alt="BLURRY VISION" />
                    </div>
                    <strong className="symptoms__title">BLURRY VISION</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="symptoms-image">
            <Img fluid={Images['img29']} alt="" />
          </div>
        </div>
        <div className="content-section simple-section content-section--white-color content-section--with-overlay blue--overlay text-center">
          <Img
            sizes={Images['img28']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="content-section__haeding haeding--extra-large text-uppercase">
              <strong className="haeding__top-text">Dry eye disease reduces quality of life as much as angina</strong>
            </div>
          </div>
        </div>
        <div className="eye-problems-section blue-bg content-section--white-color text-center">
          <div className="container">
            <div className="content__text-wrap">
              <p>Sufferers of dry eyes have difficulties in these main areas:</p>
            </div>
            <ul className="eye-problems same-height">
              <li>
                <div className="eye-problems__img height">
                  <img src="/images/img-working.png" alt="working" />
                </div>
                <strong className="problems__title">WORKING</strong>
              </li>
              <li>
                <div className="eye-problems__img height">
                  <img src="/images/img-computer.png" alt="computer" />
                </div>
                <strong className="problems__title">USING A COMPUTER</strong>
              </li>
              <li>
                <div className="eye-problems__img height">
                  <img src="/images/img-tv.png" alt="tv" />
                </div>
                <strong className="problems__title">WATCHING TV</strong>
              </li>
              <li>
                <div className="eye-problems__img height">
                  <img src="/images/img-books.png" alt="books" />
                </div>
                <strong className="problems__title">READING</strong>
              </li>
              <li>
                <div className="eye-problems__img height">
                  <img src="/images/img-car.png" alt="car" />
                </div>
                <strong className="problems__title">DRIVING</strong>
              </li>
            </ul>
            <div className="ipl__footer">
              <strong className="idl__promo-text">The good news is, dry eye disease can be treated.</strong>
              <a href="http://www.tearfilm.org/dewsreport/pdfs/The%20Epidemiology%20of%20Dry%20Eye%20Disease.pdf"
                 className="source-link">Source</a>
            </div>
          </div>
        </div>
        <div className="content-section ipl-section text-center">
          <Img
            sizes={Images['img27']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="content-section__haeding haeding__with-extra-border heading--small-font">
              <h2>IPL (Intese Pulsed Light)</h2>
              <div className="heading__wrap">
                <p>IPL for dry eye disease is revolutionary. Our E-Eye IPL machine generates flashes of homogenous light
                  to the skin around the eyelid, stimulating glands to produce healthy tear film.</p>
              </div>
            </div>
            <strong className="ipl-section__sub-heading">We are the first practice in South Australia to offer IPL
              treatment for dry eye disease</strong>
            <div className="three-columns same-height">
              <div className="three-columns__item">
                <div className="roundered__img blue-border">
                  <img src="/images/img24.jpg" alt="" />
                </div>
                <strong className="roundered__title height blue-color">DRY EYE RELIEF</strong>
                <p>Experience dry eye relief for up 2 years</p>
              </div>
              <div className="three-columns__item">
                <div className="roundered__img blue-border">
                  <img src="/images/img25.jpg" alt="" />
                </div>
                <strong className="roundered__title height blue-color">LONG LASTING</strong>
                <p>Accumulate the benefits - relief lasts longer after each treament</p>
              </div>
              <div className="three-columns__item">
                <div className="roundered__img blue-border">
                  <img src="/images/img26.jpg" alt="" />
                </div>
                <strong className="roundered__title height blue-color">LESS NEED FOR EYE DROPS</strong>
                <p>Stop the constant use of lubricating eye drops</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section eye-care-section content-section--white-color content-section--with-overlay black--overlay text-center">
          <Img
            sizes={Images['img20']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div className="content-section__haeding haeding--extra-large text-uppercase">
              <strong className="haeding__sub-text">Eye care is not what it used to be.</strong>
              <strong className="haeding-top-text haeding--extra-large">It's better</strong>
            </div>
            <strong className="ipl-section__sub-heading full-width">Technology today means we can find out more about
              your eyes than ever before. Our equipment includes:</strong>
            <div className="three-columns same-height">
              <div className="three-columns__item">
                <div className="roundered__img">
                  <img src="/images/img21.jpg" alt="" />
                </div>
                <strong className="roundered__title height">OPTICAL COHERENCE TOMOGRAPHY</strong>
              </div>
              <div className="three-columns__item">
                <div className="roundered__img">
                  <Img fluid={Images['img22']} alt="" />
                  <img src="/images/img22.jpg" alt="" />
                </div>
                <strong className="roundered__title height">RETINAL FUNDUS PHOTOGRAPHY</strong>
              </div>
              <div className="three-columns__item">
                <div className="roundered__img">
                  <img src="/images/img23.jpg" alt="" />
                </div>
                <strong className="roundered__title height">CORNEAL TOPOGRAPHY</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section address-section content-section--white-color">
          <Img
            sizes={Images['img19']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="icon-logo">
            <Img fluid={Images['icon-logo']} alt="innovative eye care" />
          </div>
          <div className="container">
            <div className="address-information">
              <div className="address__image">
                <Img fluid={Images['logo-australia']} alt="south australia" />
              </div>
              <div className="address__description container__wrap">
                <div className="content-section__haeding haeding--large-heading">
                  <h2>We’re just around the corner</h2>
                </div>
                <ul className="address__list">
                  <li><i className="icon-location"/> We’re independent and South Australian owned and operated.</li>
                  <li><i className="icon-hands"/> Supporting local business is important to us.</li>
                  <li><i className="icon-smile"/>We’re part of something great, and we’re proud of it.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section subscribe-section content-section--with-overlay blue--overlay content-section--white-color">
          <Img
            sizes={Images['img18']}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="container">
            <div
              className="content-section__haeding haeding--large-heading haeding--without-border haeding--medium-font">
              <strong className="haeding-top-text haeding--extra-large">Keep in Touch</strong>
              <p>We keep our finger on the pulse of the latest advances in eye care. Stay up to date with your eyes,
                plus be the
                first to hear about discounts on spectacles, sunglasses and solutions.</p>
              <strong className="content-section__add-heding">We will even make it interesting</strong>
              <div
                className="createsend-button"
                style={{height: '27px', display: 'inline-block'}}
                data-listid="i/72/8F9/A2C/3B195BB0D66BEAA7"
              >
              </div>
            </div>
          </div>
        </div>
        <div className="content-section join-section content-section--gray">
          <div className="decorate-image image__cup">
            <img src="/images/img-cup.jpg" alt="" />
          </div>
          <div className="container">
            <div className="content-section__haeding haeding--large-heading haeding--without-border">
              <h2>Join the Community</h2>
              <strong className="content-section__sub-heding">Like our Facebook page</strong>
              <a href="https://www.facebook.com/innovativeeyecareadelaide" className="btn btn--small">get started</a>
              <div className="decorate-image">
                <img src="/images/img16.png" alt=""/>
              </div>
              <div className="decorate-image decorate-image--right">
                <img src="/images/img17.jpg" alt=""/>
              </div>
            </div>
            <div className="browser-preview">
              <Img fluid={Images['img15']} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Index;

export const pageQuery = graphql`
    {
        imageFiles: allFile(filter: {relativePath: {regex: "/images/.*\\\\.(jpg|png)$/"}}) {
            edges {
                node {
                    name
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        uploadFiles: allFile(filter: {relativePath: {regex: "/uploads/.*\\\\.(jpg|png)$/"}}) {
            edges {
                node {
                    name
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
