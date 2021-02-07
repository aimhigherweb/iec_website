import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

//----------------------------------------------------------
//-- Section 3: Social
//----------------------------------------------------------
const DEBUG_SOCIAL = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const SocialSection = styled.div`
  padding: 40px 5%;
`

const SocialHeader = styled.div`
  position: relative;
  margin-bottom: 40px;
  height: 200px;
  border: ${DEBUG_SOCIAL};
`
const SocialHeaderImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: ${DEBUG_SOCIAL};
`
const SocialHeaderCaption = styled.p`
  position: absolute;
  bottom: -8px;
  left: 20px;
  color: white;
  font-size: 1em;
  font-weight: 600;
  font-family: "open sans";
  border: ${DEBUG_SOCIAL};
`
const SocialHeaderLeftNav = styled.img`
  position: absolute;
  width: 10px;
  height: 20px;
  left: 14px;
  top: 95px;
  border: ${DEBUG_SOCIAL};
`
const SocialHeaderRightNav = styled.img`
  position: absolute;
  width: 10px;
  height: 20px;
  right: 14px;
  top: 95px;
  border: ${DEBUG_SOCIAL};
`

const SocialTitle = styled.h1`
  text-align: center;
  font-family: "recoleta";
  font-weight: 500;
  font-size: 1.4em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 2em;
  }
`

const SocialItemBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: ${DEBUG_SOCIAL};
`
const SocialItemNavArrowImage = styled.img`
  display: block;
  width: auto;
  height: 16px;
  margin: 0px auto;
  margin-top: 100px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 18px;
  }
  border: ${DEBUG_SOCIAL};
`
const SocialItem = styled.div`
  flex: 1;
  margin: 20px;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_SOCIAL};
`
const SocialItemImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: contain;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_SOCIAL};
`

const HREF_INSTA = "https://www.instagram.com/innovative.eye.care"
const HREF_FB = "https://www.facebook.com/innovativeeyecareadelaide/"

const obtainInstaFeed = async () => {
  console.log(`*** Home.obtainInstaFeed`)

  const token =
    "IGQVJYc1dndVRSb0lGN19pZAl94UEgzWmt2SzhhZAVJSNVM2dHFvUGo1SjFZAWjBXZAjg4d2xBb0ZAkdFhiTTltUHhqREVrSElaZAkxwMUF4cC16ZAHc1MmhCMENxSzRIdWI4LVp0ZADdxd253"
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`

  const result = []
  const response = await fetch(url)
  if (response) {
    const json = await response.json()
    const MAX_ITEMS = 4

    if (json.data) {
      json.data.forEach((item) => {
        const { caption, media_url } = item
        if (media_url) {
          if (result.length < MAX_ITEMS) {
            result.push({ caption: caption, imageUrl: media_url })
          }
        }
      })
    }
  }

  return result
}

const Social = (show, data) => {
  console.log(`*** SocialFeed.Social`)
  const { promotions } = data
  const [current, setCurrent] = useState({
    index: 0,
    items: promotions.edges,
    visible: {},
  })

  const [posts, setPosts] = useState([])
  const [instagram, setInstagram] = useState({
    index: 0,
    items: posts,
    visible: {},
  })

  useEffect(() => {
    console.log(`*** Home.Social.useEffect.main`)
    updatePromotion(0)
    latestPosts()
  }, [])

  useEffect(() => {
    console.log(`*** Home.Social.useEffect.posts`)
    updateInstagram(0)
  }, [posts])

  //-- promotions
  const updatePromotion = (newIndex) => {
    console.log(`*** Home.Social.updatePromotion... newIndex=${newIndex}`)
    if (current && current.items) {
      if (newIndex >= 0 && newIndex < current.items.length) {
        const promotion = current.items[newIndex]
        const { title, image } = promotion.node.frontmatter
        if (title && image) {
          const showLeft = newIndex > 0
          const showRight = newIndex < current.items.length - 1
          setCurrent({
            ...current,
            index: newIndex,
            visible: {
              title: title,
              image: image,
              left: showLeft,
              right: showRight,
            },
          })
        }
      }
    }
  }

  const promotionMoveLeft = () => {
    console.log(`*** Home.Social.promotionMoveLeft`)
    updatePromotion(current.index - 1)
  }
  const promotionMoveRight = () => {
    console.log(`*** Home.Social.promotionMoveRight`)
    updatePromotion(current.index + 1)
  }

  //-- instagram
  const latestPosts = () => {
    obtainInstaFeed().then((latestPosts) => {
      setPosts(latestPosts)
    })
  }

  const updateInstagram = (newIndex) => {
    console.log(`*** Home.Social.updateInstagram... newIndex=${newIndex}`)
    if (instagram && instagram.items) {
      if (newIndex >= 0 && newIndex < instagram.items.length) {
        const showLeft = newIndex > 0
        const showRight = newIndex + 3 < instagram.items.length - 1
        setInstagram({
          ...instagram,
          index: newIndex,
          visible: {
            left: showLeft,
            right: showRight,
          },
        })
      }
    }
  }

  const instagramMoveLeft = () => {
    console.log(`*** Home.Social.instagramMoveLeft`)
    updateInstagram(current.index - 1)
  }
  const instagramMoveRight = () => {
    console.log(`*** Home.Social.instagramMoveRight`)
    updateInstagram(current.index + 1)
  }

  //--- main
  return show ? (
    <SocialSection>
      {current.visible && current.visible.image && (
        <SocialHeader>
          {current.visible.left && (
            <SocialHeaderLeftNav
              src="images2/icon-arrow-left-white.svg"
              onClick={() => {
                promotionMoveLeft()
              }}
            />
          )}
          {current.visible.right && (
            <SocialHeaderRightNav
              src="images2/icon-arrow-right-white.svg"
              onClick={() => {
                promotionMoveRight()
              }}
            />
          )}
          <SocialHeaderImage src={current.visible.image} />
          <SocialHeaderCaption>{current.visible.title}</SocialHeaderCaption>
        </SocialHeader>
      )}
      <SocialTitle>
        Follow us on{" "}
        <a href={HREF_INSTA} target="_blank" rel="noreferrer">
          Instagram
        </a>{" "}
        and{" "}
        <a href={HREF_FB} target="_blank" rel="noreferrer">
          Facebook
        </a>{" "}
        to see what we&apos;ve been up to!
      </SocialTitle>
      <SocialItemBar>
        {instagram.visible.left && (
          <div
            onClick={() => {
              instagramMoveLeft()
            }}
          >
            <SocialItemNavArrowImage src="images2/icon-arrow-left.png" />
          </div>
        )}
        {posts &&
          posts.map((post, i) => {
            const imageSrc = post.imageUrl
            return (
              <SocialItem key={i}>
                <a href={HREF_INSTA}>
                  <SocialItemImage src={imageSrc} />
                </a>
              </SocialItem>
            )
          })}
        {instagram.visible.right && (
          <div
            onClick={() => {
              instagramMoveRight()
            }}
          >
            <SocialItemNavArrowImage src="images2/icon-arrow-right.png" />
          </div>
        )}
      </SocialItemBar>
    </SocialSection>
  ) : (
    <div></div>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
export const SocialFeed: React.FC = (show, match) => {
  console.log(`*** SocialFeed.RENDER`)

  const data = useStaticQuery(graphql`
    {
      promotions: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/promotion/" } }
        sort: { fields: frontmatter___publish_date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return Social(show, data)
}
