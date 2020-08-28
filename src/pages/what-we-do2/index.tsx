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

const TeamStaffBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 40px;
  border: ${DEBUG_TEAM};
`
const TeamStaff = styled.div`
  flex: 1;
  margin: 0 4px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 40%;
  }
`
const TeamStaffImage = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(100%);
`

const TeamDescription = styled.div`
  padding: 40px 40px;
  text-align: center;
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
  padding: 0 40px;
  border: ${DEBUG_TEAM};
`
const TeamServiceItem = styled.div`
  flex: 1;
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

const TeamFooter = styled.div`
  padding: 40px 0 0 0;
  border: ${DEBUG_TEAM};
`
const TeamFooterImage = styled.img`
  display: block;
  width: auto;
  height: 12px;
  margin: 0px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 24px;
  }
  border: ${DEBUG_TEAM};
`

const Team = (current) => {
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
        <TeamServiceItem>
          <Link to="/what-we-do/eyewear-collections">
            <TeamServiceImage src="/images2/service-eyewear-experts.png" />
            <TeamServiceTitle>
              EYEWEAR
              <br />
              EXPERTS
            </TeamServiceTitle>
          </Link>
        </TeamServiceItem>
        <TeamServiceItem>
          <Link to="/what-we-do/contact-lenses">
            <TeamServiceImage src="/images2/service-bespoke-contact-lenses.png" />
            <TeamServiceTitle>
              BESPOKE
              <br />
              CONTACT LENSES
            </TeamServiceTitle>
          </Link>
        </TeamServiceItem>
        <TeamServiceItem>
          <Link to="/what-we-do/childrens-vision">
            <TeamServiceImage src="/images2/service-paediatric-vision.png" />
            <TeamServiceTitle>
              PAEDIATRIC
              <br />
              VISION
            </TeamServiceTitle>
          </Link>
        </TeamServiceItem>
        <TeamServiceItem>
          <Link to="/what-we-do/dry-eye-disease">
            <TeamServiceImage src="/images2/service-dry-eye-clinic.png" />
            <TeamServiceTitle>
              DRY EYE
              <br />
              CLINIC
            </TeamServiceTitle>
          </Link>
        </TeamServiceItem>
        <TeamServiceItem>
          <Link to="/what-we-do/oct">
            <TeamServiceImage src="/images2/service-adv-imaging.png" />
            <TeamServiceTitle>
              ADVANCED
              <br />
              IMAGING
            </TeamServiceTitle>
          </Link>
        </TeamServiceItem>
        <TeamServiceItem>
          <Link to="/what-we-do/orthokeratology-corneal-reshaping">
            <TeamServiceImage src="/images2/service-orthok-correction.png" />
            <TeamServiceTitle>
              ORTHO-K OVERNIGHT
              <br />
              CORRECTION
            </TeamServiceTitle>
          </Link>
        </TeamServiceItem>
      </TeamService>
      {current &&
        current.map((item, i) => {
          return (
            <TeamDescription key={i}>
              <TeamServiceImage src="/images2/service-eyewear-experts.png" />
              <h4>{item.node.frontmatter.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
            </TeamDescription>
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
  const { acuteRedEyes } = props.data
  const [current, setCurrent] = useState(acuteRedEyes.edges)

  console.log(`*** WhatWeDo.RENDER... match=${match}`)
  console.log(
    `*** WhatWeDo.RENDER... consultations=${JSON.stringify(acuteRedEyes)}`
  )
  return (
    <Container>
      {Main()}
      {Team(current)}
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
          html
          ...sublist
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
          ...sublist
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
          ...sublist
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
          ...sublist
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
          ...sublist
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
          ...sublist
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
          ...sublist
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
          ...sublist
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
          ...sublist
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
          ...sublist
        }
      }
    }
  }
`

export default WhatWeDo
