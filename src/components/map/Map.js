import React from 'react';
import './Map.css';
import data from './firstCrusade.json'
import ReactMapboxGl, { Layer, Feature, ZoomControl, RotationControl, GeoJSONLayer  } from "react-mapbox-gl";

// import * as MapboxGL from 'mapbox-gl';

const ReactMap = ReactMapboxGl({

  accessToken: "pk.eyJ1IjoiZGFuaWVsZnJhbmNpc29saXZpZXJpIiwiYSI6ImNqaHJ3czRlZDJycnAzYXF3Ym1qYXFvNXUifQ.mh_3nSYT7hxHhXj4t48cHA",

  doubleClickZoom: false, 

});


const Map = ({ data }) => {
  
    return (
     <div>
               <ReactMap

  style="mapbox://styles/mapbox/streets-v9"

  containerStyle={{

    height: "1500px",

    width: "1620px"

  }}> 



  <ZoomControl

  position="top-left"

  />



<RotationControl

  position="top-left"

/>

<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>

  <GeoJSONLayer
  data={data}
  />

</ReactMap>
     </div>
    )
  }
  
  export default Map