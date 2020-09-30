import React, { useState } from "react"
import { graphql, Link, navigate } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import Layout from "../../components/Layout/Layout"
import { Footer } from "../../components/Layout/Footer"

//----------------------------------------------------------
//-- Section 1: What
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const WhatSection = styled.div`
  padding: 40px 10%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 0px;
  }
`

const WhatTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
  font-size: 2em;
`

const WhatDescription = styled.div`
  padding: 20px 40px 0 40px;
  font-size: 0.8em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 40px;
    text-align: justify;
    font-size: 1em;
  }
  border: ${DEBUG_TEAM};
`

const WhatService = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 40px 40px;
  border: ${DEBUG_TEAM};
  border-bottom: 1px solid #424242;
`
const WhatServiceItem = styled.div`
  flex: 1;
  flex-basis: 20%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const WhatServiceImage = styled.img`
  display: block;
  width: auto;
  height: 24px;
  margin: 16px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 50px;
  }
  border: ${DEBUG_TEAM};
`
const WhatServiceTitle = styled.p`
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

const What = (data) => {
  const whatWeDoCategories = [
    { title: "Eyewear Experts", image: "/images2/service-eyewear-experts.png" },
    {
      title: "Bespoke Contact Lenses",
      image: "/images2/service-bespoke-contact-lenses.png",
    },
    {
      title: "Paediatric Vision",
      image: "/images2/service-paediatric-vision.png",
    },
    { title: "Dry Eye Clinic", image: "/images2/service-dry-eye-clinic.png" },
    {
      title: "Advanced Imaging",
      image: "/images2/service-adv-imaging.png",
    },
    {
      title: "Ortho-K Overnight Correction",
      image: "/images2/service-orthok-correction.png",
    },
    { title: "Acute Red Eyes", image: "/images2/service-acute-red-eyes.png" },
    {
      title: "Refractive Conditions",
      image: "/images2/service-refractive-conditions.png",
    },
    { title: "Eye Disease", image: "/images2/service-eye-disease.png" },
    {
      title: "Eye Consultations",
      image: "/images2/service-eye-consultations.png",
    },
  ]

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
  const [current, setCurrent] = useState({
    index: 0,
    articles: eyewearExperts.edges,
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
      setCurrent({ index: 0, articles: eyewearExperts.edges })
    } else if (index === 1) {
      setCurrent({ index: 1, articles: contactLenses.edges })
    } else if (index === 2) {
      setCurrent({ index: 2, articles: paediatricVision.edges })
    } else if (index === 3) {
      setCurrent({ index: 3, articles: dryEyeClinic.edges })
    } else if (index === 4) {
      setCurrent({ index: 4, articles: advancedImagingTechnology.edges })
    } else if (index === 5) {
      setCurrent({ index: 5, articles: orthok.edges })
    } else if (index === 6) {
      setCurrent({ index: 6, articles: acuteRedEyes.edges })
    } else if (index === 7) {
      setCurrent({ index: 7, articles: refractiveConditions.edges })
    } else if (index === 8) {
      setCurrent({ index: 8, articles: eyeDisease.edges })
    } else if (index === 9) {
      setCurrent({ index: 9, articles: consultations.edges })
    }
  }

  return (
    <WhatSection>
      <WhatTitle>What We Do</WhatTitle>
      <WhatDescription>
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
      </WhatDescription>
      <WhatService>
        {whatWeDoCategories &&
          whatWeDoCategories.map((category, i) => {
            const imageSrc = category.image
            return (
              <WhatServiceItem key={i} onClick={() => categoryClick(i)}>
                <WhatServiceImage src={imageSrc} />
                <WhatServiceTitle chosen={current.index === i}>
                  {category.title}
                </WhatServiceTitle>
              </WhatServiceItem>
            )
          })}
      </WhatService>
      {current &&
        current.articles &&
        current.articles.map((item, i) => {
          const imageSrc = `/uploads/${item.node.frontmatter.preview_image}`
          const payload = { ...current }
          payload["category"] = whatWeDoCategories[current.index]
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
    </WhatSection>
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
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })
  console.log(`*** WhatWeDo.RENDER... match=${match}`)
  return (
    <Layout>
      {Main(false, "/videos/what-we-do.mp4")}
      {What(props.data)}
      {Footer()}
    </Layout>
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
          fields {
            slug
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
          fields {
            slug
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
          fields {
            slug
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
          fields {
            slug
          }
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
          fields {
            slug
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
          fields {
            slug
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
          fields {
            slug
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
          fields {
            slug
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
          fields {
            slug
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
          fields {
            slug
          }
          html
        }
      }
    }
  }
`

export default WhatWeDo
