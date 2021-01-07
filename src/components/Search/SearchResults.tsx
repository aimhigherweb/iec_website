import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import Fuse from "fuse.js"

import { useSession } from "../../state/SessionWrapper"

const ResultPanel = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`
const ResultList = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`

const CloseIcon = styled(FontAwesomeIcon)`
  position: fixed;
  font-size: 24px;
  color: grey;
  top: 120px;
  right: 24px;
  cursor: pointer;
`

const ResultRow = styled.div`
  margin: 0 20px 20px 10px;
`
const ResultHeader = styled(ResultRow)`
  margin-bottom: 0;
  font-size: 1.2em;
`
const ResultFound = styled(ResultRow)`
  margin-bottom: 8px;
  font-size: 0.9em;
  color: grey;
`

const ResultTitle = styled((props) => <div {...props} />)`
  font-weight: 600;
  color: #5091cd;
  outline: none;
  cursor: pointer;
`
const ResultDetail = styled.div`
  font-size: 0.9em;
  line-height: 1.4em;
`

export const SearchResults: React.FC = ({ resultCallback, closeCallback }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fields: { slug: { regex: "//" } }
          frontmatter: { title: { ne: "TEMPLATE-ONLY" } }
        }
      ) {
        nodes {
          frontmatter {
            title
          }
          excerpt(truncate: true, pruneLength: 300)
          internal {
            content
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const list = data.allMarkdownRemark.nodes
  const [matches, setMatches] = useState([])

  const session = useSession()
  const searchText = session.current.searchText

  const handleSearch = async (value) => {
    console.log(`*** SearchResults.handleSearch... value=${value}`)
    const options = {
      shouldSort: true,
      threshold: 0.5,
      includeScore: true,
      keys: [
        { name: "frontmatter.title", weight: 0.4 },
        { name: "frontmatter.category", weight: 0.2 },
        { name: "internal.content", weight: 0.3 },
      ],
    }
    const fuse = new Fuse(list, options)
    const results = fuse.search(value)
    setMatches({ results: results, searchValue: value })
  }

  let title = "Search"
  if (searchText.length > 0) {
    title = `Searching for '${searchText}'`
  }

  let found = "Results found:"
  if (matches.results) {
    if (matches.results.length === 0) {
      if (matches.searchValue.length > 0) {
        found = "No matching documents"
      }
    } else {
      found = `Results found: ${matches.results.length}`
    }
  }

  useEffect(() => {
    console.log(`*** SearchResults.useEffect... searchText=${searchText}`)
    handleSearch(searchText)
  }, [searchText])

  return (
    <ResultPanel>
      <ResultList>
        <CloseIcon
          icon={faTimes}
          onClick={() => {
            closeCallback()
          }}
          onKeyPress={() => closeCallback()}
          role="button"
          tabIndex="0"
        />
        <div>
          <ResultHeader>{title}</ResultHeader>
          <ResultFound id="results-found">{found}</ResultFound>
          {matches.results &&
            matches.results.length > 0 &&
            matches.results.map((result, i) => {
              const finalTitle =
                result.item && result.item.frontmatter.title.replace(/^0+/, "")
              return (
                <ResultRow key={i}>
                  <ResultTitle
                    onClick={() => {
                      resultCallback(result.item.fields.slug)
                    }}
                    role="button"
                    tabIndex="0"
                  >
                    {finalTitle}
                  </ResultTitle>
                  <ResultDetail>{result.item.excerpt}</ResultDetail>
                </ResultRow>
              )
            })}
        </div>
      </ResultList>
    </ResultPanel>
  )
}
