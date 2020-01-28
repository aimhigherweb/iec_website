import React, {Component} from 'react';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";
import {Helmet} from "react-helmet/es/Helmet";

class Search extends Component {

  render() {
    return (
      <>
        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.2.0/fuse.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.min.js"></script>
          <script async type="text/javascript" src="/js/search.js" />
        </Helmet>
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
                  <form action="/search">
                    <input id="search-query" name="s"/>
                    <input type="submit" className="button" value="Search" />
                  </form>
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
