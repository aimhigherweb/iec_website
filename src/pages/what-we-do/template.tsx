import React from "react"
import { graphql, Link, navigate } from "gatsby"
import styled from "styled-components"

import { useSession } from "../../state/SessionWrapper"
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Layout/Footer"

//----------------------------------------------------------
//-- Section 1: Detail
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

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
  @media (max-width: ${MAX_WIDTH_PX}) {
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
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
  border-top: 1px solid black;
`
const CategoryTitle = styled.div`
  margin-top: 20px;
  font-size: 0.8em;
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
  padding: 8px;
  object-fit: cover;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 96px;
    height: 96px;
  }
  border: ${DEBUG_TEAM};
  border: 1px solid #424242;
`

const ArticlePart = styled.div`
  flex: 6;
  padding: 0px 40px;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`
const ArticleTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
  font-size: 1.6em;
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
  @media (max-width: ${MAX_WIDTH_PX}) {
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
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_TEAM};
`

const Detail = (state, data) => {
  // const session = useSession()
  //   const { index2, articles2 } = session
  //   let stateDiv = null
  //   if (!state) {
  //     console.log(`*** WhatWeDoTemplate.Detail... NO STATE`)
  //     console.log(`*** WhatWeDoTemplate.Detail... data=${JSON.stringify(data)}`)
  //     stateDiv = <div>NO STATE Index={JSON.stringify(session)}</div>
  //   }

  const { markdownRemark } = data
  let title = undefined
  if (markdownRemark) {
    title = markdownRemark.frontmatter.title
  }

  let index = undefined
  let category = undefined
  let articles = undefined
  let articleIndex = undefined
  if (state) {
    index = state.index
    category = state.category
    articles = state.articles
    articleIndex = state.articleIndex
  } else {
    //!!! cms table
    const whatWeDoCategories = [
      {
        category: "eyewear-experts",
        title: "Eyewear Experts",
        image: "/images2/service-eyewear-experts.png",
      },
      {
        category: "contact-lenses",
        title: "Bespoke Contact Lenses",
        image: "/images2/service-bespoke-contact-lenses.png",
      },
      {
        category: "paediatric-vision",
        title: "Paediatric Vision",
        image: "/images2/service-paediatric-vision.png",
      },
      {
        category: "dry-eye-clinic",
        title: "Dry Eye Clinic",
        image: "/images2/service-dry-eye-clinic.png",
      },
      {
        category: "advanced-imaging-technology",
        title: "Advanced Imaging",
        image: "/images2/service-adv-imaging.png",
      },
      {
        category: "orthok",
        title: "Ortho-K Overnight Correction",
        image: "/images2/service-orthok-correction.png",
      },
      {
        category: "acute-red-eyes",
        title: "Acute Red Eyes",
        image: "/images2/service-acute-red-eyes.png",
      },
      {
        category: "refractive-conditions",
        title: "Refractive Conditions",
        image: "/images2/service-refractive-conditions.png",
      },
      {
        category: "eye-disease",
        title: "Eye Disease",
        image: "/images2/service-eye-disease.png",
      },
      {
        category: "consultations",
        title: "Eye Consultations",
        image: "/images2/service-eye-consultations.png",
      },
    ]
    const categoryId = markdownRemark.frontmatter.category
    const currentCategory = whatWeDoCategories.find(
      (cat) => cat.category === categoryId
    )
    //const previewImage = markdownRemark.frontmatter.preview_image
    //const imageSrc = previewImage ? `/uploads/${previewImage}` : " "

    index = 0
    category = { title: currentCategory.title, image: currentCategory.image }
    articles = []
    articleIndex = 0
  }

  console.log(`*** WhatWeDoTemplate.Detail... articleIndex=${articleIndex}`)

  const finalArticles = []
  let prevFinalArticle = undefined
  let nextFinalArticle = undefined
  if (articles) {
    articles.map((item, i) => {
      const title = item.node.frontmatter.title
      const slug = item.node.fields.slug
      const payload = {
        ...state,
        articleIndex: i,
      }
      const finalArticle = {
        title: title,
        slug: slug,
        payload: payload,
      }
      finalArticles.push(finalArticle)

      if (i === 0) {
        prevFinalArticle = {
          title: "",
          slug: "/what-we-do",
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
    <DetailSection>
      <LeftNav>
        {prevFinalArticle && (
          <Link to={prevFinalArticle.slug} state={prevFinalArticle.payload}>
            <NavArrowImage src="/images2/icon-arrow-left.png" />
          </Link>
        )}
      </LeftNav>
      <LeftPart>
        <CategoryTitle>{category.title}</CategoryTitle>
        <CategoryImage src={category.image} />
      </LeftPart>
      <ArticlePart>
        <ArticleTitle>{title ? title : "No-Title"}</ArticleTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <ArticleButton onClick={() => navigate("/what-we-do")}>
          Back to categories
        </ArticleButton>
        {nextFinalArticle && (
          <Link to={nextFinalArticle.slug} state={nextFinalArticle.payload}>
            <ArticleButton>Next article</ArticleButton>
          </Link>
        )}
      </ArticlePart>
      <RightPart>
        {finalArticles.map((finalArticle, i) => {
          if (articleIndex === i) {
            return (
              <ItemTitleCurrent key={i}>{finalArticle.title}</ItemTitleCurrent>
            )
          } else {
            return (
              <Link to={finalArticle.slug} state={finalArticle.payload} key={i}>
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

const WhatWeDoTemplate = (props) => {
  const match = useMatchMedia({ width: MAX_WIDTH })
  console.log(`*** WhatWeDoTemplate.RENDER... match=${match}`)
  return (
    <Container>
      {Main(false, null)}
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
        category
        preview_image
      }
      id
      html
    }
  }
`

export default WhatWeDoTemplate
