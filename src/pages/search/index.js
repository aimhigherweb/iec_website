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
    setTimeout(() => {
      const list = this.props.data.allMarkdownRemark.nodes;
      if (list) {
        this.setState({list});
      }
      if (this.props.location.state) {
        this.setState({searchKey: this.props.location.state.searchKey});
        this.handleSearch();
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
    this.setState({results: []});
    if (this.state.searchKey === '') {
      return;
    }

    const options = {
      shouldSort: true,
      threshold: 0.0,
      tokenize:true,
      keys: [
        {name: 'frontmatter.title', weight: 0.8},
        {name: 'frontmatter.category', weight: 0.3},
        {name: 'internal.content', weight: 0.5},
      ],
    };
    const fuse = new Fuse(this.state.list, options);
    const results = await fuse.search(this.state.searchKey);

    const keyLower = this.state.searchKey;
    const keyUpper = keyLower.charAt(0).toUpperCase() + keyLower.slice(1);
    const tempLower = `<mark>${keyLower}</mark>`;
    const tempUpper = `<mark>${keyUpper}</mark>`;
    results.map((result) => {
      if (result) {
        // init mark
        result.frontmatter.title = result.frontmatter.title.replace(new RegExp('<mark>|</mark>', 'g'), '');
        result.excerpt = result.excerpt.replace(new RegExp('<mark>|</mark>', 'g'), '');
        // lowercase
        result.frontmatter.title = result.frontmatter.title.replace(keyLower, tempLower);
        result.excerpt = result.excerpt.replace(keyLower, tempLower);
        // uppercase
        result.frontmatter.title = result.frontmatter.title.replace(keyUpper, tempUpper);
        result.excerpt = result.excerpt.replace(keyUpper, tempUpper);
        return true;
      }
      return false;
    });

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
                <h3>Results: {this.state.results.length > 0 ? this.state.results.length : ''}</h3>
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
                              <Link
                                to={`/${result.parent.relativeDirectory}/${result.parent.name}`}
                                dangerouslySetInnerHTML={{ __html: result.frontmatter.title }}
                              />
                            </h4>
                            <p dangerouslySetInnerHTML={{ __html: result.excerpt }}/>
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
