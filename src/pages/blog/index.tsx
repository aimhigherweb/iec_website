import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import styled from "styled-components"

import { useSession } from "../../state/SessionWrapper"
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { SocialFeed } from "../../components/Social/SocialFeed"
import { Footer } from "../../components/Layout/Footer"
import SEO from "../../layouts/partials/seo"

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
  font-family: "recoleta";
  font-weight: 500;
  font-size: 2em;
  border: ${DEBUG_TEAM};
`

const BlogDescription = styled.div`
  padding: 8px 40px;
  margin-bottom: 10px;
  font-family: "open sans";
  font-size: 1em;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`

const ArticleDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 140px;
  cursor: pointer;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 10px 20px;
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailLeft = styled.div`
  flex: 3;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailRight = styled.div`
  flex: 4;
  padding: 20px;
  background-color: #f2f2f2;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailText = styled.div`
  border: ${DEBUG_TEAM};
`
const ArticleDetailTextDate = styled.p`
  font-family: "open sans";
  font-weight: 600;
  font-size: 0.6em;
  color: #424242;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.5em;
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailTextTitle = styled.p`
  font-family: recoleta-semibold;
  font-size: 0.9em;
  font-weight: 600;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.8em;
  }
  border: ${DEBUG_TEAM};
`
const ArticleDetailTextDesc = styled.div`
  font-family: "open sans";
  font-size: 0.7em;
  line-height: 1.8;
  color: #525252;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.8em;
  }
  border: ${DEBUG_TEAM};
`

const BlogList = (show, data) => {
  const { blogArticles } = data
  const [current] = useState({
    index: 0,
    articles: blogArticles.edges,
  })

  const articleClicked = (slug, payload) => {
    navigate(slug, {
      state: payload,
    })
  }

  return show ? (
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
            <ArticleDetail
              key={i}
              onClick={() => articleClicked(item.node.fields.slug, payload)}
            >
              <ArticleDetailLeft>
                <ArticleDetailImage src={imageSrc} />
              </ArticleDetailLeft>
              <ArticleDetailRight>
                <ArticleDetailTextDate>
                  {item.node.frontmatter.date}
                </ArticleDetailTextDate>
                <ArticleDetailText>
                  <ArticleDetailTextTitle>
                    {item.node.frontmatter.title}
                  </ArticleDetailTextTitle>
                  <ArticleDetailTextDesc
                    dangerouslySetInnerHTML={{
                      __html: item.node.excerpt,
                    }}
                  />
                </ArticleDetailText>
              </ArticleDetailRight>
            </ArticleDetail>
          )
        })}
    </BlogSection>
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

const Blog: React.FC = (mainprops) => {
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })

  const session = useSession()
  const show = session.showAll()

  console.log(`*** Blog.RENDER... match=${match}`)
  const image = match ? null : "/images2/bg-section-blog.png"

  const HeaderResult = (props) => Header(match)
  const BlogResult = (props) => BlogList(show, mainprops.data)
  const SocialResult = (props) => SocialFeed(show, match)
  const FooterResult = (props) => Footer(show)
  return (
    <Container>
      <SEO title="Blog" />
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
      <BlogResult />
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
    blogArticles: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
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
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
  }
`

export default Blog
