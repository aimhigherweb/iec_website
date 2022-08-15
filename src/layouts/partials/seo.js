import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = (post) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const defaults = data.site.siteMetadata

  if (defaults.siteUrl === "" && typeof window !== "undefined") {
    defaults.siteUrl = window.location.origin
  }

  if (defaults.siteUrl === "") {
    console.error("Please set a siteUrl in your site metadata")
    return null
  }

  let title = defaults.title
  if (post.title) {
    title = `${post.title} - ${title}`
  }
  const description = post.description || defaults.description
  const url = new URL(post.path || "", defaults.siteUrl)
  const image = post.image ? new URL(post.image, defaults.siteUrl) : false

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <script src="https://cdn.usefathom.com/script.js" data-site={process.env.GATSBY_FATHOM_ID} defer></script>
    </Helmet>
  )
}

export default SEO
