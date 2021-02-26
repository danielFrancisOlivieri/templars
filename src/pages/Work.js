import React from 'react'
import GridDividedNumber from "../components/Work/GridDividedNumber"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import './style/work.css'


const centerStyle = {
  margin: '40px',
};

const Work = ({data, location}) => {

    return (
<div>
<Navbar></Navbar>
<SEO
    title='Projects'
    ></SEO>
<div className = "workContent" >
<h1 className='workTitle' > Some of my Projects </h1>
<br />
<center style={centerStyle}>
<GridDividedNumber />
</center>
</div>
</div>
) }
export default Work
