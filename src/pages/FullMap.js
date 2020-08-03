import React from "react"
import ReactMapboxGl, { GeoJSONLayer, Marker, Layer, Feature, ZoomControl, RotationControl  } from "react-mapbox-gl";


const FullMap = ({ data, location }) => {

  return (
      <div> 
    <iframe width="100%" height="1500px" src="https://api.mapbox.com/styles/v1/danielfrancisolivieri/cka1il8b913of1iqrevr9tawz.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZGFuaWVsZnJhbmNpc29saXZpZXJpIiwiYSI6ImNqaHJ3czRlZDJycnAzYXF3Ym1qYXFvNXUifQ.mh_3nSYT7hxHhXj4t48cHA">
    <h1 z-index='5' >title</h1>
    </iframe>
    
    </div>
  )
}

export default FullMap
