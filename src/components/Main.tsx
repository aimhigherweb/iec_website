import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { FaSearch, FaTimes, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

import { useSession } from "../state/SessionWrapper"
import { useMatchMedia } from "../hooks/useMatchMedia"
import { SearchResults } from "../components/Search/SearchResults"
import { useMatchScroll } from "../hooks/useMatchScroll"



//----------------------------------------------------------
//-- Section 0: Main
//----------------------------------------------------------
const DEBUG_MAIN = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${ MAX_WIDTH }px`

const MainHeader = styled.div`
  position: fixed;
  z-index: 9999;
  padding: 16px 10px 10px 20px;
  width: 100%;
  background-color: ${ (props: {
  searchMode: any
  bookingMode: any
  carouselMode: any
  showFull: any
  scrolledDown: any
}) =>
  {
    if (props.searchMode || props.bookingMode || props.carouselMode)
    {
      return "#000000"
    } else if (!props.showFull || props.scrolledDown)
    {
      return "#424242"
    } else
    {
      return "#00000000"
    }
  } };
  @media (max-width: ${ MAX_WIDTH_PX }) {
    padding: 20px;
    background-color: #00000099;
  }
  border: ${ DEBUG_MAIN };
`
const Logo = styled.img.attrs({
  src: "/images2/icon-logo.png",
})`
  width: 270px;
  height: auto;
  background: clear;
  cursor: pointer;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    width: 160px;
    visibility: ${ (props: { hide: any }) =>
    props.hide ? "hidden" : "visible" };
  }
  border: ${ DEBUG_MAIN };
`
const HeaderTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "recoleta";
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  color: ${ (props: {
  searchMode: any
  bookingMode: any
  carouselMode: any
  scrolledDown: any
}) =>
  {
    if (props.searchMode || props.bookingMode || props.carouselMode)
    {
      return "#00000000"
    } else if (props.scrolledDown)
    {
      return "#424242"
    } else
    {
      return "#ffffff"
    }
  } };
  @media (max-width: ${ MAX_WIDTH_PX }) {
    display: none;
  }
  border: ${ DEBUG_MAIN };
`
const SearchMob = styled.div`
  position: fixed;
  top: 32px;
  right: 80px;
  width: 20px;
  height: 31px;
  background: clear;
  cursor: pointer;
  visibility: hidden;
  @media only screen and (hover: none) and (pointer: coarse) {
    visibility: visible;
  }
  border: ${ DEBUG_MAIN };
`
const Menu = styled.div`
  position: fixed;
  top: 30px;
  right: 20px;
  width: 40px;
  height: 31px;
  background: clear;
  cursor: pointer;
  border: ${ DEBUG_MAIN };
`
const MainHeaderFiller = styled.div`
  height: 88px;
`

const MainMenu = styled.div`
  position: fixed;
  display: ${ (props: { show: any }) => (props.show ? "true" : "none") };
  align-items: right;
  z-index: 9999;
  right: 0;
  top: 0;
  width: 400px;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    width: 220px;
  }
  height: 100vh;
  background-color: #000000d0;
`
const MainMenuItem = styled.div`
  margin: 0 20px;
  color: white;
  font-family: "recoleta";
  font-size: 1.6em;
  font-weight: 600;
  line-height: 1.8;
  text-align: right;
  cursor: pointer;
  &:hover {
    color: #5091cd;
  }
  @media (max-width: ${ MAX_WIDTH_PX }) {
    font-size: 1.1em;
    line-height: 1.6;
    margin: 12px 20px;
  }
`
const MainMenuItemContact = styled.div`
  margin: 0 20px;
  color: white;
  font-family: "open sans";
  font-size: 1em;
  font-weight: 400;
  text-align: right;
  cursor: pointer;
  &:hover {
    color: #5091cd;
  }
  @media (max-width: ${ MAX_WIDTH_PX }) {
    font-size: 0.8em;
    margin: 12px 20px;
  }
`
const MainMenuItemDivider = styled.div`
  position: relative;
  margin-top: 20px;
`
const MainMenuItemLine = styled.div`
  position: absolute;
  border-top: 1px solid #d2d2d2;
  left: 40%;
  right: 20px;
`

