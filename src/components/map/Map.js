import React from 'react';
import './Map.css';
import data from './firstCrusade.json'
import ReactMapboxGl, { Layer, Feature, ZoomControl, RotationControl, GeoJSONLayer  } from "react-mapbox-gl";

// import * as MapboxGL from 'mapbox-gl';

const ReactMap = ReactMapboxGl({

  accessToken: "https://api.mapbox.com/styles/v1/danielfrancisolivieri/cka1il8b913of1iqrevr9tawz.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZGFuaWVsZnJhbmNpc29saXZpZXJpIiwiYSI6ImNqaHJ3czRlZDJycnAzYXF3Ym1qYXFvNXUifQ.mh_3nSYT7hxHhXj4t48cHA",

  doubleClickZoom: false, 

});


const Map = ({ data }) => {
  
    return (
     <div>
 <iframe width="100%" height="1500px" src="https://api.mapbox.com/styles/v1/danielfrancisolivieri/cka1il8b913of1iqrevr9tawz.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZGFuaWVsZnJhbmNpc29saXZpZXJpIiwiYSI6ImNqaHJ3czRlZDJycnAzYXF3Ym1qYXFvNXUifQ.mh_3nSYT7hxHhXj4t48cHA">
    <h1 z-index='5' >title</h1>
    </iframe>
     </div>
    )
  }
  
  export default Map