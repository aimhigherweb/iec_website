import React, {Component} from 'react';
import {Link} from 'gatsby';

import Header from '../../layouts/partials/header';
import TopNav from "../../layouts/partials/topnav";
import Footer from "../../layouts/partials/footer";

class Blog extends Component {

  render() {
    return (
      <>
        <Header />
        <TopNav />

        <div
          className="intro-section"
          style={{backgroundImage: 'url(/images/intro-bg.png)'}}
        >
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
            <img src="/images/rectangle-img.png" alt="" />
          </span>
        </div>
        <div className="content-section blog-list">
          <ul className="blog-post-list">
            {/*{{range(where .Data.Pages "Type" "blog")}}*/}
            {/*<li className="blog-post-box">*/}
            {/*  <a href="/blog/{{.File.BaseFileName }}">*/}
            {/*    <img src={{.Params.Preview_Image}} alt="">*/}
            {/*      <div className="blog-list__title">*/}
            {/*        {{.Title}}*/}
            {/*      </div>*/}
            {/*      <div className="blog-list__byline">*/}
            {/*        On <span style="text-transform: uppercase"> */}
            {/*      {{.Date.Format "2 January 2006"}}*/}
            {/*      </span>*/}
            {/*        &middot;*/}
            {/*        By {{.Params.author}}*/}
            {/*      </div>*/}
            {/*      <div className="blog-list__border-bottom"></div>*/}
            {/*      <div className="blog-list__preview">*/}
            {/*        {{.Content | truncate 250}}*/}
            {/*      </div>*/}
            {/*      <button className="blog-list__button">READ MORE</button>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*{{end}}*/}
          </ul>
        </div>

        <Footer />
      </>
    );
  }
}

export default Blog;
