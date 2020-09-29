import React from "react"
import { rhythm, scale } from "../utils/typography"
import { Grid, Menu, Container } from 'semantic-ui-react'

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
  <p> <a href='../hunt/' > Hunt </a> </p>
  </Menu.Item>
  <Menu.Item>
  <p> <a href='../poetry/' > Poetry </a> </p>
  </Menu.Item>
  <Menu.Item>
  <p> <a href='../FullMap/' > Map </a>  </p>
  </Menu.Item>
  <Menu.Item>
  <p> <a href='../TableOfContents/' > Table of Contents </a> </p>
  </Menu.Item>
</Menu>


</div>
)

}

export default Navbar