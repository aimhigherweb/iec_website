import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarker,
  faClock,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import { useMatchMedia } from "../hooks/useMatchMedia"

//----------------------------------------------------------
//-- Section 0: Main
//----------------------------------------------------------
const DEBUG_MAIN = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const MainHeader = styled.div`
  position: fixed;
  z-index: 9999;
  padding: 16px 10px 10px 20px;
  width: 100%;
  height: auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px;
  }
  background-color: black;
  border: ${DEBUG_MAIN};
`
const Logo = styled.img.attrs({
  src: "/images2/icon-logo.png",
})`
  width: 270px;
  height: auto;
  background: clear;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 160px;
  }
  border: ${DEBUG_MAIN};
`
const Menu = styled.img.attrs({
  src: "/images2/icon-menu.png",
})`
  position: fixed;
  top: 30px;
  right: 20px;
  width: 40px;
  height: 31px;
  background: clear;
  border: ${DEBUG_MAIN};
`

const MainFooter = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: black;
`
const MainSearch = styled.div`
  position: fixed;
  bottom: 20px;
  left: 40px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    left: 40px;
    right: 40px;
  }
  border: ${DEBUG_MAIN};
`
const MainSearchInput = styled.input`
  width: 250px;
  padding: 8px 8px;
  color: red;
  font-family: "Times New Roman";
  font-size: 1em;
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #ffffff88;
  outline: none;
  ::placeholder {
    font-family: "Times New Roman";
    font-weight: 800;
    color: white;
  }
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 100%;
  }
`
const MainBooking = styled.div`
  position: absolute;
  bottom: 20px;
  right: 40px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    position: static;
    margin: 20px 20px;
  }
  border: ${DEBUG_MAIN};
`
const MainBookingButton = styled.button`
  padding: 4px 16px;
  color: white;
  font-family: "Times New Roman";
  font-size: 1em;
  font-weight: 600;
  background-color: #5091cd;
  border: none;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 100%;
    padding: 8px 24px;
  }
`

const MainSection = styled.div`
  width: auto;
  height: 100vh;

  background-image: url("/images2/bg-section-main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${MAX_WIDTH_PX}) {
    background-
  }
`

const MainVideo = styled.div`
  width: auto;
  height: 100vh;
  background-color: black;
  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
  }
`
const MainVideoContent = styled.video`
  min-width: 100%;
  min-height: 100%;
`

const Main = (
  <div>
    <MainHeader>
      <Logo />
      <Menu />
    </MainHeader>
    <MainFooter>
      <MainSearch>
        <MainSearchInput placeholder="Search now." />
      </MainSearch>
      <MainBooking>
        <MainBookingButton>Book Online Adelaide.</MainBookingButton>
        &nbsp;&nbsp;&nbsp;
        <MainBookingButton>Book Online Woodville.</MainBookingButton>
      </MainBooking>
    </MainFooter>
    <MainVideo>
      <MainVideoContent
        id="main-video"
        className="video-js vjs-fill"
        controls={false}
        preload="auto"
        autoPlay={true}
        loop={true}
        data-setup='{"fill":true}'
      >
        <track kind="captions" />
        <source src="/videos/video-main.mp4" type="video/mp4" />
      </MainVideoContent>
    </MainVideo>
  </div>
)

//----------------------------------------------------------
//-- Section 1: Team
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
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
//-- Section 4: Footer
//----------------------------------------------------------
const DEBUG_FOOTER = "0px solid blue"
const FooterSection = styled.div`
  padding: 20px 20px;
  margin-bottom: 40px;
  border: ${DEBUG_FOOTER};
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 40px;
  }
`

const FooterLogo = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const FooterLogoItem = styled.div`
  flex: 0 1 20%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 1;
  }
`
const FooterLogoImg = styled.img`
  margin-left: 10px;
  width: 120px;
  height: auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    margin: 0;
    padding: 16px;
    width: auto;
  }
  border: ${DEBUG_FOOTER};
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  border: ${DEBUG_FOOTER};
`
const FooterContentItem = styled.div`
  flex: 1;
  margin: 0 4px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 100%;
  }
  border: ${DEBUG_FOOTER};
`
const FooterContact = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    justify-content: center;
  }
  border: ${DEBUG_FOOTER};
`
const FooterContactIcon = styled(FontAwesomeIcon)`
  flex: 0 1 40px;
  font-size: 12px;
  color: #d2d2d2;
  border: ${DEBUG_FOOTER};
`
const FooterContactText = styled.div`
  flex: 3;
  font-size: 0.5em;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 1;
  }
  border: ${DEBUG_FOOTER};
`
const FooterContactSpacer = styled.div`
  flex: 0;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 2;
  }
`

const FooterMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: ${DEBUG_FOOTER};
`
const FooterMenuItem = styled.li`
  @media (max-width: ${MAX_WIDTH_PX}) {
    text-align: center;
  }
  border: ${DEBUG_FOOTER};
