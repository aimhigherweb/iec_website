import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Fuse from 'fuse.js'
import { useScrollFreeze } from '../hooks'
import { useAppState } from '../state'

const ResultsWrapper = () => {
  const { isSearchOpen } = useAppState()
  if (!isSearchOpen) return null
  return <Search />
}

const Search = () => {
  const data = useStaticQuery(graphql`
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
  `)
  const list = data.allMarkdownRemark.nodes
  const { searchKey, isSearchOpen, setSearchOpen } = useAppState()
  const [results, setResults] = useState([])
  useScrollFreeze()

  useEffect(() => {
    console.log('inside useEffect')
    handleSearch()
    return () => {}
  }, [searchKey, isSearchOpen])

  /**
   * Search json data by using fuse.js
   */
  const handleSearch = async () => {
    console.log('Searching')
    const options = {
      shouldSort: true,
      threshold: 0.0,
      tokenize: true,
      keys: [
        { name: 'frontmatter.title', weight: 0.5 },
        { name: 'frontmatter.category', weight: 0.2 },
        { name: 'internal.content', weight: 0.2 }
      ]
    }
    const fuse = new Fuse(list, options)
    const results = fuse.search(searchKey)
    setResults(results)
  }

  const hide = async () => {
    console.log('hiding')
    setSearchOpen(false)
  }

  return (
    <>
      <div
        id="modal-overlay"
        style={{
          background: 'rgba(0,0,0,0.6)',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: 1000
        }}
      ></div>

      <div
        id="modal"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          height: '50%',
          width: '50%',
          background: 'white',
          zIndex: 1010,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div
          id="modal-guts"
          style={{
            position: 'absolute',
            overflow: 'auto',
            padding: '20px',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
          }}
        >
          {searchKey && <h3>Search Results: {results.length}</h3>}
          <input
            style={{
              position: 'absolute',
              right: '10px',
              top: '10px'
            }}
            type="button"
            className="button"
            value="Hide"
            onClick={hide}
          />
          {results.length == 0 && <p>No matches found</p>}
          {searchKey === '' && <p>No search text entered</p>}

          {searchKey && results.length > 0 && (
            <>
              {results.map((result, i) => (
                <div key={i}>
                  <h4>
                    <Link
                      to={`/${result.parent.relativeDirectory}/${result.parent.name}`}
                      onClick={() => setSearchOpen(false)}
                    >
                      {result.frontmatter.title}
                    </Link>
                  </h4>
                  <p>{result.excerpt}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ResultsWrapper
