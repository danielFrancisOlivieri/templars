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
  <Menu.Item href='../Work/' >
  <p className="navItem" > Projects </p>
  </Menu.Item>
  <Menu.Item href='../TableOfContents/'>
  <p className="navItem" > Posts </p>
  </Menu.Item>
  <Menu.Item href=''>
  <p className="navItem" > Contact </p>
  </Menu.Item>
  </Menu.Menu>

</Menu>

</div>
)

}

export default Navbar