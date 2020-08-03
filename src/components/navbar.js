import React from "react"
import { rhythm, scale } from "../utils/typography"

const Navbar = () => {

return (
<div
style={{
    ...scale(.5),
    marginBottom: rhythm(1.5),
    marginTop: 0,
  }}
>
    <a href="../FullMap">
    Map
    </a> {` `}
    <a href="../hello-world/">
    Figures
    </a> {`  `}
    <a href="../my-second-post/">
    Pop Culture
    </a>
  
</div>
)

}

export default Navbar