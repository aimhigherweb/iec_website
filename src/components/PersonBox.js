import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function(props) {
  const [hover, setHover] = useState(false)

  return (
    <Link to={'/who-we-are/' + props.url}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          height: '250px',
          backgroundColor: '#5091cd',
          visibility: 'visible',
          marginTop: 0,
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          textAlign: 'center',
          paddingBottom: '0',
          font: '18px/1.1 Montserrat'
        }}
      >
        {!hover ? (
          <Img
            fluid={props.photo}
            alt=""
            style={{
              width: '100%',
              display: 'block',
              height: '100%'
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              position: 'relative',
              textAlign: 'center',
              font: '18px/1.1 $montserat-font'
            }}
          >
            <div
              style={{
                maxWidth: '1440px'
              }}
            >
              <div
                style={{
                  lineHeight: '1.4'
                }}
              >
                <h3
                  style={{
                    font: 'bold 20px/1.1 Montserrat',
                    textTransform: 'uppercase',
                    color: 'white',
                    display: 'block',
                    padding: '20px 20px',
                    marginBottom: '15px',
                    position: 'relative',
                    fontSize: '20px',
                    width: '100%',
                    textDecoration: 'underline'
                  }}
                >
                  {props.name}
                </h3>
                <div>
                  <span
                    style={{
                      position: 'relative',
                      font: '18px/1.1 Montserrat',
                      color: 'white',
                      margin: '0',
                      textAlign: 'center'
                    }}
                  >
                    {props.jobtitle}
                  </span>
                  <span
                    className="btn-opener"
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      marginTop: '20px'
                    }}
                  >
                    <i className="icon-zoom" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
