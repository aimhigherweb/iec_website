import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import { useSession } from "../state/SessionWrapper"
import { useMatchMedia } from "../hooks/useMatchMedia"
import { Main } from "../components/Main"
import { SocialFeed } from "../components/Social/SocialFeed"
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
  font-family: "recoleta";
  font-weight: 500;
  font-size: 2em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size 1.5em;
    padding: 0 10px;
  }
  border: ${DEBUG_TEAM};
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
  cursor: pointer;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 40%;
  }
`
const TeamStaffImage = styled.img`
  width: 100%;
  height: auto;
  background: linear-gradient(to bottom, white 50%, lightgrey 50%);
  filter: grayscale(1);
  &:hover {
    filter: none;
  }
`

const TeamDescription = styled.div`
  padding: 40px 40px;
  text-align: center;
  font-family: "open sans";
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
  font-family: "open sans";
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
        <TeamStaff onClick={() => navigate("/who-we-are#topteam")}>
          <TeamStaffImage src="/images2/staff-lachie.png" />
        </TeamStaff>
        <TeamStaff onClick={() => navigate("/who-we-are#topteam")}>
          <TeamStaffImage src="/images2/staff-karl.png" />
        </TeamStaff>
        <TeamStaff onClick={() => navigate("/who-we-are#topteam")}>
          <TeamStaffImage src="/images2/staff-dylan.png" />
        </TeamStaff>
        <TeamStaff onClick={() => navigate("/who-we-are#topteam")}>
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
  @media (max-width: ${MAX_WIDTH_PX}) {
    background-image: url("/images2/bg-section-style-mob.png");
  }
`

const StyleTitle = styled.h1`
  padding-top: 80px;
  text-align: center;
  font-family: "recoleta";
  font-weight: 500;
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
  font-family: "open sans";
  font-size: 0.8em;
  font-weight: 500;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 1em;
    font-weight: 600;
  }
  border: ${DEBUG_STYLE};
`
const StyleDescriptionExtra = styled.div`
  display: block;
  @media (max-width: ${MAX_WIDTH_PX}) {
    display: none;
  }
`
const StyleBookingButton = styled.button`
  margin-top: 8px;
  padding: 4px 16px;
  color: white;
  font-family: "recoleta";
  font-size: 1em;
  font-weight: 600;
  background-color: #5091cd;
  border: none;
  cursor: pointer;
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

const Style = (show, match, bookingToggleCallback) => {
  const BOOKING_ADL = "2798"
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
          <StyleDescriptionExtra>
            with our online booking system.
          </StyleDescriptionExtra>
          <br />
          <StyleBookingButton
            onClick={() => bookingToggleCallback(true, BOOKING_ADL)}
          >
            Book online today.
          </StyleBookingButton>
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
  const video = match ? null : "/videos/video-main.mp4"
  const carousel = match
    ? [
        "videos/main0.png",
        "videos/main1.png",
        "videos/main2.png",
        "videos/main3.png",
        "videos/main4.png",
      ]
    : null
  return (
    <Container>
      {Main(
        true,
        video,
        null,
        carousel,
        session.current.showSearch,
        session.current.showBooking,
        session.searchToggle,
        session.bookingToggle
      )}
      {Team(show)}
      {Style(show, match, session.bookingToggle)}
      {SocialFeed(show, match)}
      {Footer(show)}
    </Container>
  )
}

export default Home
