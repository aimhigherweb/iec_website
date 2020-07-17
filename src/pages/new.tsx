import React from "react"
import styled from "styled-components"

//----------------------------------------------------------
//-- Section 0: Main
//----------------------------------------------------------
const MainSection = styled.div`
  width: auto;
  height: 100vh;

  background-image: url("/images2/z-main-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`
const MainHeader = styled.div`
  padding: 40px;
  width: auto;
  height: 70px;
  border: 1px solid clear;
`
const Logo = styled.img.attrs({
  src: "/images2/z-logo.png",
})`
  width: 270px;
  height: 70px;
  background: clear;
  border: 1px solid clear;
`
const Menu = styled.img.attrs({
  src: "/images2/z-icon-menu.png",
})`
  position: relative;
  float: right;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 31px;
  background: clear;
`
const MainSearch = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
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
      <MainSearch>
        <MainSearchInput placeholder="Search now." />
      </MainSearch>
      <MainBooking>
        <MainBookingButton>Book Online Adelaide.</MainBookingButton>
        &nbsp;&nbsp;&nbsp;
        <MainBookingButton>Book Online Woodville.</MainBookingButton>
      </MainBooking>
    </MainHeader>
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
    </Container>
  )
}

export default Home
