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

//----------------------------------------------------------
//-- Section 0: Main
//----------------------------------------------------------
const DEBUG_MAIN = "0px solid blue"
const MainSection = styled.div`
  width: auto;
  height: 100vh;

  background-image: url("/images2/bg-section-main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`
const MainHeader = styled.div`
  padding: 40px;
  width: auto;
  height: 70px;
  border: ${DEBUG_MAIN};
`
const Logo = styled.img.attrs({
  src: "/images2/icon-logo.png",
})`
  width: 270px;
  height: 70px;
  background: clear;
  border: ${DEBUG_MAIN};
`
const Menu = styled.img.attrs({
  src: "/images2/icon-menu.png",
})`
  position: relative;
  float: right;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 31px;
  background: clear;
  border: ${DEBUG_MAIN};
`
const MainSearch = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
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
  border: 1px solid white;
  outline: none;
  ::placeholder {
    font-family: "Times New Roman";
    font-weight: 800;
    color: white;
  }
`
const MainBooking = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
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
`

const Main = (
  <MainSection>
    <MainHeader>
      <Logo />
      <Menu />
    </MainHeader>
    <MainSearch>
      <MainSearchInput placeholder="Search now." />
    </MainSearch>
    <MainBooking>
      <MainBookingButton>Book Online Adelaide.</MainBookingButton>
      &nbsp;&nbsp;&nbsp;
      <MainBookingButton>Book Online Woodville.</MainBookingButton>
    </MainBooking>
  </MainSection>
)

//----------------------------------------------------------
//-- Section 1: Team
//----------------------------------------------------------
const DEBUG_TEAM = "0px solid blue"
const TeamSection = styled.div`
  padding: 40px 10%;
`

const TeamTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
  font-size: 2em;
`

const TeamStaffBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  border: ${DEBUG_TEAM};
`
const TeamStaff = styled.div`
  flex: 1;
  margin: 0 4px;
`
const TeamStaffImage = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(100%);
`

const TeamDescription = styled.div`
  padding: 40px 40px;
  text-align: center;
  font-size: 0.6em;
  border: ${DEBUG_TEAM};
`

const TeamService = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
  border: ${DEBUG_TEAM};
`
const TeamServiceItem = styled.div`
  flex: 1;
  border: ${DEBUG_TEAM};
`
const TeamServiceImage = styled.img`
  display: block;
  width: auto;
  height: 24px;
  margin: 16px auto;
  border: ${DEBUG_TEAM};
`
const TeamServiceTitle = styled.p`
  font-size: 0.5em;
  font-weight: 600;
  text-align: center;
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
      As practitioners, we firmly believe in comprehensive care. As innovators,
      we provide this care with the most up-to-date technology, knowledge,
      products and services available. As people, we value each one of our
      patients and their individual needs. Our practice is proudly independent
      and South Australian owned and operated. Part of a long legacy of
      optometry in Adelaide and its surrounds, we welcome generations of family
      members as they continue in our care.{" "}
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
  border: ${DEBUG_STYLE};
`
const StyleDescription = styled.div`
  padding: 40px 80px;
  text-align: left;
  font-size: 0.8em;
  font-weight: 500;
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
`

const StyleFooter = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #00000033; /*#bcb0a240 */
  border: ${DEBUG_STYLE};
`
const StyleBrandBar = styled.div`
  display: flex;
  justify-content: space-around;
  border: ${DEBUG_STYLE};
`
const StyleBrandItem = styled.div`
  flex: 1;
  padding: 0 10px;
  border: ${DEBUG_STYLE};
`
const StyleBrandImage = styled.img`
  display: block;
  width: auto;
  height: 64px;
  margin: 0px auto;
  border: ${DEBUG_STYLE};
`

const Style = (
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
    <div>
      <StyleFooter>
        <StyleBrandBar>
          <StyleBrandItem>
            <StyleBrandImage src="/images2/icon-style-lindberg.png" />
          </StyleBrandItem>
          <StyleBrandItem>
            <StyleBrandImage src="/images2/icon-style-face.png" />
          </StyleBrandItem>
          <StyleBrandItem>
            <StyleBrandImage src="/images2/icon-style-prodesign.png" />
          </StyleBrandItem>
          <StyleBrandItem>
            <StyleBrandImage src="/images2/icon-style-monkey.png" />
          </StyleBrandItem>
          <StyleBrandItem>
            <StyleBrandImage src="/images2/icon-style-maui.png" />
          </StyleBrandItem>
          <StyleBrandItem>
            <StyleBrandImage src="/images2/icon-style-goodgryf.png" />
          </StyleBrandItem>
        </StyleBrandBar>
      </StyleFooter>
    </div>
  </StyleSection>
)

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
`

const SocialStaffBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  border: ${DEBUG_SOCIAL};
`
const SocialStaff = styled.div`
  flex: 1;
  margin: 0 4px;
`
const SocialStaffImage = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(100%);
`

const Social = (
  <SocialSection>
    <SocialTitle>
      Follow us on Instagram and Facebook
      <br /> to see what we&apos;ve been up to!
    </SocialTitle>
    <SocialStaffBar>
      <SocialStaff>
        <SocialStaffImage src="/images2/social-insta1.jpg" />
      </SocialStaff>
      <SocialStaff>
        <SocialStaffImage src="/images2/social-insta2.jpg" />
      </SocialStaff>
      <SocialStaff>
        <SocialStaffImage src="/images2/social-insta1.jpg" />
      </SocialStaff>
      <SocialStaff>
        <SocialStaffImage src="/images2/social-insta2.jpg" />
      </SocialStaff>
    </SocialStaffBar>
  </SocialSection>
)

//----------------------------------------------------------
//-- Section 4: Footer
//----------------------------------------------------------
const DEBUG_FOOTER = "0px solid blue"
const FooterSection = styled.div`
  padding: 20px;
  margin-bottom: 40px;
  border: ${DEBUG_FOOTER};
`

const FooterLogo = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const FooterLogoItem = styled.div`
  flex: 0 1 20%;
`
const FooterLogoImg = styled.img`
  margin-left: 10px;
  width: 120px;
  height: auto;
  border: ${DEBUG_FOOTER};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  border: ${DEBUG_FOOTER};
`
const FooterContentItem = styled.div`
  flex: 1;
  margin: 0 4px;
  border: ${DEBUG_FOOTER};
`
const FooterContact = styled.div`
  display: flex;
  margin-bottom: 10px;
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
  border: ${DEBUG_FOOTER};
`

const FooterMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: ${DEBUG_FOOTER};
`
const FooterMenuItem = styled.li`
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
  margin: 20px 0;
  font-size: 0.6em;
  color: black;
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
          <FooterContactIcon icon={faMapMarker} />
          <FooterContactText>
            60 Hutt Street
            <br />
            Adelaide SA 5000
          </FooterContactText>
        </FooterContact>
        <FooterContact>
          <FooterContactIcon icon={faClock} />
          <FooterContactText>
            Mon-Fri 8.30am - 5.30pm
            <br />
            Sat 8.30am - 12pm
          </FooterContactText>
        </FooterContact>
        <FooterContact>
          <FooterContactIcon icon={faPhoneAlt} />
          <FooterContactText>(08) 8231 9341</FooterContactText>
        </FooterContact>
      </FooterContentItem>
      <FooterContentItem>
        <FooterContact>
          <FooterContactIcon icon={faMapMarker} />
          <FooterContactText>
            850 Port Road
            <br />
            Woodville SA 5011
          </FooterContactText>
        </FooterContact>
        <FooterContact>
          <FooterContactIcon icon={faClock} />
          <FooterContactText>
            Mon-Fri 8.30am - 5.30pm
            <br />
            Sat CLOSED
          </FooterContactText>
        </FooterContact>
        <FooterContact>
          <FooterContactIcon icon={faPhoneAlt} />
          <FooterContactText>(08) 8445 9050</FooterContactText>
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
          <FooterMenuItem>Contact Lens Care</FooterMenuItem>
          <FooterMenuItem>Blepharitis</FooterMenuItem>
          <FooterMenuItem>Dry Eye</FooterMenuItem>
          <FooterMenuItem>Nutrition</FooterMenuItem>
          <FooterMenuItem>About Us</FooterMenuItem>
        </FooterMenu>
      </FooterContentItem>
      <FooterContentItem>
        <div>
          <FooterNewsletterTitle>Newsletter</FooterNewsletterTitle>
          <div>
            <FooterNewsletterInput placeholder="Enter Your Email" />
          </div>
          <div>
            <FooterNewsletterIcon
              icon={faFacebook}
              style={{ color: "#828282" }}
            />
            <FooterNewsletterIcon
              icon={faInstagram}
              style={{ color: "#828282" }}
            />
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
  console.log(`*** Home.RENDER`)
  return (
    <Container>
      {Main}
      {Team}
      {Style}
      {Social}
      {Footer}
    </Container>
  )
}

export default Home
