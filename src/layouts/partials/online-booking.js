import React, {Component} from 'react';
import {graphql} from "gatsby";
import Img from "gatsby-image";

class OnlineBooking extends Component {

  render() {
    const {
      bgImage,
    } = this.props.data;

    return (
      <div className="content-section online-book-section">
        <Img
          sizes={bgImage.childImageSharp.fluid}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <div className="container">
          <div className="online-box">
            <div className="online-box-heading">
              <h2>Book Online - It’s easy</h2>
            </div>
            <p>We’ve made it super easy to schedule your next appointment with our online booking
              system.</p>
            <p>Just pick a location above and click the "Book Online Now" button.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineBooking;

export const pageQuery = graphql`
    {
        bgImage: file(relativePath: {eq: "images/img38.jpg"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
