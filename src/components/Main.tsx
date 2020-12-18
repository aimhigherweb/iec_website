import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { FaSearch, FaTimes } from "react-icons/fa"

import { useSession } from "../state/SessionWrapper"
import { useMatchMedia } from "../hooks/useMatchMedia"
import { SearchResults } from "../components/Search/SearchResults"

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
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px;
  }
  background-color: ${(props) =>
    props.searchMode || props.bookingMode ? "#000000" : "#00000066"};
  border: ${DEBUG_MAIN};
`
const Logo = styled.img.attrs({
  src: "/images2/icon-logo.png",
})`
  width: 270px;
  height: auto;
  background: clear;
  cursor: pointer;
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 160px;
  }
  border: ${DEBUG_MAIN};
`
const Menu = styled.div`
  position: fixed;
  top: 30px;
  right: 20px;
  width: 40px;
  height: 31px;
  background: clear;
  cursor: pointer;
  border: ${DEBUG_MAIN};
`
const MainHeaderFiller = styled.div`
  height: 100px;
`

const MainMenu = styled.div`
  position: fixed;
  display: ${(props) => (props.show ? "true" : "none")};
  align-items: right;
  z-index: 9999;
  right: 0;
  top: 0;
  width: 180px;
  height: 100vh;
  background-color: #000000d0;
`
const MainMenuItem = styled.div`
  margin: 0 20px;
  color: white;
  font-family: "Times New Roman";
  font-size: 0.9em;
  font-weight: 600;
  text-align: right;
  cursor: pointer;
`

const MainFooter = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 9999;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: ${(props) => (props.searchMode ? "#000000" : "#00000066")};
`
const MainSearch = styled.div`
  flex: 1;
  margin: 0 0 0 40px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    left: 40px;
    right: 40px;
    display: none;
  }
  border: ${DEBUG_MAIN};
`
const MainSearchWrapper = styled.span`
  padding: 12px 0;
  border: ${DEBUG_MAIN};
  border: 1px solid white;
`
const MainSearchInput = styled.input`
  padding: 12px 8px;
  color: white;
  font-family: "Times New Roman";
  font-size: 1em;
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  ::placeholder {
    font-family: "Times New Roman";
    font-weight: 800;
    color: white;
  }
  @media (max-width: ${MAX_WIDTH_PX}) {
    width: 100%;
  }
  border: ${DEBUG_MAIN};
`
const MainSearchIcon = styled.span``

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
  @media (max-width: ${MAX_WIDTH_PX}) {
    left: 20px;
    right: 20px;
  }
`
const MainBookingItem = styled.div`
  margin: 0 40px;
  padding: 0px;
  flex: 1;
  @media (max-width: ${MAX_WIDTH_PX}) {
    margin: 0 0px;
  }
`
const MainBookingButton = styled.div`
  padding: 8px 24px;
  color: white;
  font-family: "Times New Roman";
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  background-color: #5091cd;
  border: none;
  cursor: pointer;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 8px 24px;
    margin: 0 8px;
  }
`

// const MainSection = styled.div`
//   width: auto;
//   height: 100vh;

//   background-image: url("/images2/bg-section-main.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   @media (max-width: ${MAX_WIDTH_PX}) {
//     background-
//   }
// `

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
const MainImage = styled.div`
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
  match,
  showFull,
  videoToPlay,
  imageToDisplay,
  showSearch,
  showBooking,
  searchToggleCallback,
  bookingToggleCallback
) => {
  const [showMenu, setShowMenu] = useState(false)

  const session = useSession()
  const searchUpdate = (value) => {
    session.setCurrent({ ...session.current, searchText: value })
  }
  const searchResult = (slug) => {
    navigate(slug)
  }
  const searchClose = () => {
    console.log(`*** Main.searchClose`)
    searchToggleCallback(false)
  }
  useEffect(() => {
    const searchLen = session.current?.searchText?.length
    console.log(`*** Main.useEffect... searchLen=${searchLen}`)
    const searchActive = !(searchLen === 0)
    searchToggleCallback(searchActive)
  }, [session.current.searchText])

  const navTo = (url) => {
    setShowMenu(false)
    if (url.startsWith("http")) {
      window.open(url, "_blank")
    } else {
      navigate(url)
    }
  }

  const bookingUrl = () => {
    const bookingId = session.current.bookingId
    const result = `https://www.MyHealth1st.com.au/AppointmentWidget?practice_id=${bookingId}`
    return result
  }

  return (
    <div>
      {!showBooking && (
        <>
          <MainHeader searchMode={showSearch} bookingMode={showBooking}>
            <Logo onClick={() => navigate("/")} />
            <Menu onClick={() => setShowMenu(!showMenu)}>
              {!showMenu && <img src={"/images2/icon-menu.png"} />}
            </Menu>
          </MainHeader>

          <MainMenu show={showMenu}>
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
      {!showFull && <MainHeaderFiller />}
      {showFull && (
        <MainFooter searchMode={showSearch}>
          <MainSearch>
            <MainSearchWrapper>
              <span>
                <MainSearchInput
                  onClick={() => searchToggleCallback(true)}
                  value={session.current.searchText}
                  onChange={(e) => {
                    searchUpdate(e.target.value)
                  }}
                  placeholder="Search now."
                  size={15}
                />
                <MainSearchIcon onClick={() => searchToggleCallback(true)}>
                  <FaSearch
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
                onClick={() => bookingToggleCallback(true, "2798")}
              >
                {match ? "Book Adelaide." : "Book Adelaide."}
              </MainBookingButton>
            </MainBookingItem>
            <MainBookingItem>
              <MainBookingButton
                onClick={() => bookingToggleCallback(true, "2797")}
              >
                {match ? "Book Woodville." : "Book Woodville."}
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
    </div>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
export const Main: React.FC = (
  showFull,
  videoToPlay,
  imageToDisplay,
  showSearch,
  showBooking,
  searchToggleCallback,
  bookingToggleCallback
) => {
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })

  console.log(`*** Main.RENDER... match=${match}`)
  return MainDiv(
    match,
    showFull,
    videoToPlay,
    imageToDisplay,
    showSearch,
    showBooking,
    searchToggleCallback,
    bookingToggleCallback
  )
}
