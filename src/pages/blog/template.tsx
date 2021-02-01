import React from "react"
import { graphql, Link, navigate } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Layout/Footer"
import SEO from "../../layouts/partials/seo"

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
  object-fit: cover;
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
const NavArrowImage = styled.img`
  display: block;
  width: auto;
  height: 24px;
  margin: 0px auto;
  margin-top: 400px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 18px;
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
const CategoryTitle = styled.div`
  margin-top: 20px;
  font-size: 0.7em;
  font-weight: 600;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.8em;
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
  padding: 8px;
  object-fit: cover;
  background-color: #f2f2f2;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 96px;
    height: 96px;
  }
  border: ${DEBUG_TEAM};
  border: 1px solid #f2f2f2;
`

const ArticlePart = styled.div`
  flex: 6;
  padding: 0px 40px;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const ArticleTitle = styled.h1`
  font-family: "Times New Roman";
  font-size: 1.5em;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const ArticleAuthor = styled.div`
  display: none;
  @media (max-width: ${MAX_WIDTH_PX}) {
    display: block;
    margin-bottom: 20px;
  }
  border: ${DEBUG_TEAM};
`
const ArticleButton = styled.button`
  display: none;
  margin-bottom: 16px;
  padding: 4px 16px;
  color: white;
  font-family: "Times New Roman";
  font-size: 1.1em;
  font-weight: 600;
  background-color: #5091cd;
  border: none;
  @media (max-width: ${MAX_WIDTH_PX}) {
    display: block;
    width: 100%;
    padding: 8px 24px;
  }
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
const ItemTitle = styled.div`
  margin-top: 20px;
  font-size: 0.6em;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.8em;
  }
  border: ${DEBUG_TEAM};
`
const ItemTitleCurrent = styled(ItemTitle)`
  font-weight: 700;
  color: black;
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
  //   if (!state) {
  //     console.log(`*** BlogTemplate.Detail... NO STATE`)
  //     return <div>NO STATE</div>
  //   }

  const { markdownRemark } = data
  const { preview_image, title, date } = markdownRemark.frontmatter
  const { author, slug } = markdownRemark.fields
  const authorTitle = author?.frontmatter?.title
  const authorPhoto = author?.frontmatter?.photo

  let index = undefined
  let category = undefined
  let articles = undefined
  let articleIndex = undefined
  if (state) {
    index = state.index
    category = state.category
    articles = state.articles
    articleIndex = state.articleIndex
  }

  const finalArticles = []
  let prevFinalArticle = null
  let nextFinalArticle = null
  if (articles) {
    articles.map((item, i) => {
      const title = item.node.frontmatter.title
      const slug = item.node.fields.slug
      const payload = { ...state, articleIndex: i }
      const finalArticle = { title: title, slug: slug, payload: payload }
      finalArticles.push(finalArticle)

      if (i === 0) {
        prevFinalArticle = {
          title: "",
          slug: "/blog",
          payload: null,
        }
      }
      if (i === articleIndex - 1) {
        prevFinalArticle = { ...finalArticle }
      } else if (
        articleIndex !== articles.length - 1 &&
        i === articleIndex + 1
      ) {
        nextFinalArticle = { ...finalArticle }
      }
    })
  }

  return (
    <div>
      <SEO title={title} image={preview_image} pathname={slug} />
      <TopHeader>
        <TopHeaderImage src={preview_image}></TopHeaderImage>
      </TopHeader>

      <DetailSection>
        <LeftNav>
          {prevFinalArticle && (
            <Link to={prevFinalArticle.slug} state={prevFinalArticle.payload}>
              <NavArrowImage src="/images2/icon-arrow-left.png" />
            </Link>
          )}
        </LeftNav>
        <LeftPart>
          <CategoryTitle>{date}</CategoryTitle>
          <CategoryImage src={authorPhoto} />
          <CategoryTitle>by {authorTitle}</CategoryTitle>
        </LeftPart>
        <ArticlePart>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleAuthor>
            <CategoryTitle>{date}</CategoryTitle>
            <CategoryImage src={authorPhoto} />
            <CategoryTitle>by {authorTitle}</CategoryTitle>
          </ArticleAuthor>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          <ArticleButton onClick={() => navigate("/blog")}>
            Back to blog
          </ArticleButton>
          {nextFinalArticle && (
            <Link to={nextFinalArticle.slug} state={nextFinalArticle.payload}>
              <ArticleButton>Next post</ArticleButton>
            </Link>
          )}
        </ArticlePart>
        <RightPart>
          {finalArticles.map((finalArticle, i) => {
            if (articleIndex === i) {
              return (
                <ItemTitleCurrent key={i}>
                  {finalArticle.title}
                </ItemTitleCurrent>
              )
            } else {
              return (
                <Link
                  to={finalArticle.slug}
                  state={finalArticle.payload}
                  key={i}
                >
                  <ItemTitle>{finalArticle.title}</ItemTitle>
                </Link>
              )
            }
          })}
        </RightPart>
        <RightNav>
          {nextFinalArticle && (
            <Link to={nextFinalArticle.slug} state={nextFinalArticle.payload}>
              <NavArrowImage src="/images2/icon-arrow-right.png" />
            </Link>
          )}
        </RightNav>
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

const BlogTemplate: React.FC = (props) => {
  const match = useMatchMedia({ width: MAX_WIDTH })
  console.log(
    `*** BlogTemplate.RENDER... match=${match} path=${props.location.pathname}`
  )
  return (
    <Container>
      {Main(
        false,
        null,
        null,
        null,
        null,
        null,
        () => null,
        () => null
      )}
      {Detail(props.location.state, props.data)}
      {Footer()}
    </Container>
  )
}

export const BlogSingleQuery = graphql`
  query BlogById($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        preview_image
        date(formatString: "DD/MM/YYYY")
        author
      }
      fields {
        slug
        author {
          frontmatter {
            title
            photo
          }
        }
      }
      id
      html
    }
  }
`

export default BlogTemplate
