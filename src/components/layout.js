import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import './style/layout.css'


const Layout = ({ title, children }) => {

  let header;

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
  
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        lineHeight: '2.1em'
      }}
    >

<br></br>

<header>{header}</header>

      <main>{children}</main>

    </div>
  )
}

export default Layout
