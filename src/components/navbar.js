import React from "react"
import { rhythm, scale } from "../utils/typography"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import MobileNav from './navComponents/MobileNav';
import DesktopNav from './navComponents/desktopNav';
import './style/navbar.css'

const Navbar = () => {
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

{breakpoints.md ? <MobileNav /> : <DesktopNav /> }

</div>
)

}

export default Navbar