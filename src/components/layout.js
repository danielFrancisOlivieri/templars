import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import './style/layout.css'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  let header;
  
  if (location.pathname === rootPath) {
    header = (
      <center>
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      </center>
    )
  } else {
    header = (
      <center>
      <h1
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      </center>
    )
  }
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        lineHeight: '1.8em'
      }}
    >

<br></br>

<header>{header}</header>

      <main>{children}</main>

    </div>
  )
}

export default Layout
