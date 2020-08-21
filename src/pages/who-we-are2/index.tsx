import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarker,
  faClock,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import { useMatchMedia } from "../../hooks/useMatchMedia"

//----------------------------------------------------------
//-- Section 0: Main
//----------------------------------------------------------
const DEBUG_MAIN = "0px solid blue"
const MAX_WIDTH = 500
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const MainHeader = styled.div`
  position: fixed;
  z-index: 9999;
  padding: 20px;
  width: 100%;
  height: auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px;
  }
  background-color: #424242;
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
  top: 20px;
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
  background-color: #424242;
`
const MainSearch = styled.div`
  position: fixed;
  bottom: 20px;
  left: 40px;
  background-color: #424242;
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
  border: 1px solid white;
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
    <MainSection></MainSection>
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

const TeamStaffContainer = styled.div`
  align-content: center;
  padding: 20px;
  border: ${DEBUG_TEAM};
`
const TeamStaffBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 0px;
  border: ${DEBUG_TEAM};
`
const TeamStaff = styled.div`
  width: ${(props) => (props.match ? "50%" : "25%")};
  padding: 0 4px;
  border: ${DEBUG_TEAM};
`
const TeamStaffImage = styled.img`
  width: 100%;
  height: auto;
  filter: ${(props) => (props.chosen ? "none" : "grayscale(1)")};
  &:hover {
    filter: ${(props) => (props.chosen ? "none" : "none")};
  }
`
const TeamStaffTitle = styled.div`
  color: #5091cd;
  font-size: 0.9em;
  font-weight: 700;
  text-align: center;
`
const TeamStaffJob = styled.div`
  font-size: 0.6em;
  margin-bottom: 8px;
  text-align: center;
`
const StaffInfo = styled.div`
  width: 100%;
  padding: 0 4px;
  border: ${DEBUG_TEAM};
`
const StaffInfoHtml = styled.div`
  font-size: 0.7em;
  color: grey;
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

const Team = (teamList, match) => {
  const [chosen, setChosen] = useState({
    rowIndex: null,
    staffIndex: null,
    staffNode: null,
  })

  const selectStaffMember = (index, show) => {
    console.log(
      `*** whoWeAre.Team.selectStaffMember... index=${index} show=${show}`
    )
    if (show) {
      const columns = match ? 2 : 4
      const rowIndex = Math.floor(index / columns)
      setChosen({
        rowIndex: rowIndex,
        staffIndex: index,
        lastInRowIndex: (rowIndex + 1) * columns - 1,
      })
    } else {
      setChosen({ rowIndex: null, staffIndex: null, lastInRowIndex: null })
    }
  }
  const selectStaffMemberInfo = (index, show) => {
    console.log(`*** whoWeAre.Team.selectStaffMemberInfo... ${index} ${show}`)
    let finalShow = show
    if (index === chosen.staffIndex && chosen.staffNode) {
      finalShow = false
    }
    const val = finalShow ? teamList.edges[index].node : null
    setChosen({ ...chosen, staffNode: val })
  }

  //console.log(`*** whoWeAre.Team.RENDER`)
  return (
    <TeamSection>
      <TeamTitle>Meet the team</TeamTitle>
      <TeamStaffContainer>
        <TeamStaffBar>
          {teamList.edges.map(({ node }, i) => {
            const highlighted = i === chosen.staffIndex
            const filter = highlighted
              ? { filter: "grayscale(0)" }
              : { filter: "grayscale(1)" }
            return (
              <>
                <TeamStaff key={i} match={match}>
                  <TeamStaffImage
                    src={node.frontmatter.photo}
                    style={filter}
                    onMouseEnter={() => selectStaffMember(i, true)}
                    onMouseLeave={() => selectStaffMember(i, false)}
                    onClick={() => selectStaffMemberInfo(i, true)}
                  />
                  {highlighted && (
                    <>
                      <TeamStaffTitle>{node.frontmatter.title}</TeamStaffTitle>
                      <TeamStaffJob>{node.frontmatter.jobtitle}</TeamStaffJob>
                    </>
                  )}
                </TeamStaff>
                {i === chosen.lastInRowIndex && chosen.staffNode && (
                  <StaffInfo>
                    <StaffInfoHtml
                      dangerouslySetInnerHTML={{
                        __html: chosen.staffNode.html,
                      }}
                    />
                  </StaffInfo>
                )}
              </>
            )
          })}
        </TeamStaffBar>
      </TeamStaffContainer>
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

      <TeamFooter>
        <TeamFooterImage src="/images2/icon-arrow-down.png" />
      </TeamFooter>
    </TeamSection>
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
//-- Render
//----------------------------------------------------------
const Container = styled.div`
  height: 100%;
  margin: 0;
`
const Home: React.FC = ({ data }) => {
  const match = useMatchMedia({ width: MAX_WIDTH })
  const { teamList } = data

  console.log(`*** Home.RENDER... match=${match}`)
  return (
    <Container>
      {Main}
      {Team(teamList, match)}
    </Container>
  )
}

export default Home

export const query = graphql`
  {
    teamList: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(who-we-are)/.*\\\\.md$/" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            title
            photo
            jobtitle
            skill1
            skill2
            skill3
            skill4
            rating1
            rating2
            rating3
            rating4
          }
          fileAbsolutePath
          html
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`
