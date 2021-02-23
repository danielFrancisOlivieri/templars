import React from 'react'
import GridDividedNumber from "../components/Work/GridDividedNumber"
import Navbar from "../components/navbar"
import './style/work.css'


const centerStyle = {
  margin: '40px',
};

const Work = ({data, location}) => {

    return (
<div>
<Navbar></Navbar>
<div className = "workContent" >
<h1 className='workTitle' > Some of my Past Projects </h1>
<br />
<center style={centerStyle}>
<GridDividedNumber />
</center>
</div>
</div>
) }
export default Work
