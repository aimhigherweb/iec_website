import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { useSession } from "../state/SessionWrapper"
import { useMatchMedia } from "../hooks/useMatchMedia"
import { Main } from "../components/Main"
import { Footer } from "../components/Layout/Footer"

//----------------------------------------------------------
//-- Section 1: Team
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const TeamSection = styled.div`
  padding: 40px 10%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 0px;
  }
`

const TeamTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
  font-size: 2em;
`

const TeamStaffBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 40px;
  border: ${DEBUG_TEAM};
`
const TeamStaff = styled.div`
  flex: 1;
  margin: 0 4px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 40%;
  }
`
const TeamStaffImage = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(100%);
`

const TeamDescription = styled.div`
  padding: 40px 40px;
  text-align: center;
  font-size: 0.8em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 40px;
    text-align: justify;
    font-size: 1em;
  }
  border: ${DEBUG_TEAM};
`

const TeamService = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 40px;
  border: ${DEBUG_TEAM};
`
const TeamServiceItem = styled.div`
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  border: ${DEBUG_TEAM};
`
const TeamServiceImage = styled.img`
  display: block;
  width: auto;
  height: 24px;
  margin: 16px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 50px;
  }
  border: ${DEBUG_TEAM};
`
const TeamServiceTitle = styled.p`
  font-size: 0.5em;
  font-weight: 600;
  text-align: center;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.7em;
  }
  border: ${DEBUG_TEAM};
`

const TeamFooter = styled.div`
  padding: 40px 0 0 0;
  border: ${DEBUG_TEAM};
`
const TeamFooterImage = styled.img`
  display: block;
  width: auto;
  height: 12px;
  margin: 0px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 24px;
  }
  border: ${DEBUG_TEAM};
`

//onClick={() => navigate("/who-we-are2")}

//        <Link to="/what-we-do/eyewear-collections">
//        <Link to="/what-we-do/contact-lenses">
//        <Link to="/what-we-do/childrens-vision">
//        <Link to="/what-we-do/dry-eye-disease">
//        <Link to="/what-we-do/oct">
//        <Link to="/what-we-do/orthokeratology-corneal-reshaping">

const Team = (show) => {
  return show ? (
    <TeamSection>
      <TeamTitle>We are a team of industry leaders</TeamTitle>
      <TeamStaffBar>
        <TeamStaff>
          <TeamStaffImage src="/images2/staff-lachie.png" />
        </TeamStaff>
        <TeamStaff>
          <TeamStaffImage src="/images2/staff-karl.png" />
        </TeamStaff>
        <TeamStaff>
          <TeamStaffImage src="/images2/staff-dylan.png" />
        </TeamStaff>
        <TeamStaff>
          <TeamStaffImage src="/images2/staff-pooja.png" />
        </TeamStaff>
      </TeamStaffBar>
      <TeamDescription>
        <p>
          As practitioners, we firmly believe in comprehensive care. As
          innovators, we provide this care with the most up-to-date technology,
          knowledge, products and services available. As people, we value each
          one of our patients and their individual needs.
        </p>
        <p>
          Our practice is proudly independent and South Australian owned and
          operated. Part of a long legacy of optometry in Adelaide and its
          surrounds, we welcome generations of family members as they continue
          in our care.
        </p>
      </TeamDescription>
      <TeamService>
        <TeamServiceItem>
          <TeamServiceImage src="/images2/service-eyewear-experts.png" />
          <TeamServiceTitle>
            EYEWEAR
            <br />
            EXPERTS
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem>
          <TeamServiceImage src="/images2/service-bespoke-contact-lenses.png" />
          <TeamServiceTitle>
            BESPOKE
            <br />
            CONTACT LENSES
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem>
          <TeamServiceImage src="/images2/service-paediatric-vision.png" />
          <TeamServiceTitle>
            PAEDIATRIC
            <br />
            VISION
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem>
          <TeamServiceImage src="/images2/service-dry-eye-clinic.png" />
          <TeamServiceTitle>
            DRY EYE
            <br />
            CLINIC
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem>
          <TeamServiceImage src="/images2/service-adv-imaging.png" />
          <TeamServiceTitle>
            ADVANCED
            <br />
            IMAGING
          </TeamServiceTitle>
        </TeamServiceItem>
        <TeamServiceItem>
          <TeamServiceImage src="/images2/service-orthok-correction.png" />
          <TeamServiceTitle>
            ORTHO-K OVERNIGHT
            <br />
            CORRECTION
          </TeamServiceTitle>
        </TeamServiceItem>
      </TeamService>
      <TeamFooter>
        <TeamFooterImage src="/images2/icon-arrow-down.png" />
      </TeamFooter>
    </TeamSection>
  ) : (
    <div></div>
  )
}

//----------------------------------------------------------
//-- Section 2: Style
//----------------------------------------------------------
const DEBUG_STYLE = "0px solid blue"
const StyleSection = styled.div`
  position: relative;
  width: auto;
  height: 100vh;

  background-image: url("/images2/bg-section-style.png");
  background-size: cover;
  background-repeat: no-repeat;
`

