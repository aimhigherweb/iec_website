import React from "react"

import Header from "../components/Header"
import TopNav from "../components/TopNav"
import Footer from "../components/Footer-old"

export default function () {
  return (
    <>
      <Header />
      <TopNav />

      <div className="content-section">
        <div className="container">
          <div className="content-section__haeding">
            <h1>Oops! Page not found.</h1>
            <br />
            <br />
            <p>
              We&apos;ve recently upgraded this site, so the page you&apos;re
              looking for might have moved. Browse the menu above to find it, or{" "}
              <a href="/contact/">contact us</a>.
            </p>
            <p>
              Looking for the online booking form?
              <br />
              <a href="/contact/">Click here</a> to view our practices and make
              an appointment!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
