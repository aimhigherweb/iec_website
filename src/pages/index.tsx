import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

// import { useSession } from "../state/SessionWrapper"
import { useSession } from "../state/SessionWrapper"
import { useMatchMedia } from "../hooks/useMatchMedia"
import { Main } from "../components/Main"
import { SocialFeed } from "../components/Social/SocialFeed"
import { Footer } from "../components/Layout/Footer"
import SEO from "../layouts/partials/seo"

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
  transition: filter 2s;
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
const TeamServiceItem = styled.a`
  flex: 1;
  cursor: pointer;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex-basis: 50%;
  }
  color: black;
  transition: color 1s;
  &:hover {
    color: #5091cd;
  }
  border: ${DEBUG_TEAM};
`
const TeamServiceImage = styled.div`
  display: block;
  width: 32px;
  height: 32px;
  margin: 16px auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    height: 50px;
  }
  background: url(${(props) => (props.hover ? props.iconSel : props.icon)});
  background-size: contain;
  background-repeat: no-repeat;
  transition: background 1000ms ease-in-out;
  border: 0;
`
const TeamServiceTitle = styled.p`
  font-family: "open sans";
  font-size: 0.7em;
  font-weight: 600;
  text-align: center;
  color: url(${(props) => (props.hover ? "#5091cd" : "black")});
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

const Team = (show, match, whatWeDoCatToggle) => {
  const whatWeDoCatSelect = (catId) => {
    whatWeDoCatToggle(catId)
    navigate("/what-we-do#topservice")
  }


  const teamServiceItems = [
    {
      cat: "SE01",
      tag: "1",
      title0: "EYEWEAR",
      title1: "EXPERTS",
      icon: "/images2/service-eyewear-experts.png",
      iconSel: "/images2/service-eyewear-experts-sel.png",
    },
    {
      cat: "SE02",
      tag: "2",
      title0: "BESPOKE",
      title1: "LENSES",
      icon: "/images2/service-bespoke-contact-lenses.png",
      iconSel: "/images2/service-bespoke-contact-lenses-sel.png",
    },
    {
      cat: "SE03",
      tag: "3",
      title0: "PAEDIATRIC",
      title1: "VISION",
      icon: "/images2/service-paediatric-vision.png",
      iconSel: "/images2/service-paediatric-vision-sel.png",
    },
    {
      cat: "SE04",
      tag: "4",
      title0: "DRY EYE",
      title1: "CLINIC",
      icon: "/images2/service-dry-eye-clinic.png",
      iconSel: "/images2/service-dry-eye-clinic-sel.png",
    },
    {
      cat: "SE05",
      tag: "5",
      title0: "ADVANCED",
      title1: "IMAGING",
      icon: "/images2/service-adv-imaging.png",
      iconSel: "/images2/service-adv-imaging-sel.png",
    },
    {
      cat: "SE06",
      tag: "6",
      title0: "ORTHO-K",
      title1: "CORRECTION",
      icon: "/images2/service-orthok-correction.png",
      iconSel: "/images2/service-orthok-correction-sel.png",
    },
  ]
  const [hover, setHover] = useState("")
 
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
        <TeamStaff onClick={() => navigate("/who-we-are#topteam")}>
          <TeamStaffImage src="/images2/staff-rui.png" />
        </TeamStaff>
        <TeamStaff onClick={() => navigate("/who-we-are#topteam")}>
          <TeamStaffImage src="/images2/staff-millie.png" />
        </TeamStaff>
        <TeamStaff onClick={() => navigate("/who-we-are#topteam")}>
          <TeamStaffImage src="/images2/staff-joanna.png" />
        </TeamStaff>
        {match && <TeamStaff></TeamStaff>}
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
        {teamServiceItems &&
          teamServiceItems.map((item, i) => {
            return (
              <TeamServiceItem
                onClick={() => whatWeDoCatSelect(item.cat)}
                onMouseOver={() => {
                  setHover(item.tag)
                }}
                onMouseLeave={() => {
                  setHover("")
                }}
              >
                <TeamServiceImage
                  tag={item.tag}
                  icon={item.icon}
                  iconSel={item.iconSel}
                  hover={item.tag === hover} />
                <TeamServiceTitle hover={item.tag === hover}>
                  {item.title0} <br />
                  {item.title1}
                </TeamServiceTitle>
              </TeamServiceItem>
            )
          })}
      </TeamService>
      <TeamFooter></TeamFooter>
    </TeamSection>
  ) : (
    <div>

    </div>
  )
}

//----------------------------------------------------------
//-- Section 2: Style
//----------------------------------------------------------
const DEBUG_STYLE = "0px solid blue"
const StyleSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url("/images2/bg-section-style-cropped.jpg");
  background-size: cover; background-position: center center
  
  background-repeat: no-repeat;
  @media (max-width: ${MAX_WIDTH_PX}) {
    background-image: url("/images2/bg-section-style-mob.jpg");
  }
`

const StyleTitle = styled.h1`
  padding-top: 80px;
  text-align: center;
  font-family: "recoleta";
  font-weight: 500;
  font-size: 1.7em;
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
  font-size: 1.2em;
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
  background-color: #00000033;
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
      <StyleBrandItem>
        <a
          href="https://www.tomford.com/eyewear/"
          target="_blank"
          rel="noreferrer"
        >
          <StyleBrandImage src="/images2/icon-style-tomford.png" />
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
          <StyleDescriptionExtra>
            We&apos;ve made it easy to schedule
          </StyleDescriptionExtra>
          <StyleDescriptionExtra>your next appointment</StyleDescriptionExtra>
          <StyleDescriptionExtra>
            with our online booking system.
          </StyleDescriptionExtra>
          <br />
          <StyleBookingButton
            data-cy="style-booking-button"
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

      <SEO title="Home" />
      {Main(
        "",
        true,
        video,
        null,
        carousel,
        session.current.showSearch,
        session.current.showBooking,
        session.searchToggle,
        session.bookingToggle
      )}
      {Team(show, match, session.whatWeDoCatToggle)}
      {Style(show, match, session.bookingToggle)}
      {SocialFeed(show, match)}
      {Footer(show)}
    </Container>
  )
}

export default Home
