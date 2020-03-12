import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import PersonBox from '../../components/PersonBox'
import Header from '../../components/Header'
import TopNav from '../../components/TopNav'
import Footer from '../../components/Footer'
import OnlineBooking from '../../components/OnlineBooking'

export default function(props) {
  const { headerImage, introBGImage, teamList, uploadFiles } = props.data
  let UploadedImages = {}

  uploadFiles.edges.map(({ node }) => {
    if (node) {
      UploadedImages[`/${node.relativePath}`] = node.childImageSharp.fluid
      return true
    }
    return false
  })

  return (
    <>
      <Helmet>
        <title>Who We Are | Innovative Eye Care</title>
      </Helmet>
      <Header />
      <TopNav />

      <div className="who-we-are__header content-section simple-section content-section--white-color content-section--with-overlay white--overlay text-center">
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
            <h1 className="haeding__top-text top-text--small">Who We Are</h1>
          </div>
          <div className="main-video__container">
            <video
              id="main-video"
              className="video-js vjs-default-skin vjs-big-play-centered"
              controls
              autoPlay
              muted
              preload="none"
              data-setup='{"fluid":true}'
            >
              <track kind="captions" />
              <source src="/videos/who-we-are.mp4" type="video/mp4" />
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
                  BOOK NOW
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
        <div className="container">
          <div className="content-section__haeding heading--small-font">
            <h2>Meet the Team</h2>
            <p>
              Our optometrists are industry leaders. Our special interests
              include <br /> contact lenses, paediatric vision and therapeutic
              optometry.
            </p>
          </div>
        </div>
        <div>
          <ul className="team-list">
            {teamList.edges.map(({ node }, i) => {
              return (
                <li className="employee-box open-close" key={i}>
                  <PersonBox
                    name={node.frontmatter.title}
                    jobtitle={node.frontmatter.jobtitle}
                    photo={UploadedImages[node.frontmatter.photo]}
                    url={node.parent.name}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div
        className="timeline-section"
        style={{ backgroundImage: 'url(/images/brickwall-bg.png)' }}
      >
        <div className="container">
          <div className="timeline-section__timeline-wrap">
            <span className="year-box year-box_start">2016</span>
            <ul className="timeline-list">
              <li className="timeline__item timeline__item_1">
                <div className="timeline__item__holder timeline__item__holder_alignleft"></div>
                <div className="timeline__item__holder timeline__item__holder_alignright">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">2016</strong>
                    <div className="timeline__content">
                      <p>
                        <b>North Terrace Optometrists</b> merges with{' '}
                        <b>Innovative Eye Care:</b> the team expands
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline__item timeline__item_2">
                <div className="timeline__item__holder timeline__item__holder_alignleft">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">2012</strong>
                    <div className="timeline__content">
                      <p>
                        <b>Ron Fieldhouse</b> retires
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__item__holder timeline__item__holder_alignright"></div>
              </li>
              <li className="timeline__item timeline__item_3">
                <div className="timeline__item__holder timeline__item__holder_alignleft"></div>
                <div className="timeline__item__holder timeline__item__holder_alignright">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">2010</strong>
                    <div className="timeline__content">
                      <p>
                        <b>Lachlan Scott-Hoy</b> purchases{' '}
                        <b>R Fieldhouse and Associates</b>, now known as
                        <b>Innovative Eye Care</b>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline__item timeline__item_4">
                <div className="timeline__item__holder timeline__item__holder_alignleft">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">2007</strong>
                    <div className="timeline__content">
                      <p>
                        <b>Lachlan Scott-Hoy</b> begins working at{' '}
                        <b>R Fieldhouse and Associates</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__item__holder timeline__item__holder_alignright"></div>
              </li>
              <li className="timeline__item timeline__item_5">
                <div className="timeline__item__holder timeline__item__holder_alignleft"></div>
                <div className="timeline__item__holder timeline__item__holder_alignright">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">2007</strong>
                    <div className="timeline__content">
                      <p>
                        <b>Lachlan Scott-Hoy</b> receives the{' '}
                        <b>Don Noack Award</b> for excellence in contact lenses
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline__item timeline__item_6">
                <div className="timeline__item__holder timeline__item__holder_alignleft">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">1996</strong>
                    <div className="timeline__content">
                      <p>
                        North Terrace practice becomes known as{' '}
                        <b>North Terrace Optometrists</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__item__holder timeline__item__holder_alignright"></div>
              </li>
              <li className="timeline__item timeline__item_7">
                <div className="timeline__item__holder timeline__item__holder_alignleft"></div>
                <div className="timeline__item__holder timeline__item__holder_alignright">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">1984</strong>
                    <div className="timeline__content">
                      <p>
                        <b>Kevin Rooney, Mark Parsons</b> and <b>Simon Leong</b>{' '}
                        purchase the North Terrace practice
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="timeline__item timeline__item_8">
                <div className="timeline__item__holder timeline__item__holder_alignleft">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">1959</strong>
                    <div className="timeline__content">
                      <p>
                        <b>R Fieldhouse and Associates</b> is founded by{' '}
                        <b>Ron Fieldhouse</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__item__holder timeline__item__holder_alignright"></div>
              </li>
              <li className="timeline__item timeline__item_9">
                <div className="timeline__item__holder timeline__item__holder_alignleft"></div>
                <div className="timeline__item__holder timeline__item__holder_alignright">
                  <div className="timeline__item__inner">
                    <strong className="timeline__title">1955</strong>
                    <div className="timeline__content">
                      <p>
                        <b>Peter Taylor</b> founds practice on North Terrace
                      </p>
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
  )
}

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "images/WHO-WE-ARE_HeaderImage.jpg" }
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
    teamList: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(who-we-are)/.*\\\\.md$/" } }
    ) {
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
    uploadFiles: allFile(
      filter: { relativePath: { regex: "/uploads/.*\\\\.(jpg|png|JPG|PNG)$/" } }
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
