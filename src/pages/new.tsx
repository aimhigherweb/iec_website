import React from "react"
import styled from "styled-components"

//----------------------------------------------------------
//-- Section 0: Main
//----------------------------------------------------------
const Main = styled(Section)`
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

const MainSection = (
  <Main>
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
  </Main>
)

//----------------------------------------------------------
//-- Section 1: Team
//----------------------------------------------------------
const TeamTitle = styled.h1`
  text-align: center;
  font-family: "Times New Roman";
`
const TeamStaff = styled.div`
  display: flex;
  justify-content: center;
`
const TeamStaffImage = styled.img`
  width: auto;
  height: 100px;
  filter: grayscale(100%);
`
const TeamDescription = styled.div`
  padding: 10%;
  text-align: center;
`
const TeamService = styled.div`
  display: flex;
  justify-content: center;
`
const TeamServiceImage = styled.img`
  width: auto;
  height: 30px;
  margin: 20px;
`

const TeamSection = (
  <Section>
    <div>
      <TeamTitle>We are a team of industry leaders</TeamTitle>
      <TeamStaff>
        <TeamStaffImage src="/images2/staff-lachie.png" />
        <TeamStaffImage src="/images2/staff-karl.png" />
        <TeamStaffImage src="/images2/staff-dylan.png" />
        <TeamStaffImage src="/images2/staff-pooja.png" />
      </TeamStaff>
      <TeamDescription>
        As practitioners, we firmly believe in comprehensive care. As
        innovators, we provide this care with the most up-to-date technology,
        knowledge, products and services available. As people, we value each one
        of our patients and their individual needs. Our practice is proudly
        independent and South Australian owned and operated. Part of a long
        legacy of optometry in Adelaide and its surrounds, we welcome
        generations of family members as they continue in our care.{" "}
      </TeamDescription>
      <TeamService>
        <TeamServiceImage src="/images2/service-eyewear-experts.png" />
        <TeamServiceImage src="/images2/service-bespoke-contact-lenses.png" />
        <TeamServiceImage src="/images2/service-paediatric-vision.png" />
        <TeamServiceImage src="/images2/service-dry-eye-clinic.png" />
        <TeamServiceImage src="/images2/service-adv-imaging.png" />
        <TeamServiceImage src="/images2/service-orthok-correction.png" />
      </TeamService>
    </div>
  </Section>
)

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
const Container = styled.div`
  height: 100%;
  margin: 0;
`
const Section = styled.div`
  width: auto;
  height: 100vh;
  background-color: lightblue;
`
const Home: React.FC = () => {
  console.log(`*** Home.RENDER`)
  return (
    <Container>
      {MainSection}
      {TeamSection}
    </Container>
  )
}

export default Home
