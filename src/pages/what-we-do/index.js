import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import HoverBox from '../../components/HoverBox'

import Header from '../../components/Header'
import TopNav from '../../components/TopNav'
import Footer from '../../components/Footer'
import Img from 'gatsby-image'

export default function(props) {
  const { headerImage, introBGImage, imageFiles } = props.data
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
        <title>What We Do | Innovative Eye Care</title>
      </Helmet>
      <Header />
      <TopNav />

      <div
        className="who-we-are__header content-section simple-section
         content-section--white-color content-section--with-overlay white--overlay text-center"
      >
        <Img
          sizes={headerImage.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
        />
        <div className="container">
          <div className="content-section__haeding video-section__heading">
            <h1 className="haeding__top-text top-text--small">What We Do</h1>
          </div>
          <div className="main-video__container">
            <video
              id="main-video"
              className="video-js vjs-default-skin vjs-big-play-centered"
              controls
              preload="auto"
              data-setup='{"fluid":true}'
            >
              <track kind="captions" />
              <source src="/videos/what-we-do.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="intro-section">
        <Img
          sizes={introBGImage.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
        />
        <div className="container">
          <div className="intro-section__wrap">
            <div className="intro-section__row">
              <div className="intro-section__col intro-section__col_content">
                <p>
                  <em>
                    &apos;Your eyes are our focus, all day, every day.&apos;
                  </em>
                </p>
                <p>
                  We do things a little differently here. Every aspect of your
                  vision and eye health is important to us, and each one of you
                  has a unique combination of needs. Our mission is to provide
                  the best optometric care possible to meet those needs.
                </p>
                <p>
                  We use state-of-the-art technology for testing, the highest
                  quality customised products, and the most personalised
                  service. Our solutions span bespoke contact lenses,
                  spectacles, vision training and therapeutic treatments. We
                  support Australian made.
                </p>
              </div>
              <div className="intro-section__col intro-section__col_sidebar">
                <ul className="intro-section__list">
                  <li>
                    <span className="ico-holder">
                      {' '}
                      <img src="/images/icon01.png" alt="" />{' '}
                    </span>
                    <Link to="/what-we-do/eyewear-collections">
                      <span className="list-text">Eyewear Experts</span>
                    </Link>
                  </li>
                  <li>
                    <span className="ico-holder">
                      {' '}
                      <img src="/images/icon02.png" alt="" />{' '}
                    </span>
                    <Link to="/what-we-do/contact-lenses">
                      <span className="list-text">Bespoke Contact Lenses</span>
                    </Link>
                  </li>
                  <li>
                    <span className="ico-holder">
                      {' '}
                      <img src="/images/icon03.png" alt="" />{' '}
                    </span>
                    <Link to="/what-we-do/childrens-vision">
                      <span className="list-text">Paediatric Vision</span>
                    </Link>
                  </li>
                  <li>
                    <span className="ico-holder">
                      {' '}
                      <img src="/images/icon04.png" alt="" />{' '}
                    </span>
                    <Link to="/what-we-do/dry-eye-disease">
                      <span className="list-text">Dry Eye Clinic</span>
                    </Link>
                  </li>
                  <li>
                    <span className="ico-holder">
                      {' '}
                      <img src="/images/icon05.png" alt="" />{' '}
                    </span>
                    <Link to="/what-we-do/oct">
                      <span className="list-text">
                        Advanced Imaging Technology
                      </span>
                    </Link>
                  </li>
                  <li>
                    <span className="ico-holder">
                      {' '}
                      <img src="/images/icon06.png" alt="" />{' '}
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
      <div className="what-we-do-section">
        <ul className="what-we-do-list">
          <li className="what-we-do-box">
            <HoverBox
              img={Images['1-Consultations']}
              urlRoot="/what-we-do"
              icon="/images/icon01.png"
              title="Consultations"
              desc="We welcome all new patients. Book online or give us a call today."
              articles={props.data.consultations.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['2-EyewearExperts']}
              urlRoot="/what-we-do"
              icon="/images/icon07.png"
              title="Eyewear Experts"
              desc="You see the world through your eyewear. We want to enhance it with quality frames and lenses."
              articles={props.data.eyewearExperts.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['3-ContactLenses']}
              urlRoot="/what-we-do"
              icon="/images/icon02.png"
              title="Contact Lenses"
              desc="We fit rigid and soft lenses to your eyes. Benefit from the latest in contact lens technology."
              articles={props.data.contactLenses.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['4-Ortho-K']}
              urlRoot="/what-we-do"
              icon="/images/icon06.png"
              title="Ortho K"
              desc="Experience the freedom of ortho-K overnight reshaping contact lens molds."
              articles={props.data.contactLenses.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['5-RefractiveConditions']}
              urlRoot="/what-we-do"
              icon="/images/icon08.png"
              title="Refractive Conditions"
              desc="Are you long-sighted or short-sighted? Is your vision changing? What does it all mean?"
              articles={props.data.refractiveConditions.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['6-PaediatricVision']}
              urlRoot="/what-we-do"
              icon="/images/icon03.png"
              title="Paediatric Vision"
              desc="Children’s vision is crucial to learning and quality of life. Help your child achieve their very best sight!"
              articles={props.data.paediatricVision.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['7-DryEyeClinic']}
              urlRoot="/what-we-do"
              icon="/images/icon04.png"
              title="Dry Eye Clinic"
              desc="Dry eye disease is debilitating, but it is treatable. What is the cause of your dry eye disease?"
              articles={props.data.dryEyeClinic.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['8-AcuteRedEyes']}
              urlRoot="/what-we-do"
              icon="/images/icon09.png"
              title="Acute Red Eyes"
              desc="If you have a sudden-onset red eye condition, it is critical to see a health professional to reduce the risk of permanent damage."
              articles={props.data.acuteRedEyes.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['9-AdvancedImagingTechnology']}
              urlRoot="/what-we-do"
              icon="/images/icon05.png"
              title="Advanced Imaging Technology"
              desc="As innovators, we love technology. Your optometric care is more scientific and accurate than ever before."
              articles={props.data.advancedImagingTechnology.edges}
            />
          </li>
          <li className="what-we-do-box">
            <HoverBox
              img={Images['10-EyeDisease']}
              urlRoot="/what-we-do"
              icon="/images/icon10.png"
              title="Eye Disease"
              desc="We diagnose, monitor and treat a variety of eye diseases. Talk to us about your eye health and preventive measures."
              articles={props.data.eyeDisease.edges}
            />
          </li>
          <li className="what-we-do-box what-we-do-box-double">
            <div className="what-we-do-inner hover-elem">
              <Img
                sizes={Images['img30-lilac']}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: -1
                }}
              />
              <div className="container">
                <div className="content-section--white-color">
                  <div className="content-section__haeding haeding__with-extra-border">
                    <strong className="haeding__top-text top-text--small">
                      Tell your friends about us so they can see their best too!
                    </strong>
                    <p>Help us build our community of healthy eyes</p>
                  </div>
                  <strong className="promo-text">
                    Exceptional eye care for your friend
                    <span>$50 Gift Card for you</span>
                  </strong>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-section online-book-section">
        <Img
          sizes={Images['img38']}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
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

      <Footer />
    </>
  )
}

export const query = graphql`
  fragment sublist on MarkdownRemark {
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

  query WhatWeDoQuery {
    headerImage: file(
      relativePath: { eq: "images/WHAT_WE-DO_HeaderImage.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
      filter: { fileAbsolutePath: { regex: "/(what-we-do)/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    consultations: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "consultations" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    eyewearExperts: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "eyewear-experts" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    contactLenses: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "contact-lenses" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    orthoK: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "orthok" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    refractiveConditions: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "refractive-conditions" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    paediatricVision: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "paediatric-vision" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    dryEyeClinic: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "dry-eye-clinic" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    acuteRedEyes: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "acute-red-eyes" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    advancedImagingTechnology: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "advanced-imaging-technology" } }
      }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
    eyeDisease: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "eye-disease" } } }
    ) {
      edges {
        node {
          ...sublist
        }
      }
    }
  }
`
