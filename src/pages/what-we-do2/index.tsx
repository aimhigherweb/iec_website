import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"

//----------------------------------------------------------
//-- Section 1: Team
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const TeamSection = styled.div`
  padding: 40px 10%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 0px;
  }
`

const TeamTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
  font-size: 2em;
`

const TeamDescription = styled.div`
  padding: 20px 40px 0 40px;
  font-size: 0.8em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 40px;
    text-align: justify;
    font-size: 1em;
  }
  border: ${DEBUG_TEAM};
`

const TeamService = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 40px 40px;
  border: ${DEBUG_TEAM};
  border-bottom: 1px solid #424242;
`
const TeamServiceItem = styled.div`
  flex: 1;
  flex-basis: 20%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const TeamServiceImage = styled.img`
  display: block;
  width: auto;
  height: 24px;
  margin: 16px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 50px;
  }
  border: ${DEBUG_TEAM};
`
const TeamServiceTitle = styled.p`
  font-size: 0.5em;
  font-weight: 600;
  text-align: center;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.7em;
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

const Team = (data) => {
  const {
    acuteRedEyes,
    advancedImagingTechnology,
    consultations,
    contactLenses,
    dryEyeClinic,
    eyeDisease,
    eyewearExperts,
    orthok,
    paediatricVision,
    refractiveConditions,
  } = data
  const [current, setCurrent] = useState(paediatricVision.edges)

  const extractFirstDiv = (html) => {
    const regex = /^<div(.)*>(.)<\/div>/gs
    const result = regex.exec(html)
    if (result && result.length > 0) {
      return result[0]
    }
  }

  return (
    <TeamSection>
      <TeamTitle>What We Do</TeamTitle>
      <TeamDescription>
        <p>&lsquo;Your eyes are our focus, all day, every day.&rsquo;</p>
        <p>
          We do things a little differently here. Every aspect of your vision
          and eye health is important to us, and each one of you has a unique
          combination of needs. Our mission is to provide the best optometric
          care possible to meet those needs.
        </p>
        <p>
          We use state-of-the-art technology for testing, the highest quality
          customised products, and the most personalised service. Our solutions
          span bespoke contact lenses, spectacles, vision training and
          therapeutic treatments. We support Australian made.
        </p>
      </TeamDescription>
      <TeamService>
        <TeamServiceItem onClick={() => setCurrent(eyewearExperts.edges)}>
          <TeamServiceImage src="/images2/service-eyewear-experts.png" />
          <TeamServiceTitle>
            EYEWEAR
            <br />
            EXPERTS
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(contactLenses.edges)}>
          <TeamServiceImage src="/images2/service-bespoke-contact-lenses.png" />
          <TeamServiceTitle>
            BESPOKE
            <br />
            CONTACT LENSES
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(paediatricVision.edges)}>
          <TeamServiceImage src="/images2/service-paediatric-vision.png" />
          <TeamServiceTitle>
            PAEDIATRIC
            <br />
            VISION
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(dryEyeClinic.edges)}>
          <TeamServiceImage src="/images2/service-dry-eye-clinic.png" />
          <TeamServiceTitle>
            DRY EYE
            <br />
            CLINIC
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem
          onClick={() => setCurrent(advancedImagingTechnology.edges)}
        >
          <TeamServiceImage src="/images2/service-adv-imaging.png" />
          <TeamServiceTitle>
            ADVANCED
            <br />
            IMAGING
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(orthok.edges)}>
          <TeamServiceImage src="/images2/service-orthok-correction.png" />
          <TeamServiceTitle>
            ORTHO-K OVERNIGHT
            <br />
            CORRECTION
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(acuteRedEyes.edges)}>
          <TeamServiceImage src="/images2/service-acute-red-eyes.png" />
          <TeamServiceTitle>
            ACUTE
            <br />
            RED EYES
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(refractiveConditions.edges)}>
          <TeamServiceImage src="/images2/service-refractive-conditions.png" />
          <TeamServiceTitle>
            REFRACTIVE
            <br />
            CONDITIONS
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(eyeDisease.edges)}>
          <TeamServiceImage src="/images2/service-eye-disease.png" />
          <TeamServiceTitle>
            EYE
            <br />
            DISEASE
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem onClick={() => setCurrent(consultations.edges)}>
          <TeamServiceImage src="/images2/service-eye-consultations.png" />
          <TeamServiceTitle>
            EYE
            <br />
            CONSULTATIONS
          </TeamServiceTitle>
        </TeamServiceItem>
      </TeamService>
      {current &&
        current.map((item, i) => {
          const imageSrc = `/uploads/${item.node.frontmatter.preview_image}`
          return (
            <ServiceDetail key={i}>
              <ServiceDetailImage src={imageSrc} />
              <ServiceDetailText>
                <ServiceDetailTextTitle>
                  {item.node.frontmatter.title}
                </ServiceDetailTextTitle>
                <ServiceDetailTextDesc
                  dangerouslySetInnerHTML={{
                    __html: extractFirstDiv(item.node.html),
                  }}
                />
              </ServiceDetailText>
            </ServiceDetail>
          )
        })}
    </TeamSection>
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

const WhatWeDo: React.FC = (props) => {
  const match = useMatchMedia({ width: MAX_WIDTH })
  console.log(`*** WhatWeDo.RENDER... match=${match}`)
  //{Main()}
  return (
    <Container>
      {Team(props.data)}
      {Footer()}
    </Container>
  )
}

//----------------------------------------------------------
//-- graphql
//----------------------------------------------------------
export const query = graphql`
  {
    acuteRedEyes: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "acute-red-eyes" } }
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
          html
        }
      }
    }
    advancedImagingTechnology: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "advanced-imaging-technology" } }
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
          html
        }
      }
    }
    consultations: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "consultations" } }
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
          html
        }
      }
    }
    contactLenses: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "contact-lenses" } }
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
          html
        }
      }
    }
    dryEyeClinic: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "dry-eye-clinic" } }
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
          html
        }
      }
    }
    eyeDisease: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "eye-disease" } }
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
          html
        }
      }
    }
    eyewearExperts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "eyewear-experts" } }
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
          html
        }
      }
    }
    orthok: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "orthok" } }
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
          html
        }
      }
    }
    paediatricVision: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "paediatric-vision" } }
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
          html
        }
      }
    }
    refractiveConditions: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { eq: "refractive-conditions" } }
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
          html
        }
      }
    }
  }
`

export default WhatWeDo
