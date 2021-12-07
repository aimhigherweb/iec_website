import React from "react"
import { graphql } from "gatsby"

const Template: React.FC = ({ data }) => {
  //const post = data.markdownRemark
  return (
    <>
      <div></div>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`

export default Template
