import React from "react"
import { rhythm, scale } from "../utils/typography"
import { Menu } from 'semantic-ui-react'
import './style/navbar.css'

const Navbar = () => {
  // const rootPath = `${__PATH_PREFIX__}/`

return (
<div
style={{
    ...scale(.5),
    marginBottom: rhythm(1.5),
    marginTop: 0,
  }}
>

<Menu secondary position='right' className="fullNavbar" >

<Menu.Item href='/' >
  <p className="navItem" > Home </p>
  </Menu.Item>


  <Menu.Menu position="right">
  <Menu.Item href='../hunt/' >
  <p className="navItem" > Hunt </p>
  </Menu.Item>
  <Menu.Item href='../poetry/'>
  <p className="navItem" > Poetry </p>
  </Menu.Item>
  <Menu.Item href='../FullMap/'>
  <p className="navItem" > Map </p>
  </Menu.Item>
  <Menu.Item href='../TableOfContents/'>
  <p className="navItem" > Table of Contents </p>
  </Menu.Item>
  <Menu.Item className="navItem" href='../aphorisms/'>
  <p className="navItem" > Aphorisms </p>
  </Menu.Item>
  </Menu.Menu>

</Menu>

</div>
)

}

export default Navbar