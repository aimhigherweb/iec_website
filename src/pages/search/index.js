import React, {Component} from 'react';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";
import {graphql} from "gatsby";

class Search extends Component {
  state = {
    hasResult: false,
    isEnter: false,
    searchKey: '',
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({searchKey: this.props.location.state.searchKey});
    }
  }

  handleChange = (event) => {
    this.setState({searchKey: event.target.value});
  };

  searchQuery = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      this.setState({
        isEnter: true,
      });
      console.log('do validate');
    }
  };

  render() {
    // console.log(this.props.location.state.searchKey);
    // const { data } = this.props;
    // const list = data.allMarkdownRemark.edges;
    return (
      <>
        <Header />
        <TopNav />

        <div className="intro-section" style={{backgroundImage: 'url(/images/intro-bg.png)'}}>
          <div className="container">
            <div className="intro-section__wrap">
              <div className="intro-section__heading">
                <h2 className="intro-section__title">Search </h2>
              </div>
              <div className="intro-section__row">
                <div className="intro-section__col intro-section__col_content">
                  <p>Search for patient resources, blog posts, and information about our practice</p>
                  <input
                    id="search-query"
                    value={this.state.searchKey}
                    onChange={this.handleChange}
                    onKeyPress={this.searchQuery}
                  />
                  <input type="submit" className="button" onClick={this.searchQuery} />
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
                  (this.state.isEnter && !this.state.hasResult) &&
                  <p>No matches found</p>
                }
                {
                  (this.state.isEnter && this.state.searchKey === '') &&
                  <p>Please enter a word or phrase above</p>
                }
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Search;

export const searchQuery = graphql`
    query SearchQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                    }
                    excerpt(truncate: true, pruneLength: 300)
                }
            }
        }
    }
`;
