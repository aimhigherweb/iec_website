import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"

//----------------------------------------------------------
//-- Section 1: Blog
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const BlogSection = styled.div`
  padding: 40px 10%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 0px;
  }
`

const BlogTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
  font-size: 2em;
`

const BlogDescription = styled.div`
  padding: 20px 40px 0 40px;
  font-size: 0.8em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 40px;
    text-align: justify;
    font-size: 1em;
  }
  border: ${DEBUG_TEAM};
`

const ArticleDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 40px;
  border: ${DEBUG_TEAM};
`
const ArticleDetailImage = styled.img`
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
const ArticleDetailText = styled.div`
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailTextTitle = styled.p`
  font-size: 0.8em;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.6em;
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailTextDesc = styled.div`
  font-size: 0.8em;
  border: ${DEBUG_TEAM};
`

const BlogList = (data) => {
  const { blogArticles } = data
  const [current] = useState({
    index: 0,
    articles: blogArticles.edges,
  })

  const extractFirstDiv = (html) => {
    const regex = /^<div(.)*>(.)<\/div>/gs
    const result = regex.exec(html)
    if (result && result.length > 0) {
      return result[0]
    }
  }

  return (
    <BlogSection>
      <BlogTitle>Blog</BlogTitle>
      <BlogDescription>
        The optometrists of Innovative Eye Care have a wide scope of expertise.
        Our blog provides a platform for our practitioners and staff to share a
        little more about their professional interests and experiences. As well
        as some weird and wonderful case studies, you’ll be kept up to date with
        practice news, the latest research and treatment options, products we
        love and fashion trends in our retail space.
      </BlogDescription>
      {current &&
        current.articles &&
        current.articles.map((item, i) => {
          const imageSrc = item.node.frontmatter.preview_image
          const payload = { ...current }
          payload["articleIndex"] = i

          return (
            <ArticleDetail key={i}>
              <ArticleDetailImage src={imageSrc} />
              <ArticleDetailText>
                <Link to={item.node.fields.slug} state={payload}>
                  <ArticleDetailTextTitle>
                    {item.node.frontmatter.title}
                  </ArticleDetailTextTitle>
                </Link>
                <ArticleDetailTextDesc
                  dangerouslySetInnerHTML={{
                    __html: extractFirstDiv(item.node.html),
                  }}
                />
              </ArticleDetailText>
            </ArticleDetail>
          )
        })}
    </BlogSection>
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

const Blog: React.FC = (props) => {
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })
  console.log(`*** Blog.RENDER... match=${match}`)
  return (
    <Container>
      {Main(false, null)}
      {BlogList(props.data)}
      {Footer()}
    </Container>
  )
}

//----------------------------------------------------------
//-- graphql
//----------------------------------------------------------
export const query = graphql`
  {
    blogArticles: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            preview_image
            date(formatString: "DD MMMM YYYY")
            author
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

export default Blog
