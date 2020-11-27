import { React, useCallback, useRef, useState } from 'react';
import { 
    GoogleMap, 
    useLoadScript,
    Marker, 
    InfoWindow
} from "@react-google-maps/api";    

import Header from '../../header/header-component';
import mapStyles from '../../../mapStyles';
import '../volunteerPage/volunteerPage-component.scss';
import { formatRelative } from 'date-fns';
import catIcon from '../../../icons/catFace.svg';

/*
We are putting these variables out here for the props to prevent re-rendering
 */
const libraries = ["places"]
const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};
const center = {
    lat: -37.8136,
    lng: 144.9631,
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true, 
    zoomControl: true,
};


function VolunteerPage(){ 
    //this is a react hook
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
        libraries,
    });

    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);


    /**
     * useCallback Hook is used whenever you want to define a function that shouldn't ever change
     * unless the properties passed inside depth array changed. 
     * We are looking to move the onClick function outside of the component to  prevent re-rendering
     * the onClick function when it never changes. 
     */

    const onMapClick = useCallback((event) => {
        /*  
            if you look the event logs, you see that upon a click, you get a response
            within that response, you see "latling" which is the long and lat which we can
            use to mark on the map
        */
        console.log(event)
        /* 
            when the user clicks, we will call the setMarker function
        */
       setMarkers(current => [...current, 
        {
           lat: event.latLng.lat(),
           lng: event.latLng.lng(),
           time: new Date(), 
       },
    ]);
    }, []);

    /**
     * we use 'state' when we want to cause react to rerender
     * but we use 'ref' when you want to retain state without causing rerenders
     */
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";

    return(
        <div>
            <Header /> 
            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={8} 
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            >
                {markers.map((marker)=> (
                    <Marker 
                        key={marker.time.toISOString()} 
                        position={{ lat: marker.lat, lng: marker.lng}}
                        icon={{
                            url: catIcon,
                            scaledSize: new window.google.maps.Size(30,30),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15),
                        }}
                        onClick = {() => {
                            setSelected(marker);
                        }}
                />
                ))}
                {/* does 'selected' have a value? */}
                {selected ? (
                    <InfoWindow 
                        position={{lat: selected.lat, lng:selected.lng}}
                        onCloseClick={() => {
                            setSelected(null)
                        }}
                        >
                            <div>
                                <h2>Kitty spotted!</h2>
                                <p>Spotted {formatRelative(selected.time, new Date())}</p>
                                <form>
                                <label for="description">Description:</label>
                                <br/>
                                <textarea type="text" id="description" name="description" > </textarea>
                                {/* <input type="text" id="description" name="description" value="Enter what the Kitty looks like" /> */}
                                </form>
                            </div>
                    </InfoWindow>
                    ) : null}
            </GoogleMap>
        </div>
    )
    
}

export default VolunteerPage;   