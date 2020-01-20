import React, {Component} from 'react';
import {Link} from 'gatsby';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";
import OnlineBooking from "../../layouts/partials/online-booking";

class WhoWeAre extends Component {

  render() {
    const { data } = this.props;
    const list = data.allMarkdownRemark.edges;

    return (
      <>
        <Header />
        <TopNav />

        <div
          className="who-we-are__header content-section simple-section content-section--white-color content-section--with-overlay white--overlay text-center"
          style={{backgroundImage: 'url(/images/WHO-WE-ARE_HeaderImage.jpg)'}}
        >
          <div className="container">
            <div className="content-section__haeding video-section__heading">
              <h1 className="haeding__top-text top-text--small">Who We Are</h1>
            </div>
            <div className="main-video__container">
              <video
                id="main-video"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                autoPlay
                muted
                preload="auto"
                data-setup='{"fluid":true}'
              >
                <track kind="captions" />
                <source src="/videos/who-we-are.mp4" type='video/mp4' />
              </video>
            </div>
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
                  <p><b>We are a team of industry leaders.</b> As practitioners, we firmly believe in comprehensive
                    care. As innovators, we provide this care with the most up-to-date technology, knowledge,
                    products and services available. As people, we value each one of our patients and their
                    individual needs.</p>
                  <p>Our practice is proudly independent and South Australian owned and operated. Part of a long
                    legacy of optometry in Adelaide and surrounds, we welcome generations of family members as they
                    continue in our care.</p>
                  <h3>Book online - it’s easy</h3>
                  <Link
                    to="/contact"
                    className="btn btn_medium btn--light-blue"
                  >BOOK NOW</Link>
                </div>
                <div className="intro-section__col intro-section__col_sidebar">
                  <ul className="intro-section__list">
                    <li>
                      <span className="ico-holder">
                        <img src="/images/icon01.png" alt="" />
                      </span>
                      <Link to="/what-we-do/eyewear-collections">
                        <span className="list-text">Eyewear Experts</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        <img src="/images/icon02.png" alt="" />
                      </span>
                      <Link to="/what-we-do/contact-lenses">
                        <span className="list-text">Bespoke Contact Lenses</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        <img src="/images/icon03.png" alt="" />
                      </span>
                      <Link to="/what-we-do/childrens-vision">
                        <span className="list-text">Paediatric Vision</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        <img src="/images/icon04.png" alt="" />
                      </span>
                      <Link to="/what-we-do/dry-eye-disease">
                        <span className="list-text">Dry Eye Clinic</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        <img src="/images/icon05.png" alt="" />
                      </span>
                      <Link to="/what-we-do/oct">
                        <span className="list-text">Advanced Imaging Technology</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        <img src="/images/icon06.png" alt="" />
                      </span>
                      <Link to="/what-we-do/orthokeratology-corneal-reshaping">
                        <span className="list-text">Ortho-K: Overnight  Vision Correction</span>
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

        <div className="content-section">
          <div className="container">
            <div className="content-section__haeding heading--small-font">
              <h2>Meet the Team</h2>
              <p>Our optometrists are industry leaders. Our special interests include <br/> contact lenses, paediatric
                vision and therapeutic optometry.</p>
            </div>
          </div>
          <div>
            <ul className="team-list">
              {
                list.map(({ node }, i ) => {
                  return (
                    <li className="employee-box open-close" key={i}>
                      <div className="employee-inner hover-elem">
                        <img src={'/uploads/' + node.frontmatter.photo}  alt=""/>
                        <Link to={'/who-we-are/' + node.parent.name} className="employee-inner__rollover ">
                          <div className="employee-inner__rollover__box">
                            <strong className="name">{ node.frontmatter.title }</strong>
                            <span className="position">{ node.frontmatter.jobtitle }</span>
                            <span className="btn-opener"><i className="icon-zoom"/></span>
                          </div>
                        </Link>
                      </div>
                      <div className="employee-slide slide-content">
                      <div className="employee-slide__inner">
                        <div className="container">
                          <div className="content-wrap">
                            <h3>{ node.frontmatter.title }</h3>
                            <div className="employee-slide__row">
                              <div className="employee-slide__col employee-slide__col-content">
                                <div className="employee-heading">
                                  <h4>{ node.frontmatter.jobtitle }</h4>
                                </div>
                                <p>{ node.html }</p>
                              </div>
                              <div className="employee-slide__col employee-slide__col-sidebar">
                                <div className="employee-heading">
                                  <h4>Interests</h4>
                                </div>
                                <ul className="progress-list">
                                  <li>
                                    <strong className="progress-list__label">{ node.frontmatter.skill1 }</strong>
                                    <div className="progressbar">
                                      <span className="line" style={{width: node.frontmatter.rating1 + '%'}}/>
                                    </div>
                                  </li>
                                  <li>
                                    <strong className="progress-list__label">{ node.frontmatter.skill2 }</strong>
                                    <div className="progressbar">
                                      <span className="line" style={{width: node.frontmatter.rating2 + '%' }}/>
                                    </div>
                                  </li>
                                  <li>
                                    <strong className="progress-list__label">{ node.frontmatter.skill3 }</strong>
                                    <div className="progressbar">
                                      <span className="line" style={{width: node.frontmatter.rating3 + '%'}}/>
                                    </div>
                                  </li>
                                  <li>
                                    <strong className="progress-list__label">{ node.frontmatter.skill4 }</strong>
                                    <div className="progressbar">
                                      <span className="line" style={{width: node.frontmatter.rating4 + '%'}}/>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <div
          className="timeline-section"
          style={{backgroundImage: 'url(/images/brickwall-bg.png)'}}
        >
          <div className="container">
            <div className="timeline-section__timeline-wrap">
              <span className="year-box year-box_start">2016</span>
              <ul className="timeline-list">
                <li className="timeline__item timeline__item_1">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">2016</strong>
                      <div className="timeline__content">
                        <p><b>North Terrace Optometrists</b> merges with <b>Innovative Eye Care:</b> the team expands</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline__item timeline__item_2">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">2012</strong>
                      <div className="timeline__content">
                        <p><b>Ron Fieldhouse</b> retires</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                  </div>
                </li>
                <li className="timeline__item timeline__item_3">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">2010</strong>
                      <div className="timeline__content">
                        <p><b>Lachlan Scott-Hoy</b> purchases <b>R Fieldhouse and Associates</b>, now known as
                          <b>Innovative Eye Care</b></p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline__item timeline__item_4">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">2007</strong>
                      <div className="timeline__content">
                        <p><b>Lachlan Scott-Hoy</b> begins working at <b>R Fieldhouse and Associates</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                  </div>
                </li>
                <li className="timeline__item timeline__item_5">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">2007</strong>
                      <div className="timeline__content">
                        <p><b>Lachlan Scott-Hoy</b> receives the <b>Don Noack Award</b> for excellence in
                          contact lenses</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline__item timeline__item_6">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">1996</strong>
                      <div className="timeline__content">
                        <p>North Terrace practice becomes known as <b>North Terrace Optometrists</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                  </div>
                </li>
                <li className="timeline__item timeline__item_7">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">1984</strong>
                      <div className="timeline__content">
                        <p><b>Kevin Rooney, Mark Parsons</b> and <b>Simon Leong</b> purchase the North Terrace
                          practice</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline__item timeline__item_8">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">1959</strong>
                      <div className="timeline__content">
                        <p><b>R Fieldhouse and Associates</b> is founded by <b>Ron Fieldhouse</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                  </div>
                </li>
                <li className="timeline__item timeline__item_9">
                  <div className="timeline__item__holder timeline__item__holder_alignleft">
                  </div>
                  <div className="timeline__item__holder timeline__item__holder_alignright">
                    <div className="timeline__item__inner">
                      <strong className="timeline__title">1955</strong>
                      <div className="timeline__content">
                        <p><b>Peter Taylor</b> founds practice on North Terrace</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <span className="year-box year-box_end">1959</span>
            </div>
          </div>
        </div>

        <OnlineBooking />
        <Footer />
      </>
    );
  }
}

export default WhoWeAre;

export const query = graphql`
    query DataQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(who-we-are)/.*\\\\.md$/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        photo
                        jobtitle
                        skill1
                        skill2
                        skill3
                        skill4
                        rating1
                        rating2
                        rating3
                        rating4
                    }
                    fileAbsolutePath
                    html
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


