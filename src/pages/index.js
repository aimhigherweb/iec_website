import React from "react"
import { Link, graphql } from "gatsby"

export default function Index({ data }) {
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                      <h1>
                          <Link to={post.parent.relativeDirectory + '/' + post.parent.name}>{post.frontmatter.title}</Link>
                      </h1>
                      <p>{post.excerpt}</p>
                  </div>
                )
            })}
      </div>
    )
}
export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                    }
                    parent {
                        id
                        ... on File {
                            name
                            relativeDirectory
                        }
                    }
                }
            }
        }
    }
`
