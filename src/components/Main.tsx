import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

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
const MainHeaderFiller = styled.div`
  height: 100px;
`

const MainFooter = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
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
  padding: 6px 8px;
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

const MainDiv = (showFull, videoToPlay) => {
  return (
    <div>
      <MainHeader>
        <Logo onClick={() => navigate("/")} />
        <Menu />
      </MainHeader>
      {!showFull && <MainHeaderFiller />}
      {showFull && (
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
    </div>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
export const Main: React.FC = (showFull, videoToPlay) => {
  console.log(`*** Main.RENDER`)
  //
  return MainDiv(showFull, videoToPlay)
}
