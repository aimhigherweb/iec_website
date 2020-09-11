import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"

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
  font-family: "Times New Roman";
  font-size: 2em;
`

const PatientResDescription = styled.div`
  padding: 20px 40px 0 40px;
  font-size: 0.8em;
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
  margin-bottom: 20px;
  padding: 40px 40px;
  border: ${DEBUG_TEAM};
  border-bottom: 1px solid #424242;
`
const PatientResServiceItem = styled.div`
  flex: 1;
  flex-basis: 20%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const PatientResServiceImage = styled.img`
  display: block;
  width: auto;
  height: 24px;
  margin: 16px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 50px;
  }
  border: ${DEBUG_TEAM};
`
const PatientResServiceTitle = styled.p`
  font-size: 0.5em;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.7em;
  }
  color: ${(props) => (props.chosen ? "#5091cd" : "black")};
  &:hover {
    color: ${(props) => (props.chosen ? "#5091cd" : "#5091cd")};
  }
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
  width: 32px;
  height: 32px;
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
  font-size: 0.8em;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.6em;
  }
  border: ${DEBUG_TEAM};
`
const ServiceDetailTextDesc = styled.div`
  font-size: 0.8em;
  border: ${DEBUG_TEAM};
`

const Patient = (data) => {
  const patientResCategories = [
    {
      title: "Content Lens Instructions",
      image: "/images2/service-eyewear-experts.png",
    },
    {
      title: "Vision Training",
      image: "/images2/service-bespoke-contact-lenses.png",
    },
    {
      title: "Everyday Eye Care",
      image: "/images2/service-paediatric-vision.png",
    },
  ]

  const { contactLensInstructions, visionTraining, everydayEyeCare } = data
  const [current, setCurrent] = useState({
    index: 0,
    articles: contactLensInstructions.edges,
  })

  const extractFirstDiv = (html) => {
    const regex = /^<div(.)*>(.)<\/div>/gs
    const result = regex.exec(html)
    if (result && result.length > 0) {
      return result[0]
    }
  }

  const categoryClick = (index) => {
    if (index === 0) {
      setCurrent({ index: 0, articles: contactLensInstructions.edges })
    } else if (index === 1) {
      setCurrent({ index: 1, articles: visionTraining.edges })
    } else if (index === 2) {
      setCurrent({ index: 2, articles: everydayEyeCare.edges })
    }
  }

  return (
    <PatientResSection>
      <PatientResTitle>Patient Resources</PatientResTitle>
      <PatientResDescription>
        <p>
          Your eye care routine will often involve at-home care which our
          informative team will instruct you in at your appointment. Here you
          will find useful follow-up resources on how to care for your contact
          lenses, insert your eye drops or complete your vision training
          exercises.
        </p>
        <p>
          Your eye care routine will often involve at-home care which our
          informative team will instruct you in at your appointment. Here you
          will find useful follow-up resources on how to care for your contact
          lenses, insert your eye drops or complete your vision training
          exercises.
        </p>
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
            const imageSrc = category.image
            return (
              <PatientResServiceItem key={i} onClick={() => categoryClick(i)}>
                <PatientResServiceImage src={imageSrc} />
                <PatientResServiceTitle chosen={current.index === 0}>
                  {category.title}
                </PatientResServiceTitle>
              </PatientResServiceItem>
            )
          })}
      </PatientResService>
      {current &&
        current.articles &&
        current.articles.map((item, i) => {
          const imageSrc = `/uploads/${item.node.frontmatter.preview_image}`
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
                    __html: extractFirstDiv(item.node.html),
                  }}
                />
              </ServiceDetailText>
            </ServiceDetail>
          )
        })}
    </PatientResSection>
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

const PatientResources: React.FC = (props) => {
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })
  console.log(`*** PatientResources.RENDER... match=${match}`)
  return (
    <Container>
      {Main(false, null)}
      {Patient(props.data)}
      {Footer()}
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
        }
      }
    }
  }
`

export default PatientResources
