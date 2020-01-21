import React, {Component} from 'react';
import {Link} from 'gatsby';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";

class PatientResources extends Component {

  render() {
    const { data } = this.props;
    const list = data.allMarkdownRemark.edges;

    return (
      <>
        <Header />
        <TopNav />

        <div
          className="content-section"
          style={{paddingTop: 0}}
        >
          <div
            className="intro-section"
            style={{backgroundImage: 'url(/images/intro-bg.png)'}}
          >
            <div className="container">
              <div className="intro-section__wrap">
                <div className="intro-section__row">
                  <div className="intro-section__col intro-section__col_content">
                    <div className="content-section__haeding heading--small-font">
                      <h2>Patient Resources</h2>
                    </div>
                    <p>
                      Your eye care routine will often involve at-home care which our
                      informative team will instruct you in at your appointment. Here you will
                      find useful follow-up resources on how to care for your contact lenses,
                      insert your eye drops or complete your vision training exercises.
                    </p>
                    <p>
                      Your eye care routine will often involve at-home care which our
                      informative team will instruct you in at your appointment. Here you will
                      find useful follow-up resources on how to care for your contact lenses,
                      insert your eye drops or complete your vision training exercises.
                    </p>
                    <p>
                      Your eye care routine will often involve at-home care which our
                      informative team will instruct you in at your appointment. Here you will
                      find useful follow-up resources on how to care for your contact lenses,
                      insert your eye drops or complete your vision training exercises.
                    </p>
                  </div>
                  <div className="intro-section__col intro-section__col_sidebar">
                    <ul className="intro-section__list">
                      <li>
                        <span className="ico-holder"> <img src="/images/icon01.png" alt=""/> </span>
                        <Link to="/what-we-do/eyewear-collections">
                          <span className="list-text">Eyewear Experts</span>
                        </Link>
                      </li>
                      <li>
                        <span className="ico-holder"> <img src="/images/icon02.png" alt=""/> </span>
                        <Link to="/what-we-do/contact-lenses">
                          <span className="list-text">Bespoke Contact Lenses</span>
                        </Link>
                      </li>
                      <li>
                        <span className="ico-holder"> <img src="/images/icon03.png" alt=""/> </span>
                        <Link to="/what-we-do/childrens-vision">
                          <span className="list-text">Paediatric Vision</span>
                        </Link>
                      </li>
                      <li>
                        <span className="ico-holder"> <img src="/images/icon04.png" alt=""/> </span>
                        <Link to="/what-we-do/dry-eye-disease">
                          <span className="list-text">Dry Eye Clinic</span>
                        </Link>
                      </li>
                      <li>
                        <span className="ico-holder"> <img src="/images/icon05.png" alt=""/> </span>
                        <Link to="/what-we-do/oct">
                          <span className="list-text">Advanced Imaging Technology</span>
                        </Link>
                      </li>
                      <li>
                        <span className="ico-holder"> <img src="/images/icon06.png" alt=""/> </span>
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
              <img src="/images/rectangle-img.png" alt=""/>
            </span>
          </div>
          <div className="patient-resources-section">
            <ul className="patient-resources-list">
              <li className="patient-resources-box">
                <div
                  className="patient-resources-inner hover-elem"
                  style={{backgroundImage: 'url(/images/3-ContactLenses.jpg)'}}
                >
                  <div className="overlay">
                    <div className="services__icon">
                      <img src="/images/icon01.png" alt=""/>
                    </div>
                    <strong className="services__title">Contact Lens Instructions</strong>
                  </div>
                  <div className="patient-resources-inner__rollover opener">
                    <div className="patient-resources-inner__rollover__box">
                      <div className="patient-resources-inner__icon">
                        <img src="/images/icon01.png" alt=""/>
                      </div>
                      <strong className="name">Contact Lens Instructions</strong>
                      <span className="description">
                        It's so important to care for your contact lenses correctly. Refresh yourself with these instructions.
                      </span>
                      <ul className="links">
                        {
                          list.map(({ node }, i ) => {
                            if (node.frontmatter.category === 'Contact Lens Instructions') {
                              return (
                                <li key={i}>
                                  <Link to={ `/patient-resources/${node.parent.name}` }> { node.frontmatter.title }</Link>
                                </li>
                              );
                            }
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="patient-resources-box">
                <div
                  className="patient-resources-inner hover-elem"
                  style={{backgroundImage: 'url(/images/10-EyeDisease.jpg)'}}
                >
                  <div className="overlay">
                    <div className="services__icon">
                      <img src="/images/icon07.png" alt=""/>
                    </div>
                    <strong className="services__title">Vision Training</strong>
                  </div>
                  <div className="patient-resources-inner__rollover opener">
                    <div className="patient-resources-inner__rollover__box">
                      <div className="patient-resources-inner__icon">
                        <img src="/images/icon07.png" alt=""/>
                      </div>
                      <strong className="name">Vision Training</strong>
                      <span className="description">
                        These exercises are used to improve binocular vision skills in conjunction with an ongoing program.
                      </span>
                      <ul className="links">
                        {
                          list.map(({ node }, i ) => {
                            if (node.frontmatter.category === 'Vision Training') {
                              return (
                                <li key={i}>
                                  <Link to={ `/patient-resources/${node.parent.name}` }> { node.frontmatter.title }</Link>
                                </li>
                              );
                            }
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="patient-resources-box">
                <div
                  className="patient-resources-inner hover-elem"
                  style={{backgroundImage: 'url(/images/5-RefractiveConditions.jpg)'}}
                >
                  <div className="overlay">
                    <div className="services__icon">
                      <img src="/images/icon02.png" alt=""/>
                    </div>
                    <strong className="services__title">Everyday Eye Care</strong>
                  </div>
                  <div className="patient-resources-inner__rollover opener">
                    <div className="patient-resources-inner__rollover__box">
                      <div className="patient-resources-inner__icon">
                        <img src="/images/icon02.png" alt=""/>
                      </div>
                      <strong className="name">Everyday Eye Care</strong>
                      <span className="description">
                        How does your lifestyle affect your eyes? Achieve your best eye health and vision every day.
                      </span>
                      <span className="sub-title">Using eye drops correctly</span>
                      <ul className="links">
                        {
                          list.map(({ node }, i ) => {
                            if (node.frontmatter.category === 'everyday-eye-care') {
                              return (
                                <li key={i}>
                                  <Link to={ `/patient-resources/${node.parent.name}` }> { node.frontmatter.title }</Link>
                                </li>
                              );
                            }
                          })
                        }
                      </ul>
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
        </div>

        <Footer />
      </>
    );
  }
}

export default PatientResources;

export const query = graphql`
    query PatientResourcesQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(patient-resources)/.*\\\\.md$/"}}) {
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
