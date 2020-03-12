import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import TopNav from '../../components/TopNav'
import Footer from '../../components/Footer'

class BlogTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <>
        <Helmet>
          <title>{post.frontmatter.title}</title>
        </Helmet>
        <Header />
        <TopNav />

        <div className="content-section">
          <div className="employee-box open-close ">
            <div className="employee-slide ">
              <div
                className="employee-slide__inner"
                style={{ paddingTop: '20px' }}
              >
                <div className="container">
                  <div className="content-wrap">
                    <h1>{post.frontmatter.title}</h1>
                    <div className="employee-slide__row">
                      <div className="employee-slide__col employee-slide__col-content">
                        <div className="employee-heading">
                          <p>{post.frontmatter.date}</p>
                          <p>
                            <a href={post.frontmatter.author_url}>
                              {post.frontmatter.author}
                            </a>
                          </p>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        author
        author_url
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`
