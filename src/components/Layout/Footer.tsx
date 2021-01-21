import React from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarker,
  faClock,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

//----------------------------------------------------------
//-- Section 4: Footer
//----------------------------------------------------------
const DEBUG_FOOTER = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${MAX_WIDTH}px`

const FooterSection = styled.div`
  padding: 20px 20px;
  margin-bottom: 40px;
  border: ${DEBUG_FOOTER};
  border-top: 1px solid #e2e2e2;
  @media (max-width: ${MAX_WIDTH_PX}) {
    padding: 20px 40px;
  }
`

const FooterLogo = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const FooterLogoItem = styled.div`
  flex: 0 1 20%;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 1;
  }
`
const FooterLogoImg = styled.img`
  margin-left: 10px;
  width: 120px;
  height: auto;
  @media (max-width: ${MAX_WIDTH_PX}) {
    margin: 0;
    padding: 16px;
    width: auto;
  }
  border: ${DEBUG_FOOTER};
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  border: ${DEBUG_FOOTER};
`
const FooterContentItem = styled.div`
  flex: 1;
  margin: 0 4px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 100%;
  }
  border: ${DEBUG_FOOTER};
`
const FooterContact = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: ${MAX_WIDTH_PX}) {
    justify-content: center;
  }
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
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 1;
  }
  border: ${DEBUG_FOOTER};
`
const FooterContactSpacer = styled.div`
  flex: 0;
  @media (max-width: ${MAX_WIDTH_PX}) {
    flex: 2;
  }
`

const FooterMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: ${DEBUG_FOOTER};
`
const FooterMenuItem = styled.li`
  @media (max-width: ${MAX_WIDTH_PX}) {
    text-align: center;
  }
  border: ${DEBUG_FOOTER};
`

const FooterNewsletterTitle = styled.div`
  font-size: 1em;
  font-weight: 600;
  font-family: "Times New Roman";
  border: ${DEBUG_FOOTER};
`
const FooterNewsletterInput = styled.input`
  padding: 0 4px;
  margin-bottom: 2px;
  font-size: 0.9em;
  background-color: #f2f2f2;
  border: ${DEBUG_FOOTER};
  border: 1px solid #c2c2c2;
`
const FooterNewsletterButton = styled.button`
  margin: 4px 0 12px 0;
  padding: 2px 16px;
  color: white;
  font-family: "Times New Roman";
  font-size: 0.9em;
  font-weight: 600;
  background-color: #5091cd;
  border: none;
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
  margin: 20px 0 0px 0;
  font-size: 0.6em;
  color: black;
  @media (max-width: ${MAX_WIDTH_PX}) {
    font-size: 0.8em;
  }
`

const FooterDiv = (show) => {
  const newsletterActionUrl =
    "https://www.createsend.com/t/subscribeerror?description="
  const newsletterDataId =
    "A61C50BEC994754B1D79C5819EC1255C7D348002252D67BB9C7B04445BB90BA17C2809236CB3A67DFA608B82E166FDE32C3DEBBD394C2ABE4B2AF5671E2DB75B"
  const newsletterJs =
    "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"

  return show ? (
    <FooterSection>
      <FooterLogo onClick={() => navigate("/")}>
        <FooterLogoItem>
          <FooterLogoImg src="/images2/icon-logo-white.png" />
        </FooterLogoItem>
      </FooterLogo>
      <FooterContent>
        <FooterContentItem>
          <FooterContact>
            <FooterContactSpacer />
            <FooterContactIcon icon={faMapMarker} />
            <FooterContactText>
              <a href="https://g.page/iecadel?share">
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
        </FooterContentItem>
        <FooterContentItem>
          <FooterContact>
            <FooterContactSpacer />
            <FooterContactIcon icon={faMapMarker} />
            <FooterContactText>
              <a href="https://g.page/iecwoodville?share">
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
              <Link to="/blog">Blog</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/contact">Contact</Link>
            </FooterMenuItem>
          </FooterMenu>
        </FooterContentItem>
        <FooterContentItem>
          <FooterMenu>
            <FooterMenuItem>
              <Link to="/what-we-do/contact-lenses">Contact Lens Care</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/what-we-do/blepharitis">Blepharitis</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/what-we-do/dry-eye-disease">Dry Eye</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/patient-resources/nutrition-and-supplements-for-age-related-macular-degeneration">
                Nutrition
              </Link>
            </FooterMenuItem>
          </FooterMenu>
        </FooterContentItem>
        <FooterContentItem>
          <div>
            <FooterNewsletterTitle>Newsletter</FooterNewsletterTitle>
            <div>
              <form
                className="js-cm-form"
                id="subForm"
                action={newsletterActionUrl}
                method="post"
                data-id={newsletterDataId}
              >
                <div>
                  <FooterNewsletterInput
                    id="fieldName"
                    name="cm-name"
                    placeholder="Name"
                  />
                  <FooterNewsletterInput
                    className="js-cm-email-input qa-input-email"
                    id="fieldEmail"
                    name="cm-yuuilky-yuuilky"
                    placeholder="Email"
                  />
                </div>
                <FooterNewsletterButton type="submit">
                  Subscribe
                </FooterNewsletterButton>
              </form>
              <script type="text/javascript" src={newsletterJs}></script>
            </div>

            <div>
              <a href="https://www.facebook.com/innovativeeyecareadelaide">
                <FooterNewsletterIcon
                  icon={faFacebook}
                  style={{ color: "#828282" }}
                />
              </a>
              <a href="https://www.instagram.com/innovative.eye.care">
                <FooterNewsletterIcon
                  icon={faInstagram}
                  style={{ color: "#828282" }}
                />
              </a>
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
  ) : (
    <div></div>
  )
}

//----------------------------------------------------------
//-- Render
//----------------------------------------------------------
export const Footer: React.FC = (show) => {
  console.log(`*** Footer.RENDER`)
  return FooterDiv(show)
}
