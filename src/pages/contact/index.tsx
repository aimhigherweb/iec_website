import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarker,
  faClock,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"

import { useSession } from "../../state/SessionWrapper"
import { useMatchMedia } from "../../hooks/useMatchMedia"
import { Main } from "../../components/Main"
import { SocialFeed } from "../../components/Social/SocialFeed"
import { Footer } from "../../components/Layout/Footer"
import SEO from "../../layouts/partials/seo"

//----------------------------------------------------------
//-- Section 1: Team
//----------------------------------------------------------
const DEBUG_CONTACT = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const FooterSection = styled.div`
  padding: 20px 20px;
  margin-bottom: 40px;
  border: ${DEBUG_CONTACT};
  border-top: 1px solid #e2e2e2;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 0px 0px;
  }
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  border: ${DEBUG_CONTACT};
`
const FooterContentItem = styled.div`
  flex: 1;
  margin: 0 20px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 100%;
  }
  border: ${DEBUG_CONTACT};
`

const MainBookingButton = styled.button`
  padding: 4px 16px;
  color: white;
  font-family: "recoleta";
  font-size: 1em;
  font-weight: 600;
  background-color: #5091cd;
  border: none;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 100%;
    padding: 8px 24px;
  }
`

const FooterPracticeImg = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_CONTACT};
`
const FooterContact = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_CONTACT};
`
const FooterContactTitle = styled.div`
  flex: 3;
  font-family: "open sans";
  font-size: 1.2em;
  font-weight: 600;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 1;
  }
  border: ${DEBUG_CONTACT};
`
const FooterContactIcon = styled(FontAwesomeIcon)`
  flex: 0 1 30px;
  margin-top: 8px;
  font-size: 12px;
  color: #d2d2d2;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_CONTACT};
`
const FooterContactText = styled.div`
  flex: 3;
  font-family: "open sans";
  font-size: 1em;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
  border: ${DEBUG_CONTACT};
`
const FooterContactSpacer = styled.div`
  flex: 0;
  @media (max-width: ${MAX_WIDTH_PX}) {
  }
`

const PracticeLocations = (show, bookingToggleCallback) => {
  const BOOKING_ADL = "2798"
  const BOOKING_WDV = "2797"

  return show ? (
    <FooterSection>
      <FooterContent>
        <FooterContentItem>
          <FooterPracticeImg src="images2/contact-adelaide.png" />
        </FooterContentItem>
        <FooterContentItem>
          <FooterContact>
            <FooterContactTitle>Adelaide</FooterContactTitle>
          </FooterContact>
          <FooterContact>
            <FooterContactSpacer />
            <FooterContactIcon icon={faMapMarker} />
            <FooterContactText>
              <a
                href="https://g.page/iecadel?share"
                target="_blank"
                rel="noreferrer"
              >
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
          <FooterContact>
            <MainBookingButton
              onClick={() => bookingToggleCallback(true, BOOKING_ADL)}
            >
              Book Online
            </MainBookingButton>
          </FooterContact>
        </FooterContentItem>
      </FooterContent>
      <FooterContent>
        <FooterContentItem>
          <FooterPracticeImg src="images2/contact-woodville.png" />
        </FooterContentItem>
        <FooterContentItem>
          <FooterContact>
            <FooterContactTitle>Woodville</FooterContactTitle>
          </FooterContact>
          <FooterContact>
            <FooterContactSpacer />
            <FooterContactIcon icon={faMapMarker} />
            <FooterContactText>
              <a
                href="https://g.page/iecwoodville?share"
                target="_blank"
                rel="noreferrer"
              >
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
          <FooterContact>
            <MainBookingButton
              onClick={() => bookingToggleCallback(true, BOOKING_WDV)}
            >
              Book Online
            </MainBookingButton>
          </FooterContact>
        </FooterContentItem>
      </FooterContent>
    </FooterSection>
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

const Contact: React.FC = () => {
  const match = useMatchMedia({ width: MAX_WIDTH })

  const session = useSession()
  const show = session.showAll()

  console.log(`*** Contact.RENDER... match=${match}`)
  const video = match ? null : "/videos/location-city.mp4"
  return (
    <Container>
      <SEO title="Contact Us" />
      {Main(
        "Contact Us",
        true,
        video,
        null,
        null,
        session.current.showSearch,
        session.current.showBooking,
        session.searchToggle,
        session.bookingToggle
      )}
      {Header(match)}
      {PracticeLocations(show, session.bookingToggle)}
      {SocialFeed(show, match)}
      {Footer(show)}
    </Container>
  )
}

export default Contact
