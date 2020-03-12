import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Li = styled.li`
  textdecoration: 'underline';
`

export default function(props) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: '#F60',
        opacity: 1,
        visibility: 'visible',
        marginTop: 0,
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        textAlign: 'center',
        paddingBottom: '0',
        font: '18px/1.1 Montserrat'
      }}
    >
      {!hover ? (
        <>
          <Img
            sizes={props.img}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -1
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textTransform: 'uppercase',
              paddingBottom: '15px',
              marginBottom: '15px',
              fontSize: '20px',
              color: 'white'
            }}
          >
            <div
              style={{
                margin: '0 auto 9px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={props.icon}
                alt=""
                style={{ width: '144px', height: 'auto' }}
              />
            </div>
            <strong
              style={{
                font: 'bold 17px/20px $montserat-font',
                color: '$white',
                textTransform: 'uppercase',
                display: 'block'
              }}
            >
              {props.title}
            </strong>
          </div>
        </>
      ) : (
        <div
          style={{
            background: '#4e8fc9',
            color: 'white',
            width: '100%',
            top: '0',
            bottom: '0',
            right: '0',
            padding: '15px',
            left: '0',
            display: 'flex',
            flexWrap: 'wrap',
            position: 'absolute'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '10px',
                top: '10px'
              }}
            >
              <img
                src={props.icon}
                alt=""
                style={{ width: 'auto', height: '40px' }}
              />
            </div>
            <strong
              style={{
                textTransform: 'uppercase',
                display: 'block',
                paddingBottom: '15px',
                marginBottom: '15px',
                position: 'relative',
                fontSize: '20px',
                width: '100%'
              }}
            >
              {props.title}
            </strong>
            <span
              style={{
                display: 'block',
                marginBottom: '15px',
                paddingBottom: '15px',
                position: 'relative',
                fontSize: '17px',
                width: '100%'
              }}
            >
              {props.desc}
            </span>
            <ul
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: '30px'
              }}
            >
              {props.articles.map(({ node }, index) => (
                <Li key={index} style={{ margin: '5px 0' }}>
                  <Link
                    to={`${props.urlRoot}/${node.parent.name}`}
                    style={{
                      color: 'white',
                      fontSize: '15px'
                    }}
                  >
                    {node.frontmatter.title}
                  </Link>
                </Li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