`

const FooterNewsletterTitle = styled.div`
  margin-bottom: 10px;
  font-size: 0.9em;
  font-weight: 600;
  font-family: "Times New Roman";
  border: ${DEBUG_FOOTER};
`
const FooterNewsletterInput = styled.input`
  padding: 0 4px;
  margin-bottom: 10px;
  font-size: 0.9em;
  background-color: #f2f2f2;
  border: ${DEBUG_FOOTER};
  border: 1px solid #c2c2c2;
`
const FooterNewsletterIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
  color: #d2d2d2;
  cursor: pointer;
  border: ${DEBUG_FOOTER};
`
const FooterGutter = styled.div`
  margin-top: 40px;
  border-top: 1px solid #e2e2e2;
`
const FooterGutterText = styled.div`
  margin: 20px 0 40px 0;
  font-size: 0.6em;
  color: black;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.8em;
  }
`

const Footer = (
  <FooterSection>
    <FooterLogo>
      <FooterLogoItem>
        <FooterLogoImg src="images2/icon-logo-white.png" />
      </FooterLogoItem>
    </FooterLogo>
    <FooterContent>
      <FooterContentItem>
        <FooterContact>
          <FooterContactSpacer />
          <FooterContactIcon icon={faMapMarker} />
          <FooterContactText>
            <a href="https://g.page/iecadel?share">
              60 Hutt Street
              <br />
              Adelaide SA 5000
            </a>
          </FooterContactText>
          <FooterContactSpacer />
        </FooterContact>
        <FooterContact>
          <FooterContactSpacer />
          <FooterContactIcon icon={faPhoneAlt} />
          <FooterContactText>
            <a href="tel:61882319341">(08) 8231 9341</a>
          </FooterContactText>
          <FooterContactSpacer />
        </FooterContact>
        <FooterContact>
          <FooterContactSpacer />
          <FooterContactIcon icon={faClock} />
          <FooterContactText>
            Mon-Fri 8.30am - 5.30pm
            <br />
            Sat 8.30am - 12pm
          </FooterContactText>
          <FooterContactSpacer />
        </FooterContact>
      </FooterContentItem>
      <FooterContentItem>
        <FooterContact>
          <FooterContactSpacer />
          <FooterContactIcon icon={faMapMarker} />
          <FooterContactText>
            <a href="https://g.page/iecwoodville?share">
              850 Port Road
              <br />
              Woodville SA 5011
            </a>
          </FooterContactText>
          <FooterContactSpacer />
        </FooterContact>
        <FooterContact>
          <FooterContactSpacer />
          <FooterContactIcon icon={faPhoneAlt} />
          <FooterContactText>
            <a href="tel:61884459050">(08) 8445 9050</a>
          </FooterContactText>
          <FooterContactSpacer />
        </FooterContact>
        <FooterContact>
          <FooterContactSpacer />
          <FooterContactIcon icon={faClock} />
          <FooterContactText>
            Mon-Fri 8.30am - 5.30pm
            <br />
            Sat CLOSED
          </FooterContactText>
          <FooterContactSpacer />
        </FooterContact>
      </FooterContentItem>
      <FooterContentItem>
        <FooterMenu>
          <FooterMenuItem>
            <Link to="/who-we-are">Who We Are</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/what-we-do">What We Do</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/patient-resources">Patient Resources</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/contact">Contact</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/blog">Blog</Link>
          </FooterMenuItem>
        </FooterMenu>
      </FooterContentItem>
      <FooterContentItem>
        <FooterMenu>
          <FooterMenuItem>
            <Link to="/what-we-do/contact-lenses">Contact Lens Care</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/what-we-do/blepharitis">Blepharitis</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/what-we-do/dry-eye-disease">Dry Eye</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/patient-resources/nutrition-and-supplements-for-age-related-macular-degeneration">
              Nutrition
            </Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/who-we-are">About Us</Link>
          </FooterMenuItem>
        </FooterMenu>
      </FooterContentItem>
      <FooterContentItem>
        <div>
          <FooterNewsletterTitle>Newsletter</FooterNewsletterTitle>
          <div>
            <FooterNewsletterInput placeholder="Enter Your Email" />
          </div>
          <div>
            <a href="https://www.facebook.com/innovativeeyecareadelaide">
              <FooterNewsletterIcon
                icon={faFacebook}
                style={{ color: "#828282" }}
              />
            </a>
            <a href="https://www.instagram.com/innovative.eye.care">
              <FooterNewsletterIcon
                icon={faInstagram}
                style={{ color: "#828282" }}
              />
            </a>
          </div>
        </div>
      </FooterContentItem>
    </FooterContent>
    <FooterGutter>
      <FooterGutterText>
        Copyright (C) 2020 INNOVATIVE EYE CARE. Designed by The Benjamins
      </FooterGutterText>
    </FooterGutter>
  </FooterSection>
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
      {Main}
      {Team}
      {Style(match)}
      {Social}
      {Footer}
    </Container>
  )
}

export default Home
