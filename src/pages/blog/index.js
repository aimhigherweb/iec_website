import React, {Component} from 'react';
import { graphql, Link } from 'gatsby';
import {Helmet} from "react-helmet";

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";
import Img from "gatsby-image";

class Blog extends Component {

  render() {
    const {
      introBGImage,
      list,
    } = this.props.data;

    return (
      <>
        <Helmet>
          <title>Blog | Innovative Eye Care</title>
        </Helmet>
        <Header/>
        <TopNav/>

        <div className="intro-section">
          <Img
            sizes={introBGImage.childImageSharp.fluid}
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
            <div className="intro-section__wrap">
              <div className="intro-section__heading">
                <h1 className="intro-section__title">Blog</h1>
              </div>
              <div className="intro-section__row">
                <div className="intro-section__col intro-section__col_content">
                  <p>The optometrists of Innovative Eye Care have a wide scope of expertise. Our blog
                    provides a platform for our practitioners and staff to share a little more about their
                    professional interests and experiences. As well as some weird and wonderful case
                    studies, you’ll be kept up to date with practice news, the latest research and treatment
                    options, products we love and fashion trends in our retail space.</p></div>
              </div>
            </div>
          </div>
          <span className="intro-section__rectangle">
            <img src="/images/rectangle-img.png" alt=""/>
          </span>
        </div>
        <div className="content-section blog-list">
          <ul className="blog-post-list">
            {
              list.edges.map(({node}, i) => {
                return (
                  <li className="blog-post-box" key={i}>
                    <Link to={`/blog/${node.parent.name}`}>
                      <img src={node.frontmatter.preview_image} alt=""/>
                      <div className="blog-list__title">
                        {node.frontmatter.title}
                      </div>
                      <div className="blog-list__byline">
                        On <span style={{textTransform: 'uppercase'}}>
                            {node.frontmatter.date}
                            </span>
                        &middot;
                        By {node.frontmatter.author}
                      </div>
                      <div className="blog-list__border-bottom"/>
                      <div className="blog-list__preview">
                        {node.excerpt}
                      </div>
                      <button className="blog-list__button">READ MORE</button>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <Footer/>
      </>
    );
  }
}

export default Blog;

export const query = graphql`
    {
        introBGImage: file(relativePath: {eq: "images/intro-bg.png"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        list: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/.*\\\\.md$/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        preview_image
                        date(formatString: "DD MMMM YYYY")
                        author
                    }
                    parent {
                        ... on File {
                            name
                        }
                    }
                    excerpt(truncate: true, pruneLength: 250)
                }
            }
        }
    }
`;
