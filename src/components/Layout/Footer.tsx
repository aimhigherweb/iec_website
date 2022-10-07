import React from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import
{
  faMapMarkerAlt,
  faClock,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

//----------------------------------------------------------
//-- Section 4: Footer
//----------------------------------------------------------
const DEBUG_FOOTER = "0px solid blue"
const MAX_WIDTH = 768
const MAX_WIDTH_PX = `${ MAX_WIDTH }px`

const FooterSection = styled.div`
  padding: 20px 20px;
  margin-bottom: 150px;
  border: ${ DEBUG_FOOTER };
  border-top: 1px solid #e2e2e2;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    padding: 20px 40px;
  }
`

const FooterLogo = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const FooterLogoItem = styled.div`
  flex: 0 1 20%;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    flex: 1;
  }
`
const FooterLogoImg = styled.img`
  margin-left: 10px;
  width: 120px;
  height: auto;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    margin: 0;
    padding: 16px;
    width: auto;
  }
  border: ${ DEBUG_FOOTER };
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  border: ${ DEBUG_FOOTER };
`
const FooterContentItem = styled.div`
  flex: 1;
  margin: 0 4px;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    flex: 100%;
  }
  border: ${ DEBUG_FOOTER };
`
const FooterContact = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    justify-content: center;
  }
  border: ${ DEBUG_FOOTER };
`
const FooterContactIcon = styled(FontAwesomeIcon)`
  flex: 0 1 40px;
  font-size: 1em;
  color: #d2d2d2;
  border: ${ DEBUG_FOOTER };
`
const FooterContactText = styled.div`
  flex: 3;
  font-size: 1em;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    flex: 4;
    font-size: 1em;
  }
  border: ${ DEBUG_FOOTER };
`
const FooterContactSpacer = styled.div`
  flex: 0;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    flex: 2;
  }
`

const FooterMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: ${ DEBUG_FOOTER };
`
const FooterMenuItem = styled.li`
  @media (max-width: ${ MAX_WIDTH_PX }) {
    text-align: center;
  }
  border: ${ DEBUG_FOOTER };
`
const StyledLink = styled((props) => <Link {...props} />)`
  color: black;
  transition: color 2s;
  &:hover {
    color: #5091cd;
  }
`
const StyledRef = styled.a`
  color: black;
  transition: color 2s;
  &:hover {
    color: #5091cd;
  }
`

const FooterNewsletterTitle = styled.div`
  font-size: 1em;
  font-weight: 600;
  font-family: "recoleta";
  font-weight: 500;
  border: ${ DEBUG_FOOTER };
`
const FooterNewsletterInput = styled.input`
  padding: 0 4px;
  margin-bottom: 2px;
  font-family: "open sans";
  font-size: 1em;
  background-color: #f2f2f2;
  border: ${ DEBUG_FOOTER };
  border: 1px solid #c2c2c2;
`
const FooterNewsletterButton = styled.button`
  margin: 4px 0 12px 0;
  padding: 2px 16px;
  color: white;
  font-family: "recoleta";
  font-size: 0.9em;
  font-weight: 500;
  background-color: #5091cd;
  border: none;
`
const FooterNewsletterIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
  color: #d2d2d2;
  cursor: pointer;
  border: ${ DEBUG_FOOTER };
`
const FooterGutter = styled.div`
  margin-top: 40px;
  border-top: 1px solid #e2e2e2;
`
const FooterGutterText = styled.div`
  margin: 20px 0 0px 0;
  font-size: 0.6em;
  color: black;
  @media (max-width: ${ MAX_WIDTH_PX }) {
    font-size: 0.8em;
  }
`

const FooterDiv = (show) =>
{
  const newsletterActionUrl =
    "https://www.createsend.com/t/subscribeerror?description="
  const newsletterDataId =
    "A61C50BEC994754B1D79C5819EC1255C7D348002252D67BB9C7B04445BB90BA17C2809236CB3A67DFA608B82E166FDE32C3DEBBD394C2ABE4B2AF5671E2DB75B"
  const newsletterJs =
    "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"

  return show ? (
    <FooterSection>
      <FooterContent>
        <FooterContentItem>
          <FooterContact>
            <FooterContactSpacer />
            <FooterContactIcon icon={faMapMarkerAlt} />
            <FooterContactText>
              <StyledRef
                href="https://g.page/iecadel?share"
                target="_blank"
                rel="noreferrer"
              >
                300 Wakefield Street
                <br />
                Adelaide SA 5000
              </StyledRef>
            </FooterContactText>
            <FooterContactSpacer />
          </FooterContact>
          <FooterContact>
            <FooterContactSpacer />
            <FooterContactIcon icon={faPhoneAlt} />
            <FooterContactText>
              <StyledRef href="tel:61882319341">(08) 8231 9341</StyledRef>
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
            <FooterContactIcon icon={faMapMarkerAlt} />
            <FooterContactText>
              <StyledRef
                href="https://g.page/iecwoodville?share"
                target="_blank"
                rel="noreferrer"
              >
                330 Seaview Road
                <br />
                Henley Beach SA 5022
              </StyledRef>
            </FooterContactText>
            <FooterContactSpacer />
          </FooterContact>
          <FooterContact>
            <FooterContactSpacer />
            <FooterContactIcon icon={faPhoneAlt} />
            <FooterContactText>
              <StyledRef href="tel:61884459050">(08) 8445 9050</StyledRef>
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
          <FooterMenu>
            <FooterMenuItem>
              <StyledLink to="/who-we-are">Who We Are</StyledLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <StyledLink to="/what-we-do">What We Do</StyledLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <StyledLink to="/patient-resources">Patient Resources</StyledLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <StyledLink to="/blog">Blog</StyledLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <StyledLink to="/contact">Contact</StyledLink>
            </FooterMenuItem>
          </FooterMenu>
        </FooterContentItem>
        <FooterContentItem>
          <FooterMenu>
            <FooterMenuItem>
              <StyledLink to="/what-we-do/contact-lenses">
                Contact Lens Care
              </StyledLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <StyledLink to="/what-we-do/blepharitis">Blepharitis</StyledLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <StyledLink to="/what-we-do/dry-eye-disease">Dry Eye</StyledLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <StyledLink to="/patient-resources/nutrition-and-supplements-for-age-related-macular-degeneration">
                Nutrition
              </StyledLink>
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
                    data-cy="newsletter-input-name"
                    id="fieldName"
                    name="cm-name"
                    placeholder="Name"
                  />
                  <FooterNewsletterInput
                    data-cy="newsletter-input-email"
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
              <a
                href="https://www.facebook.com/innovativeeyecareadelaide"
                target="_blank"
                rel="noreferrer"
              >
                <FooterNewsletterIcon
                  icon={faFacebook}
                  style={{ color: "#828282" }}
                />
              </a>
              <a
                href="https://www.instagram.com/innovative.eye.care"
                target="_blank"
                rel="noreferrer"
              >
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
export const Footer: React.FC = (show) =>
{
  console.log(`*** Footer.RENDER`)
  return FooterDiv(show)
}
