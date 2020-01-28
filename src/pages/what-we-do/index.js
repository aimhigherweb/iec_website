import React, {Component} from 'react';
import { graphql, Link } from 'gatsby';
import videojs from 'video.js';
import $ from 'jquery';
import {Helmet} from "react-helmet";

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";

class WhatWeDo extends Component {

  playMainVideo = () => {
    $("#play-video-button").hide();
    $(".main-video__container").slideDown();
    videojs('main-video').play();
  };

  render() {
    const { data } = this.props;
    const list = data.allMarkdownRemark.edges;

    return (
      <>
        <Helmet>
          <title>What We Do | Innovative Eye Care</title>
        </Helmet>
        <Header />
        <TopNav />

        <div
          className="who-we-are__header content-section simple-section content-section--white-color content-section--with-overlay white--overlay text-center"
          style={{backgroundImage: 'url(/images/WHAT_WE-DO_HeaderImage.jpg)'}}
        >
          <div className="container">
            <div className="content-section__haeding video-section__heading">
              <h1 className="haeding__top-text top-text--small">What We Do</h1>
            </div>
            <div className="main-video__container" hidden>
              <video
                id="main-video"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{"fluid":true}'
              >
                <track kind="captions" />
                <source src="/videos/what-we-do.mp4" type="video/mp4"/>
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
        <div
          className="intro-section"
          style={{backgroundImage: 'url(/images/intro-bg.png)'}}
        >
          <div className="container">
            <div className="intro-section__wrap">
              <div className="intro-section__row">
                <div className="intro-section__col intro-section__col_content">
                  <p><em>'Your eyes are our focus, all day, every day.’</em></p>
                  <p>
                    We do things a little differently here. Every aspect of your vision
                    and eye health is important to us, and each one of you has a unique
                    combination of needs. Our mission is to provide the best optometric
                    care possible to meet those needs.
                  </p>
                  <p>
                    We use state-of-the-art technology for testing, the highest quality
                    customised products, and the most personalised service. Our
                    solutions span bespoke contact lenses, spectacles, vision training
                    and therapeutic treatments. We support Australian made.
                  </p>
                </div>
                <div className="intro-section__col intro-section__col_sidebar">
                  <ul className="intro-section__list">
                    <li>
                      <span className="ico-holder"> <img src="/images/icon01.png" alt="" /> </span>
                      <Link to="/what-we-do/eyewear-collections">
                        <span className="list-text">Eyewear Experts</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder"> <img src="/images/icon02.png"alt="" /> </span>
                      <Link to="/what-we-do/contact-lenses">
                        <span className="list-text">Bespoke Contact Lenses</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder"> <img src="/images/icon03.png"alt="" /> </span>
                      <Link to="/what-we-do/childrens-vision">
                        <span className="list-text">Paediatric Vision</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder"> <img src="/images/icon04.png"alt="" /> </span>
                      <Link to="/what-we-do/dry-eye-disease">
                        <span className="list-text">Dry Eye Clinic</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder"> <img src="/images/icon05.png"alt="" /> </span>
                      <Link to="/what-we-do/oct">
                        <span className="list-text">Advanced Imaging Technology</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder"> <img src="/images/icon06.png"alt="" /> </span>
                      <Link to="/what-we-do/orthokeratology-corneal-reshaping">
                        <span className="list-text">Ortho-K: Overnight Vision Correction</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className="intro-section__rectangle">
            <img src="/images/rectangle-img.png" alt="" />
          </span>
        </div>
        <div className="what-we-do-section">
          <ul className="what-we-do-list">
            <li
              className="what-we-do-box"
            >
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/1-Consultations.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon01.png" alt="" />
                  </div>
                  <strong className="services__title">Consultations </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon01.png" alt="" />
                    </div>
                    <strong className="name">Consultations</strong>
                    <span className="description">
                      We welcome all new patients. Book online or give us a call today.
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'consultations' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/2-EyewearExperts.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon07.png" alt="" />
                  </div>
                  <strong className="services__title">Eyewear Experts </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon07.png" alt="" />
                    </div>
                    <strong className="name">Eyewear Experts</strong>
                    <span className="description">
                      You see the world through your eyewear. We want to enhance it with quality frames and lenses.
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'eyewear-experts' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/3-ContactLenses.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon02.png" alt="" />
                  </div>
                  <strong className="services__title">Contact Lenses </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon02.png" alt="" />
                    </div>
                    <strong className="name">Contact Lenses</strong>
                    <span className="description">
                      We fit rigid and soft lenses to your eyes. Benefit from the latest in contact lens technology.
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'contact-lenses' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/4-Ortho-K.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon06.png" alt="" />
                  </div>
                  <strong className="services__title">Ortho-K </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon06.png" alt="" />
                    </div>
                    <strong className="name">Ortho-K</strong>
                    <span className="description">
                      Experience the freedom of ortho-K overnight reshaping contact lens molds.
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'orthok' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/5-RefractiveConditions.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon08.png" alt="" />
                  </div>
                  <strong className="services__title">Refractive Conditions </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon08.png" alt="" />
                    </div>
                    <strong className="name">Refractive Conditions</strong>
                    <span className="description">
                      Are you long-sighted or short-sighted? Is your vision changing? What does it all mean?
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'refractive-conditions' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/6-PaediatricVision.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon03.png" alt="" />
                  </div>
                  <strong className="services__title">Paediatric Vision </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon03.png" alt="" />
                    </div>
                    <strong className="name">Paediatric Vision</strong>
                    <span className="description">
                      Children’s vision is crucial to learning and quality of life. Help your child achieve their very best sight!
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'paediatric-vision' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/7-DryEyeClinic.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon04.png" alt="" />
                  </div>
                  <strong className="services__title">Dry Eye Clinic </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon04.png" alt="" />
                    </div>
                    <strong className="name">Dry Eye Clinic</strong>
                    <span className="description">
                      Dry eye disease is debilitating, but it is treatable. What is the cause of your dry eye disease?
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'dry-eye-clinic' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/8-AcuteRedEyes.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon09.png" alt="" />
                  </div>
                  <strong className="services__title">Acute Red Eyes </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon09.png" alt="" />
                    </div>
                    <strong className="name">Acute Red Eyes</strong>
                    <span className="description">
                      If you have a sudden-onset red eye condition, it is critical to see a health professional to reduce the risk of permanent damage.
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'acute-red-eyes' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/9-AdvancedImagingTechnology.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon05.png" alt="" />
                  </div>
                  <strong className="services__title">Advanced Imaging Technology </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon05.png" alt="" />
                    </div>
                    <strong className="name">Advanced Imaging Technology</strong>
                    <span className="description">
                      As innovators, we love technology. Your optometric care is more scientific and accurate than ever before.
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'advanced-imaging-technology' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/10-EyeDisease.jpg)'}}
              >
                <div className="overlay">
                  <div className="services__icon">
                    <img src="/images/icon10.png" alt="" />
                  </div>
                  <strong className="services__title">Eye Disease </strong>
                </div>
                <div className="what-we-do-inner__rollover opener">
                  <div className="what-we-do-inner__rollover__box">
                    <div className="what-we-do-inner__icon">
                      <img src="/images/icon10.png" alt="" />
                    </div>
                    <strong className="name">Eye Disease</strong>
                    <span className="description">
                      We diagnose, monitor and treat a variety of eye diseases. Talk to us about your eye health and preventive measures.
                    </span>
                    <ul className="links">
                      {
                        list.map(({ node }, i ) => node.frontmatter.category === 'eye-disease' ?
                          (<li key={i}>
                            <Link to={ `/what-we-do/${node.parent.name}` }> { node.frontmatter.title }</Link>
                          </li>) : ''
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="what-we-do-box what-we-do-box-double">
              <div
                className="what-we-do-inner hover-elem"
                style={{backgroundImage: 'url(/images/img30-lilac.jpg)'}}
              >
                <div className="container">
                  <div className="content-section--white-color">
                    <div className="content-section__haeding haeding__with-extra-border">
                      <strong className="haeding__top-text top-text--small"
                      >Tell your friends about us so they can see their best
                        too!</strong
                      >
                      <p>Help us build our community of healthy eyes</p>
                    </div>
                    <strong className="promo-text"
                    >Exceptional eye care for your friend
                      <span>$50 Gift Card for you</span></strong
                    >
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="content-section online-book-section"
          style={{backgroundImage: 'url(/images/img38.jpg)'}}
        >
          <div className="container">
            <div className="online-box">
              <div className="online-box-heading"><h2>Book Online - It’s easy</h2></div>
              <p>
                We’ve made it super easy to schedule your next appointment with our
                online booking system.
              </p>
              <Link to="/contact" className="btn btn--light-blue">BOOK NOW</Link>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default WhatWeDo;

export const query = graphql`
    query WhatWeDoQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(what-we-do)/.*\\\\.md$/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        category
                    }
                    parent {
                        ... on File {
                            name
                        }
                    }
                }
            }
        }
    }
`;
