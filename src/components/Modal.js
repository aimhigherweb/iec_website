import React from "react"


const Modal =({ showModal }) =>{
    if(!showModal) {
      return null
    }
    return (
      <div><p>We're moving locations to 300 Wakefield street from April 11th</p></div>
    )
  }

//!!! not currently used
export default Modal
