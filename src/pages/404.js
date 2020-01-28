import React, {Component} from 'react';

import Header from '../layouts/partials/header';
import TopNav from "../layouts/partials/topnav";
import Footer from "../layouts/partials/footer";

class Page404 extends Component {
  render() {
    return (
      <>
        <Header />
        <TopNav />

        <div className="content-section">
          <div className="container">
            <div className="content-section__haeding">
              <h1>Oops! Page not found.</h1>
              <br/><br/>
              <p>We've recently upgraded this site, so the page you're looking for might have moved. Browse
                the menu above to find it, or <a href="/contact/">contact us</a>.</p>
              <p>Looking for the online booking form? <a href="/contact/">Click here</a> to view our
                practices and make an appointment!</p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Page404;
