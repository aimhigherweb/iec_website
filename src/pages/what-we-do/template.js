import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"

//----------------------------------------------------------
//-- Section 1: Detail
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const DetailSection = styled.div`
  display: flex;
  padding: 0;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 0px;
  }
  border: ${DEBUG_TEAM};
`

const LeftNav = styled.div`
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const NavArrowImage = styled.img`
  display: block;
  width: auto;
  height: 32px;
  margin: 0px auto;
  margin-top: 400px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 24px;
  }
  border: ${DEBUG_TEAM};
`
const LeftPart = styled.div`
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
  border-top: 1px solid black;
`
const CategoryTitle = styled.div`
  margin-top: 20px;
  font-size: 0.9em;
  font-weight: 600;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 1.2em;
  }
  border: ${DEBUG_TEAM};
`
const CategoryImage = styled.img`
  margin-top: 10px;
  display: block;
  width: 64px;
  height: 64px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 96px;
    height: 96px;
  }
  border: ${DEBUG_TEAM};
`

const ArticlePart = styled.div`
  flex: 4;
  padding: 0px;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const ArticleTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
  font-size: 2em;
  border: ${DEBUG_TEAM};
`

const RightNav = styled.div`
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const RightPart = styled.div`
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }

  border: ${DEBUG_TEAM};
  border-top: 1px solid black;
`

const Detail = (state, data) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { index, category, articles } = state

  console.log(`*** WhatWeDoTemplate.Detail... state=${JSON.stringify(state)}`)
  console.log(`*** WhatWeDoTemplate.Detail... data=${JSON.stringify(data)}`)

  return (
    <DetailSection>
      <LeftNav>
        <NavArrowImage src="/images2/icon-arrow-left.png" />
      </LeftNav>
      <LeftPart>
        <CategoryTitle>{category.title}</CategoryTitle>
        <CategoryImage src={category.image} />
      </LeftPart>
      <ArticlePart>
        <ArticleTitle>{title}</ArticleTitle>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </ArticlePart>
      <RightPart></RightPart>
      <RightNav>
        <NavArrowImage src="/images2/icon-arrow-right.png" />
      </RightNav>
    </DetailSection>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
const Container = styled.div`
  height: 100%;
  margin: 40px;
  margin-bottom: 80px;
`

const WhatWeDoTemplate = (props) => {
  const match = useMatchMedia({ width: MAX_WIDTH })
  console.log(`*** WhatWeDoTemplate.RENDER... match=${match}`)
  console.log(`*** WhatWeDoTemplate.RENDER... props=${JSON.stringify(props)}`)
  return (
    <Container>
      {Detail(props.location.state, props.data)}
      {Footer()}
    </Container>
  )
}

export const WhatWeDoSingleQuery = graphql`
  query WhatWeDoById($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      id
      html
    }
  }
`

export default WhatWeDoTemplate
