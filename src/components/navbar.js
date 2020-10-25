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

<Menu secondary>
  <Menu.Item>
  <p> <a className='navbarItem' href='../hunt/' > Hunt </a> </p>
  </Menu.Item>
  <Menu.Item>
  <p> <a className='navbarItem' href='../poetry/' > Poetry </a> </p>
  </Menu.Item>
  <Menu.Item>
  <p> <a className='navbarItem' href='../FullMap/' > Map </a>  </p>
  </Menu.Item>
  <Menu.Item>
  <p> <a className='navbarItem' href='../TableOfContents/' > Table of Contents </a> </p>
  </Menu.Item>
  <Menu.Item>
  <p> <a className='navbarItem' href='../aphorisms/' > Aphorisms </a> </p>
  </Menu.Item>
</Menu>


</div>
)

}

export default Navbar