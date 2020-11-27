import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { FaSearch, FaTimes } from "react-icons/fa"

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
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px;
  }
  background-color: #00000066;
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
  background-color: #00000066;
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
  color: red;
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
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 8px 24px;
    margin: 0 8px;
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
const MainImage = styled.div`
  width: auto;
  height: auto;
`

const MainDiv = (match, showFull, videoToPlay, imageToDisplay) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <MainHeader>
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

        <MainMenuItem>Home</MainMenuItem>
        <MainMenuItem>Who We Are</MainMenuItem>
        <MainMenuItem>What We Do</MainMenuItem>
        <MainMenuItem>Patient Resources</MainMenuItem>
        <MainMenuItem>Contact</MainMenuItem>
        <MainMenuItem>Blog</MainMenuItem>
        <MainMenuItem>Shop</MainMenuItem>
      </MainMenu>
      {!showFull && <MainHeaderFiller />}
      {showFull && (
        <MainFooter>
          <MainSearch>
            <MainSearchWrapper>
              <span>
                <MainSearchInput placeholder="Search now." size={15} />
                <MainSearchIcon>
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
              <MainBookingButton>
                {match ? "Book Adelaide." : "Book Adelaide."}
              </MainBookingButton>
            </MainBookingItem>
            <MainBookingItem>
              <MainBookingButton>
                {match ? "Book Woodville." : "Book Woodville."}
              </MainBookingButton>
            </MainBookingItem>
          </MainBooking>
        </MainFooter>
      )}
      {showFull && videoToPlay && (
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
      {showFull && imageToDisplay && (
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
export const Main: React.FC = (showFull, videoToPlay, imageToDisplay) => {
  const match = useMatchMedia({
    width: MAX_WIDTH,
  })
  console.log(`*** Main.RENDER... match=${match}`)
  //
  return MainDiv(match, showFull, videoToPlay, imageToDisplay)
}
