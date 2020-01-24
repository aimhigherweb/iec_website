import React, {Component} from 'react';
import {graphql} from 'gatsby';
import { Helmet } from 'react-helmet'

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";

class BlogTemplate extends Component {

  render() {
    console.log(this.props.data)
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
              <div className="employee-slide__inner" style={{paddingTop: '20px'}}>
                <div className="container">
                  <div className="content-wrap">
                    <h1>{markdownRemark.frontmatter.title}</h1>
                    <div className="employee-slide__row">
                      <div className="employee-slide__col employee-slide__col-content">
                        <div className="employee-heading">
                          <p>{markdownRemark.frontmatter.date}</p>
                          <p><a href={markdownRemark.frontmatter.author_url}>{markdownRemark.frontmatter.author}</a></p>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
                      </div>
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

export default BlogTemplate;

export const BlogSingleQuery = graphql`
    query BlogById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                author
                author_url
                date(formatString: "DD MMMM YYYY")
            }
            id
            html
        }
    }
`;
