import React from "react"
import { rhythm, scale } from "../../utils/typography"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Menu } from 'semantic-ui-react'

const DesktopNav = () => {
  // const rootPath = `${__PATH_PREFIX__}/`

  const breakpoints = useBreakpoint();

return (
<div
style={{
    ...scale(.5),
    marginBottom: rhythm(1.5),
    marginTop: 0,
  }}
>

{breakpoints.md ? <h1>terwilliger bunts one </h1> : null }


<Menu secondary stackable position='right' className="fullNavbar" >

<Menu.Item href='/' >
  <p className="navItem" > Home </p>
  </Menu.Item>


  <Menu.Menu position="right">
  <Menu.Item href='../Work/' >
  <p className="navItem" > Projects </p>
  </Menu.Item>
  <Menu.Item href='../TableOfContents/'>
  <p className="navItem" > Writing </p>
  </Menu.Item>
  <Menu.Item href='../about'>
  <p className="navItem" > About </p>
  </Menu.Item>
  </Menu.Menu>

</Menu>


</div>
)

}

export default DesktopNav