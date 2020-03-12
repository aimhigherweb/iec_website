import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import TopNav from '../../components/TopNav'
import Footer from '../../components/Footer'

export default function(props) {
  const { markdownRemark } = props.data

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
            <div
              className="employee-slide__inner"
              style={{ paddingTop: '10px' }}
            >
              <div className="container">
                <div className="content-wrap">
                  <h2>{markdownRemark.frontmatter.title}</h2>
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
  )
}

export const PatientResourcesSingleQuery = graphql`
  query PatientResourcesById($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      id
      html
    }
  }
`
