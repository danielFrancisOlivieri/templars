import React from "react"
import { rhythm, scale } from "../utils/typography"

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
<p> <a href='../hunt/' > Hunt </a> </p>
<p> <a href='../poetry/' > Poetry </a> </p>
<p> <a href='../FullMap/' > Map </a>  </p>
<p> <a href='../TableOfContents/' > Table of Contents </a> </p>

</div>
)

}

export default Navbar