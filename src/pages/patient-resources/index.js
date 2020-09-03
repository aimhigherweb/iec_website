import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../../components/Header"
import TopNav from "../../components/TopNav"
import Footer from "../../components/Footer-old"
import HoverBox from "../../components/HoverBox"
import Img from "gatsby-image"

export default function (props) {
  const { imageFiles, introBGImage } = props.data

  let Images = {}

  imageFiles.edges.map(({ node }) => {
    if (node) {
      Images[node.name] = node.childImageSharp.fluid
      return true
    }
    return false
  })

  return (
    <>
      <Helmet>
        <title>Patient Resources | Innovative Eye Care</title>
      </Helmet>
      <Header />
      <TopNav />

      <div className="content-section" style={{ paddingTop: 0 }}>
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
              <div className="intro-section__row">
                <div className="intro-section__col intro-section__col_content">
                  <div className="content-section__haeding heading--small-font">
                    <h2>Patient Resources</h2>
                  </div>
                  <p>
                    Your eye care routine will often involve at-home care which
                    our informative team will instruct you in at your
                    appointment. Here you will find useful follow-up resources
                    on how to care for your contact lenses, insert your eye
                    drops or complete your vision training exercises.
                  </p>
                  <p>
                    Your eye care routine will often involve at-home care which
                    our informative team will instruct you in at your
                    appointment. Here you will find useful follow-up resources
                    on how to care for your contact lenses, insert your eye
                    drops or complete your vision training exercises.
                  </p>
                  <p>
                    Your eye care routine will often involve at-home care which
                    our informative team will instruct you in at your
                    appointment. Here you will find useful follow-up resources
                    on how to care for your contact lenses, insert your eye
                    drops or complete your vision training exercises.
                  </p>
                </div>
                <div className="intro-section__col intro-section__col_sidebar">
                  <ul className="intro-section__list">
                    <li>
                      <span className="ico-holder">
                        {" "}
                        <img src="/images/icon01.png" alt="" />{" "}
                      </span>
                      <Link to="/what-we-do/eyewear-collections">
                        <span className="list-text">Eyewear Experts</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        {" "}
                        <img src="/images/icon02.png" alt="" />{" "}
                      </span>
                      <Link to="/what-we-do/contact-lenses">
                        <span className="list-text">
                          Bespoke Contact Lenses
                        </span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        {" "}
                        <img src="/images/icon03.png" alt="" />{" "}
                      </span>
                      <Link to="/what-we-do/childrens-vision">
                        <span className="list-text">Paediatric Vision</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        {" "}
                        <img src="/images/icon04.png" alt="" />{" "}
                      </span>
                      <Link to="/what-we-do/dry-eye-disease">
                        <span className="list-text">Dry Eye Clinic</span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        {" "}
                        <img src="/images/icon05.png" alt="" />{" "}
                      </span>
                      <Link to="/what-we-do/oct">
                        <span className="list-text">
                          Advanced Imaging Technology
                        </span>
                      </Link>
                    </li>
                    <li>
                      <span className="ico-holder">
                        {" "}
                        <img src="/images/icon06.png" alt="" />{" "}
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
        <div className="patient-resources-section">
          <ul className="patient-resources-list">
            <li className="patient-resources-box">
              <HoverBox
                img={Images["3-ContactLenses"]}
                urlRoot="/patient-resources"
                icon="/images/icon01.png"
                title="Contact Lens Instructions"
                desc="It's so important to care for your contact lenses correctly. Refresh yourself with these instructions."
                articles={props.data.l1.edges}
              />
            </li>
            <li className="patient-resources-box">
              <HoverBox
                img={Images["10-EyeDisease"]}
                urlRoot="/patient-resources"
                icon="/images/icon07.png"
                title="Vision Training"
                desc="These exercises are used to improve binocular vision skills in conjunction with an ongoing program."
                articles={props.data.l2.edges}
              />
            </li>
            <li className="patient-resources-box">
              <HoverBox
                img={Images["5-RefractiveConditions"]}
                urlRoot="/patient-resources"
                icon="/images/icon02.png"
                title="Everyday Eye Care"
                desc="How does your lifestyle affect your eyes? Achieve your best eye health and vision every day."
                articles={props.data.l3.edges}
              />
            </li>
          </ul>
        </div>
        <div className="content-section online-book-section">
          <Img
            sizes={Images["img38"]}
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
              <p>
                We’ve made it super easy to schedule your next appointment with
                our online booking system.
              </p>
              <Link to="/contact" className="btn btn--light-blue">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export const query = graphql`
  query PatientResourcesQuery {
    introBGImage: file(relativePath: { eq: "images/intro-bg.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFiles: allFile(
      filter: { relativePath: { regex: "/images/.*\\\\.(jpg|png)$/" } }
    ) {
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
    list: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(patient-resources)/.*\\\\.md$/" }
      }
    ) {
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
    l1: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(patient-resources)/.*\\\\.md$/" }
        frontmatter: { category: { eq: "Contact Lens Instructions" } }
      }
    ) {
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
    l2: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(patient-resources)/.*\\\\.md$/" }
        frontmatter: { category: { eq: "Vision Training" } }
      }
    ) {
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
    l3: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(patient-resources)/.*\\\\.md$/" }
        frontmatter: { category: { eq: "Everyday Eye Care" } }
      }
    ) {
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
`
