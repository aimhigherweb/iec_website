import React, { useState, useLayoutEffect } from "react"

import { SessionWrapper } from "../state/SessionWrapper"
//import { KbNavList } from "../layouts/KbNavList"
import { useMatchMedia } from "../hooks/useMatchMedia"

const CustomWrapper = ({ children }) => {
  // const { path } = children.props
  // const {path} = undefined
  const match = useMatchMedia({
    width: 768,
  })

  // const [navList, setNavList] = useState(null)
  // const [navStyle, setNavStyle] = useState(null)
  // const [savedArticle, setSavedArticle] = useState(null)
  // const currentArticleCallback = (slug) => {
  //   setSavedArticle(slug)
  // }

  // const checkNavList = () => {
  //   const indexOnly = path === "/kb/"
  //   const articleOnly = path.startsWith("/kb/")
  //   if (!indexOnly && !articleOnly) {
  //     setNavStyle({ backgroundColor: "lightyellow" })
  //     setNavList(null)
  //   } else if (indexOnly || (!match && path && articleOnly)) {
  //     setNavStyle({
  //       display: "flex",
  //       height: "100vh",
  //       overflowY: "hidden",
  //     })
  //     setNavList(
  //       <div
  //         indexOnly={indexOnly}
  //         savedArticle={savedArticle}
  //         savedArticleCallback={currentArticleCallback}
  //         match={match}
  //       />
  //     )
  //   } else {
  //     setNavStyle(null)
  //     setNavList(null)
  //   }
  // }

  useLayoutEffect(() => {
    //checkNavList()
  }, [match])

  //<div style={navStyle}>
  //  {navList}

  return (
    <SessionWrapper>
      <div>{children}</div>
    </SessionWrapper>
  )
}

export default CustomWrapper
