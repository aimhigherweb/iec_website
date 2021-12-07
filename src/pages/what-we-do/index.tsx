import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { useSession } from "../../state/SessionWrapper"
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { SocialFeed } from "../../components/Social/SocialFeed"
import { Footer } from "../../components/Layout/Footer"
import SEO from "../../layouts/partials/seo"

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
  font-family: "recoleta";
  font-weight: 500;
  font-size: 2em;
`

const WhatDescription = styled.div`
  padding: 0px 40px 0 40px;
  font-family: "open sans";
  font-size: 0.9em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 0px 20px;
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
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding 0 10px;
  }
  border: ${DEBUG_TEAM};
  border-bottom: 1px solid #212121;
`
const WhatServiceItem = styled.div`
  flex: 1;
  flex-basis: 20%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 20%;
  }
  border: ${DEBUG_TEAM};
  cursor: pointer;
  background-color: ${(props) => (props.chosen ? "#5091cd" : "none")};
  color: black;
  transition: color 1s;
  &:hover {
    color: #5091cd;
  }
`
const WhatServiceImage = styled.div`
  display: block;
  width: 32px;
  height: 32px;
  margin: 16px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 32px;
  }
  background: url(${(props) => (props.hover ? props.iconSel : props.icon)});
  background-size: contain;
  background-repeat: no-repeat;
  transition: background 1000ms ease-in-out;
  border: 0;
`
const WhatServiceTitle = styled.p`
  font-family: "open sans";
  font-size: 0.9em;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.7em;
    text-transform: lowercase;
    padding: 5px;
  }
  transition: color 1s;
  color: ${(props) => {
    if (props.chosen) {
      return "white"
    }
    return props.hover ? "#5091cd" : "black"
  }};
  border: ${DEBUG_TEAM};
  padding-left: 4px;
  padding-right: 4px;
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
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: filter 2s;
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
  font-family: "recoleta";
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 1em;
  }
  border: ${DEBUG_TEAM};
`
const ServiceDetailTextDesc = styled.div`
  padding-bottom: 10px;
  font-family: "open sans";
  font-size: 0.9em;
  border: ${DEBUG_TEAM};
  border-bottom: 1px dotted #aaaaaa;
`

const What = (show, data, whatWeDoCatId, currentIndex, updateIndex) => {
  const { categoryList, whatWeDoList } = data

  const whatWeDoCategories = []
  categoryList.edges.map((category) => {
    const { title, catno, image } = category.node.frontmatter
    whatWeDoCategories.push({ title: title, catno: catno, image: image })
  })

  let defaultIndex = 0
  let defaultCat = "SE01"
  if (whatWeDoCatId && whatWeDoCatId.length > 0) {
    whatWeDoCategories.map((category, i) => {
      if (category.catno === whatWeDoCatId) {
        defaultIndex = i
        defaultCat = whatWeDoCatId
      }
    })
  } else {
    defaultIndex = currentIndex
    defaultCat = whatWeDoCategories[currentIndex].catno
  }

  const [current, setCurrent] = useState({
    index: defaultIndex,
    articles: whatWeDoList.edges.filter(
      (item) => item.node.frontmatter.category === defaultCat
    ),
  })

  const categoryClick = (index, catno) => {
    const categoryArticles = whatWeDoList.edges.filter(
      (item) => item.node.frontmatter.category === catno
    )
    setCurrent({ index: index, articles: categoryArticles })
    updateIndex(index)
  }
  const [hover, setHover] = useState()

  return show ? (
    <WhatSection id="topservice">
      <SEO title="What We Do" />
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
            const chosen = current.index === i
            let imageSrc = category?.image
            let imageSel =
              imageSrc.substr(0, imageSrc.lastIndexOf(".")) + "-sel.png"
            if (chosen) {
              imageSrc =
                imageSrc.substr(0, imageSrc.lastIndexOf(".")) + "-selw.png"
              imageSel = imageSrc
            }
            return (
              <WhatServiceItem
                key={i}
                onClick={() => categoryClick(i, category.catno)}
                onMouseOver={() => {
                  setHover(i)
                }}
                onMouseLeave={() => {
                  setHover()
                }}
                chosen={chosen}
              >
                <WhatServiceImage
                  icon={imageSrc}
                  iconSel={imageSel}
                  hover={i === hover}
                />
                <WhatServiceTitle chosen={chosen} hover={i === hover}>
                  {category?.title}
                </WhatServiceTitle>
              </WhatServiceItem>
            )
          })}
      </WhatService>
      {current &&
        current.articles &&
        current.articles.map((item, i) => {
          const previewImage = item.node.frontmatter.preview_image
          const imageSrc = previewImage ? `/uploads/${previewImage}` : " "
          const payload = { ...current }
          payload["category"] = whatWeDoCategories[current.index]
          payload["articleIndex"] = i

          return (
            <ServiceDetail key={i}>
              <Link to={item.node.fields.slug} state={payload}>
                <ServiceDetailImage src={imageSrc} />
              </Link>
              <ServiceDetailText>
                <Link to={item.node.fields.slug} state={payload}>
                  <ServiceDetailTextTitle>
                    {item.node.frontmatter.title}
                  </ServiceDetailTextTitle>
                </Link>
                <ServiceDetailTextDesc
                  dangerouslySetInnerHTML={{
                    __html: item.node.excerpt,
                  }}
                />
              </ServiceDetailText>
            </ServiceDetail>
          )
        })}
    </WhatSection>
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

const WhatWeDo: React.FC = (mainprops) => {
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex)
  }

  const session = useSession()
  const show = session.showAll()

  console.log(`*** WhatWeDo.RENDER... match=${match}`)
  const video = match ? null : "/videos/what-we-do.mp4"

  const HeaderResult = (props) => Header(match)
  const WhatResult = (props) =>
    What(
      show,
      mainprops.data,
      session.current.whatWeDoCatId,
      currentIndex,
      updateIndex
    )
  const SocialResult = (props) => SocialFeed(show, match)
  const FooterResult = (props) => Footer(show)
  return (
    <Container>
      {Main(
        "What We Do",
        true,
        video,
        null,
        null,
        session.current.showSearch,
        session.current.showBooking,
        session.searchToggle,
        session.bookingToggle
      )}
      <HeaderResult />
      <WhatResult />
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
    categoryList: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do-cat/.*.md$/" }
        frontmatter: { catno: { nin: "SE00" } }
      }
      sort: { fields: [frontmatter___catno], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            catno
            image
          }
        }
      }
    }
    whatWeDoList: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/what-we-do/" }
        frontmatter: { category: { nin: "SE00" } }
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
          excerpt(truncate: true, pruneLength: 250)
        }
      }
    }
  }
`

export default WhatWeDo