const MainFooter = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 9999;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    flex-direction: column;
    height: auto;
  }
  background-color: ${ (props: { searchMode: any; scrolledDown: any }) =>
  {
    if (props.searchMode)
    {
      return "#000000"
    } else if (props.scrolledDown)
    {
      return "#424242"
    } else
    {
      return "#00000000"
    }
  } };
`
const MainSearch = styled.div`
  flex: 1;
  margin: 0 0 0 40px;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    /*display: block;
    margin: 20px 0px 4px 10px;
    width: 100%;
    font-size: 0.8em;*/
    display: none;
  }
  border: ${ DEBUG_MAIN };
`
const MainSearchMob = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  margin: 0;
  width: 100%;
  font-size: 0.8em;
  visibility: hidden;
  @media only screen and (hover: none) and (pointer: coarse) {
    visibility: visible;
  }
  border: ${ DEBUG_MAIN };
`
const MainSearchWrapper = styled.span`
  padding: 12px 0;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    width: 100%;
    margin: 0px 8px;
  }
  border: ${ DEBUG_MAIN };
  border: 1px solid white;
`
const MainSearchInput = styled.input`
  padding: 12px 8px;
  color: white;
  font-family: "recoleta";
  font-size: 1em;
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  ::placeholder {
    font-family: "recoleta";
    font-weight: 800;
    color: white;
  }
  @media (max-width: ${ MAX_WIDTH_PX }) {
    width: 80%;
  }
  border: ${ DEBUG_MAIN };
`
const MainSearchIcon = styled.span`
  @media (max-width: ${ MAX_WIDTH_PX }) {
  }
`

const MainAppointment = styled.div`
  padding: 40px;
  height: 100%;
  width: 100%;
  background-color: black;
`

const MainBooking = styled.div`
  flex: 3;
  display: flex;
  margin: 0;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    /*display: block;
    padding: 0px 20px;
    width: 100%;*/
  }
`
const MainBookingItem = styled.div`
  margin: 0 40px;
  padding: 0px;
  flex: 1;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    margin: 10px 8px 12px 10px;
  }
`
const MainBookingButton = styled.div`
  padding: 8px 24px;
  color: white;
  font-family: "recoleta";
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  background-color: #5091cd;
  border: none;
  cursor: pointer;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    margin: 0;
    padding: 8px 50px;
    font-size: 0.9em;
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
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const MainVideoContent = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`
const MainImage = styled.div`
  width: auto;
  height: auto;
`
const MainCarousel = styled.div`
  width: auto;
  height: auto;
`

const BookingIframe = styled.iframe`
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 800px;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  frameborder="0"
`

