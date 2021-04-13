import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Layout/Footer"

//----------------------------------------------------------
//-- Section 1: Detail
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const TopHeader = styled.div`
  height: 400px;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const TopHeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const DetailSection = styled.div`
  display: flex;
  padding: 40px 0 40px 0;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 0px;
  }
  border: ${DEBUG_TEAM};
`

const LeftNav = styled.div`
  flex: 1;
  display: block;
  @media (max-width: ${MAX_WIDTH_PX}) {
    display: none;
  }
  border: ${DEBUG_TEAM};
`
const LeftPart = styled.div`
  flex: 2;
  display: block;
  @media (max-width: ${MAX_WIDTH_PX}) {
    display: none;
  }
  border: ${DEBUG_TEAM};
  border-top: 1px solid black;
`

const ArticlePart = styled.div`
  flex: 6;
  padding: 0px 40px;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const ArticleTitle = styled.h1`
  font-family: "recoleta";
  font-weight: 500;
  font-size: 1.5em;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`

const RightPart = styled.div`
  flex: 2;
  display: block;
  @media (max-width: ${MAX_WIDTH_PX}) {
    display: none;
  }
  border: ${DEBUG_TEAM};
  border-top: 1px solid black;
`
const RightNav = styled.div`
  flex: 1;
  display: block;
  @media (max-width: ${MAX_WIDTH_PX}) {
    display: none;
  }
  border: ${DEBUG_TEAM};
`

const Detail = (state, data) => {
  const { markdownRemark } = data
  const { title, photo } = markdownRemark.frontmatter

  return (
    <div>
      <TopHeader>
        <TopHeaderImage src={photo}></TopHeaderImage>
      </TopHeader>

      <DetailSection>
        <LeftNav></LeftNav>
        <LeftPart></LeftPart>
        <ArticlePart>
          <ArticleTitle>{title}</ArticleTitle>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </ArticlePart>
        <RightPart></RightPart>
        <RightNav></RightNav>
      </DetailSection>
    </div>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
const Container = styled.div`
  height: 100%;
  margin: 0px;
  margin-bottom: 80px;
`
const Header = styled.div`
  height: 88px;
`

const WhoWeAreTemplate: React.FC = (props) => {
  const match = useMatchMedia({ width: MAX_WIDTH })
  console.log(
    `*** WhoWeAreTemplate.RENDER... match=${match} path=${props.location.pathname}`
  )
  return (
    <Container>
      {Main(
        "",
        false,
        null,
        null,
        null,
        null,
        null,
        () => null,
        () => null
      )}
      <Header />
      {Detail(props.location.state, props.data)}
      {Footer(true)}
    </Container>
  )
}

export const WhoWeAreSingleQuery = graphql`
  query WhoWeAreById($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        jobtitle
        photo
        skill1
        skill2
        skill3
        skill4
      }
      id
      html
    }
  }
`

export default WhoWeAreTemplate
