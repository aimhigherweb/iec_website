import React, { useState, useEffect } from "react"
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
  background-color: yellow;
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
  font-family: "Times New Roman";
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
  font-family: "Times New Roman";
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
  height: auto;
  object-fit: cover;
  border: ${DEBUG_SOCIAL};
`

const HREF_INSTA = "https://www.instagram.com/innovative.eye.care"
const HREF_FB = "https://www.facebook.com/innovativeeyecareadelaide/"

const obtainInstaFeed = async () => {
  console.log(`*** Home.obtainInstaFeed`)

  const url = `${HREF_INSTA}/?__a=1`
  const response = await fetch(url)
  const json = await response.json()

  const result = []
  const MAX_ITEMS = 4

  const { edge_owner_to_timeline_media } = json.graphql.user
  if (edge_owner_to_timeline_media) {
    const { edges } = edge_owner_to_timeline_media
    if (edges?.length > 0) {
      edges.forEach((edge) => {
        const { display_url } = edge.node
        if (display_url) {
          if (result.length < MAX_ITEMS) {
            result.push({ imageUrl: edge.node.display_url })
          }
        }
      })
    }
  }

  return result
}

const Social = (show) => {
  console.log(`*** SocialFeed.Social`)
  const [posts, setPosts] = useState()

  const latestPosts = () => {
    obtainInstaFeed().then((latestPosts) => {
      setPosts(latestPosts)
    })
  }

  useEffect(() => {
    console.log(`*** Home.Social.useEffect`)
    latestPosts()
  }, [])

  return show ? (
    <SocialSection>
      <SocialHeader>
        <SocialHeaderLeftNav src="images2/icon-arrow-left-white.svg" />
        <SocialHeaderRightNav src="images2/icon-arrow-right-white.svg" />
        <SocialHeaderImage src="images2/social-insta2.jpg" />
        <SocialHeaderCaption>See better. See us.</SocialHeaderCaption>
      </SocialHeader>
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
        <div>
          <SocialItemNavArrowImage src="images2/icon-arrow-left.png" />
        </div>
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
        <div>
          <SocialItemNavArrowImage src="images2/icon-arrow-right.png" />
        </div>
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
  return Social(show)
}