const StyleTitle = styled.h1`
  padding-top: 80px;
  text-align: center;
  font-family: "Times New Roman";
  font-size: 1.2em;
  color: white;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 40px 40px;
    font-size: 1.7em;
  }
  border: ${DEBUG_STYLE};
`
const StyleDescription = styled.div`
  padding: 40px 80px;
  text-align: left;
  font-size: 0.8em;
  font-weight: 500;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 1em;
    font-weight: 600;
  }
  border: ${DEBUG_STYLE};
`
const StyleBookingButton = styled.button`
  margin-top: 8px;
  padding: 4px 16px;
  color: white;
  font-family: "Times New Roman";
  font-size: 1em;
  font-weight: 600;
  background-color: #5091cd;
  border: none;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 100%;
    padding 8px;
    font-size: 1.5em;
  }
`

const StyleFooter = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #00000033; /*#bcb0a240 */
  @media (max-width: ${MAX_WIDTH_PX}) {
    position: static;
  }
  border: ${DEBUG_STYLE};
`
const StyleBrandBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: ${DEBUG_STYLE};
`
const StyleBrandItem = styled.div`
  flex: 1;
  padding: 0 10px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 100%;
    background-color: #c0b4a8;
  }
  border: ${DEBUG_STYLE};
`
const StyleBrandImage = styled.img`
  display: block;
  width: auto;
  height: 64px;
  margin: 0px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 90px;
    background-color: #c0b4a8;
  }
  border: ${DEBUG_STYLE};
`
const StyleFooterPart = (
  <StyleFooter>
    <StyleBrandBar>
      <StyleBrandItem>
        <a href="https://lindberg.com" target="_blank" rel="noreferrer">
          <StyleBrandImage src="/images2/icon-style-lindberg.png" />
        </a>
      </StyleBrandItem>
      <StyleBrandItem>
        <a
          href="https://www.faceaface-paris.com"
          target="_blank"
          rel="noreferrer"
        >
          <StyleBrandImage src="/images2/icon-style-face.png" />
        </a>
      </StyleBrandItem>
      <StyleBrandItem>
        <a
          href="https://www.prodesigndenmark.com"
          target="_blank"
          rel="noreferrer"
        >
          <StyleBrandImage src="/images2/icon-style-prodesign.png" />
        </a>
      </StyleBrandItem>
      <StyleBrandItem>
        <a
          href="https://www.monkeyglasses.com"
          target="_blank"
          rel="noreferrer"
        >
          <StyleBrandImage src="/images2/icon-style-monkey.png" />
        </a>
      </StyleBrandItem>
      <StyleBrandItem>
        <a href="https://www.mauijim.com" target="_blank" rel="noreferrer">
          <StyleBrandImage src="/images2/icon-style-maui.png" />
        </a>
      </StyleBrandItem>
      <StyleBrandItem>
        <a href="https://www.goodgryf.co.nz" target="_blank" rel="noreferrer">
          <StyleBrandImage src="/images2/icon-style-goodgryf.png" />
        </a>
      </StyleBrandItem>
    </StyleBrandBar>
  </StyleFooter>
)

const Style = (show, match) => {
  return show ? (
    <div>
      <StyleSection>
        <StyleTitle>
          We prioritise your eye health without
          <br />
          compromising your style
        </StyleTitle>
        <StyleDescription>
          We&apos;ve made it easy to schedule your next appointment
          <br />
          with our online booking system.
          <br />
          <StyleBookingButton>Book online today.</StyleBookingButton>
        </StyleDescription>
        <div>{!match && StyleFooterPart}</div>
      </StyleSection>
      <div>{match && StyleFooterPart}</div>
    </div>
  ) : (
    <div></div>
  )
}

//----------------------------------------------------------
//-- Section 3: Social
//----------------------------------------------------------
const DEBUG_SOCIAL = "0px solid blue"
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
  border: ${DEBUG_TEAM};
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

const obtainInstaFeed = async () => {
  console.log(`*** Home.obtainInstaFeed`)

  const url = `https://www.instagram.com/innovative.eye.care/?__a=1`
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
  console.log(`*** Home.Social`)
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
        <a
          href="https://www.instagram.com/innovative.eye.care"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>{" "}
        and{" "}
        <a
          href="https://www.facebook.com/innovativeeyecareadelaide/"
          target="_blank"
          rel="noreferrer"
        >
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
                <a href="https://www.instagram.com/innovative.eye.care">
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
const Container = styled.div`
  height: 100%;
  margin: 0;
`
const Home: React.FC = () => {
  const match = useMatchMedia({ width: MAX_WIDTH })

  const session = useSession()
  const show = session.showAll()

  console.log(`*** Home.RENDER`)
  const video = "/videos/video-main.mp4"
  return (
    <Container>
      {Main(
        true,
        video,
        null,
        session.current.showSearch,
        session.current.showBooking,
        session.searchToggle,
        session.bookingToggle
      )}
      {Team(show)}
      {Style(show, match)}
      {Social(show)}
      {Footer(show)}
    </Container>
  )
}

export default Home
