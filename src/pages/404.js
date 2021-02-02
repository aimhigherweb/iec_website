import React from "react"

//import Header from "../components/Header"

const Page404 = () => {
  return (
    <>
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
    </>
  )
}

export default Page404
