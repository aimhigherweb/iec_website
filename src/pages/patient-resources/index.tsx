import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { useSession } from "../../state/SessionWrapper"
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { SocialFeed } from "../../components/Social/SocialFeed"
import { Footer } from "../../components/Layout/Footer"
import SEO from "../../layouts/partials/seo"

//----------------------------------------------------------
//-- Section 1: Patient Resources
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const PatientResSection = styled.div`
  padding: 40px 10%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 0px;
  }
`

const PatientResTitle = styled.h1`
  text-align: center;
  font-family: "recoleta";
  font-weight: 500;
  font-size: 2em;
`

const PatientResDescription = styled.div`
  padding: 0px 40px 0 40px;
  font-family: "open sans";
  font-size: 0.9em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 40px;
    text-align: justify;
    font-size: 1em;
  }
  border: ${DEBUG_TEAM};
`

const PatientResService = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  margin-bottom: 20px;
  padding: 20px 40px;
  border: ${DEBUG_TEAM};
`
const PatientResServiceItem = styled.div`
  flex: 1;
  flex-basis: 20%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  background-color: ${(props) => (props.chosen ? "black" : "white")};
  border: 1px solid black;
`
const PatientResServiceTitle = styled.p`
  margin: 8px;
  font-family: "open sans";
  font-size: 0.7em;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.7em;
  }
  color: ${(props) => (props.chosen ? "white" : "black")};
  border: ${DEBUG_TEAM};
`

const ServiceDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 40px;
  border: ${DEBUG_TEAM};
`
const ServiceDetailImage = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
  filter: ${(props) => (props.chosen ? "none" : "grayscale(1)")};
  &:hover {
    filter: ${(props) => (props.chosen ? "none" : "none")};
  }
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 50px;
    height: 50px;
  }
  border: ${DEBUG_TEAM};
`
const ServiceDetailText = styled.div`
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const ServiceDetailTextTitle = styled.p`
  font-family: "recoleta";
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 1em;
  }
  border: ${DEBUG_TEAM};
`
const ServiceDetailTextDesc = styled.div`
  padding-bottom: 20px;
  font-size: 0.8em;
  border: ${DEBUG_TEAM};
  border-bottom: 1px dotted #aaaaaa;
`

const Patient = (show, data) => {
  const patientResCategories = [
    {
      category: "Contact Lens Instructions",
      title: "Contact Lens Instructions",
      image: "",
    },
    {
      category: "Vision Training",
      title: "Vision Training",
      image: "",
    },
    {
      category: "Everyday Eye Care",
      title: "Everyday Eye Care",
      image: "",
    },
  ]

  const { contactLensInstructions, visionTraining, everydayEyeCare } = data
  const [current, setCurrent] = useState({
    index: 0,
    articles: contactLensInstructions.edges,
  })

  const categoryClick = (index) => {
    if (index === 0) {
      setCurrent({ index: 0, articles: contactLensInstructions.edges })
    } else if (index === 1) {
      setCurrent({ index: 1, articles: visionTraining.edges })
    } else if (index === 2) {
      setCurrent({ index: 2, articles: everydayEyeCare.edges })
    }
  }

  return show ? (
    <PatientResSection>
      <SEO title="Patient Resources" />
      <PatientResTitle>Patient Resources</PatientResTitle>
      <PatientResDescription>
        <p>
          Your eye care routine will often involve at-home care which our
          informative team will instruct you in at your appointment. Here you
          will find useful follow-up resources on how to care for your contact
          lenses, insert your eye drops or complete your vision training
          exercises.
        </p>
      </PatientResDescription>
      <PatientResService>
        {patientResCategories &&
          patientResCategories.map((category, i) => {
            const chosen = current.index === i
            return (
              <PatientResServiceItem
                key={i}
                onClick={() => categoryClick(i)}
                chosen={chosen}
              >
                <PatientResServiceTitle chosen={chosen}>
                  {category?.title}
                </PatientResServiceTitle>
              </PatientResServiceItem>
            )
          })}
      </PatientResService>
      {current &&
        current.articles &&
        current.articles.map((item, i) => {
          const imageSrc = item.node.frontmatter.preview_image
          const payload = { ...current }
          payload["category"] = patientResCategories[current.index]
          payload["articleIndex"] = i

          return (
            <ServiceDetail key={i}>
              <ServiceDetailImage src={imageSrc} />
              <ServiceDetailText>
                <Link to={item.node.fields.slug} state={payload}>
                  <ServiceDetailTextTitle>
                    {item.node.frontmatter.title}
                  </ServiceDetailTextTitle>
                </Link>
                <ServiceDetailTextDesc
                  dangerouslySetInnerHTML={{
                    __html: item.node.excerpt, //extractFirstDiv(item.node.html)
                  }}
                />
              </ServiceDetailText>
            </ServiceDetail>
          )
        })}
    </PatientResSection>
  ) : (
    <div></div>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
const Container = styled.div`
  height: 100%;
  margin: 0;
  margin-bottom: 80px;
`
const HeaderSection = styled.div`
  height: 88px;
`
const Header = (match) => {
  return match ? <HeaderSection /> : <></>
}

const PatientResources: React.FC = (mainprops) => {
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })

  const session = useSession()
  const show = session.showAll()

  console.log(`*** PatientResources.RENDER... match=${match}`)
  const image = match ? null : "/images2/bg-section-patres.png"

  const HeaderResult = (props) => Header(match)
  const PatientResult = (props) => Patient(show, mainprops.data)
  const SocialResult = (props) => SocialFeed(show, match)
  const FooterResult = (props) => Footer(show)
  return (
    <Container>
      {Main(
        "",
        true,
        null,
        image,
        null,
        session.current.showSearch,
        session.current.showBooking,
        session.searchToggle,
        session.bookingToggle
      )}
      <HeaderResult />
      <PatientResult />
      <SocialResult />
      <FooterResult />
    </Container>
  )
}

//----------------------------------------------------------
//-- graphql
//----------------------------------------------------------
export const query = graphql`
  {
    contactLensInstructions: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/patient-resources/" }
        frontmatter: { category: { eq: "Contact Lens Instructions" } }
      }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            preview_image
          }
          fields {
            slug
          }
          html
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
    visionTraining: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/patient-resources/" }
        frontmatter: { category: { eq: "Vision Training" } }
      }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            preview_image
          }
          fields {
            slug
          }
          html
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
    everydayEyeCare: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/patient-resources/" }
        frontmatter: { category: { eq: "Everyday Eye Care" } }
      }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            preview_image
          }
          fields {
            slug
          }
          html
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
  }
`

export default PatientResources
