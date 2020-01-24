import React, {Component} from 'react';
import {graphql} from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";

class WhatWeDoTemplate extends Component {

  render() {
    const {markdownRemark} = this.props.data;

    return (
      <>
        <Helmet>
          <title>{markdownRemark.frontmatter.title}</title>
        </Helmet>
        <Header />
        <TopNav />

        <div className="content-section">
          <div className="employee-box open-close ">
            <div className="employee-slide ">
              <div className="employee-slide__inner" style={{paddingTop: '10px'}}>
                <div className="container">
                  <div className="content-wrap">
                    <h1>{markdownRemark.title}</h1>
                    <div className="employee-slide__row">
                      <div
                        className="employee-slide__col employee-slide__col-content"
                        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default WhatWeDoTemplate;

export const WhatWeDoSingleQuery = graphql`
    query WhatWeDoById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
            }
            id
            html
        }
    }
`;
