import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../../components/Header"
import TopNav from "../../components/TopNav"
import Footer from "../../components/Footer-old"
import OnlineBooking from "../../components/OnlineBooking"
import Img from "gatsby-image"

export default function (props) {
  if (!props.data) {
    console.log(`*** WhoWeAreTemplate.Detail... NO STATE`)
    return <div>NO STATE</div>
  }
  const { introBGImage, markdownRemark } = props.data

  return (
    <>
      <Helmet>
        <title>{markdownRemark.frontmatter.title}</title>
      </Helmet>
      <Header />
      <TopNav />

      <div className="intro-section">
        <Img
          sizes={introBGImage.childImageSharp.fluid}
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
          <div className="intro-section__wrap">
            <div className="intro-section__heading">
              <h2 className="intro-section__title">Who We Are</h2>
            </div>
            <div className="intro-section__row">
              <div className="intro-section__col intro-section__col_content">
                <p>
                  <b>We are a team of industry leaders.</b> As practitioners, we
                  firmly believe in comprehensive care. As innovators, we
                  provide this care with the most up-to-date technology,
                  knowledge, products and services available. As people, we
                  value each one of our patients and their individual needs.
                </p>
                <p>
                  Our practice is proudly independent and South Australian owned
                  and operated. Part of a long legacy of optometry in Adelaide
                  and surrounds, we welcome generations of family members as
                  they continue in our care.
                </p>
                <h3>Book online - it’s easy</h3>
                <Link to="/contact" className="btn btn_medium btn--light-blue">
                  BOOK now
                </Link>
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
                      <span className="list-text">
                        Advanced Imaging Technology
                      </span>
                    </Link>
                  </li>
                  <li>
                    <span className="ico-holder">
                      <img src="/images/icon06.png" alt="" />
                    </span>
                    <Link to="/what-we-do/orthokeratology-corneal-reshaping">
                      <span className="list-text">
                        Ortho-K: Overnight Vision Correction
                      </span>
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
        <div className="employee-box open-close ">
          <div className="employee-slide ">
            <div
              className="employee-slide__inner"
              style={{ paddingTop: "10px" }}
            >
              <div className="container">
                <div className="content-wrap">
                  <h1>{markdownRemark.frontmatter.title}</h1>
                  <div className="employee-slide__row">
                    <div className="employee-slide__col employee-slide__col-content">
                      <div className="employee-heading">
                        <h4>{markdownRemark.frontmatter.jobtitle}</h4>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: markdownRemark.html,
                        }}
                      />
                    </div>
                    <div className="employee-slide__col employee-slide__col-sidebar">
                      <img
                        src={`${markdownRemark.frontmatter.photo}`}
                        style={{ marginBottom: "50px" }}
                        alt=""
                      />
                      <div className="employee-heading">
                        <h4>Interests</h4>
                      </div>
                      <ul className="progress-list">
                        <li>
                          <strong className="progress-list__label">
                            {markdownRemark.frontmatter.skill1}
                          </strong>
                          <div className="progressbar">
                            <span
                              className="line"
                              style={{
                                width: markdownRemark.frontmatter.rating1 + "%",
                              }}
                            />
                          </div>
                        </li>
                        <li>
                          <strong className="progress-list__label">
                            {markdownRemark.frontmatter.skill2}
                          </strong>
                          <div className="progressbar">
                            <span
                              className="line"
                              style={{
                                width: markdownRemark.frontmatter.rating2 + "%",
                              }}
                            />
                          </div>
                        </li>
                        <li>
                          <strong className="progress-list__label">
                            {markdownRemark.frontmatter.skill3}
                          </strong>
                          <div className="progressbar">
                            <span
                              className="line"
                              style={{
                                width: markdownRemark.frontmatter.rating3 + "%",
                              }}
                            />
                          </div>
                        </li>
                        <li>
                          <strong className="progress-list__label">
                            {markdownRemark.frontmatter.skill4}
                          </strong>
                          <div className="progressbar">
                            <span
                              className="line"
                              style={{
                                width: markdownRemark.frontmatter.rating4 + "%",
                              }}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OnlineBooking />
      <Footer />
    </>
  )
}

export const WhoWeAreSingleQuery = graphql`
  query WhoWeAreById($id: String) {
    markdownRemark: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        jobtitle
        photo
        skill1
        skill2
        skill3
        skill4
        rating1
        rating2
        rating3
        rating4
      }
      id
      html
    }
    introBGImage: file(relativePath: { eq: "images/intro-bg.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
