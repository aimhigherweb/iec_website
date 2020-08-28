import React from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

import { useMatchMedia } from "../hooks/useMatchMedia"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"

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

const Team = (
  <TeamSection>
    <TeamTitle>We are a team of industry leaders</TeamTitle>
    <TeamStaffBar onClick={() => navigate("/who-we-are2")}>
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
        knowledge, products and services available. As people, we value each one
        of our patients and their individual needs.
      </p>
      <p>
        Our practice is proudly independent and South Australian owned and
        operated. Part of a long legacy of optometry in Adelaide and its
        surrounds, we welcome generations of family members as they continue in
        our care.
      </p>
    </TeamDescription>
    <TeamService>
      <TeamServiceItem>
        <Link to="/what-we-do/eyewear-collections">
          <TeamServiceImage src="/images2/service-eyewear-experts.png" />
          <TeamServiceTitle>
            EYEWEAR
            <br />
            EXPERTS
          </TeamServiceTitle>
        </Link>
      </TeamServiceItem>
      <TeamServiceItem>
        <Link to="/what-we-do/contact-lenses">
          <TeamServiceImage src="/images2/service-bespoke-contact-lenses.png" />
          <TeamServiceTitle>
            BESPOKE
            <br />
            CONTACT LENSES
          </TeamServiceTitle>
        </Link>
      </TeamServiceItem>
      <TeamServiceItem>
        <Link to="/what-we-do/childrens-vision">
          <TeamServiceImage src="/images2/service-paediatric-vision.png" />
          <TeamServiceTitle>
            PAEDIATRIC
            <br />
            VISION
          </TeamServiceTitle>
        </Link>
      </TeamServiceItem>
      <TeamServiceItem>
        <Link to="/what-we-do/dry-eye-disease">
          <TeamServiceImage src="/images2/service-dry-eye-clinic.png" />
          <TeamServiceTitle>
            DRY EYE
            <br />
            CLINIC
          </TeamServiceTitle>
        </Link>
      </TeamServiceItem>
      <TeamServiceItem>
        <Link to="/what-we-do/oct">
          <TeamServiceImage src="/images2/service-adv-imaging.png" />
          <TeamServiceTitle>
            ADVANCED
            <br />
            IMAGING
          </TeamServiceTitle>
        </Link>
      </TeamServiceItem>
      <TeamServiceItem>
        <Link to="/what-we-do/orthokeratology-corneal-reshaping">
          <TeamServiceImage src="/images2/service-orthok-correction.png" />
          <TeamServiceTitle>
            ORTHO-K OVERNIGHT
            <br />
            CORRECTION
          </TeamServiceTitle>
        </Link>
      </TeamServiceItem>
    </TeamService>
    <TeamFooter>
      <TeamFooterImage src="/images2/icon-arrow-down.png" />
    </TeamFooter>
  </TeamSection>
)

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
        <Link to="/what-we-do/lindberg">
          <StyleBrandImage src="/images2/icon-style-lindberg.png" />
        </Link>
      </StyleBrandItem>
      <StyleBrandItem>
        <Link to="/what-we-do/face-a-face">
          <StyleBrandImage src="/images2/icon-style-face.png" />
        </Link>
      </StyleBrandItem>
      <StyleBrandItem>
        <Link to="/what-we-do/prodesign">
          <StyleBrandImage src="/images2/icon-style-prodesign.png" />
        </Link>
      </StyleBrandItem>
      <StyleBrandItem>
        <Link to="/what-we-do/prodesign">
          <StyleBrandImage src="/images2/icon-style-monkey.png" />
        </Link>
      </StyleBrandItem>
      <StyleBrandItem>
        <Link to="/what-we-do/prodesign">
          <StyleBrandImage src="/images2/icon-style-maui.png" />
        </Link>
      </StyleBrandItem>
      <StyleBrandItem>
        <Link to="/what-we-do/prodesign">
          <StyleBrandImage src="/images2/icon-style-goodgryf.png" />
        </Link>
      </StyleBrandItem>
    </StyleBrandBar>
  </StyleFooter>
)

const Style = (match) => {
  return (
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
  )
}

//----------------------------------------------------------
//-- Section 3: Social
//----------------------------------------------------------
const DEBUG_SOCIAL = "0px solid blue"
const SocialSection = styled.div`
  padding: 40px 10%;
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
  padding: 0 40px;
  border: ${DEBUG_SOCIAL};
`
const SocialItem = styled.div`
  flex: 1;
  margin: 0 4px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 40%;
  }
`
const SocialItemImage = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(100%);
`

const Social = (
  <SocialSection>
    <SocialTitle>
      Follow us on Instagram and Facebook to see what we&apos;ve been up to!
    </SocialTitle>
    <SocialItemBar>
      <SocialItem>
        <a href="https://www.instagram.com/innovative.eye.care">
          <SocialItemImage src="/images2/social-insta1.jpg" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://www.instagram.com/innovative.eye.care">
          <SocialItemImage src="/images2/social-insta2.jpg" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://www.instagram.com/innovative.eye.care">
          <SocialItemImage src="/images2/social-insta1.jpg" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://www.instagram.com/innovative.eye.care">
          <SocialItemImage src="/images2/social-insta2.jpg" />
        </a>
      </SocialItem>
    </SocialItemBar>
  </SocialSection>
)

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
const Container = styled.div`
  height: 100%;
  margin: 0;
`
const Home: React.FC = () => {
  const match = useMatchMedia({ width: MAX_WIDTH })

  console.log(`*** Home.RENDER`)
  return (
    <Container>
      {Main()}
      {Team}
      {Style(match)}
      {Social}
      {Footer()}
    </Container>
  )
}

export default Home
