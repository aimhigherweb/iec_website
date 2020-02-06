import React, {Component} from 'react';
import {graphql, Link} from "gatsby";
import {Helmet} from 'react-helmet'
import Fuse from 'fuse.js';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";

class Search extends Component {
  state = {
    hasResult: true,
    isClicked: false,
    list: [],
    results: [],
    searchKey: '',
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({searchKey: this.props.location.state.searchKey});
    }
    setTimeout(() => {
      const list = this.props.data.allMarkdownRemark.nodes;
      if (list) {
        this.setState({list});
      }
    }, 1000);
  }

  handleChange = async (e) => {
    this.setState({
      isClicked: false,
      searchKey: e.target.value,
    });
    if (e.key === 'Enter') {
      await this.handleSearch();
    }
  };

  handleSubmit = async () => {
    await this.handleSearch();
  };

  /**
   * Search json data by using fuse.js
   */
  async handleSearch() {
    const options = {
      keys: ['frontmatter.title', 'frontmatter.category', 'internal.content'],
    };
    const fuse = new Fuse(this.state.list, options);
    const results = await fuse.search(this.state.searchKey);

    this.setState({
      hasResult: results.length > 0,
      isClicked: true,
      results,
    });
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Search Results</title>
        </Helmet>
        <Header/>
        <TopNav/>

        <div className="intro-section" style={{backgroundImage: 'url(/images/intro-bg.png)'}}>
          <div className="container">
            <div className="intro-section__wrap">
              <div className="intro-section__heading">
                <h2 className="intro-section__title">Search</h2>
              </div>
              <div className="intro-section__row">
                <div className="intro-section__col intro-section__col_content">
                  <p>Search for patient resources, blog posts, and information about our practice</p>
                  <input
                    id="search-query"
                    name="s"
                    value={this.state.searchKey}
                    onChange={this.handleChange}
                    onKeyPress={(e) => this.handleChange(e)}
                  />
                  <input
                    type="button"
                    className="button"
                    value="Search"
                    onClick={this.handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="content-wrap">
              <div id="search-results">
                <h3>Results</h3>
                {
                  (this.state.isClicked && !this.state.hasResult) &&
                  <p>No matches found</p>
                }
                {
                  (this.state.isClicked && this.state.searchKey === '') &&
                  <p>Please enter a word or phrase above</p>
                }
                {
                  this.state.results && (
                    <>
                      {
                        this.state.results.map((result, i) => (
                          <div key={i}>
                            <h4>
                              <Link to={`/${result.parent.relativeDirectory}/${result.parent.name}`}>
                                {result.frontmatter.title}
                              </Link>
                            </h4>
                            <p>
                              {result.excerpt}
                            </p>
                          </div>
                        ))
                      }
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </>
    );
  }
}

export default Search;

export const searchQuery = graphql`
    {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    category
                }
                excerpt(truncate: true, pruneLength: 300)
                internal {
                    content
                }
                parent {
                    ... on File {
                        name
                        relativeDirectory
                    }
                }
            }
        }
    }
`;