const MainDiv = (
  title,
  match,
  scrolledDown,
  showFull,
  videoToPlay,
  imageToDisplay,
  carouselToDisplay,
  showSearch,
  showBooking,
  searchToggleCallback,
  bookingToggleCallback
) =>
{
  const [showMenu, setShowMenu] = useState(false)


  const session = useSession()
  const searchUpdate = (value) =>
  {
    session.setCurrent({ ...session.current, searchText: value })
  }
  const searchResult = (slug) =>
  {
    navigate(slug)
  }
  const searchClose = () =>
  {
    console.log(`*** Main.searchClose`)
    searchToggleCallback(false)
  }


  useEffect(() =>
  {
    const searchLen = session.current?.searchText?.length
    console.log(`*** Main.useEffect... searchLen=${ searchLen }`)
    const searchActive = !(searchLen === 0)
    searchToggleCallback(searchActive)
  }, [session.current.searchText])

  const navTo = (url) =>
  {
    setShowMenu(false)
    if (url.startsWith("http") || url.startsWith("tel"))
    {
      window.open(url, "_blank")
    } else
    {
      navigate(url)
    }
  }

  const BOOKING_ADL = "2798"
  const BOOKING_WDV = "2797"
  const bookingUrl = () =>
  {
    const bookingId = session.current.bookingId
    const result = `https://www.MyHealth1st.com.au/AppointmentWidget?practice_id=${ bookingId }`
    return result
  }

  return (
    <div>
      {!showBooking && (
        <>
          <MainHeader
            searchMode={showSearch}
            bookingMode={showBooking}
            carouselMode={carouselToDisplay}
            scrolledDown={scrolledDown}
            showFull={showFull}
          >
            <Logo onClick={() => navigate("/")} hide={showSearch} />
            <HeaderTitle
              searchMode={showSearch}
              bookingMode={showBooking}
              carouselMode={carouselToDisplay}
              scrolledDown={scrolledDown}
            >
              {title}
            </HeaderTitle>

            {showSearch && (
              <MainSearchMob>
                <MainSearchWrapper>
                  <MainSearchInput
                    data-cy="search-input"
                    onClick={() => searchToggleCallback(true)}
                    value={session.current.searchText}
                    onChange={(e) =>
                    {
                      searchUpdate(e.target.value)
                    }}
                    placeholder="Search now."
                    size={15}
                  />
                </MainSearchWrapper>
              </MainSearchMob>
            )}
            <SearchMob>
              <FaSearch
                data-cy="search-icon-close"
                onClick={() => searchToggleCallback(true)}
                style={{
                  color: "white",
                }}
              />
            </SearchMob>
            <Menu data-cy="menu" onClick={() => setShowMenu(!showMenu)}>
              {!showMenu && <img data-cy="menu-icon" src={"/images2/icon-menu.png"} />}
            </Menu>
          </MainHeader>

          <MainMenu show={showMenu} data-cy="main-menu">
            <MainMenuItem onClick={() => setShowMenu(!showMenu)}>
              <FaTimes
                style={{
                  color: "#5091cd",
                  marginTop: "32px",
                  marginRight: "6px",
                  marginBottom: "12px",
                }}
              />
            </MainMenuItem>

            <MainMenuItem onClick={() => navTo("/")}>Home</MainMenuItem>
            <MainMenuItem onClick={() => navTo("/who-we-are")}>
              Who We Are
            </MainMenuItem>
            <MainMenuItem onClick={() => navTo("/what-we-do")}>
              What We Do
            </MainMenuItem>
            <MainMenuItem onClick={() => navTo("/patient-resources")}>
              Patient Resources
            </MainMenuItem>
            <MainMenuItem onClick={() => navTo("/blog")}>Blog</MainMenuItem>
            <MainMenuItem onClick={() => navTo("/contact")}>
              Contact
            </MainMenuItem>
            <MainMenuItem onClick={() => navTo("https://eyesolutions.com.au")}>
              Shop
            </MainMenuItem>
            <MainMenuItemContact
              style={{ marginTop: "30px" }}
              onClick={() => navTo("https://g.page/iecadel?share")}
            >
              Adelaide.&nbsp;&nbsp;
              <FaMapMarkerAlt
                style={{
                  fontSize: "0.7em",
                  color: "white",
                }}
              />
            </MainMenuItemContact>
            <MainMenuItemContact onClick={() => navTo("tel:61882319341")}>
              (08) 8231 9341 &nbsp;&nbsp;
              <FaPhoneAlt
                style={{
                  fontSize: "0.7em",
                  color: "white",
                }}
              />
            </MainMenuItemContact>
            <MainMenuItemDivider>
              <MainMenuItemLine />
            </MainMenuItemDivider>
            <MainMenuItemContact
              style={{ marginTop: "40px" }}
              onClick={() => navTo("https://g.page/iecwoodville?share")}
            >
              Henley Beach.&nbsp;&nbsp;
              <FaMapMarkerAlt
                style={{
                  fontSize: "0.7em",
                  color: "white",
                }}
              />
            </MainMenuItemContact>
            <MainMenuItemContact onClick={() => navTo("tel:61884459050")}>
              (08) 8445 9050 &nbsp;&nbsp;
              <FaPhoneAlt
                style={{
                  fontSize: "0.7em",
                  color: "white",
                }}
              />
            </MainMenuItemContact>
          </MainMenu>
        </>
      )}
      {showBooking && (
        <MainAppointment>
          <div
            style={{
              position: "fixed",
              top: "8px",
              right: "54px",
            }}
            onClick={() => bookingToggleCallback(false, "")}
          >
            <FaTimes
              style={{
                fontSize: "20pt",
                marginTop: "40px",
                marginRight: "6px",
                marginBottom: "12px",
              }}
            />
          </div>
          <BookingIframe src={bookingUrl()}></BookingIframe>
        </MainAppointment>
      )}
      {showFull && (
        <MainFooter searchMode={showSearch} scrolledDown={scrolledDown}>
          <MainSearch>
            <MainSearchWrapper>
              <span>
                <MainSearchInput

                  onClick={() => searchToggleCallback(true)}
                  value={session.current.searchText}
                  onChange={(e) =>
                  {
                    searchUpdate(e.target.value)
                  }}
                  placeholder="Search now."
                  size={15}
                />
                <MainSearchIcon onClick={() => searchToggleCallback(true)}>
                  <FaSearch
                    data-cy="search-icon"
                    style={{
                      color: "white",
                      paddingTop: "4px",
                      marginRight: "6px",
                    }}
                  />
                </MainSearchIcon>
              </span>
            </MainSearchWrapper>
          </MainSearch>

          <MainBooking>
            <MainBookingItem>
              <MainBookingButton
                data-cy="booking"
                onClick={() => bookingToggleCallback(true, BOOKING_ADL)}
              >
                {match ? "Book Adelaide." : "Book Adelaide."}
              </MainBookingButton>
            </MainBookingItem>
            <MainBookingItem>
              <MainBookingButton
                onClick={() => bookingToggleCallback(true, BOOKING_WDV)}
              >
                {match ? "Book Henley Beach." : "Book Henley Beach."}
              </MainBookingButton>
            </MainBookingItem>
          </MainBooking>
        </MainFooter>
      )}
      {showSearch && (
        <div>
          <SearchResults
            resultCallback={searchResult}
            closeCallback={searchClose}
          />
        </div>
      )}
      {!showSearch && !showBooking && showFull && videoToPlay && (
        <MainVideo>
          <MainVideoContent
            id="main-video"
            className="video-js vjs-fill"
            controls={false}
            preload="auto"
            autoPlay={true}
            muted={true}
            loop={true}
            data-setup='{"fill":true}'
          >
            <track kind="captions" />
            <source src={videoToPlay} type="video/mp4" />
          </MainVideoContent>
        </MainVideo>
      )}
      {!showSearch && showFull && imageToDisplay && (
        <MainImage>
          <img src={imageToDisplay} />
        </MainImage>
      )}
      {!showSearch && showFull && carouselToDisplay && (
        <MainCarousel>
          <MainHeaderFiller />
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            removeArrowOnDeviceType={["mobile"]}
            ssr={true}
          >
            <img src="/videos/main0.jpg" />
            <img src="/videos/main1.jpg" />
            <img src="/videos/main2.jpg" />
            <img src="/videos/main3.jpg" />
            <img src="/videos/main4.jpg" />
          </Carousel>
        </MainCarousel>
      )}
    </div>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
export const Main: any = (
  title,
  showFull,
  videoToPlay,
  imageToDisplay,
  carouselToDisplay,
  showSearch,
  showBooking,
  searchToggleCallback,
  bookingToggleCallback
) =>
{
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })
  const scroll = useMatchScroll()
  const scrolledDown = scroll > 1

  return MainDiv(
    title,
    match,
    scrolledDown,
    showFull,
    videoToPlay,
    imageToDisplay,
    carouselToDisplay,
    showSearch,
    showBooking,
    searchToggleCallback,
    bookingToggleCallback
  )
}
