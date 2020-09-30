import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//import Header from "./header"
import { Footer } from "./Footer"

const Layout = ({ children, home }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <h1 home={home} siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
