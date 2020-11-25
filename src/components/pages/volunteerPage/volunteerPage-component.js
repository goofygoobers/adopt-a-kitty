import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
require('dotenv').config()


function Map() {
    return(
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:45.421532, lng: -75.697189 }} 
        /> 
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const VolunteerPage = () => { 

    return(
        
        <div style={{width: '100vw', height: '100vh'}}>

            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{height:"100%" }}/>}
                containerElement = {<div style={{ height:"400px"}}/> }
                mapElement = {<div style={{height: "100%"}}/>}
            />

        </div>
    )
}
console.log(process.env)
export default VolunteerPage;   